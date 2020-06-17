import { QuestionApiService } from 'Shared/api/QuestionApiService';
import { logger } from '../logger';

const cache = require('memory-cache');

const clearCache = () => {
  cache.clear();
};

const getQuestion = async (
  questionIdOrSlug: string,
  country: string,
  language: string,
  notFound: () => void = () => {},
  unexpectedError: () => void = () => {}
) => {
  const CACHE_KEY = `QUESTION_${questionIdOrSlug}`;
  const content = cache.get(CACHE_KEY);
  if (content) {
    return content;
  }

  try {
    const questionDetailResponse = await QuestionApiService.getDetail(
      questionIdOrSlug,
      {
        'x-make-question-id': questionIdOrSlug,
        'x-make-country': country,
        'x-make-language': language,
      }
    );
    cache.put(CACHE_KEY, questionDetailResponse.data, 300000);

    return questionDetailResponse.data;
  } catch (apiServiceError) {
    if (apiServiceError.status === 404) {
      notFound();
      return null;
    }
    logger.log(
      'error in server/service/QuestionService/getQuestion',
      apiServiceError
    );
    unexpectedError();

    return null;
  }
};

export const QuestionService = {
  getQuestion,
  clearCache,
};
