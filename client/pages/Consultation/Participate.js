// @flow
import React, { useEffect } from 'react';
import { type StateRoot } from 'Shared/store/types';
import { type QuestionType } from 'Shared/types/question';
import { i18n } from 'Shared/i18n';
import { MetaTags } from 'Client/app/MetaTags';
import { useDispatch, useSelector } from 'react-redux';
import { displayNotificationBanner } from 'Shared/store/actions/notifications';
import { selectCurrentQuestion } from 'Shared/store/selectors/questions.selector';
import { ThemeProvider } from 'styled-components';
import {
  NOTIFICATION_LEVEL_INFORMATION,
  VOTE_ONLY_MESSAGE,
} from 'Shared/constants/notifications';
import { CitizenRegister } from 'Client/features/consultation/CitizenRegister';
import { ParticipateHeader } from 'Client/features/consultation/Header';
import { ParticipateHighlights } from 'Client/features/consultation/Highlights';
import { SubmitProposal } from 'Client/features/consultation/Cards/SubmitProposal';
import { SvgLightning, SvgLike, SvgPeople } from 'Client/ui/Svg/elements';
import { CTAMonoBlock } from 'Client/features/consultation/Cards/CTAMonoblock';
import { SocialSharing } from 'Client/features/consultation/Cards/SocialSharing';
import {
  getSequenceLink,
  getSequenceControversialLink,
  getSequencePopularLink,
} from 'Shared/helpers/url';
import { CTAProposal } from 'Client/features/consultation/Cards/CTAProposal';
import { ColumnToRowElementStyle } from 'Client/ui/Elements/FlexElements';
import {
  DesktopAbout,
  MobileAbout,
} from 'Client/features/consultation/Cards/About';
import { ParticipateNavigation } from 'Client/features/consultation/Navigation/Participate';
import { FeaturedProposals } from 'Client/features/consultation/Cards/FeaturedProposals';
import { CONSULTATION_NAVIGATION } from 'Shared/constants/ids';
import {
  trackDisplayOperationPage,
  trackOpenSequence,
} from 'Shared/services/Tracking';
import {
  COMPONENT_PARAM_SEQUENCE,
  COMPONENT_PARAM_SEQUENCE_POPULAR,
  COMPONENT_PARAM_SEQUENCE_CONTROVERSIAL,
} from 'Shared/constants/tracking';
import { matchDesktopDevice } from 'Shared/helpers/styled';
import { Timeline } from 'Client/features/consultation/Timeline';
import { Keywords } from 'Client/features/flipping/Keywords';
import { checkIsFeatureActivated } from 'Client/helper/featureFlipping';
import { CONSULTATION_KEYWORD_ACTIVE } from 'Shared/constants/featureFlipping';
import {
  ParticipateContentStyle,
  ParticipateInnerStyle,
  ParticipateMainContentStyle,
  ParticipateSidebarContentStyle,
  ParticipateDescriptionStyle,
  ParticipateTitleStyle,
  ParticipateCTAProposalBloc,
} from './style';

