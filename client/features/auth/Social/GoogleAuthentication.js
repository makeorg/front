// @flow
import React from 'react';
import { i18n } from 'Shared/i18n';
import { useSelector, useDispatch } from 'react-redux';
import GoogleLogin from 'react-google-login';
import { GOOGLE_PROVIDER_ENUM } from 'Shared/api/UserApiService';
import { GOOGLE_LOGIN_ID } from 'Shared/constants/config';
import { SvgGoogleLogoG } from 'Client/ui/Svg/elements';
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
import {
  GoogleButtonStyle,
  SocialButtonLabelStyle,
  SvgLogoWrapperStyle,
} from './style';
/**
 * Handles Google authentication
 */
export const GoogleAuthentication = () => {
  const dispatch = useDispatch();
  const { privacyPolicy } = useSelector((state: StateRoot) => state.appConfig);
  /** Google login method callback */
  const handleGoogleLoginSuccess = response => {
    const success = () => {
      dispatch(loginSocialSuccess());
      dispatch(getUser());
    };

    const handleErrors = () => {
      trackAuthenticationSocialFailure(GOOGLE_PROVIDER_ENUM);
    };
    const unexpectedError = () => dispatch(modalClose());

    UserService.checkSocialPrivacyPolicy(
      GOOGLE_PROVIDER_ENUM,
      response.accessToken,
      privacyPolicy,
      () =>
        dispatch(
          modalShowDataPolicySocial(GOOGLE_PROVIDER_ENUM, response.accessToken)
        ),
      success,
      handleErrors,
      unexpectedError
    );
  };

  const handleGoogleLoginFailure = response => {
    if (response?.error === 'popup_closed_by_user') {
      Logger.logInfo({
        message: 'Google auth popup closed by user',
        name: 'social-auth',
      });

      return;
    }

    Logger.logError({
      message: `Google login failure: ${response?.error}`,
      name: 'social-auth',
    });
    dispatch(
      displayNotificationBanner(
        UNEXPECTED_ERROR_MESSAGE,
        NOTIFICATION_LEVEL_ALERT
      )
    );
    dispatch(modalClose());
  };

  return (
    <GoogleLogin
      clientId={GOOGLE_LOGIN_ID}
      scope="https://www.googleapis.com/auth/user.birthday.read"
      buttonText="Google"
      onSuccess={handleGoogleLoginSuccess}
      onFailure={handleGoogleLoginFailure}
      render={renderProps => (
        <GoogleButtonStyle onClick={renderProps.onClick} type="button">
          <SvgLogoWrapperStyle>
            <SvgGoogleLogoG aria-hidden focusable="false" />
          </SvgLogoWrapperStyle>
          <SocialButtonLabelStyle>
            {i18n.t('common.social_login.google_connect')}
          </SocialButtonLabelStyle>
          <ScreenReaderItemStyle>Google</ScreenReaderItemStyle>
        </GoogleButtonStyle>
      )}
    />
  );
};
