// @flow
import { type ProposalType } from './proposal';

type ProposalLoadActionType = { type: 'PROPOSAL_LOAD', payload: ProposalType };

export type ProposalActionType = ProposalLoadActionType;
