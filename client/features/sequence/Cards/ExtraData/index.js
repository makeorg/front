// @flow
import React from 'react';
import { type DemographicDataType } from 'Shared/types/demographic';
import { i18n } from 'Shared/i18n';
import { Logger } from 'Shared/services/Logger';
import { useDispatch, useSelector } from 'react-redux';
import { setDemographicsAsSubmitted } from 'Shared/store/actions/sequence';
import { SequenceWrapperStyle, SequenceIntroParagraphStyle } from '../style';
import { ExtraDataForm } from './Form';
import { ExtraDataDescriptionStyle } from './style';
import { SubmittedDemographics } from './SubmittedStep';

type Props = {
  configuration: DemographicDataType,
};

export const ExtraDataCard = ({ configuration }: Props) => {
  const dispatch = useDispatch();
  const isSubmitted = useSelector(
    (state: StateRoot) => state.sequence.demographics?.submitted
  );

  // set demographics
  if (!configuration) {
    Logger.logError({
      message: 'No demographic data found',
      name: 'sequence',
      configuration,
    });

    return null;
  }

  const { id, name, layout, title, parameters, token } = configuration;

  const submitSuccess = () => {
    dispatch(setDemographicsAsSubmitted());
  };

  return isSubmitted ? (
    <SubmittedDemographics title={title} name={name} demographicId={id} />
  ) : (
    <SequenceWrapperStyle data-cy-demographic-layout={configuration.layout}>
      <SequenceIntroParagraphStyle>{title}</SequenceIntroParagraphStyle>
      <ExtraDataDescriptionStyle>
        {i18n.t('demographics_card.disclaimer')}
      </ExtraDataDescriptionStyle>
      <ExtraDataForm
        demographicId={id}
        name={name}
        layout={layout}
        data={parameters}
        token={token}
        submitSuccess={submitSuccess}
      />
    </SequenceWrapperStyle>
  );
};
