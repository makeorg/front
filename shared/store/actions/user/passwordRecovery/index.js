import { i18n } from 'Shared/i18n';
import { type Dispatch } from 'redux';
import { type StateRoot } from 'Shared/store/types';
import * as actionTypes from 'Shared/store/actionTypes';
import { UserService } from 'Shared/services/User';

export const passwordRecoveryRequest = (
  newPassword: string,
  resetToken: string,
  userId: string
) => ({
  type: actionTypes.PASSWORD_RECOVERY_REQUEST,
  payload: { newPassword, resetToken, userId },
});
export const passwordRecoveryFailure = (errorMessage: string) => ({
  type: actionTypes.PASSWORD_RECOVERY_FAILURE,
  payload: { errorMessage },
});
export const passwordRecoverySuccess = () => ({
  type: actionTypes.PASSWORD_RECOVERY_SUCCESS,
});

export const passwordRecovery = (newPassword: string) => (
  dispatch: Dispatch,
  getState: () => StateRoot
) => {
  const { resetToken, userId } = getState().user.passwordRecovery;
  dispatch(passwordRecoveryRequest(newPassword, resetToken, userId));
  if (newPassword.length < 8) {
    dispatch(
      passwordRecoveryFailure(
        i18n.t('common.form.invalid_password', {
          context: 'dynamic',
          label: `<label for="password">${i18n.t(
            'common.form.label.password'
          )}</label>`,
        })
      )
    );
  }
  const success = () => dispatch(passwordRecoverySuccess());
  const failure = () =>
    dispatch(passwordRecoveryFailure('Fail to recover password'));
  UserService.changePassword(newPassword, resetToken, userId, success, failure);
};
