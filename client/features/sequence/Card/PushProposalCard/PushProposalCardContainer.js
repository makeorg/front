/* @flow */
import * as React from 'react';
import { type PushProposalCardConfig } from 'Shared/types/card';
import { Tracking } from 'Shared/services/Tracking';
import { PushProposalCardComponent } from './PushProposalCardComponent';

type Props = {
  /** Object with Static properties used to configure the Push Proposal Card */
  configuration: PushProposalCardConfig,
  /** Index of the card */
  index: number,
  /** Position of the card */
  position: number,
  /** Scale property used by Styled Component */
  scale: number,
  /** Zindex property used by Styled Component */
  zindex: number,
  /** Total of cards */
  cardsCount: number,
  /** Offset of cards without pagination (introCard) */
  cardOffset: number,
  /** Method called when previous card button is clicked  */
  goToPreviousCard: () => void,
  /** Method called when next card button is clicked  */
  skipProposalPushCard: () => void,
  /** Boolean toggled when card user has skip the card */
  isCardCollapsed: boolean,
  /** Boolean toggled when card is visible / hidden */
  isCardVisible: boolean,
};

/**
 * Handles Push Proposal Card Business Logic
 */
export class PushProposalCardContainer extends React.Component<Props> {
  componentDidUpdate = () => {
    const { isCardVisible } = this.props;
    if (isCardVisible) {
      Tracking.trackDisplayProposalPushCard();
    }
  };

  focusProposalField = (): void => {
    const proposalInput = document.getElementById('proposal');
    if (proposalInput !== null) {
      proposalInput.focus();
    }
  };

  render() {
    const {
      configuration,
      index,
      position,
      scale,
      zindex,
      cardOffset,
      cardsCount,
      goToPreviousCard,
      skipProposalPushCard,
      isCardCollapsed,
      isCardVisible,
    } = this.props;

    return (
      <PushProposalCardComponent
        configuration={configuration}
        position={position}
        scale={scale}
        zindex={zindex}
        focusProposalField={this.focusProposalField}
        index={index}
        cardOffset={cardOffset}
        cardsCount={cardsCount}
        goToPreviousCard={goToPreviousCard}
        skipProposalPushCard={skipProposalPushCard}
        isCardCollapsed={isCardCollapsed}
        isCardVisible={isCardVisible}
      />
    );
  }
}
