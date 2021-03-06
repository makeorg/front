// @flow
import { type QuestionExtraSlidesConfigType } from 'Shared/types/question';
import { type SequenceCardType } from 'Shared/types/card';
import { type ProposalType } from 'Shared/types/proposal';
import {
  CARD_TYPE_EXTRASLIDE_DEMOGRAPHICS_CARD,
  CARD_TYPE_EXTRASLIDE_FINAL_CARD,
  CARD_TYPE_EXTRASLIDE_INTRO,
  CARD_TYPE_EXTRASLIDE_PUSH_PROPOSAL,
  CARD_TYPE_EXTRASLIDE_SPECIAL_FINAL_CARD,
  CARD_TYPE_PROPOSAL,
} from 'Shared/constants/card';
import {
  KIND_CONTROVERSY,
  KIND_POPULAR,
  KIND_STANDARD,
} from 'Shared/constants/sequence';
import { i18n } from 'Shared/i18n';

/**
 * Build cards array
 * @param  {ProposalType[]} proposals
 * @param  {QuestionExtraSlidesConfigType} extraSlidesConfig
 * @param  {boolean} hasProposed
 * @param  {boolean} canPropose
 * @param  {boolean} isStandardSequence
 * @param  {string} introCardParam
 * @param  {string} pushProposalParam
 * @return {SequenceCardType[]}
 */
export const buildCards = (
  proposals: ProposalType[],
  extraSlidesConfig: QuestionExtraSlidesConfigType,
  hasProposed: boolean,
  canPropose: boolean,
  isStandardSequence: boolean,
  introCardParam?: string,
  pushProposalParam?: string,
  withDemographics?: boolean
): SequenceCardType[] => {
  const withPushProposalCard: boolean =
    extraSlidesConfig.pushProposalCard &&
    extraSlidesConfig.pushProposalCard.enabled &&
    canPropose &&
    pushProposalParam &&
    !hasProposed;
  const withIntroCard: boolean =
    extraSlidesConfig.introCard &&
    extraSlidesConfig.introCard.enabled &&
    introCardParam;

  const cards: SequenceCardType[] = proposals.map(proposal => ({
    type: CARD_TYPE_PROPOSAL,
    configuration: { proposal },
    state: { votes: proposal.votes },
    index: 0,
  }));

  if (withPushProposalCard) {
    cards.splice(cards.length / 2, 0, {
      type: CARD_TYPE_EXTRASLIDE_PUSH_PROPOSAL,
      configuration: extraSlidesConfig.pushProposalCard,
      index: 0,
    });
  }

  if (withIntroCard) {
    cards.splice(0, 0, {
      type: CARD_TYPE_EXTRASLIDE_INTRO,
      configuration: extraSlidesConfig.introCard,
      index: 0,
    });
  }

  if (withDemographics) {
    cards.splice(withIntroCard ? 3 : 2, 0, {
      type: CARD_TYPE_EXTRASLIDE_DEMOGRAPHICS_CARD,
      configuration: {},
      index: 0,
    });
  }

  cards.splice(cards.length, 0, {
    type: isStandardSequence
      ? CARD_TYPE_EXTRASLIDE_FINAL_CARD
      : CARD_TYPE_EXTRASLIDE_SPECIAL_FINAL_CARD,
    configuration: extraSlidesConfig.finalCard,
    index: 0,
  });

  const cardsIndexed = cards.map((card, index) => ({
    ...card,
    index,
  }));

  return cardsIndexed;
};

/**
 * Check if is a standard sequence
 * @param  {string} sequenceKind
 * @return {boolean}
 */
export const isStandardSequence = (sequenceKind: string) =>
  sequenceKind === KIND_STANDARD;

/**
 * Check if is a proposal card
 * @param  {SequenceCardType} card
 * @return {boolean}
 */
export const isPushProposalCard = card =>
  card?.type === CARD_TYPE_EXTRASLIDE_PUSH_PROPOSAL;

/**
 * Render title depending on kind
 * @param  {string} sequenceKind
 * @return {string || null}
 */
export const getSequenceTitleBySequenceKind = (sequenceKind: string) => {
  switch (sequenceKind) {
    case KIND_CONTROVERSY: {
      return i18n.t('sequence_zone.controversial_title');
    }
    case KIND_POPULAR: {
      return i18n.t('sequence_zone.popular_title');
    }
    default:
      return null;
  }
};

/** Render NoProposal card title depending on type of sequence
 * @param  {string} sequenceKind
 * @return {string || null}
 */
export const getNoProposalCardTitleBySequenceKind = (sequenceKind: string) => {
  switch (sequenceKind) {
    case KIND_CONTROVERSY: {
      return i18n.t('no_proposal_card.title.controversial');
    }
    case KIND_POPULAR: {
      return i18n.t('no_proposal_card.title.popular');
    }
    default:
      return i18n.t('no_proposal_card.title.regular');
  }
};

/** Render boolean according to sequence kind parameter
 * @param  {string} sequenceKind
 * @return {boolean}
 *
 */

export const isKeywordSequence = (sequenceKind: string) =>
  ![KIND_CONTROVERSY, KIND_POPULAR, KIND_STANDARD].includes(sequenceKind);
