/* @flow */

import * as actionTypes from 'Shared/store/actionTypes';
import { type QuestionConfiguration } from 'Shared/types/sequence';
import { type Question } from 'Shared/types/question';
import { type DispatchString } from 'Shared/types/dispatch';
import { SequenceService } from 'Shared/api/SequenceService';
import { QuestionService } from 'Shared/api/QuestionService';
import { Logger } from 'Shared/services/Logger';
import { Tracking } from 'Shared/services/Tracking';

export const sequenceCollapse = () => (dispatch: DispatchString => void) =>
  dispatch({ type: actionTypes.SEQUENCE_COLLAPSE });

export const voteProposal = (proposalId: string) => ({
  type: actionTypes.SEQUENCE_PROPOSAL_VOTE,
  payload: { proposalId },
});

export const unvoteProposal = (proposalId: string) => ({
  type: actionTypes.SEQUENCE_PROPOSAL_UNVOTE,
  payload: { proposalId },
});

export const loadQuestion = (question: Question) => ({
  type: actionTypes.QUESTION_LOAD,
  payload: { question },
});

export const loadQuestionConfiguration = (
  questionConfiguration: QuestionConfiguration,
  questionId: string
) => ({
  type: actionTypes.QUESTION_CONFIGURATION_LOAD,
  payload: { questionConfiguration, questionId },
});

export const sequenceVote = (
  proposalId: string,
  voteKey: string,
  index: number
) => (dispatch: any => void, getState: () => any) => {
  const { votedProposalIds } = getState().sequence;
  const isFirstVote = votedProposalIds.length === 0;
  dispatch(voteProposal(proposalId));

  if (isFirstVote) {
    Tracking.trackFirstVote(proposalId, voteKey, index);
  }

  Tracking.trackVote(proposalId, voteKey, index);
};

export const sequenceUnvote = (
  proposalId: string,
  voteKey: string,
  index: number
) => (dispatch: any => void) => {
  dispatch(unvoteProposal(proposalId));

  Tracking.trackUnvote(proposalId, voteKey, index);
};

export const fetchQuestionData = (questionSlug: string) => (
  dispatch: any => void
) =>
  QuestionService.getDetail(questionSlug)
    .then(question => {
      dispatch(loadQuestion(question));
      // Important ! Do not remove: use by the parent to use question.questionId
      return question;
    })
    .catch(error => {
      Logger.logError({
        ...{ source: 'fetchQuestionData api call error' },
        ...{ error },
      });
    });

export const fetchQuestionConfigurationData = (
  questionSlug: string,
  questionId: string
) => (dispatch: any => void) =>
  SequenceService.fetchConfiguration(questionSlug)
    .then(questionConfiguration => {
      dispatch(loadQuestionConfiguration(questionConfiguration, questionId));
    })

    .catch(error => {
      Logger.logError({
        ...{ source: 'fetchQuestionConfigurationData api call error' },
        ...{ error },
      });
    });
