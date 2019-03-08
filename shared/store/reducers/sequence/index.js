import * as actionTypes from 'Shared/store/actionTypes';
import { initialState } from 'Shared/store/initialState';
import { type StateSequence } from 'Shared/store/types';

export function sequence(
  state: StateSequence = initialState.sequence,
  action: Object
) {
  switch (action.type) {
    case actionTypes.SEQUENCE_COLLAPSE:
      return {
        ...state,
        isSequenceCollapsed: true,
      };
    case actionTypes.SEQUENCE_EXPAND:
      return {
        ...state,
        isSequenceCollapsed: false,
      };
    case actionTypes.QUESTION_LOAD:
      return {
        ...state,
        questionId: action.payload.question.questionId,
      };
    case actionTypes.QUESTION_CONFIGURATION_LOAD:
      return {
        ...state,
        questionId: action.payload.questionId,
      };
    case actionTypes.SEQUENCE_PROPOSAL_VOTE:
      return {
        ...state,
        votedProposalIds: [
          ...state.votedProposalIds,
          ...[action.payload.proposalId],
        ],
      };
    case actionTypes.SEQUENCE_PROPOSAL_UNVOTE:
      return {
        ...state,
        votedProposalIds:
          state.votedProposalIds &&
          state.votedProposalIds.filter(
            item => item !== action.payload.proposalId
          ),
      };
    default:
      return state;
  }
}
