/* @flow */

import UserService from 'Api/UserService';
import * as actionTypes from 'Constants/actionTypes';
import { USER_LOCAL_STORAGE_KEY, TOKEN_LOCAL_STORAGE_KEY } from 'Constants/user';
import { loginSuccess } from 'Actions/authentification';
import { submitProposal } from 'Actions/proposal';
import { pannelClose } from 'Actions/pannel';
import Tracking from 'Services/Tracking';

export const registerRequest = () => ({ type: actionTypes.REGISTER_REQUEST });
export const registerSuccess = (user: Object) => ({ type: actionTypes.REGISTER_SUCCESS, user });
export const registerFailure = (errors: Array<Object>) => ({ type: actionTypes.REGISTER_FAILURE, errors });

export const register = (user: Object) => (dispatch: Function, getState: Function) => {
  dispatch(registerRequest());
  return UserService.register(user)
    .then((userResonse) => {
      dispatch(registerSuccess(userResonse));
      localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(userResonse));
      Tracking.trackSignupEmailSuccess();

      return userResonse;
    })
    .then(() => (
      UserService.login(user.email, user.password)
        .then((token) => {
          const { content, canSubmit } = getState().proposal;
          dispatch(loginSuccess(token));
          localStorage.setItem(TOKEN_LOCAL_STORAGE_KEY, JSON.stringify(token));
          if (canSubmit) dispatch(submitProposal(content));
          dispatch(pannelClose());
        })
    ))
    .catch((errors) => {
      dispatch(
        registerFailure(Array.isArray(errors) ? errors : [{ field: 'global', message: 'api_error' }])
      );
      Tracking.trackSignupEmailFailure();
    });
};
