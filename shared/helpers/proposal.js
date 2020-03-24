/* @flow */

import {
  getBaitText,
  MIN_PROPOSAL_LENGTH,
  MAX_PROPOSAL_LENGTH,
  PROPOSALS_LISTING_LIMIT,
} from 'Shared/constants/proposal';
import { type QuestionType } from 'Shared/types/question';
import {
  type ProposalListCardType,
  type TopProposalListCardType,
} from 'Shared/types/card';
import { AVAILABLE_ALGORITHMS } from 'Shared/api/ProposalApiService';
import { FEED_PROPOSAL, FEED_TOP_PROPOSALS } from 'Shared/constants/card';
import { checkIsFeatureActivated } from 'Client/helper/featureFlipping';
import { CONSULTATION_POPULAR_PROPOSALS } from 'Shared/constants/featureFlipping';
import { ProposalService } from 'Shared/services/Proposal';
import { type ProposalsType, type ProposalType } from 'Shared/types/proposal';

export const getProposalLength = (content: string = '') => {
  if (content === '') {
    return getBaitText().length;
  }

  return (getBaitText() + content).length;
};

export const proposalHasValidLength = (length: number = 0) => {
  if (length === 0) {
    return false;
  }

  return length >= MIN_PROPOSAL_LENGTH && length <= MAX_PROPOSAL_LENGTH;
};

/**
 * Sort proposal by voted first
 * @param  {ProposalType[]} proposals
 * @return {ProposalType[]}
 */
export const sortProposalsByVoted = (
  proposals: ProposalType[]
): ProposalType[] =>
  proposals.sort((first, second) => {
    const firstHasVoted = first.votes.some(vote => vote.hasVoted);
    const secondHasVoted = second.votes.some(vote => vote.hasVoted);

    return Number(secondHasVoted) - Number(firstHasVoted);
  });

/**
 * Search the first no voted proposal
 * @type {Object|undefined}
 */
export const searchFirstUnvotedProposal = (proposals: ProposalType[]) =>
  proposals.find(proposal =>
    proposal.votes.every(vote => vote.hasVoted === false)
  );

export const searchProposals = async (
  country: string,
  language: string,
  content?: string,
  page: number = 0,
  limit?: number = PROPOSALS_LISTING_LIMIT,
  seed: ?number = null,
  questionId?: string,
  tagsIds?: string,
  sortTypeKey?: string,
  ideaIds?: string
): Promise<?ProposalsType> => {
  const skip = page * limit;

  const result = await ProposalService.searchProposals(
    country,
    language,
    questionId,
    tagsIds,
    seed,
    limit,
    skip,
    sortTypeKey,
    content,
    ideaIds
  );

  return result;
};

export const searchTaggedProposals = async (
  country: string,
  language: string,
  questionId: string,
  TagIdsArray: string[] = [],
  seed: ?number = undefined,
  page: number = 0,
  sortTypeKey?: string = AVAILABLE_ALGORITHMS.TAGGED_FIRST.value,
  ideaIds?: string
): Promise<?ProposalsType> => {
  const limit = PROPOSALS_LISTING_LIMIT;
  const skip = page * limit;
  const tagsIds = TagIdsArray.length ? TagIdsArray.join(',') : undefined;

  const response = await ProposalService.searchProposals(
    country,
    language,
    questionId,
    tagsIds,
    seed,
    limit,
    skip,
    sortTypeKey,
    ideaIds
  );

  return response;
};

export const buildProposalsFeed = (
  proposals: ProposalType[],
  question: QuestionType,
  sortTypeKey: string
): Array<ProposalListCardType | TopProposalListCardType> => {
  const hasPopularProposals = checkIsFeatureActivated(
    CONSULTATION_POPULAR_PROPOSALS,
    question.activeFeatures
  );

  const feed = proposals.map(proposal => ({
    type: FEED_PROPOSAL,
    proposal,
  }));

  if (hasPopularProposals && sortTypeKey !== 'POPULAR') {
    feed.splice(3, 0, {
      type: FEED_TOP_PROPOSALS,
      question,
    });
  }

  return feed;
};

export const getProposalCardIndex = (index: number = 0) =>
  `proposal_list_card_${index}`;
