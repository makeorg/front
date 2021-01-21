// @flow
import React from 'react';
import {
  getSequenceTitleByZone,
  getSpecialTitle,
} from 'Shared/helpers/sequence';
import {
  SequenceAltTitleStyle,
  SequenceSpecialIconStyle,
  SequenceSpecialTitleStyle,
  SequenceTitleStyle,
} from './style';

export type Props = {
  /** Object with Dynamic properties used to configure the Sequence (questionId, country, ...) */
  question: QuestionType,
  /** optional zone parameter for popular and controversy sequences */
  zone?: string,
};

export const SequenceTitle = ({ question, zone }: Props) => {
  const specialTitle = getSpecialTitle(zone);

  if (!specialTitle) {
    return <SequenceTitleStyle>{question.question}</SequenceTitleStyle>;
  }

  return (
    <>
      <SequenceAltTitleStyle>{question.question}</SequenceAltTitleStyle>
      <SequenceSpecialTitleStyle>
        <SequenceSpecialIconStyle aria-hidden focusable={false} />
        {getSequenceTitleByZone(zone)}
      </SequenceSpecialTitleStyle>
    </>
  );
};