/* @flow */

import * as actionTypes from 'Shared/store/actionTypes';
import { type Dispatch } from 'redux';
import { type StateRoot } from 'Shared/store/types';
import { type QuestionConfiguration as TypeQuestionConfiguration } from 'Shared/types/sequence';
import {
  type Question as TypeQuestion,
  type QuestionResults as TypeQuestionResults,
} from 'Shared/types/question';
import { SequenceService } from 'Shared/api/SequenceService';
import { QuestionApiService } from 'Shared/api/QuestionApiService';
import { Logger } from 'Shared/services/Logger';
import { trackFirstVote } from 'Shared/services/Tracking';
import { QuestionNodeService } from 'Shared/api/QuestionNodeService';

export const sequenceCollapse = () => (dispatch: Dispatch) =>
  dispatch({ type: actionTypes.SEQUENCE_COLLAPSE });

export const voteProposal = (proposalId: string) => ({
  type: actionTypes.SEQUENCE_PROPOSAL_VOTE,
  payload: { proposalId },
});

export const unvoteProposal = (proposalId: string) => ({
  type: actionTypes.SEQUENCE_PROPOSAL_UNVOTE,
  payload: { proposalId },
});

export const loadQuestion = (question: TypeQuestion) => ({
  type: actionTypes.QUESTION_LOAD,
  payload: { question },
});

export const unloadCurrentQuestion = () => ({
  type: actionTypes.QUESTION_UNLOAD,
});

export const loadQuestionConfiguration = (
  questionConfiguration: TypeQuestionConfiguration,
  questionSlug: string
) => ({
  type: actionTypes.QUESTION_CONFIGURATION_LOAD,
  payload: { questionConfiguration, questionSlug },
});

export const loadQuestionResults = (
  questionResults: TypeQuestionResults,
  questionSlug: string
) => ({
  type: actionTypes.QUESTION_RESULTS_LOAD,
  payload: { questionResults, questionSlug },
});

export const sequenceVote = (
  proposalId: string,
  voteKey: string,
  index: number
) => (dispatch: Dispatch, getState: () => StateRoot) => {
  const { votedProposalIds } = getState().sequence;
  const isFirstVote = votedProposalIds.length === 0;
  dispatch(voteProposal(proposalId));

  if (isFirstVote) {
    trackFirstVote(proposalId, voteKey, index);
  }
};

export const sequenceUnvote = (proposalId: string) => (
  dispatch: any => void
) => {
  dispatch(unvoteProposal(proposalId));
};

export const fetchQuestionData = (questionSlugOrId: string) => (
  dispatch: any => void
) =>
  QuestionApiService.getDetail(questionSlugOrId)
    .then(question => {
      dispatch(loadQuestion(question));

      // Important ! Do not remove: use by the parent to use question.questionId
      return question;
    })
    .catch(error => {
      Logger.logError(Error(error));
    });

export const fetchQuestionConfigurationData = (questionSlug: string) => (
  dispatch: any => void
) =>
  SequenceService.fetchConfiguration(questionSlug)
    .then(questionConfiguration => {
      dispatch(loadQuestionConfiguration(questionConfiguration, questionSlug));
    })

    .catch(error => {
      Logger.logError(Error(error));
    });

export const fetchQuestionResults = (questionSlug: string) => (
  dispatch: any => void
) =>
  QuestionNodeService.fetchResults(questionSlug)
    .then(questionResults => {
      dispatch(loadQuestionResults(questionResults, questionSlug));
    })
    .catch(error => {
      Logger.logError(Error(error));
    });
