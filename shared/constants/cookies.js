// @flow
import { type StateUserCookiesPreferences } from 'Shared/store/types';

export const USER_PREFERENCES_COOKIE: string = 'make-cookie-preferences';

export const ACCEPT_ALL_PREFERENCES: StateUserCookiesPreferences = {
  facebook_tracking: true,
};

export const REJECT_ALL_PREFRENCES: StateUserCookiesPreferences = {
  facebook_tracking: false,
};
