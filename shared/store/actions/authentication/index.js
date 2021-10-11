/* @flow */
import { i18n } from 'Shared/i18n';
import { type Dispatch } from 'redux';
import { type ErrorObjectType } from 'Shared/types/api';
import * as actionTypes from 'Shared/store/actionTypes';
import { modalClose } from 'Shared/store/actions/modal';
import {
  trackLoginEmailSuccess,
  trackLoginEmailFailure,
  trackAuthenticationSocialSuccess,
  trackAuthenticationSocialFailure,
} from 'Shared/services/Tracking';
import { type StateRoot } from 'Shared/store/types';
import { Logger } from 'Shared/services/Logger';
import { UserService } from 'Shared/services/User';
import { type UserType, type UserProfileType } from 'Shared/types/user';
import { type OrganisationProfileType } from 'Shared/types/organisation';
import { type PersonalityProfileType } from 'Shared/types/personality';
import {
  ACCOUNT_DELETION_SUCCESS_MESSAGE,
  LOGIN_SUCCESS_MESSAGE,
  LOGOUT_SUCCESS_MESSAGE,
  NOTIFICATION_LEVEL_ALERT,
  NOTIFICATION_LEVEL_ERROR,
  NOTIFICATION_LEVEL_SUCCESS,
  REGISTER_SUCCESS_MESSAGE,
  REGISTER_SUCCESS_VALIDATE_MESSAGE,
  UNEXPECTED_ERROR_MESSAGE,
} from 'Shared/constants/notifications';
import { displayNotificationBanner } from '../notifications';
import { clearSessionId } from '../session';

export const loginRequest = () => ({ type: actionTypes.LOGIN_REQUEST });
export const loginFailure = (error: ErrorObjectType) => ({
  type: actionTypes.LOGIN_FAILURE,
  error,
});
export const loginSuccess = () => ({
  type: actionTypes.LOGIN_SUCCESS,
});
export const loginSocialRequest = (provider: string) => ({
  type: actionTypes.LOGIN_SOCIAL_REQUEST,
  provider,
});
export const loginSocialFailure = () => ({
  type: actionTypes.LOGIN_SOCIAL_FAILURE,
});
export const loginSocialSuccess = () => ({
  type: actionTypes.LOGIN_SOCIAL_SUCCESS,
});
export const setUserInfo = (
  user: UserType,
  profile: UserProfileType | null
) => ({
  type: actionTypes.GET_INFO,
  user: {
    ...user,
    profile,
  },
});

export const logoutSuccess = () => ({ type: actionTypes.LOGOUT });

export const getUser =
  (afterRegistration?: boolean) =>
  async (dispatch: Dispatch, getState: () => StateRoot) => {
    const { isOpen: isModalOpen } = getState().modal;
    const user = await UserService.current();
    if (!user) {
      return dispatch(
        displayNotificationBanner(
          UNEXPECTED_ERROR_MESSAGE,
          NOTIFICATION_LEVEL_ERROR
        )
      );
    }

    const profile:
      | UserProfileType
      | OrganisationProfileType
      | PersonalityProfileType = user
      ? await UserService.getProfileByUserType(user.userId, user.userType)
      : null;
    if (user) {
      dispatch(setUserInfo(user, profile));
    }
    if (isModalOpen) {
      dispatch(modalClose());
    }
    if (afterRegistration && user.emailVerified) {
      return dispatch(
        displayNotificationBanner(
          REGISTER_SUCCESS_MESSAGE,
          NOTIFICATION_LEVEL_SUCCESS
        )
      );
    }

    if (afterRegistration) {
      return dispatch(
        displayNotificationBanner(
          REGISTER_SUCCESS_VALIDATE_MESSAGE,
          NOTIFICATION_LEVEL_ALERT,
          { email: user.email }
        )
      );
    }

    return null;
  };

export const login =
  (email: string, password: string, approvePrivacyPolicy: boolean) =>
  (dispatch: Dispatch) => {
    dispatch(loginRequest());
    const success = (): void => {
      dispatch(loginSuccess());
      trackLoginEmailSuccess();
      dispatch(getUser());
      dispatch(
        displayNotificationBanner(
          LOGIN_SUCCESS_MESSAGE,
          NOTIFICATION_LEVEL_SUCCESS
        )
      );
    };
    const errors = (): void => {
      dispatch(
        loginFailure({
          field: 'email',
          key: 'email_doesnot_exist',
          message: i18n.t('login.email_doesnot_exist', {
            emailLabel: `<label for="email">${i18n.t(
              'common.form.label.email'
            )}</label>`,
            passwordLabel: `<label for="password">${i18n.t(
              'common.form.label.password'
            )}</label>`,
          }),
        })
      );
      trackLoginEmailFailure();
    };

    UserService.login(email, password, approvePrivacyPolicy, success, errors);
  };

export const loginSocial =
  (provider: string, socialToken: string, approvePrivacyPolicy: boolean) =>
  (dispatch: Dispatch) => {
    dispatch(loginSocialRequest(provider));
    if (!socialToken) {
      dispatch(loginSocialFailure());
      trackAuthenticationSocialFailure(provider);
      Logger.logInfo({
        message: `No token from ${provider} callBack auth`,
        name: 'social-auth',
      });

      return Promise.resolve();
    }

    const success = createdAt => {
      dispatch(loginSocialSuccess());
      trackAuthenticationSocialSuccess(provider, createdAt);
      dispatch(getUser());
      dispatch(
        displayNotificationBanner(
          LOGIN_SUCCESS_MESSAGE,
          NOTIFICATION_LEVEL_SUCCESS
        )
      );
    };
    const failure = () => {
      dispatch(loginSocialFailure());
      trackAuthenticationSocialFailure(provider);
    };

    return UserService.loginSocial(
      provider,
      socialToken,
      approvePrivacyPolicy,
      success,
      failure
    );
  };

export const logout =
  (afterAccountDeletion?: boolean) => (dispatch: Dispatch) => {
    const success = () => {
      dispatch(clearSessionId());
      dispatch(logoutSuccess());
      if (afterAccountDeletion) {
        return dispatch(
          displayNotificationBanner(
            ACCOUNT_DELETION_SUCCESS_MESSAGE,
            NOTIFICATION_LEVEL_SUCCESS
          )
        );
      }
      return dispatch(
        displayNotificationBanner(
          LOGOUT_SUCCESS_MESSAGE,
          NOTIFICATION_LEVEL_SUCCESS
        )
      );
    };
    if (afterAccountDeletion) {
      return Promise.resolve(success());
    }

    return UserService.logout(success);
  };
