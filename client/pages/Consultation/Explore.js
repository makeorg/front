// @flow
import React, { useEffect, useState } from 'react';
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
import { ParticipateHeader } from 'Client/features/consultation/Header';
import { ParticipateHighlights } from 'Client/features/consultation/Highlights';
import { ParticipateNavigation } from 'Client/features/consultation/Navigation/Participate';
import { ProposalsList } from 'Client/features/consultation/ProposalsList';
import {
  getProposalsListTitle,
  searchProposals,
} from 'Shared/helpers/proposal';
import { useParams } from 'react-router';
import { Pagination } from 'Client/ui/Elements/Pagination';
import { CONSULTATION_NAVIGATION } from 'Shared/constants/ids';
import { trackDisplayOperationPage } from 'Shared/services/Tracking';
import { CitizenRegister } from 'Client/features/consultation/CitizenRegister';
import { Timeline } from 'Client/features/consultation/Timeline';
import {
  ParticipateContentStyle,
  ParticipateInnerStyle,
  ExploreTitleWrapperStyle,
  ExploreTitleStyle,
  ExploreProposalsCountStyle,
  ParticipateFullwidthContentStyle,
} from './style';

const ExplorePage = () => {
  const { country, pageId } = useParams();
  const question: QuestionType = useSelector((state: StateRoot) =>
    selectCurrentQuestion(state)
  );
  const dispatch = useDispatch();
  const [proposals, setProposals] = useState([]);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [proposalsTotal, setProposalsTotal] = useState<number>(0);
  const feedAlgorithm = 'RECENT';
  const PROPOSALS_LIMIT = 12;

  const title = getProposalsListTitle(feedAlgorithm);
  const hasProposals = proposalsTotal > 0;

  const getProposals = async () => {
    setLoading(true);
    const response = await searchProposals(
      country,
      undefined,
      pageId - 1,
      PROPOSALS_LIMIT,
      undefined,
      question.questionId,
      undefined,
      feedAlgorithm
    );

    if (response) {
      const { results, total } = response;
      setProposals(results);
      setProposalsTotal(total);
    }

    setLoading(false);
  };

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

  useEffect(() => {
    getProposals();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageId]);

  return (
    <ThemeProvider theme={question.theme}>
      <MetaTags
        title={i18n.t('meta.explore.title', {
          question: question.wording.question,
        })}
        description={question.wording.metas.description}
        picture={question.wording.metas.picture}
      />
      <ParticipateHeader />
      <ParticipateHighlights />
      <div id={CONSULTATION_NAVIGATION} />
      <ParticipateNavigation />
      <ParticipateContentStyle>
        <ExploreTitleWrapperStyle>
          <ExploreTitleStyle>{title}</ExploreTitleStyle>
          {hasProposals && (
            <ExploreProposalsCountStyle>
              {i18n.t('common.proposal_count', { count: proposalsTotal })}
            </ExploreProposalsCountStyle>
          )}
        </ExploreTitleWrapperStyle>
        <ParticipateInnerStyle>
          <ParticipateFullwidthContentStyle>
            <ProposalsList isLoading={isLoading} proposals={proposals} />
            {proposalsTotal > PROPOSALS_LIMIT && (
              <Pagination
                itemsPerPage={PROPOSALS_LIMIT}
                itemsTotal={proposalsTotal}
                scrollToId={CONSULTATION_NAVIGATION}
                questionSlug={question.slug}
              />
            )}
          </ParticipateFullwidthContentStyle>
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
export default ExplorePage; // eslint-disable-line import/no-default-export
