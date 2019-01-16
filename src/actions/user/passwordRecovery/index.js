import i18next from 'i18next';
import * as actionTypes from 'Constants/actionTypes';
import UserService from 'Api/UserService';

export const passwordRecoveryRequest = (newPassword: string, resetToken: string, userId: string) => (
  { type: actionTypes.PASSWORD_RECOVERY_REQUEST, payload: { newPassword, resetToken, userId } }
);
export const passwordRecoveryFailure = (errorMessage: string) => (
  { type: actionTypes.PASSWORD_RECOVERY_FAILURE, payload: { errorMessage } }
);
export const passwordRecoverySuccess = () => ({ type: actionTypes.PASSWORD_RECOVERY_SUCCESS });

export const passwordRecovery = (newPassword: string) => (dispatch: Function, getState: Function) => {
  const { resetToken, userId } = getState().user.passwordRecovery;
  dispatch(passwordRecoveryRequest(newPassword, resetToken, userId));
  if (newPassword.length < 8) {
    return dispatch(passwordRecoveryFailure(i18next.t('common.form.Password must be at least 8 characters')));
  }

  return UserService.changePassword(newPassword, resetToken, userId)
    .then(() => {
      dispatch(passwordRecoverySuccess());
    })
    .catch((error) => {
      dispatch(passwordRecoveryFailure(error));
    });
};