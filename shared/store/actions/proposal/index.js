/* @flow */
import { type Dispatch } from 'redux';
import * as actionTypes from 'Shared/store/actionTypes';
import { Logger } from 'Shared/services/Logger';
import { ProposalService } from 'Shared/services/Proposal';

export const fetchProposalData = (proposalId: string) => (dispatch: Dispatch) =>
  ProposalService.getProposal(proposalId)
    .then(proposal => {
      dispatch({ type: actionTypes.PROPOSAL_LOAD, payload: proposal });
      // Important ! Do not remove: use by the parent to use proposal.question.questionId
      return proposal;
    })
    .catch(error => {
      Logger.logError(Error(error));
    });
