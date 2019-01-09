import ReactDOM from 'react-dom';
import * as React from 'react';
import { Provider } from 'react-redux';
import i18next from 'i18next';
import { BrowserRouter } from 'react-router-dom';
import { HeadProvider } from 'react-head';
import AppContainer from 'Containers/App';
import configureStore from './store';
import Logger from './services/Logger';
import { env } from '../shared/env';
import { TRANSLATION_NAMESPACE } from '../shared/i18n/constants';

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
  initialState = {
    appConfig: {
      source: 'core',
      language: 'en',
      country: 'GB'
    },
    sequence: {
      question: {
        questionId: '8358bb5d-493c-4ae8-88be-3de613e2e527',
        operationId: '65dfe694-2ea9-486b-8bc5-3107316fa6ff'
      },
      votedProposalIds: []
    }
  };
}

const tradLanguage = `${initialState.appConfig.country}_${initialState.appConfig.language}`;

i18next.init();
i18next.addResourceBundle(tradLanguage, TRANSLATION_NAMESPACE, initialState.appConfig.translations);
i18next.changeLanguage(tradLanguage);

const store = configureStore(initialState);

ReactDOM.hydrate(
  <HeadProvider>
    <Provider store={store}>
      <BrowserRouter>
        <AppContainer />
      </BrowserRouter>
    </Provider>
  </HeadProvider>,
  document.getElementById('app'),
);

if (module.hot) {
  module.hot.accept();
}
