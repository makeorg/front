// @flow
import { USER_PREFERENCES_COOKIE } from 'Shared/constants/cookies';
import { FacebookTracking } from 'Shared/services/Trackers/FacebookTracking';
import { type StateUserCookiesPreferences } from 'Shared/store/types';
import Cookies from 'universal-cookie';

// set cookie expiration for user preferences (1 year)
const today = new Date();
const nextYear = new Date();
nextYear.setFullYear(today.getFullYear() + 1);
const cookies = new Cookies();

export const setPreferencesCookie = (
  preferences: StateUserCookiesPreferences
) => {
  cookies.set(USER_PREFERENCES_COOKIE, JSON.stringify(preferences), {
    path: '/',
    expires: nextYear,
  });
};

export const initTrackersFromPreferences = (
  cookiePreferences: StateUserCookiesPreferences
) => {
  if (
    cookiePreferences?.facebook_tracking &&
    !FacebookTracking.isInitialized()
  ) {
    FacebookTracking.init();
  }
};

export const removeTrackersFromPreferences = (
  cookiePreferences: StateUserCookiesPreferences
) => {
  const disableFBTacking =
    !cookiePreferences.facebook_tracking && FacebookTracking.isInitialized();

  if (disableFBTacking) {
    window.location.reload();
  }
};
