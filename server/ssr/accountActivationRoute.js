import { createInitialState } from 'Shared/store/initialState';
import {
  NOTIFICATION_LEVEL_SUCCESS,
  NOTIFICATION_LEVEL_ERROR,
  ACTIVATION_SUCCESS_MESSAGE,
  ACTIVATION_FAILURE_MESSAGE,
} from 'Shared/constants/notifications';
import { UserService } from '../service/UserService';
import { reactRender } from '../reactRender';
import { QuestionService } from '../service/QuestionService';
import { logError } from './helpers/ssr.helper';

export const accountActivationRoute = async (req, res) => {
  const routeState = createInitialState();
  const { userId, verificationToken, country, language } = req.params;
  // empty question when register on home page
  const questionId = req.query.question || '';
  const notificationError = {
    contentId: ACTIVATION_FAILURE_MESSAGE,
    level: NOTIFICATION_LEVEL_ERROR,
  };
  const notificationSuccess = {
    contentId: ACTIVATION_SUCCESS_MESSAGE,
    level: NOTIFICATION_LEVEL_SUCCESS,
  };

  if (questionId !== '') {
    const notFound = () => {
      logError({
        message: `Question not found on activate account questionId='${questionId}'`,
        name: 'account-activation',
        app_url: req.url,
        app_query: req.query,
      });
    };
    const unexpectedError = () => {
      logError({
        message: `Unexpected error on activate account questionId='${questionId}'`,
        name: 'account-activation',
        app_url: req.url,
        app_query: req.query,
      });
    };
    const question = await QuestionService.getQuestion(
      questionId,
      country,
      language,
      notFound,
      unexpectedError
    );

    if (!question) {
      routeState.notification = notificationError;

      return reactRender(req, res, routeState);
    }

    routeState.currentQuestion = question.slug;
    routeState.questions = {
      [question.slug]: {
        question,
      },
    };
  }

  const success = () => {
    routeState.notifications.banner = notificationSuccess;
  };
  const failure = () => {
    routeState.notifications.banner = notificationError;
  };
  await UserService.verifyUser(
    userId,
    verificationToken,
    country,
    language,
    questionId,
    success,
    failure
  );

  return reactRender(req, res, routeState);
};
