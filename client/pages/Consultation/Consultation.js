// @flow
import React from 'react';
import { type StateRoot } from 'Shared/store/types';
import { type QuestionType } from 'Shared/types/question';
import { ConsultationContent } from 'Client/features/consultation/Consultation';
import { ConsultationSkipLinks } from 'Client/app/SkipLinks/Consultation';
import { checkIsFeatureActivated } from 'Client/helper/featureFlipping';
import { TeasingHeader } from 'Client/custom/municipales/TeasingHeader';
import { MUNICIPAL_TEASING_HEADER } from 'Shared/constants/featureFlipping';
import { FollowUs } from 'Client/features/flipping/FollowUs';
import { isGreatCause } from 'Shared/helpers/question';
import { i18n } from 'Shared/i18n';
import { MetaTags } from 'Client/app/MetaTags';
import { LocalActorsTile } from 'Client/features/flipping/LocalActors/Tille';
import { ConsultationHeader } from 'Client/features/consultation/Header/index';
import { useMobile } from 'Client/hooks/useMedia';
import { useDispatch, useSelector } from 'react-redux';
import { displayNotificationBanner } from 'Shared/store/actions/notifications';
import { selectCurrentQuestion } from 'Shared/store/selectors/questions.selector';
import { ThemeProvider } from 'styled-components';
import { VoteOnlyMessage } from 'Client/app/Notifications/Banner/VoteOnly';
import {
  NOTIFICATION_LEVEL_INFORMATION,
  VOTE_ONLY_MESSAGE,
} from 'Shared/constants/notifications';
import { useEffect } from 'react';
import { ConsultationPageWrapperStyle } from './style';

const ConsultationPage = () => {
  const question: QuestionType = useSelector((state: StateRoot) =>
    selectCurrentQuestion(state)
  );
  const isMobile = useMobile();
  const dispatch = useDispatch();
  const questionIsGreatCause = isGreatCause(question.operationKind);
  // @todo remove or refactor when Municipales is over
  const isTeasingHeader: boolean = checkIsFeatureActivated(
    MUNICIPAL_TEASING_HEADER,
    question.activeFeatures
  );

  useEffect(() => {
    if (!question.canPropose) {
      dispatch(
        displayNotificationBanner(
          `${VOTE_ONLY_MESSAGE}_${question.questionId}`,
          <VoteOnlyMessage />,
          NOTIFICATION_LEVEL_INFORMATION,
          true
        )
      );
    }
  }, [question, dispatch]);

  return (
    <ThemeProvider theme={question.theme}>
      <MetaTags
        title={i18n.t('meta.consultation.title', {
          question: question.wording.question,
        })}
        description={question.wording.metas.description}
        picture={question.wording.metas.picture}
      />
      <ConsultationSkipLinks
        canPropose={question.canPropose}
        isGreatCause={questionIsGreatCause}
      />
      <ConsultationHeader question={question} />
      {/** @todo remove or refactor when Municipales is over */}
      {isTeasingHeader && <TeasingHeader />}
      <ConsultationPageWrapperStyle isGreatCause={questionIsGreatCause}>
        <ConsultationContent question={question} />
      </ConsultationPageWrapperStyle>
      {isMobile && (
        <>
          <LocalActorsTile question={question} />
          <FollowUs question={question} />
        </>
      )}
    </ThemeProvider>
  );
};

// default export needed for loadable component
export default ConsultationPage; // eslint-disable-line import/no-default-export
