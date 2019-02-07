import SequenceService from 'Shared/api/SequenceService';
import { logger } from '../logger';
import { reactRender } from '../reactRender';

export const getQuestionConfiguration = async questionSlug => (
  SequenceService.fetchConfiguration(questionSlug)
);

export const proposalRoute = async (req, res) => {
  let routeState = {};
  try {
    const {
      questionSlug
    } = req.params;

    const questionConfiguration = await getQuestionConfiguration(questionSlug);

    routeState = {
      sequence: {
        questionConfiguration
      }
    };
  } catch (error) {
    if (error && error.stack) {
      const { stack } = error;
      logger.log('error', stack);
    } else {
      logger.log('error', error);
    }

    return res.status(404).end();
  }

  return reactRender(req, res, routeState);
};
