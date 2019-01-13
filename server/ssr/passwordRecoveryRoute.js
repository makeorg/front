import UserService from 'Api/UserService';
import { notificationConstants } from 'Shared/constants/notification';
import { HTTP_NO_CONTENT, HTTP_NOT_FOUND } from 'Shared/constants/httpStatus';
import { logger } from '../logger';

const reactRender = require('../reactRender');

async function postResetPasswordTokenCheck(userId: string, resetToken: string) {
  return UserService.resetPasswordTokenCheck(userId, resetToken);
}

module.exports = async function passwordRecoveryRoute(req, res) {
  const { resetToken, userId } = req.params;
  const initialState = {
    notification: { contentType: undefined },
    user: { passwordRecovery: { validToken: false, resetToken, userId } }
  };

  try {
    const status = await postResetPasswordTokenCheck(userId, resetToken);

    if (status === HTTP_NO_CONTENT) {
      initialState.user.passwordRecovery.validToken = true;
      initialState.user.passwordRecovery.resetToken = resetToken;
    }

    if (status === HTTP_NOT_FOUND) {
      initialState.notification.contentType = notificationConstants.PASSWORD_RECOVERY_FAILURE_CONTENT;
      initialState.notification.status = status;
    }

    return reactRender(req, res, initialState);
  } catch (error) {
    if (error && error.stack) {
      const { stack } = error;
      logger.log('error', stack);
    }

    return res.send(error);
  }
};
