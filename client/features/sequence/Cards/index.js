// @flow
import React from 'react';
import { type SequenceCardType } from 'Shared/types/card';
import {
  CARD_TYPE_EXTRASLIDE_INTRO,
  CARD_TYPE_PROPOSAL,
  CARD_TYPE_EXTRASLIDE_PUSH_SIGNUP,
  CARD_TYPE_EXTRASLIDE_PUSH_PROPOSAL,
  CARD_TYPE_EXTRASLIDE_FINAL_CARD,
} from 'Shared/constants/card';
import {
  TopComponentContext,
  type TopComponentContextValueType,
  TopComponentContextValue,
} from 'Client/context/TopComponentContext';
import { SequenceCardStyle } from './style';
import { IntroCard } from './Intro';
import { PushProposalCard } from './PushProposal';
import { FinalCard } from './Final';
import { SignUpCard } from './SignUp';
import { ProposalCard } from './Proposal';

type CardProps = {
  /** Attribute of the card */
  card: any,
};

export const Card = ({ card }: CardProps) => {
  switch (card.type) {
    case CARD_TYPE_PROPOSAL:
      return <ProposalCard proposalCard={card} />;
    case CARD_TYPE_EXTRASLIDE_INTRO:
      return <IntroCard configuration={card.configuration} />;
    case CARD_TYPE_EXTRASLIDE_PUSH_SIGNUP:
      return <SignUpCard configuration={card.configuration} />;
    case CARD_TYPE_EXTRASLIDE_PUSH_PROPOSAL:
      return <PushProposalCard configuration={card.configuration} />;
    case CARD_TYPE_EXTRASLIDE_FINAL_CARD:
      return <FinalCard configuration={card.configuration} />;
    default:
      return null;
  }
};

type Props = {
  /** Attribute of the card */
  card: SequenceCardType,
};

export const SequenceCard = ({ card }: Props) => {
  const topComponentContext: TopComponentContextValueType = TopComponentContextValue.getSequenceProposal();

  return (
    <>
      <TopComponentContext.Provider value={topComponentContext}>
        <SequenceCardStyle
          className="center"
          id={`card-${card.index}`}
          data-cy-card-type={card.type}
          data-cy-card-number={card.index + 1}
          aria-live="polite"
        >
          <Card card={card} />
        </SequenceCardStyle>
      </TopComponentContext.Provider>
    </>
  );
};
