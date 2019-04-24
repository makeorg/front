// @flow
import * as React from 'react';
import { i18n } from 'Shared/i18n';
import { type FinalCardConfig } from 'Shared/types/card';
import { ProgressCircleComponent } from 'Client/ui/ProgressCircle';
import { SvgArrowLeft } from 'Client/ui/Svg/elements';
import { FinalTitle } from './Title';
import { Sharing } from './Sharing';
import { More } from './More';
import { ProposalCardStyle } from '../Styled';
import {
  BackButtonWrapperStyle,
  BackButtonStyle,
  BackIconStyle,
} from '../Styled/Buttons';
import {
  ContentWrapperStyle,
  InnerContentStyle,
  FinalCardContentWrapperStyle,
} from '../Styled/Content';

type Props = {
  /** Object with Static properties used to configure the Final Card */
  configuration: FinalCardConfig,
  /** Total of cards */
  cardsCount: number,
  /** Index of the card */
  index: number,
  /** Offset of cards without pagination (introCard) */
  cardOffset: number,
  /** Position of the card */
  position: number,
  /** Scale property used by Styled Component */
  scale: number,
  /** Zindex property used by Styled Component */
  zindex: number,
  /** Method called when previous card button is clicked  */
  goToPreviousCard: (event: SyntheticEvent<HTMLButtonElement>) => void,
  /** Method called when button is clicked */
  handleEndSequence: (event: SyntheticEvent<HTMLButtonElement>) => void,
  /** Boolean toggled when card is visible / hidden */
  isCardVisible: boolean,
};

/**
 * Renders Final Card of the Sequence
 */
export const FinalCardComponent = (props: Props) => {
  const {
    configuration,
    cardsCount,
    index,
    isCardVisible,
    cardOffset,
    position,
    scale,
    zindex,
    goToPreviousCard,
    handleEndSequence,
  } = props;

  return (
    <ProposalCardStyle
      position={position}
      scale={scale}
      zindex={zindex}
      isCardVisible={isCardVisible}
      aria-hidden={!isCardVisible}
    >
      <BackButtonWrapperStyle>
        <BackButtonStyle onClick={goToPreviousCard}>
          <BackIconStyle>
            <SvgArrowLeft aria-hidden />
          </BackIconStyle>
          {i18n.t('proposal_card.previous')}
        </BackButtonStyle>
        <ProgressCircleComponent
          cardOffset={cardOffset}
          index={index}
          cardsCount={cardsCount}
        />
      </BackButtonWrapperStyle>
      <ContentWrapperStyle>
        <InnerContentStyle as="section">
          <FinalTitle title={configuration.title} />
          <FinalCardContentWrapperStyle>
            <Sharing text={configuration.share} />
            <More
              title={configuration.learnMoreTitle}
              url={configuration.linkUrl}
              handleEndSequence={handleEndSequence}
            />
          </FinalCardContentWrapperStyle>
        </InnerContentStyle>
      </ContentWrapperStyle>
    </ProposalCardStyle>
  );
};
