import QuestionService from '../../src/api/QuestionService';
import SequenceService from '../../src/api/SequenceService';
import { disableExtraSlidesByQuery } from './helpers/query.helper';
import { logger } from '../logger';

const reactRender = require('../reactRender');

async function getQuestion(questionSlug) {
  return QuestionService.getDetail(questionSlug);
}

async function getQuestionConfiguration(questionSlug) {
  return SequenceService.fetchConfiguration(questionSlug);
}

module.exports = async function SequenceRoute(req, res) {
  try {
    const { questionSlug } = req.params;
    const question = await getQuestion(questionSlug);
    const questionConfiguration = await getQuestionConfiguration(questionSlug);
    if (questionConfiguration) {
      const { sequenceExtraSlides } = questionConfiguration;
      questionConfiguration.sequenceExtraSlides = disableExtraSlidesByQuery(sequenceExtraSlides, req.query);
    }

    const { firstProposal } = req.query;

    let sequenceState = {
      sequence: {
        question,
        questionConfiguration,
        votedProposalIds: []
      }
    };

    if (firstProposal) {
      sequenceState = {
        sequence: {
          ...sequenceState.sequence,
          ...{ firstProposal }
        }
      };
    }

    return reactRender(req, res, sequenceState);
  } catch (error) {
    logger.log('error', error.stack);
    res.sendStatus(500).send({ error: error.message });
  }
};
