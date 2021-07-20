import {
  NOTIFICATION_LEVEL_ERROR,
  PASSWORD_RECOVERY_FAILURE_MESSAGE,
} from 'Shared/constants/notifications';
import { createInitialState } from 'Shared/store/initialState';
import { UserService } from '../service/UserService';
import { reactRender } from '../reactRender';
import { QuestionService } from '../service/QuestionService';
import { logError } from './helpers/ssr.helper';

export const passwordRecoveryRoute = async (req, res) => {
  const initialState = createInitialState();
  const { resetToken, userId, country, language } = req.params;
  const routeState = {
    ...initialState,
    user: {
      ...initialState.user,
      passwordRecovery: {
        validToken: false,
        resetToken,
        userId,
      },
    },
  };

  const questionId = req.query.question || '';
  if (questionId !== '') {
    const notFound = () => {
      logError({
        message: `Question not found on activate account questionId='${questionId}'`,
        name: 'password-recovery',
        app_url: req.url,
        app_query: req.query,
      });
    };
    const question = await QuestionService.getQuestion(
      questionId,
      country,
      language,
      notFound
    );

    if (question) {
      routeState.currentQuestion = question.slug;
      routeState.questions = {
        [question.slug]: {
          question,
        },
      };
    }
  }

  const success = () => {
    routeState.user.passwordRecovery.validToken = true;
    routeState.user.passwordRecovery.resetToken = resetToken;
  };
  const failure = () => {
    routeState.notifications.banner = {
      contentId: PASSWORD_RECOVERY_FAILURE_MESSAGE,
      level: NOTIFICATION_LEVEL_ERROR,
    };
  };
  await UserService.resetPasswordTokenCheck(
    userId,
    resetToken,
    country,
    language,
    questionId,
    success,
    failure
  );

  return reactRender(req, res, routeState);
};
