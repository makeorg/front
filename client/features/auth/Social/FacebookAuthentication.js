// @flow
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { type StateRoot } from 'Shared/store/types';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { FACEBOOK_PROVIDER_ENUM } from 'Shared/api/UserApiService';
import { SvgFacebookLogoF } from 'Client/ui/Svg/elements';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import { UserService } from 'Shared/services/User';
import {
  modalClose,
  modalShowDataPolicySocial,
} from 'Shared/store/actions/modal';
import { trackAuthenticationSocialFailure } from 'Shared/services/Tracking';

import {
  loginSocialSuccess,
  getUser,
} from 'Shared/store/actions/authentication';
import { Logger } from 'Shared/services/Logger';
import { displayNotificationBanner } from 'Shared/store/actions/notifications';
import {
  NOTIFICATION_LEVEL_ALERT,
  UNEXPECTED_ERROR_MESSAGE,
} from 'Shared/constants/notifications';
import { FacebookButtonStyle } from './style';

/**
 * Handles Facebook authentication
 */

export const FacebookAuthentication = () => {
  const dispatch = useDispatch();
  const { privacyPolicy } = useSelector((state: StateRoot) => state.appConfig);
  // setting facebook browser to true or false
  const [isFacebookBrowser, setFacebookBrowser] = useState(false);
  const { language } = useSelector((state: StateRoot) => state.appConfig);
  const handleFacebookLoginCallback = response => {
    if (!response?.accessToken && response?.status === 'unknown') {
      Logger.logInfo({
        message:
          'Facebook auth failed with status unknown. Probably user close popup.',
        name: 'social-auth',
      });

      return;
    }
    if (!response?.accessToken) {
      Logger.logError({
        message: `Facebook login failure: ${response?.status}`,
        name: 'social-auth',
      });
      dispatch(
        displayNotificationBanner(
          UNEXPECTED_ERROR_MESSAGE,
          NOTIFICATION_LEVEL_ALERT
        )
      );
      dispatch(modalClose());
    }

    const success = () => {
      dispatch(loginSocialSuccess());
      dispatch(getUser());
    };

    const handleErrors = () => {
      trackAuthenticationSocialFailure();
    };
    const unexpectedError = () => dispatch(modalClose());

    UserService.checkSocialPrivacyPolicy(
      FACEBOOK_PROVIDER_ENUM,
      response.accessToken,
      privacyPolicy,
      () =>
        dispatch(
          modalShowDataPolicySocial(
            FACEBOOK_PROVIDER_ENUM,
            response.accessToken
          )
        ),
      success,
      handleErrors,
      unexpectedError
    );
  };

  useEffect(() => {
    /** Dirty Hack to disable facebook connect in webview / FB browser due to unstable SDK methods
     *  https://developers.facebook.com/docs/facebook-login/best-practices/#avoidwebview
     */
    const ua = navigator.userAgent || navigator.vendor || window.opera;
    if (ua.indexOf('FBAN') > -1 || ua.indexOf('FBAV') > -1) {
      setFacebookBrowser(true);
    }
  }, []);

  if (!isFacebookBrowser) {
    return (
      <FacebookLogin
        appId="317128238675603"
        version="8.0"
        fields="name,email,picture,birthday"
        callback={handleFacebookLoginCallback}
        language={language}
        disableMobileRedirect
        render={renderProps => (
          <FacebookButtonStyle onClick={renderProps.onClick} type="button">
            <SvgFacebookLogoF aria-hidden focusable="false" />
            <ScreenReaderItemStyle>Facebook</ScreenReaderItemStyle>
          </FacebookButtonStyle>
        )}
      />
    );
  }
  return null;
};
