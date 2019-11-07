// @flow
import React from 'react';
import { withRouter } from 'react-router-dom';
import { Redirect, type Location as TypeLocation } from 'react-router';
import { type QuestionConfiguration as TypeQuestionConfiguration } from 'Shared/types/sequence';
import { type Question as TypeQuestion } from 'Shared/types/question';
import { isGreatCause } from 'Shared/helpers/question';
import { IntroBanner } from 'Client/features/consultation/IntroBanner';
import { MobileSharing } from 'Client/features/consultation/MobileSharing';
import { ActionsContent } from 'Client/features/consultation/Actions';
import { ConsultationPanelInnerStyle } from 'Client/features/consultation/Styled/Tabs';
import { ActionsSkipLinks } from 'Client/app/SkipLinks/Actions';
import { useMobile } from 'Client/hooks/useMedia';
import { NavigationWithTabs } from 'Client/features/consultation/Navigation/Tabs';
import { checkIsFeatureActivated } from 'Client/helper/featureFlipping';
import { CONSULTATION_SHARE_DISABLE } from 'Shared/constants/featureFlipping';
import { withQuestionData } from './fetchQuestionData';
import { ConsultationPageWrapperStyle } from './Styled';

type Props = {
  question: TypeQuestion,
  questionConfiguration: TypeQuestionConfiguration,
  location: TypeLocation,
};

const ConsultationPageWrapper = ({
  question,
  questionConfiguration,
  location,
}: Props) => {
  const isMobile = useMobile();
  const questionIsGreatCause = isGreatCause(question.operationKind);
  const isSharingDisabled: boolean = checkIsFeatureActivated(
    CONSULTATION_SHARE_DISABLE,
    question.activeFeatures
  );

  if (!questionIsGreatCause) {
    return <Redirect to="/notfound" />;
  }

  return (
    <React.Fragment>
      <ActionsSkipLinks />
      <IntroBanner
        question={question}
        questionConfiguration={questionConfiguration}
      />
      <ConsultationPageWrapperStyle className="great-cause-container">
        <NavigationWithTabs question={question} location={location} />
        <ConsultationPanelInnerStyle>
          <ActionsContent
            question={question}
            questionConfiguration={questionConfiguration}
          />
        </ConsultationPanelInnerStyle>
      </ConsultationPageWrapperStyle>
      {isMobile && !isSharingDisabled && <MobileSharing />}
    </React.Fragment>
  );
};

const ConsultationPage = withQuestionData(withRouter(ConsultationPageWrapper));

// default export needed for loadable component
export default ConsultationPage; // eslint-disable-line import/no-default-export