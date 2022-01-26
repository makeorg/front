/* @flow */
import {
  ACCEPT_ALL_COOKIES_PREFERENCES,
  REJECT_ALL_COOKIES_PREFERENCES,
  SET_COOKIES_PREFERENCES,
} from 'Shared/store/actionTypes';
import { initialState } from 'Shared/store/initialState';
import { type StateUserCookiesPreferences } from 'Shared/store/types';

export function cookiesPreferences(
  state: StateUserCookiesPreferences = initialState.user.cookiesPreferences,
  action: Object
) {
  switch (action.type) {
    case SET_COOKIES_PREFERENCES:
      return {
        ...state,
        ...action.payload.cookiesPreferences,
      };
    case ACCEPT_ALL_COOKIES_PREFERENCES:
      return {
        ...state,
        facebook_tracking: true,
      };
    case REJECT_ALL_COOKIES_PREFERENCES:
      return {
        ...state,
        facebook_tracking: false,
      };

    default:
      return state;
  }
}
