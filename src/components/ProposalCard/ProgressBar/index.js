// @flow
import * as React from 'react';
import i18next from 'i18next';
import * as CardConstant from 'Constants/card';
import { gaugeProgress, gaugeRemain } from 'Helpers/sequence';
import { HiddenItem } from 'Components/Elements/HiddenElements';
import * as Progress from '../Styled/Progress';

type Props = {
  /** Index of the card */
  index: number,
  /** Total of cards */
  cardsCount: number,
  /** Offset of cards without pagination (introCard) */
  cardOffset: number
}

/**
 * Renders Progress Bar in each card
 */
const ProgressBarComponent = (props: Props) => {
  const {
    index,
    cardsCount,
    cardOffset
  } = props;

  return (
    <Progress.ProgressWrapper role="progressbar">
      <Progress.ProgressSvg viewBox={CardConstant.PROGRESS_SVG_VIEWBOX}>
        <Progress.ProgressBackground
          cx={CardConstant.PROGRESS_SVG_CX}
          cy={CardConstant.PROGRESS_SVG_CY}
          r={CardConstant.PROGRESS_SVG_R}
        />
        <Progress.ProgressRing
          cx={CardConstant.PROGRESS_SVG_CX}
          cy={CardConstant.PROGRESS_SVG_CY}
          r={CardConstant.PROGRESS_SVG_R}
        />
        <Progress.ProgressBar
          progress={gaugeProgress(index, cardsCount)}
          remain={gaugeRemain(index, cardsCount)}
          cx={CardConstant.PROGRESS_SVG_CX}
          cy={CardConstant.PROGRESS_SVG_CY}
          r={CardConstant.PROGRESS_SVG_R}
        />
      </Progress.ProgressSvg>
      <Progress.ProgressCounter>
        <HiddenItem aria-hidden>
          {i18next.t('proposal_card.number')}
        </HiddenItem>
        &nbsp;
        <Progress.ActiveCard aria-valuetext={index}>{index + cardOffset}</Progress.ActiveCard>
        <span aria-hidden>/</span>
        <HiddenItem>{i18next.t('common.from')}</HiddenItem>
        &nbsp;
        <span aria-valuemax={cardsCount}>{cardsCount + cardOffset}</span>
      </Progress.ProgressCounter>
    </Progress.ProgressWrapper>
  );
};

export default ProgressBarComponent;
