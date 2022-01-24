/* @flow */

import * as actionTypes from 'Shared/store/actionTypes';
import {
  trackDisplaySigninForm,
  trackDisplaySignupForm,
  trackDisplayForgotPasswordForm,
} from 'Shared/services/Tracking';

export const modalClose = () => (dispatch: Function) => {
  dispatch({ type: actionTypes.MODAL_CLOSE });
};
export const modalShowLogin = () => (dispatch: Function) => {
  dispatch({ type: actionTypes.MODAL_SHOW_LOGIN });
  trackDisplaySigninForm();
};

export const modalShowRegister = () => (dispatch: Function) => {
  dispatch({ type: actionTypes.MODAL_SHOW_REGISTER });
  trackDisplaySignupForm();
};

export const modalShowForgotPassword = () => (dispatch: Function) => {
  dispatch({ type: actionTypes.MODAL_SHOW_FORGOT_PASSWORD });
  trackDisplayForgotPasswordForm();
};

export const modalShowDepartmentForm = () => ({
  type: actionTypes.MODAL_SHOW_DEPARTMENT_FORM,
});

export const showSessionExpirationModal = () => (dispatch: Function) => {
  dispatch({ type: actionTypes.MODAL_SHOW_SESSION_EXPIRATION });
};
export const closeSessionExpirationModal = () => (dispatch: Function) => {
  dispatch({ type: actionTypes.MODAL_CLOSE_SESSION_EXPIRATION });
};

export const modalShowProposalSuccess = () => (dispatch: Function) => {
  dispatch({ type: actionTypes.MODAL_SHOW_PROPOSAL_SUCCESS });
};

export const modalShowCountries = (focusAfterClose: boolean) => ({
  type: actionTypes.MODAL_SHOW_COUNTRIES,
  payload: { focusAfterClose },
});

export const modalCloseCookies = () => (dispatch: Function) => {
  dispatch({ type: actionTypes.MODAL_CLOSE_COOKIES });
};

export const modalShowCookies = () => (dispatch: Function) => {
  dispatch({ type: actionTypes.MODAL_SHOW_COOKIES });
};
