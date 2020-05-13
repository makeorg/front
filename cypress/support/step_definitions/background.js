import { asserts, xhrRequests, xhrTrackingRequests } from './requests';

let executed = false;

given('monitor api requests', () => {
  beforeEach(() => {
    asserts.list = {};
    xhrRequests.list = {};
    xhrTrackingRequests.list = {};
    executed = false;
  })
  afterEach(() => {
    // avoid to execute twice due to async in hook
    if (!executed) {
      executed = true;
      const endpoints = Object.keys(asserts.list);
      endpoints.forEach((endpoint) => {
        while (asserts.list[endpoint].length) {
          asserts.list[endpoint].shift()();
        }
      });
    }
  });
})

// see https://github.com/cypress-io/cypress/issues/871#issuecomment-509392310
given('fix auto cypress scroll', () => {
  beforeEach(() => {
    Cypress.on('scrolled', el => {
      el.get(0).scrollIntoView({
        block: 'center',
        inline: 'center'
      });
    });
  })
});