const ParticipatePage = () => {
  const { country, device } = useSelector(
    (state: StateRoot) => state.appConfig
  );
  const question: QuestionType = useSelector((state: StateRoot) =>
    selectCurrentQuestion(state)
  );
  const dispatch = useDispatch();
  const isDesktop = matchDesktopDevice(device);
  const PROPOSALS_THRESOLD = 5;

  useEffect(() => {
    if (!question.canPropose) {
      dispatch(
        displayNotificationBanner(
          VOTE_ONLY_MESSAGE,
          NOTIFICATION_LEVEL_INFORMATION,
          { questionId: question.questionId },
          true
        )
      );
    }
  }, [question, dispatch]);

  useEffect(() => {
    trackDisplayOperationPage();
  }, []);

  const InteractIcon = (
    <SvgPeople aria-hidden width={36} height={36} focusable="false" />
  );

  const ControversyIcon = (
    <SvgLightning
      fill="#f7b500"
      aria-hidden
      width={20}
      height={32}
      focusable="false"
    />
  );

  const PopularIcon = (
    <SvgLike
      fill="#de1a42"
      aria-hidden
      width={28}
      height={28}
      focusable="false"
    />
  );

  const isKeywordActive: boolean = checkIsFeatureActivated(
    CONSULTATION_KEYWORD_ACTIVE,
    question.activeFeatures
  );

  return (
    <ThemeProvider theme={question.theme}>
      <MetaTags
        title={i18n.t('meta.participate.title', {
          question: question.wording.question,
        })}
        description={i18n.t('meta.participate.description')}
        picture={question.wording.metas.picture}
      />
      <ParticipateHeader />
      {!isDesktop && <MobileAbout />}
      <ParticipateHighlights />
      <div id={CONSULTATION_NAVIGATION} />
      <ParticipateNavigation />
      <ParticipateContentStyle>
        <ParticipateTitleStyle>
          {i18n.t('consultation.participate.title')}
        </ParticipateTitleStyle>
        <ParticipateDescriptionStyle>
          {i18n.t('consultation.participate.description')}
        </ParticipateDescriptionStyle>
        <ParticipateInnerStyle>
          <ParticipateMainContentStyle>
            {question.canPropose && <SubmitProposal />}
            <CTAMonoBlock
              icon={InteractIcon}
              title={i18n.t('consultation.cards.interact.title')}
              description={i18n.t('consultation.cards.interact.description')}
              linkText={i18n.t('consultation.cards.interact.button')}
              linkHref={getSequenceLink(country, question.slug, {
                introCard: false,
              })}
              classes="margin-bottom"
              onClickAction={() => trackOpenSequence(COMPONENT_PARAM_SEQUENCE)}
            />
            <ColumnToRowElementStyle>
              <ParticipateCTAProposalBloc isKeywordActive={isKeywordActive}>
                <CTAProposal
                  icon={ControversyIcon}
                  title={i18n.t('consultation.cards.controversy.title')}
                  description={i18n.t(
                    'consultation.cards.controversy.description'
                  )}
                  proposalCount={question.controversyCount}
                  thresold={PROPOSALS_THRESOLD}
                  linkText={i18n.t('consultation.cards.controversy.button')}
                  linkHref={getSequenceControversialLink(
                    country,
                    question.slug,
                    {
                      introCard: false,
                      pushProposal: false,
                    }
                  )}
                  classes="margin-bottom desktop-padding-right"
                  isKeywordActive={isKeywordActive}
                  onClickAction={() =>
                    trackOpenSequence(COMPONENT_PARAM_SEQUENCE_CONTROVERSIAL)
                  }
                />
                <CTAProposal
                  icon={PopularIcon}
                  title={i18n.t('consultation.cards.popular.title')}
                  description={i18n.t('consultation.cards.popular.description')}
                  proposalCount={question.topProposalCount}
                  thresold={PROPOSALS_THRESOLD}
                  linkText={i18n.t('consultation.cards.popular.button')}
                  linkHref={getSequencePopularLink(country, question.slug, {
                    introCard: false,
                    pushProposal: false,
                  })}
                  classes="margin-bottom desktop-padding-left"
                  isKeywordActive={isKeywordActive}
                  onClickAction={() =>
                    trackOpenSequence(COMPONENT_PARAM_SEQUENCE_POPULAR)
                  }
                />
              </ParticipateCTAProposalBloc>
              <Keywords question={question} isKeywordActive={isKeywordActive} />
            </ColumnToRowElementStyle>
            {isDesktop && <SocialSharing />}
          </ParticipateMainContentStyle>
          <ParticipateSidebarContentStyle>
            {isDesktop && <DesktopAbout />}
            <FeaturedProposals question={question} />
          </ParticipateSidebarContentStyle>
          {!isDesktop && <SocialSharing />}
        </ParticipateInnerStyle>
      </ParticipateContentStyle>
      <Timeline />
      <ParticipateContentStyle as="aside">
        <CitizenRegister />
      </ParticipateContentStyle>
    </ThemeProvider>
  );
};

// default export needed for loadable component
export default ParticipatePage; // eslint-disable-line import/no-default-export
