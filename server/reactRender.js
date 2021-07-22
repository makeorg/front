import React from 'react';
import fs from 'fs';
import path from 'path';
import { ChunkExtractor } from '@loadable/server';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { CookiesProvider } from 'react-cookie';
import { ServerStyleSheet } from 'styled-components';
import { HeadProvider } from 'react-head';
import { i18n } from 'Shared/i18n';
import deepFreeze from 'deep-freeze';
import { TRANSLATION_NAMESPACE } from 'Shared/i18n/constants';
import { configureStore } from 'Shared/store';
import { AppContainer } from 'Client/app';
import { initialState } from 'Shared/store/initialState';
import {
  NOTIFICATION_LEVEL_INFORMATION,
  SECURE_EXPIRED_MESSAGE,
} from 'Shared/constants/notifications';
import { env } from 'Shared/env';
import { SecureExpiredMessage } from 'Client/app/Notifications/Banner/SecureExpired';
import {
  DESKTOP_DEVICE,
  MOBILE_DEVICE,
  PRIVACY_POLICY_DATE,
} from 'Shared/constants/config';
import { simpleHash } from 'Shared/helpers/simpleHash';
import { CLIENT_DIR } from './paths';
import { logError, logInfo } from './ssr/helpers/ssr.helper';
import { ViewsService } from './service/ViewsService';

const parser = require('ua-parser-js');

deepFreeze(initialState);

const statsFile = path.resolve(CLIENT_DIR, 'loadable-stats.json');

const htmlContent = fs.readFileSync(
  path.join(CLIENT_DIR, 'index.html'),
  'utf8'
);

const renderHtml = (reactApp, reduxStore, metaTags, pwaManifest, res) => {
  if (!htmlContent) {
    return false;
  }

  const extractor = new ChunkExtractor({ statsFile });

  const sheet = new ServerStyleSheet();

  const jsx = extractor.collectChunks(reactApp);

  const body = ReactDOMServer.renderToString(sheet.collectStyles(jsx));
  const styles = sheet.getStyleTags();
  const reduxState = reduxStore.getState();
  const scriptTags = extractor.getScriptTags();
  const linkTags = extractor.getLinkTags();
  const nonceId = res.locals.nonce;

  const content = htmlContent
    .replace(/<div id="app"><\/div>/, `<div id="app">${body}</div>`)
    .replace(
      '<head>',
      `<head>${ReactDOMServer.renderToString(
        metaTags
      )}${linkTags}<link rel="manifest" href="${pwaManifest}" />`
    )
    .replace('</head>', `${styles}</head>`)
    .replace('"__REDUX__"', JSON.stringify(reduxState))
    .replace(new RegExp('__LANG__', 'gi'), reduxState.appConfig.language)
    .replace(new RegExp('__API_URL__', 'gi'), env.apiUrl())
    .replace(
      new RegExp('__PROXY_TARGET_API_URL__', 'gi'),
      env.proxyTargetApiUrl()
    )
    .replace(new RegExp('__FRONT_URL__', 'gi'), env.frontUrl())
    .replace(new RegExp('___NONCE_ID___', 'gi'), nonceId)
    .replace(new RegExp('___NODE_ENV___', 'gi'), env.nodeEnv() || 'production')
    .replace(new RegExp('___PORT___', 'gi'), env.port())
    .replace('</body>', `${scriptTags}</body>`);

  return content;
};

// @todo test this function!!
export const reactRender = async (req, res, routeState = {}) => {
  const { country, language } = req.params;
  const { browser, os, device, ua } = parser(req.headers['user-agent']);
  const isMobileOrTablet = device.type === 'mobile' || device.type === 'tablet';

  const commonLogs = {
    name: 'react-render',
    app_browser_name: browser.name,
    app_browser_version: browser.version,
    app_os_name: os.name,
    app_os_version: os.version,
    app_device_model: device.model,
    app_device_type: device.type,
    app_device_vendor: device.vendor,
    app_browser_raw: ua,
    app_browser_hash: simpleHash(ua),
  };

  if (!country || !language) {
    logInfo({
      message: 'Country or language not found from request params',
      app_url: req.originalUrl,
      app_country: country || 'none',
      app_language: language || 'none',
      ...commonLogs,
    });
  }

  const { secureExpired, ...queryParams } = req.query;
  const countriesWithConsultations = await ViewsService.getCountries(
    country,
    language,
    () => {
      logInfo({
        message: 'ViewsService.getCountries return 404',
        app_url: req.originalUrl,
        ...commonLogs,
      });
    },
    error =>
      logError({
        message: `ViewsService.getCountries error : ${error.message}`,
        app_url: req.originalUrl,
        app_logId: error.logId,
        ...commonLogs,
      })
  );

  const notificationBanner = secureExpired
    ? {
        id: SECURE_EXPIRED_MESSAGE,
        content: <SecureExpiredMessage />,
        level: NOTIFICATION_LEVEL_INFORMATION,
      }
    : {};

  const state = {
    ...initialState,
    ...routeState,
    appConfig: {
      ...initialState.appConfig,
      ...routeState?.appConfig,
      source: 'core',
      language,
      country,
      translations: i18n.getResourceBundle(language, TRANSLATION_NAMESPACE),
      queryParams,
      countriesWithConsultations,
      notifications: {
        ...initialState.notifications,
        ...routeState?.notifications,
        banner: notificationBanner,
      },
      device: isMobileOrTablet ? MOBILE_DEVICE : DESKTOP_DEVICE,
      privacyPolicy: PRIVACY_POLICY_DATE,
    },
  };

  const store = configureStore(state);
  const context = {};
  const headTags = [];

  const ReactApp = (
    <CookiesProvider cookies={req.universalCookies}>
      <HeadProvider headTags={headTags}>
        <Provider store={store}>
          <StaticRouter location={req.url} context={context}>
            <AppContainer />
          </StaticRouter>
        </Provider>
      </HeadProvider>
    </CookiesProvider>
  );

  // eslint-disable-next-line import/no-unresolved
  const webpackManifest = require('webpack-manifest');

  const pwaManifest = webpackManifest['favicon/manifest.json'];

  const reactHtml = renderHtml(ReactApp, store, headTags, pwaManifest, res);

  if (!reactHtml) {
    return res.status(404).end();
  }
  // add log here
  logInfo({
    message: 'app-served-from-server',
    url: req.originalUrl,
    ...commonLogs,
  });

  return res.send(reactHtml);
};
