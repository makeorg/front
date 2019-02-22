/* @flow */

import { combineReducers } from 'redux';
import { appConfig } from './appConfig';
import { authentification } from './authentification';
import { registration } from './registration';
import { forgotPassword } from './forgotPassword';
import { proposal } from './proposal';
import { pannel } from './pannel';
import { sequence } from './sequence';
import { notificationReducer } from './notification';
import { user } from './user';

export const rootReducer = combineReducers({
  appConfig,
  authentification,
  registration,
  forgotPassword,
  proposal,
  pannel,
  sequence,
  notification: notificationReducer,
  user,
});
