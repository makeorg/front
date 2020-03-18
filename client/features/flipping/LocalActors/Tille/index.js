// @flow
import React from 'react';
import { type Question as TypeQuestion } from 'Shared/types/question';
import { LocalActors } from 'Client/features/flipping/LocalActors';
import { TileWithTitle } from 'Client/ui/Elements/TileWithTitle';
import { i18n } from 'Shared/i18n';

type Props = {
  question: TypeQuestion,
};

export const LocalActorsTile = ({ question }: Props) => (
  <TileWithTitle title={i18n.t('consultation.local_actors.title')}>
    <LocalActors questionId={question.questionId} slug={question.slug} />
  </TileWithTitle>
);
