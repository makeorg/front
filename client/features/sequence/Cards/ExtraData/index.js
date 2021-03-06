// @flow
import {
  buildDemographicsByType,
  setTitleByType,
  DEMOGRAPHIC_TYPES,
} from 'Client/helper/demographics';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { type StateRoot } from 'Shared/store/types';
import { i18n } from 'Shared/i18n';
import { getRandomFromArray } from 'Client/helper/randomFromArray';
import { SequenceWrapperStyle, SequenceIntroParagraphStyle } from '../style';
import { ExtraDataForm } from './Form';
import { ExtraDataDescriptionStyle } from './style';
import { SubmittedDemographics } from './SubmittedStep';

export const ExtraDataCard = () => {
  const currentQuestion = useSelector(
    (state: StateRoot) => state.currentQuestion
  );
  const persistedDemographics = useSelector(
    (state: StateRoot) => state.sequence.demographics
  );
  const [type, setType] = useState(null);

  const [demographics, setDemographics] = useState(null);
  const persistedDemographicsWithValue =
    persistedDemographics?.type && persistedDemographics?.value;

  // set a random type
  useState(() => {
    const newType = getRandomFromArray(DEMOGRAPHIC_TYPES);
    setType(newType);
    setDemographics(buildDemographicsByType(newType));
  }, [type]);

  if (persistedDemographicsWithValue) {
    return <SubmittedDemographics type={persistedDemographics.type} />;
  }

  if (type) {
    return (
      <SequenceWrapperStyle data-cy-demographic-type={type}>
        <SequenceIntroParagraphStyle>
          {setTitleByType(type)}
        </SequenceIntroParagraphStyle>
        <ExtraDataDescriptionStyle>
          {i18n.t('demographics_card.disclaimer')}
        </ExtraDataDescriptionStyle>
        <ExtraDataForm
          type={type}
          demographics={demographics}
          currentQuestion={currentQuestion}
        />
      </SequenceWrapperStyle>
    );
  }

  return null;
};
