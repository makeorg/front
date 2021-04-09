import ReactDOM from 'react-dom';
import React from 'react';
import { CookiesProvider } from 'react-cookie';
import { Provider } from 'react-redux';
import { i18n } from 'Shared/i18n';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import { HeadProvider } from 'react-head';
import { loadableReady } from '@loadable/component';
import { AppContainer } from 'Client/app';
import { FacebookTracking } from 'Shared/services/Trackers/FacebookTracking';
import { env } from 'Shared/env';
import { configureStore, authenticationState } from 'Shared/store';
import { Logger } from 'Shared/services/Logger';
import { ApiService } from 'Shared/api/ApiService';
import { apiClient } from 'Shared/api/ApiService/ApiService.client';
import { trackingParamsService } from 'Shared/services/TrackingParamsService';
import { DateHelper } from 'Shared/helpers/date';
import { detected as adBlockerDetected } from 'adblockdetect';
import {
  cookieIsEnabled,
  thirdCookieEnabled,
} from 'Client/helper/cookieDetect';
import { track } from 'Shared/services/TrackingService';
import * as customDataHelper from 'Client/helper/customData';
import { updateRequestContextCustomData } from 'Shared/store/middleware/requestContext';
import { TwitterUniversalTag } from 'Shared/services/Trackers/TwitterTracking';
import { updateTrackingQuestionParam } from 'Shared/store/middleware/question';
import { getRouteNoCookies } from 'Shared/routes';
import { translationRessources } from 'Shared/constants/languages';
import { CountryListener } from 'Client/app/CountryListener';
import { NoCookies } from './pages/Static/NoCookies';
import { history, initHistory } from './app/History';
import { ErrorBoundary, ServiceErrorHandler } from './app/Error';

window.onerror = (message, source, lineNumber, columnNumber, error) => {
  if (error && error.stack) {
    const { stack } = error;
    Logger.log({
      message,
      source,
      lineNumber,
      columnNumber,
      stack,
    });
  }

  return false;
};

let initialState = window.INITIAL_STATE;

if (env.isDev()) {
  initialState = require('Shared/store/initialState.debug').initialStateDebug;
}

ApiService.strategy = apiClient;

const logAndTrackEvent = (eventName: string) => {
  Logger.logInfo({
    trackingEvent: eventName,
    referrer: window.document.referrer,
    url: window.location.href,
  });
  track(eventName, {
    referrer: window.document.referrer,
    url: window.location.href,
  });
};

const initApp = async state => {
  const { language, country, source, queryParams } = state.appConfig;

  const authenticationStateData = await authenticationState();

  // Set in session storage some keys from query params
  customDataHelper.setDataFromQueryParams(queryParams);

  const store = configureStore({
    ...state,
    user: {
      ...state.user,
      authentication: {
        ...state.user.authentication,
        ...authenticationStateData,
      },
    },
    session: { sessionId: '' },
    customData: customDataHelper.getAll(), // custom_data already saved in session_storage
  });

  // i18n
  i18n.init({
    interpolation: {
      escapeValue: false,
    },
    debug: env.isDev(),
    lng: language,
    resources: translationRessources,
  });

  FacebookTracking.init();
  TwitterUniversalTag.init();

  // Set date helper language
  DateHelper.language = language;

  // add listerner to update apiClient params
  trackingParamsService.addListener({
    onTrackingUpdate: params => {
      apiClient.source = params.source;
      apiClient.country = params.country;
      apiClient.language = params.language;
      apiClient.location = params.location;
      apiClient.url = params.url;
      apiClient.referrer = params.referrer;
      apiClient.questionId = params.questionId;
    },
  });

  // Set tracking params
  trackingParamsService.source = source;
  trackingParamsService.country = country;

  const { currentQuestion, questions, customData } = store.getState();
  if (currentQuestion && questions[currentQuestion]) {
    updateTrackingQuestionParam(questions[currentQuestion].question);
  }
  if (customData) {
    updateRequestContextCustomData(customData);
  }

  // Track cookies availability and adBlockers
  if (adBlockerDetected()) {
    logAndTrackEvent('adblocker-detected');
  }
  if (!cookieIsEnabled()) {
    logAndTrackEvent('cookie-is-disabled');
  }
  const thirdCookieNameToCheck: string = 'make-session-id-expiration';
  if (!thirdCookieEnabled(thirdCookieNameToCheck)) {
    logAndTrackEvent('third-cookie-is-disabled');
  }

  // Init history
  initHistory(store);

  loadableReady(() => {
    const appDom = document.getElementById('app');
    const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate;

    if (!cookieIsEnabled()) {
      return ReactDOM.hydrate(
        <HeadProvider>
          <Provider store={store}>
            <Router history={history}>
              <React.StrictMode>
                <ServiceErrorHandler>
                  <ErrorBoundary>
                    <CountryListener />
                    <Switch>
                      <Route
                        path={getRouteNoCookies(country)}
                        component={NoCookies}
                      />
                      <Redirect from="/" to={getRouteNoCookies(country)} />
                    </Switch>
                  </ErrorBoundary>
                </ServiceErrorHandler>
              </React.StrictMode>
            </Router>
          </Provider>
        </HeadProvider>,
        appDom
      );
    }

    return renderMethod(
      <CookiesProvider>
        <HeadProvider>
          <Provider store={store}>
            <Router history={history}>
              <React.StrictMode>
                <CountryListener />
                <AppContainer />
              </React.StrictMode>
            </Router>
          </Provider>
        </HeadProvider>
      </CookiesProvider>,
      appDom
    );
  });
};

initApp(initialState);

if (module.hot) {
  module.hot.accept();
}
