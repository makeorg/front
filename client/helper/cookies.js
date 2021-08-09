// @flow
import { USER_PREFERENCES_COOKIE } from 'Shared/constants/cookies';
import { FacebookTracking } from 'Shared/services/Trackers/FacebookTracking';
import { MixpanelTracking } from 'Shared/services/Trackers/MixpanelTracking';
import { TwitterUniversalTag } from 'Shared/services/Trackers/TwitterTracking';
import { TWITTER_SCRIPT, twttr } from 'Shared/services/Trackers/twttr';
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
  const body = document.querySelector('body');
  const twitterScript = document.createElement('script');
  twitterScript.setAttribute('type', 'text/javascript');
  twitterScript.setAttribute('async', true);
  twitterScript.src = TWITTER_SCRIPT;

  if (
    cookiePreferences?.facebook_tracking &&
    !FacebookTracking.isInitialized()
  ) {
    FacebookTracking.init();
  }

  if (cookiePreferences?.twitter_tracking && !twttr.initialized()) {
    body.appendChild(twitterScript);
    TwitterUniversalTag.init();
  }

  // allways init mixpanel
  MixpanelTracking.init();
};

export const removeTrackersFromPreferences = (
  cookiePreferences: StateUserCookiesPreferences
) => {
  const disableFBTacking =
    !cookiePreferences.facebook_tracking && FacebookTracking.isInitialized();
  const disableTWTracking =
    !cookiePreferences.twitter_tracking && twttr.initialized();

  if (disableFBTacking || disableTWTracking) {
    window.location.reload();
  }
};
