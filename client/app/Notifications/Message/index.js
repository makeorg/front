// @flow
import React from 'react';
import {
  SECURE_EXPIRED_MESSAGE,
  ACTIVATION_SUCCESS_MESSAGE,
  ACTIVATION_FAILURE_MESSAGE,
  PASSWORD_RECOVERY_FAILURE_MESSAGE,
  LOGOUT_SUCCESS_MESSAGE,
  LOGIN_SUCCESS_MESSAGE,
  REGISTER_SUCCESS_MESSAGE,
  REGISTER_SUCCESS_VALIDATE_MESSAGE,
  NETWORK_ERROR_MESSAGE,
  UNEXPECTED_ERROR_MESSAGE,
  VOTE_ONLY_MESSAGE,
  ACCOUNT_DELETION_SUCCESS_MESSAGE,
  FIRST_VOTE_TIP_MESSAGE,
  SOCIAL_MEDIA_COOKIES_MESSAGE,
  COOKIES_PREFERENCES_UPDATE_MESSAGE,
  LOGIN_SOCIAL_MISSING_EMAIL_DATA,
} from 'Shared/constants/notifications';
import { SecureExpiredMessage } from 'Client/app/Notifications/Banner/SecureExpired';
import { AccountActivationSuccessMessage } from 'Client/app/Notifications/Banner/AccountActivationSuccess';
import { AccountActivationFailureMessage } from 'Client/app/Notifications/Banner/AccountActivationFailure';
import { PasswordRecoveryFailureMessage } from 'Client/features/auth/PasswordRecovery/Failure';
import { LogoutSuccessMessage } from 'Client/app/Notifications/Banner/LogoutSuccess';
import { LoginSuccessMessage } from 'Client/app/Notifications/Banner/LoginSuccess';
import { RegisterSuccessValidateMessage } from 'Client/app/Notifications/Banner/RegisterSuccessValidate';
import { RegisterSuccessMessage } from 'Client/app/Notifications/Banner/RegisterSuccess';
import { NetworkErrorMessage } from 'Client/app/Notifications/Banner/NetworkError';
import { UnexpectedErrorMessage } from 'Client/app/Notifications/Banner/UnexpectedError';
import { LoginSocialMissingDataMessage } from 'Client/app/Notifications/Banner/LoginSocialMissingData';
import { VoteOnlyMessage } from 'Client/app/Notifications/Banner/VoteOnly';
import { AccountDeletionSuccessMessage } from 'Client/app/Notifications/Banner/AccountDeletionSuccess';
import { FirstVoteTip } from 'Client/app/Notifications/Tip/FirstVote';
import { SocialMediaCookiesMessage } from '../Banner/SocialMediaCookies';
import { CookiesPreferencesUpdateMessage } from '../Banner/CookiesPreferencesUpdate';

export const NotificationMessage = ({ name, params, close }) => {
  switch (name) {
    case SECURE_EXPIRED_MESSAGE:
      return <SecureExpiredMessage />;
    case ACTIVATION_SUCCESS_MESSAGE:
      return <AccountActivationSuccessMessage />;
    case ACTIVATION_FAILURE_MESSAGE:
      return <AccountActivationFailureMessage />;
    case PASSWORD_RECOVERY_FAILURE_MESSAGE:
      return <PasswordRecoveryFailureMessage />;
    case LOGOUT_SUCCESS_MESSAGE:
      return <LogoutSuccessMessage />;
    case LOGIN_SUCCESS_MESSAGE:
      return <LoginSuccessMessage />;
    case REGISTER_SUCCESS_VALIDATE_MESSAGE:
      return <RegisterSuccessValidateMessage email={params.email} />;
    case REGISTER_SUCCESS_MESSAGE:
      return <RegisterSuccessMessage />;
    case NETWORK_ERROR_MESSAGE:
      return <NetworkErrorMessage />;
    case UNEXPECTED_ERROR_MESSAGE:
      return <UnexpectedErrorMessage />;
    case VOTE_ONLY_MESSAGE:
      return <VoteOnlyMessage close={close} />;
    case ACCOUNT_DELETION_SUCCESS_MESSAGE:
      return <AccountDeletionSuccessMessage />;
    case FIRST_VOTE_TIP_MESSAGE:
      return <FirstVoteTip />;
    case SOCIAL_MEDIA_COOKIES_MESSAGE:
      return <SocialMediaCookiesMessage />;
    case COOKIES_PREFERENCES_UPDATE_MESSAGE:
      return <CookiesPreferencesUpdateMessage />;
    case LOGIN_SOCIAL_MISSING_EMAIL_DATA:
      return <LoginSocialMissingDataMessage />;
    default:
      return <></>;
  }
};
