// @flow
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { type FinalCardConfigType } from 'Shared/types/card';
import {
  trackDisplayFinalCard,
  trackClickLearnMore,
} from 'Shared/services/Tracking';
import { i18n } from 'Shared/i18n';
import { resetSequenceVotedProposals } from 'Shared/store/actions/sequence';
import { CenterColumnStyle } from 'Client/ui/Elements/FlexElements';
import { LinkAsRedButtonStyle } from 'Client/ui/Elements/Buttons/V2/style';
import {
  SequenceAltTitleStyle,
  SequenceFinalMoreWrapperStyle,
  SequenceParagraphStyle,
} from './style';

type Props = {
  /** Object with Static properties used to configure the Final Card */
  configuration: FinalCardConfigType,
};

export const FinalCard = ({ configuration }: Props) => {
  const dispach = useDispatch();
  const currentQuestion: string = useSelector(state => state.currentQuestion);

  useEffect(() => {
    trackDisplayFinalCard();
    return () => dispach(resetSequenceVotedProposals(currentQuestion));
  }, [currentQuestion, dispach]);

  return (
    <>
      <CenterColumnStyle data-cy-container="final-card-share">
        <SequenceAltTitleStyle data-cy-container="final-card-title">
          {configuration.title
            ? configuration.title
            : i18n.t('final_card.title')}
        </SequenceAltTitleStyle>
        <SequenceFinalMoreWrapperStyle data-cy-container="final-card-learn-more">
          <SequenceParagraphStyle as="p">
            {configuration.learnMoreTitle
              ? configuration.learnMoreTitle
              : i18n.t('final_card.more.title')}
          </SequenceParagraphStyle>
          <LinkAsRedButtonStyle
            as="a"
            href={configuration.linkUrl}
            onClick={() => trackClickLearnMore()}
          >
            {configuration.learnMoreTextButton
              ? configuration.learnMoreTextButton
              : i18n.t('final_card.more.button')}
          </LinkAsRedButtonStyle>
        </SequenceFinalMoreWrapperStyle>
      </CenterColumnStyle>
    </>
  );
};
