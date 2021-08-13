// @flow
import React, { useEffect, useState } from 'react';
import { type StateRoot } from 'Shared/store/types';
import {
  type QuestionType,
  type TypeFilterAndSortValues,
} from 'Shared/types/question';

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
import { searchProposals } from 'Shared/helpers/proposal';
import { useParams } from 'react-router';
import { Pagination } from 'Client/ui/Elements/Pagination';
import { matchDesktopDevice } from 'Shared/helpers/styled';
import { CONSULTATION_NAVIGATION } from 'Shared/constants/ids';
import { trackDisplayOperationPage } from 'Shared/services/Tracking';
import { CitizenRegister } from 'Client/features/consultation/CitizenRegister';
import { Timeline } from 'Client/features/consultation/Timeline';
import { FilterAndSort } from 'Client/features/consultation/ExploreFilters';
import { QuestionService } from 'Shared/services/Question';
import {
  ParticipateContentStyle,
  ParticipateInnerStyle,
  ExploreTitleWrapperStyle,
  ExploreTitleStyle,
  ExploreSubTitleWrapperStyle,
  ExploreProposalsCountStyle,
  ExploreDescriptionStyle,
  ParticipateMainContentStyle,
  ParticipateSidebarContentStyle,
  ResetLinkStyle,
} from './style';

const ExplorePage = () => {
  const { country, pageId } = useParams();
  const { device } = useSelector((state: StateRoot) => state.appConfig);
  const isDesktop = matchDesktopDevice(device);
  const question: QuestionType = useSelector((state: StateRoot) =>
    selectCurrentQuestion(state)
  );

  const dispatch = useDispatch();
  const [proposals, setProposals] = useState([]);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [keyword, setKeyword] = useState([]);
  const [proposalsTotal, setProposalsTotal] = useState<number>(0);
  const [filterAndSortValues, setFilterAndSortValues] =
    useState<TypeFilterAndSortValues>({
      keywords: undefined,
      sortAlgorithm: undefined,
      sort: 'RECENT',
      isNotVoted: false,
      userType: undefined,
    });
  const PROPOSALS_LIMIT = 10;
  const KEYWORD_THRESHOLD = 5;
  const hasProposals = proposalsTotal > 0;
  const defaultValues = {
    keywords: undefined,
    sortAlgorithm: undefined,
    sort: 'RECENT',
    isNotVoted: false,
    userType: undefined,
  };

  // retrieves question Keywords for filter
  const getQuestionKeywords = async () => {
    setLoading(true);
    const response = await QuestionService.getQuestionKeywords(
      question.questionId,
      KEYWORD_THRESHOLD
    );
    if (response) {
      setKeyword(response);
      setLoading(false);
    }
  };

  // retrieves proposals with corresponding param for sort and filters
  const getProposals = async (values: TypeFilterAndSortValues) => {
    setLoading(true);
    const { keywords, sortAlgorithm, isNotVoted, userType } = values;
    const sortAndFilterParams: TypeFilterAndSortValues = {
      keywords,
      sortAlgorithm,
      isNotVoted,
      userType,
    };
    const response = await searchProposals(
      country,
      question.questionId,
      undefined,
      undefined,
      pageId - 1,
      PROPOSALS_LIMIT,
      undefined,
      values.sort,
      undefined,
      undefined,
      sortAndFilterParams
    );
    if (response) {
      const { results, total } = response;
      setProposals(results);
      setProposalsTotal(total);
    }
    setLoading(false);
  };

  // handleSubmit for filters
  const handleSubmit = () => {
    getProposals(filterAndSortValues);
  };

  // handleReset for filters
  const handleReset = () => {
    setFilterAndSortValues({ ...defaultValues });
    getProposals(defaultValues);
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
    getQuestionKeywords();
    trackDisplayOperationPage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getProposals(defaultValues);
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
          <ExploreTitleStyle>
            {i18n.t('consultation.explore.title')}
          </ExploreTitleStyle>
          <ExploreSubTitleWrapperStyle>
            {i18n.t('consultation.explore.description')}
          </ExploreSubTitleWrapperStyle>
          {hasProposals && (
            <ExploreDescriptionStyle>
              <ExploreProposalsCountStyle>
                {i18n.t('common.proposal_count', { count: proposalsTotal })}
              </ExploreProposalsCountStyle>
            </ExploreDescriptionStyle>
          )}
        </ExploreTitleWrapperStyle>
        <ParticipateInnerStyle>
          <ParticipateMainContentStyle>
            <ProposalsList isLoading={isLoading} proposals={proposals} />
            {proposalsTotal > PROPOSALS_LIMIT && (
              <Pagination
                itemsPerPage={PROPOSALS_LIMIT}
                itemsTotal={proposalsTotal}
                scrollToId={CONSULTATION_NAVIGATION}
                questionSlug={question.slug}
              />
            )}
          </ParticipateMainContentStyle>
          <ParticipateSidebarContentStyle>
            {isDesktop && (
              <>
                <ResetLinkStyle onClick={handleReset}>
                  {i18n.t('consultation.explore.reset_filters')}
                </ResetLinkStyle>
                <FilterAndSort
                  filterAndSortValues={filterAndSortValues}
                  setFilterAndSortValues={setFilterAndSortValues}
                  keywords={keyword}
                  handleSubmit={handleSubmit}
                />
              </>
            )}
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

// default export needed for loadable component
export default ExplorePage; // eslint-disable-line import/no-default-export
