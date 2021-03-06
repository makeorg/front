// @flow

import {
  SEQUENCE_DECREMENT_INDEX,
  SEQUENCE_DEMOGRAPHICS_ADD_QUESTION,
  SEQUENCE_DEMOGRAPHICS_PERSIST,
  SEQUENCE_INCREMENT_INDEX,
  SEQUENCE_LOAD_CARDS,
  SEQUENCE_LOAD_PROPOSALS,
  SEQUENCE_PROPOSAL_UNVOTE,
  SEQUENCE_PROPOSAL_VOTE,
  SEQUENCE_RESET_VOTED_PROPOSALS,
  SEQUENCE_SET_INDEX,
  SEQUENCE_UPDATE_CARD_STATE,
} from 'Shared/store/actionTypes';
import { initialState } from 'Shared/store/initialState';
import { type StateSequence } from 'Shared/store/types';

export function sequence(
  state: StateSequence = initialState.sequence,
  action: Object
) {
  switch (action.type) {
    case SEQUENCE_UPDATE_CARD_STATE: {
      const { cards } = state;
      cards[action.payload.index] = {
        ...cards[action.payload.index],
        state: action.payload.newCardState,
      };
      return {
        ...state,
        cards,
      };
    }
    case SEQUENCE_LOAD_CARDS:
      return {
        ...state,
        cards: action.payload.cards,
      };
    case SEQUENCE_RESET_VOTED_PROPOSALS:
      return {
        ...state,
        votedProposalIds: {
          ...state.votedProposalIds,
          [action.payload.questionSlug]: [],
        },
      };
    case SEQUENCE_LOAD_PROPOSALS:
      return {
        ...state,
        proposals: action.payload.proposals,
      };
    case SEQUENCE_PROPOSAL_VOTE: {
      const oldProposalList =
        state.votedProposalIds[action.payload.questionSlug] || [];
      const newProposalList = [...oldProposalList, action.payload.proposalId];

      return {
        ...state,
        votedProposalIds: {
          ...state.votedProposalIds,
          [action.payload.questionSlug]: newProposalList,
        },
      };
    }
    case SEQUENCE_PROPOSAL_UNVOTE: {
      if (!state.votedProposalIds[action.payload.questionSlug]) {
        return state;
      }
      const newProposalList = state.votedProposalIds[
        action.payload.questionSlug
      ].filter(item => item !== action.payload.proposalId);

      return {
        ...state,
        votedProposalIds: {
          ...state.votedProposalIds,
          [action.payload.questionSlug]: newProposalList,
        },
      };
    }
    case SEQUENCE_SET_INDEX:
      return {
        ...state,
        currentIndex: action.payload.index || 0,
      };
    case SEQUENCE_INCREMENT_INDEX:
      return {
        ...state,
        currentIndex: state.currentIndex + 1,
      };
    case SEQUENCE_DECREMENT_INDEX:
      return {
        ...state,
        currentIndex: state.currentIndex - 1,
      };
    case SEQUENCE_DEMOGRAPHICS_PERSIST:
      return {
        ...state,
        demographics: {
          type: action.payload.type,
          value: action.payload.value,
          questions: [action.payload.questionSlug],
        },
      };
    case SEQUENCE_DEMOGRAPHICS_ADD_QUESTION:
      return {
        ...state,
        demographics: {
          ...state.demographics,
          questions: [
            ...state.demographics.questions,
            action.payload.questionSlug,
          ],
        },
      };
    default:
      return state;
  }
}
