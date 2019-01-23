import ReactDOM from 'react-dom';
import * as React from 'react';
import { CookiesProvider } from 'react-cookie';
import { Provider } from 'react-redux';
import i18next from 'i18next';
import { BrowserRouter } from 'react-router-dom';
import { HeadProvider } from 'react-head';
import { AppContainer } from 'Containers/App';
import FacebookTracking from 'Services/Trackers/FacebookTracking';
import TwitterTracking from 'Services/Trackers/TwitterTracking';
import configureStore from './store';
import Logger from './services/Logger';
import { env } from '../shared/env';
import { TRANSLATION_NAMESPACE } from '../shared/i18n/constants';
import { initialStateDebug } from './initialState.debug';

window.onerror = (message, source, lineNumber, columnNumber, error) => {
  if (error && error.stack) {
    const { stack } = error;
    Logger.log({
      message,
      source,
      lineNumber,
      columnNumber,
      stack
    });
  }

  return false;
};

let initialState = window.INITIAL_STATE;
delete window.INITIAL_STATE;

if (!process.env.NODE_ENV || env.isDev()) {
  initialState = initialStateDebug;
}

const tradLanguage = `${initialState.appConfig.language}-${initialState.appConfig.country}`;

i18next.init({
  interpolation: {
    escapeValue: false
  },
  debug: env.isDev(),
  lng: tradLanguage,
  resources: {
    [tradLanguage]: { [TRANSLATION_NAMESPACE]: initialState.appConfig.translations }
  }
});

FacebookTracking.init('260470104426586');
TwitterTracking.init('o16m6');

const store = configureStore(initialState);

ReactDOM.hydrate(
  <CookiesProvider>
    <HeadProvider>
      <Provider store={store}>
        <BrowserRouter>
          <AppContainer />
        </BrowserRouter>
      </Provider>
    </HeadProvider>
  </CookiesProvider>,
  document.getElementById('app'),
);

if (module.hot) {
  module.hot.accept();
}
