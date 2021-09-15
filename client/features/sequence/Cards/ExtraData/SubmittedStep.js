// @flow
import { RedButtonStyle } from 'Client/ui/Elements/Buttons/V2/style';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { i18n } from 'Shared/i18n';
import { incrementSequenceIndex } from 'Shared/store/actions/sequence';
import {
  trackClickVoteDemographics,
  trackDisplayDemographicsConfirmation,
} from 'Shared/services/Tracking';
import { SequenceIntroParagraphStyle, SequenceParagraphStyle } from '../style';

type Props = {
  title: string,
  name: string,
  demographicId: string,
};

export const SubmittedDemographics = ({
  title,
  name,
  demographicId,
}: Props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    trackDisplayDemographicsConfirmation(name, demographicId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <SequenceIntroParagraphStyle className="with-margin-bottom">
        {title}
      </SequenceIntroParagraphStyle>
      <SequenceParagraphStyle>
        {i18n.t('demographics_card.submitted_thanks')}
      </SequenceParagraphStyle>
      <SequenceParagraphStyle>
        {i18n.t('demographics_card.submitted_disclaimer')}
      </SequenceParagraphStyle>
      <RedButtonStyle
        data-cy-button="demographic-continue-vote"
        onClick={() => {
          dispatch(incrementSequenceIndex());
          trackClickVoteDemographics(name, demographicId);
        }}
      >
        {i18n.t('proposal_submit.success.button')}
      </RedButtonStyle>
    </>
  );
};
