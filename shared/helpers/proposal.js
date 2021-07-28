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
import { i18n } from 'Shared/i18n';
import { TRANSLATION_NAMESPACE } from 'Shared/i18n/constants';
import { Logger } from 'Shared/services/Logger';
import { DEFAULT_LANGUAGE } from 'Shared/constants/config';

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
 * Search the first no voted proposal
 * @type {Object|undefined}
 */
export const searchFirstUnvotedProposal = (proposals: ProposalType[]) =>
  proposals.find(proposal =>
    proposal.votes.every(vote => vote.hasVoted === false)
  );

export const searchProposals = async (
  country: string,
  questionId?: string,
  content?: string,
  tagsIds?: string,
  seed: ?number = null,
  limit?: number = PROPOSALS_LISTING_LIMIT,
  page: number = 0,
  sortTypeKey?: string,
  orderTypeKey?: string,
  ideaIds?: string,
  sortAndFilterParams?: object
): Promise<?ProposalsType> => {
  const skip = page * limit;
  const { sortAlgorithm, keywords, isNotVoted, userType } = sortAndFilterParams;
  const result = await ProposalService.searchProposals(
    country,
    questionId,
    content,
    tagsIds,
    seed,
    limit,
    skip,
    sortTypeKey,
    orderTypeKey,
    ideaIds,
    sortAlgorithm,
    keywords,
    isNotVoted,
    userType
  );
  return result;
};

export const searchTaggedProposals = async (
  country: string,
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

/**
 * Rendering title depending on feed algorithm type
 * @type {string}
 * @param {string} sortKey
 * @return {string}
 */
export const getProposalsListTitle = (sortKey: string) => {
  switch (sortKey) {
    case sortKey === 'RECENT':
      return i18n.t('consultation.sort.RECENT');
    default:
      return i18n.t('consultation.sort.RECENT');
  }
};

/**
 * Rendering proposal bait text depending on language
 * @type {string}
 * @param {QuestionType} question
 * @return {string}
 */
export const getLocalizedBaitText = (language: string, questionId: string) => {
  const localizedBaitText = i18n.getResource(
    language,
    TRANSLATION_NAMESPACE,
    'proposal_submit.form.bait'
  );

  if (!localizedBaitText) {
    Logger.logError({
      message: `No proposal bait for questionId:${questionId} with language:${language}`,
      name: 'shared-helpers',
    });
    return i18n.getResource(
      DEFAULT_LANGUAGE,
      TRANSLATION_NAMESPACE,
      'proposal_submit.form.bait'
    );
  }

  return localizedBaitText;
};
