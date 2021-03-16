// @flow
import React, { useEffect } from 'react';
import {
  type QuestionType,
  type QuestionResultsType,
} from 'Shared/types/question';
import { type StateRoot } from 'Shared/store/types';
import { ConsultationPageContentStyle } from 'Client/pages/Consultation/style';
import { i18n } from 'Shared/i18n';
import { HiddenItemStyle } from 'Client/ui/Elements/HiddenElements';
import { TileWithTitle } from 'Client/ui/Elements/TileWithTitle';
import {
  SvgInfos,
  SvgCalculator,
  SvgMap,
  SvgLightBulb,
} from 'Client/ui/Svg/elements';
import { trackDisplayOperationPage } from 'Shared/services/Tracking';
import { GliderStylesheet } from 'Client/app/assets/css-in-js/GliderStyle';
import {
  RESULTS_CONTEXT,
  RESULTS_KEY_FIGURES,
  RESULTS_TOP_IDEAS,
  RESULTS_CARTOGRAPHY,
  RESULTS_CONTROVERSIALS,
  RESULTS_REJECTED,
  RESULTS_PARTICIPATION,
  RESULTS_REPORT,
} from 'Shared/constants/ids';
import { useSelector } from 'react-redux';
import { matchDesktopDevice, matchMobileDevice } from 'Shared/helpers/styled';
import { ConsultationSidebar } from './Sidebar';
import { ResultsContext } from './Results/Context';
import {
  ResultsIconsStyle,
  ResultsLightningIconStyle,
  ResultsThumbIconStyle,
} from './Results/style';
import { KeyFigures } from './Results/KeyFigures';
import { ProposalsResults } from './Results/Proposals';
import { TopIdeas } from './Results/TopIdeas';
import { ResultsSlider } from './Results/Sliders';
import { ResultsContact } from './Results/Contact';

type Props = {
  questionResults: QuestionResultsType,
  question: QuestionType,
};

const CARTOGRAPHY_SLIDER: string = 'cartography';
const PARTICIPATION_SLIDER: string = 'participation';

export const ResultsContent = ({ questionResults, question }: Props) => {
  const { device } = useSelector((state: StateRoot) => state.appConfig);
  const isMobile = matchMobileDevice(device);
  const isDesktop = matchDesktopDevice(device);
  const displaySidebar = isMobile || isDesktop;
  const reports = questionResults && questionResults.reports;
  const hasRejected = questionResults.rejected.length > 0;

  useEffect(() => {
    if (question) {
      trackDisplayOperationPage();
    }
  }, [question]);

  return (
    <>
      <GliderStylesheet />
      {displaySidebar && <ConsultationSidebar question={question} />}
      <ConsultationPageContentStyle id="main" data-cy-container="main">
        <HiddenItemStyle
          as="h2"
          dangerouslySetInnerHTML={{
            __html: i18n.t('consultation.results.deprecated.title', {
              question: question.wording.question,
              lang: question.language,
            }),
          }}
        />
        <TileWithTitle
          title={i18n.t('consultation.results.deprecated.context')}
          icon={
            <SvgInfos aria-hidden style={ResultsIconsStyle} focusable="false" />
          }
          id={RESULTS_CONTEXT}
        >
          <ResultsContext
            context={questionResults.context}
            aboutUrl={question.aboutUrl}
          />
        </TileWithTitle>
        <TileWithTitle
          title={i18n.t('consultation.results.deprecated.key_figures.title')}
          icon={
            // eslint-disable-next-line react/jsx-wrap-multilines
            <SvgCalculator
              aria-hidden
              style={ResultsIconsStyle}
              focusable="false"
            />
          }
          id={RESULTS_KEY_FIGURES}
        >
          <KeyFigures results={questionResults.key_figures} />
        </TileWithTitle>
        <TileWithTitle
          title={i18n.t('consultation.results.deprecated.top_ideas.title', {
            count: questionResults.top_ideas.length,
          })}
          icon={
            // eslint-disable-next-line react/jsx-wrap-multilines
            <SvgLightBulb
              aria-hidden
              style={ResultsIconsStyle}
              focusable="false"
            />
          }
          id={RESULTS_TOP_IDEAS}
        >
          <TopIdeas topIdeas={questionResults.top_ideas} question={question} />
        </TileWithTitle>
        <TileWithTitle
          title={i18n.t('consultation.results.deprecated.cartography.title')}
          icon={
            <SvgMap aria-hidden style={ResultsIconsStyle} focusable="false" />
          }
          id={RESULTS_CARTOGRAPHY}
        >
          <ResultsSlider
            data={questionResults.cartography}
            sliderName={CARTOGRAPHY_SLIDER}
          />
        </TileWithTitle>
        <TileWithTitle
          title={i18n.t(
            'consultation.results.deprecated.proposals.controversials'
          )}
          icon={<ResultsLightningIconStyle aria-hidden focusable="false" />}
          id={RESULTS_CONTROVERSIALS}
        >
          <ProposalsResults
            proposals={questionResults.controversials}
            question={question}
          />
        </TileWithTitle>
        {hasRejected && (
          <TileWithTitle
            title={i18n.t('consultation.results.deprecated.proposals.rejected')}
            icon={<ResultsThumbIconStyle aria-hidden focusable="false" />}
            id={RESULTS_REJECTED}
          >
            <ProposalsResults
              proposals={questionResults.rejected}
              question={question}
              isRejected
            />
          </TileWithTitle>
        )}
        <TileWithTitle
          title={i18n.t('consultation.results.deprecated.participation.title')}
          id={RESULTS_PARTICIPATION}
        >
          <ResultsSlider
            data={questionResults.participation}
            sliderName={PARTICIPATION_SLIDER}
          />
        </TileWithTitle>
        <TileWithTitle
          title={i18n.t('consultation.results.deprecated.download.title')}
          id={RESULTS_REPORT}
        >
          <ResultsContact reports={reports} question={question} />
        </TileWithTitle>
      </ConsultationPageContentStyle>
    </>
  );
};
