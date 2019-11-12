// @flow
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { type Location } from 'history';
import { type SearchViewsType } from 'Shared/types/views';
import { ViewsService } from 'Shared/services/Views';
import { i18n } from 'Shared/i18n';
import { trackDisplaySearchMainResult } from 'Shared/services/Tracking';
import { type StateRoot } from 'Shared/store/types';
import { MetaTags } from 'Client/app/MetaTags';
import { MainResultsHeader } from 'Client/features/search/MainResults/Header';
import { MainResultsProposals } from 'Client/features/search/MainResults/Proposals';
import { Spinner } from 'Client/ui/Elements/Loading/Spinner';
import { HiddenItemStyle } from 'Client/ui/Elements/HiddenElements';
import { getRouteSearchProposals } from 'Shared/routes';
import { useDesktop } from 'Client/hooks/useMedia';
import {
  SearchPageWrapperStyle,
  SearchPageTitleStyle,
  SearchPageContentStyle,
  SearchPageResultsStyle,
} from '../Styled';
import { MainResultsSectionStyle, NoResultsStyle } from './Styled';
import { SearchSidebar } from '../Sidebar';

export type Props = {
  location: Location,
};

export const SearchMainResults = ({ location }: Props) => {
  const { country } = useSelector((state: StateRoot) => state.appConfig);
  const params = new URLSearchParams(location.search);
  const term = params.get('query') || '';

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<SearchViewsType>({
    proposals: { total: 0, results: [] },
    questions: { total: 0, results: [] },
    organisations: { total: 0, results: [] },
  });
  const proposalsCount = data.proposals.total;
  const questionsCount = data.questions.total;
  const organisationsCount = data.organisations.total;
  const responseCount = proposalsCount + questionsCount + organisationsCount;
  const noResults = responseCount === 0;
  const isDesktop = useDesktop();

  useEffect(() => {
    trackDisplaySearchMainResult();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const searchResult = await ViewsService.searchViews(term, country);
      setData(searchResult || data);
      setIsLoading(false);
    }

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [term]);

  return (
    <SearchPageWrapperStyle>
      <MetaTags
        title={i18n.t('meta.search.main_results', {
          term,
        })}
      />
      <SearchPageTitleStyle>
        {isLoading && i18n.t('search.titles.loading')}
        {!isLoading &&
          !!term &&
          i18n.t('search.titles.main_results', {
            term,
            count: responseCount,
          })}
        {!isLoading && !term && i18n.t('search.titles.main_results_empty_term')}
      </SearchPageTitleStyle>
      <SearchPageContentStyle>
        <SearchPageResultsStyle>
          {isLoading && <Spinner />}
          {!isLoading && noResults && (
            <>
              <HiddenItemStyle>
                <h2>{i18n.t('search.titles.no_results')}</h2>
              </HiddenItemStyle>
              <NoResultsStyle>
                {term
                  ? i18n.t('search.main_results.no_results', {
                      term,
                    })
                  : i18n.t('search.main_results.no_query')}
              </NoResultsStyle>
            </>
          )}
          {!isLoading && !!responseCount && (
            <>
              {!!proposalsCount && (
                <MainResultsSectionStyle>
                  <MainResultsHeader
                    title={i18n.t('search.main_results.proposal', {
                      term,
                      count: proposalsCount,
                    })}
                    count={proposalsCount}
                    link={getRouteSearchProposals(country, term)}
                  />

                  <MainResultsProposals
                    searchTerm={term}
                    proposals={data.proposals.results}
                    count={proposalsCount}
                  />
                </MainResultsSectionStyle>
              )}
            </>
          )}
        </SearchPageResultsStyle>
        {isDesktop && <SearchSidebar />}
      </SearchPageContentStyle>
    </SearchPageWrapperStyle>
  );
};
