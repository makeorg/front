// @flow
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { type StateRoot } from 'Shared/store/types';
import {
  type QuestionType,
  type QuestionResultsType,
} from 'Shared/types/question';
import { i18n } from 'Shared/i18n';
import { ResultsSkipLinks } from 'Client/app/SkipLinks/Results';
import { MiddlePageWrapperStyle } from 'Client/app/Styled/MainElements';
import { trackDisplayResultsPage } from 'Shared/services/Tracking';
import { Spinner } from 'Client/ui/Elements/Loading/Spinner';
import { MetaTags } from 'Client/app/MetaTags';
import { selectCurrentQuestion } from 'Shared/store/selectors/questions.selector';
import { ThemeProvider } from 'styled-components';
import { ExpressService } from 'Shared/services/Express';
import { ParticipateHeader } from 'Client/features/consultation/Header';
import { ParticipateHighlights } from 'Client/features/consultation/Highlights';
import { Timeline } from 'Client/features/consultation/Timeline';
import { CitizenRegister } from 'Client/features/consultation/CitizenRegister';
import {
  ParticipateContentStyle,
  ParticipateInnerStyle,
  ParticipateSidebarContentStyle,
  ParticipateTitleStyle,
} from './style';
import { NotFoundPage } from '../NotFound';

const ResultPage = () => {
  const question: QuestionType = useSelector((state: StateRoot) =>
    selectCurrentQuestion(state)
  );
  const metas = (
    <MetaTags
      title={i18n.t('meta.results.title', {
        question: question.wording.question,
      })}
      description={i18n.t('meta.results.description')}
      picture={question.wording.metas.picture}
    />
  );
  const [alternativeContent, setAlternativeContent] = useState(
    <>
      {metas}
      <MiddlePageWrapperStyle>
        <Spinner />
      </MiddlePageWrapperStyle>
    </>
  );
  const [questionResults, setResults] = useState<?QuestionResultsType>(null);

  const initResults = async () => {
    const response = await ExpressService.getResults(question.slug, () =>
      setAlternativeContent(<NotFoundPage />)
    );

    if (response) {
      setResults(response);
    }
  };

  useEffect(() => {
    initResults();
    trackDisplayResultsPage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!questionResults) {
    return alternativeContent;
  }

  return (
    <ThemeProvider theme={question.theme}>
      {metas}
      <ResultsSkipLinks questionResults={questionResults} />
      <ParticipateHeader />
      <ParticipateHighlights />
      <ParticipateContentStyle>
        <ParticipateTitleStyle>
          {i18n.t('consultation.results.title')}
        </ParticipateTitleStyle>
        <ParticipateInnerStyle>
          {/* top idées + cartogrpahie débat + propositions controversées +
          participants */}
          <ParticipateSidebarContentStyle>
            {/* contexte + rapport + parcourir */}
          </ParticipateSidebarContentStyle>
        </ParticipateInnerStyle>
      </ParticipateContentStyle>
      <Timeline />
      <ParticipateContentStyle as="aside">
        <CitizenRegister />
      </ParticipateContentStyle>
    </ThemeProvider>
  );
};

// default export needed for loadable coomponent
// eslint-disable-next-line import/no-default-export
export default ResultPage;
