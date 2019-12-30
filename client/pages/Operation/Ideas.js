// @flow
import React, { Fragment } from 'react';
import { type Question as TypeQuestion } from 'Shared/types/question';

import {
  ConsultationPageContentStyle,
  ConsultationPageWrapperStyle,
} from 'Client/pages/Operation/Styled';
import { IdeaCards } from 'Client/features/ideas/IdeaCards';
import { withQuestionData } from './fetchQuestionData';

type Props = {
  question: TypeQuestion,
};

const IdeasPageWrapper = ({ question }: Props) => (
  <Fragment>
    <ConsultationPageWrapperStyle>
      <ConsultationPageContentStyle>
        {`IdeasPage for ${question.wording.question}`}
        <IdeaCards />
      </ConsultationPageContentStyle>
    </ConsultationPageWrapperStyle>
  </Fragment>
);

const IdeasPage = withQuestionData(IdeasPageWrapper);

// default export needed for loadable component
export default IdeasPage; // eslint-disable-line import/no-default-export
