// @flow

import { combineReducers } from 'redux';
import { authentication } from './authentication';
import { passwordRecovery } from './passwordRecovery';
import { cookiesPreferences } from './cookiesPreferences';

export const user = combineReducers({
  authentication,
  passwordRecovery,
  cookiesPreferences,
});
