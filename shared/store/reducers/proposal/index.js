// @flow

import * as actionTypes from 'Shared/store/actionTypes';
import { initialState } from 'Shared/store/initialState';
import { type ProposalActionType } from 'Shared/types/action';
import { type StateProposal } from 'Shared/store/types';

export function proposal(
  state: StateProposal = initialState.proposal,
  action: ProposalActionType
) {
  switch (action.type) {
    case actionTypes.PROPOSAL_LOAD:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
}
