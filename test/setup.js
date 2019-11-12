import * as React from 'react'; // eslint-disable-line no-unused-vars

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { JSDOM } from 'jsdom';
import 'jest-styled-components';
import '@testing-library/jest-dom';
import { ApiService } from 'Shared/api/ApiService';
import { ApiServiceMock } from 'Shared/api/ApiService/ApiService.mock';

Enzyme.configure({ adapter: new Adapter() });

require.extensions['.svg'] = () => { };

global.document = new JSDOM('');
global.window = document.defaultView;

global.navigator = { userAgent: 'browser' };
global.React = React;

ApiService.strategy = new ApiServiceMock();

jest.mock('Shared/constants/config');

window.matchMedia = jest.fn().mockImplementation(query => {
  return {
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
  };
});

function storageMock() {
  const storage = {};

  return {
    setItem(key, value) {
      storage[key] = value || '';
    },
    getItem(key) {
      return key in storage ? storage[key] : null;
    },
    removeItem(key) {
      delete storage[key];
    },
    get length() {
      return Object.keys(storage).length;
    },
    key(i) {
      const keys = Object.keys(storage);
      return keys[i] || null;
    }
  };
}

global.localStorage = storageMock();
