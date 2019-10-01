// @flow
import React from 'react';
import { type QuestionConfiguration as TypeQuestionConfiguration } from 'Shared/types/sequence';
import {
  type Question as TypeQuestion,
  type QuestionResults as TypeQuestionResults,
} from 'Shared/types/question';
import { ConsultationPageContentStyle } from 'Client/pages/Consultation/Styled';
import { i18n } from 'Shared/i18n';
import { MetaTags } from 'Client/app/MetaTags';
import { HiddenItemStyle } from 'Client/ui/Elements/HiddenElements';
import { TileWithTitle } from 'Client/ui/Elements/TileWithTitle';
import {
  SvgInfos,
  SvgCalculator,
  SvgLightBulb,
  SvgLightning,
  SvgThumbsUp,
} from 'Client/ui/Svg/elements';
import { ConsultationPannelSidebar } from '../../Sidebar/ConsultationPannel';
import { ResultsContext } from '../../Results/Context';
import { ResultsIconsStyle } from '../../Results/Styled';
import { KeyFigures } from '../../Results/KeyFigures';
import { TopIdeas } from '../../Results/TopIdeas';
import { ProposalsResults } from '../../Results/Proposals';

type Props = {
  questionResults: TypeQuestionResults,
  questionConfiguration: TypeQuestionConfiguration,
  question: TypeQuestion,
};

export const ResultsPannel = ({
  questionResults,
  questionConfiguration,
  question,
}: Props) => (
  <React.Fragment>
    <MetaTags
      title={i18n.t('meta.consultation.results.title', {
        question: question.wording.question,
      })}
    />
    <ConsultationPannelSidebar
      question={question}
      questionConfiguration={questionConfiguration}
    />
    <ConsultationPageContentStyle id="main">
      <HiddenItemStyle as="h2">
        {i18n.t('consultation.results.title', {
          question: question.wording.question,
        })}
      </HiddenItemStyle>
      <TileWithTitle
        title={i18n.t('consultation.results.context')}
        icon={<SvgInfos aria-hidden style={ResultsIconsStyle} />}
      >
        <ResultsContext
          context={questionResults.context}
          aboutUrl={question.aboutUrl}
        />
      </TileWithTitle>
      <TileWithTitle
        title={i18n.t('consultation.results.key_figures.title')}
        icon={<SvgCalculator aria-hidden style={ResultsIconsStyle} />}
      >
        <KeyFigures
          results={questionResults.key_figures}
          themeColor={questionConfiguration.theme.color}
        />
      </TileWithTitle>
      <TileWithTitle
        title={i18n.t('consultation.results.top_ideas.title')}
        icon={<SvgLightBulb aria-hidden style={ResultsIconsStyle} />}
      >
        <TopIdeas topIdeas={questionResults.top_ideas} />
      </TileWithTitle>
      <TileWithTitle
        title={i18n.t('consultation.results.proposals.controversials')}
        icon={<SvgLightning aria-hidden style={ResultsIconsStyle} />}
      >
        <ProposalsResults proposals={questionResults.controversials} />
      </TileWithTitle>
      <TileWithTitle
        title={i18n.t('consultation.results.proposals.rejected')}
        icon={<SvgThumbsUp aria-hidden style={ResultsIconsStyle} />}
      >
        <ProposalsResults proposals={questionResults.rejected} isRejected />
      </TileWithTitle>
    </ConsultationPageContentStyle>
  </React.Fragment>
);
