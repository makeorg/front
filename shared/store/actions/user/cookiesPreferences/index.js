import {
  ACCEPT_ALL_COOKIES_PREFERENCES,
  REJECT_ALL_COOKIES_PREFERENCES,
  SET_COOKIES_PREFERENCES,
} from 'Shared/store/actionTypes';
import { type StateUserCookiesPreferences } from 'Shared/store/types';

export const setCookiesPreferencesInApp = (
  cookiesPreferences: StateUserCookiesPreferences
) => ({
  type: SET_COOKIES_PREFERENCES,
  payload: { cookiesPreferences },
});

export const acceptAllCookiesPreferences = () => ({
  type: ACCEPT_ALL_COOKIES_PREFERENCES,
});

export const rejectAllCookiesPreferences = () => ({
  type: REJECT_ALL_COOKIES_PREFERENCES,
});
