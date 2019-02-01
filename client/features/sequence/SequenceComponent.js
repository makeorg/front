/* @flow */
import * as React from 'react';
import * as sequenceHelper from 'Shared/helpers/sequence';
import type { CardType } from 'Shared/types/sequence';
import CollapseToggle from './Button';
import Card from './Card';
import Sequence from './Styled';

export type Props = {
  /** Number of cards */
  cardsCount: number,
  /** Array with cards */
  cards: Array<CardType>,
  /** Incremented / Decremented Index */
  currentIndex: number,
  /** Offset of cards without pagination (introCard) */
  cardOffset: number,
  /** Boolean toggled when Sequence is collapsed / expanded */
  isSequenceCollapsed: boolean,
  /** Boolean toggled when Sliding pannel is opened / closed */
  isPannelOpen: boolean,
  /** Method called when "Return to proposal" button is clicked */
  handleExpandSequence: () => void,
  /** Method called when "Stard Sequence" button is clicked */
  handleStartSequence: () => void,
  /** Method called when next card button is clicked (Incremented currentIndex) */
  goToNextCard: () => void,
  /** Method called when previous card button is clicked  */
  goToPreviousCard: () => void,
  /** Method called when next button in Sign Up Card is clicked  */
  skipSignUpCard: () => void,
  /** Method called when next card button in Push Proposal Card is clicked  */
  skipProposalPushCard: () => void
};

/**
 * Renders Sequence component with Intro / Push Proposal / Sign Up & Proposal Cards
 */
export const SequenceComponent = (props: Props) => {
  const {
    cardsCount,
    cards,
    currentIndex,
    isSequenceCollapsed,
    isPannelOpen,
    handleExpandSequence,
    handleStartSequence,
    goToPreviousCard,
    goToNextCard,
    skipSignUpCard,
    skipProposalPushCard,
    cardOffset
  } = props;

  if (!cards) {
    return null;
  }

  return (
    <Sequence
      role="region"
      aria-describedby="introduction"
      isSequenceCollapsed={isSequenceCollapsed}
    >
      <CollapseToggle
        handleExpandSequence={handleExpandSequence}
        isSequenceCollapsed={isSequenceCollapsed}
        isPannelOpen={isPannelOpen}
      />
      <Sequence.Wrapper>
        <Sequence.List isSequenceCollapsed={isSequenceCollapsed} id="sequence">
          {cards.map((card, index) => (
            <Card
              key={sequenceHelper.getCardIndex(index)}
              card={card}
              index={index}
              cardsCount={cardsCount}
              cardOffset={cardOffset}
              currentIndex={currentIndex}
              goToPreviousCard={goToPreviousCard}
              goToNextCard={goToNextCard}
              skipSignUpCard={skipSignUpCard}
              skipProposalPushCard={skipProposalPushCard}
              handleStartSequence={handleStartSequence}
            />
          ))}
        </Sequence.List>
      </Sequence.Wrapper>
    </Sequence>
  );
};