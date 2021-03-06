// @flow
import { createInitialState } from 'Shared/store/initialState';
import { type Request, type Response } from 'express';
import { type QuestionType } from 'Shared/types/question';
import { isInProgress } from 'Shared/helpers/date';
import { updateTrackingQuestionParam } from 'Shared/store/middleware/question';
import { getLanguageFromParams } from 'Shared/helpers/countries';
import { transformExtraSlidesConfigFromQuery } from './helpers/query.helper';
import { reactRender } from '../reactRender';
import { QuestionService } from '../service/QuestionService';

export const sequenceRoute = async (req: Request, res: Response) => {
  const routeState = createInitialState();

  const { questionSlug, country } = req.params;
  const language = getLanguageFromParams(country, req.query.lang);
  const question: QuestionType = await QuestionService.getQuestion(
    questionSlug,
    country,
    language
  );

  if (!question) {
    return reactRender(req, res.status(404), routeState);
  }

  if (!isInProgress(question) && !question.displayResults) {
    return res.redirect(question.aboutUrl);
  }

  const { sequenceConfig } = question;
  const questionModified = {
    ...question,
    sequenceConfig: transformExtraSlidesConfigFromQuery(
      sequenceConfig,
      req.query
    ),
  };

  routeState.currentQuestion = questionSlug;
  routeState.questions = {
    [questionSlug]: {
      question: questionModified,
    },
  };
  updateTrackingQuestionParam(questionModified);

  return reactRender(req, res, routeState);
};
