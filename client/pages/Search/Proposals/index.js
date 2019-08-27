// @flow
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { type Proposal as TypeProposal } from 'Shared/types/proposal';
import { Link } from 'react-router-dom';
import { i18n } from 'Shared/i18n';
import { MetaTags } from 'Client/app/MetaTags';
import { SvgAngleArrowLeft } from 'Client/ui/Svg/elements';
import { searchProposals } from 'Shared/helpers/proposal';
import { UnstyledListStyle } from 'Client/ui/Elements/ListElements';
import { ProposalCardWithQuestion } from 'Client/features/proposal/ProposalCardWithQuestion';
import { Spinner } from 'Client/ui/Elements/Loading/Spinner';
import { getSearchLink } from 'Shared/helpers/url';
import {
  SearchPageTitleStyle,
  SearchPageWrapperStyle,
  SearchPageContentStyle,
  SearchPageResultsStyle,
  SearchBackStyle,
  SearchBackArrowStyle,
  SearchResultsProposalItemStyle,
  SearchMoreProposalsButtonStyle,
} from '../Styled';
import { SearchSidebar } from '../Sidebar';

type Props = {
  searchTerm: string,
  country: string,
  language: string,
};
const PROPOSALS_LIMIT = 10;

export const SearchResultsProposalsComponent = ({
  searchTerm = 'croix rouge',
  country,
  language,
}: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState<number>(0);
  const [proposalsCount, setProposalsCount] = useState<number>(0);
  const [proposalsResult, setProposalsResult] = useState<TypeProposal[]>([]);
  const getMoreButton =
    proposalsCount > PROPOSALS_LIMIT &&
    proposalsCount > proposalsResult.length &&
    !isLoading;

  const initProposal = async () => {
    const { results, total } = await searchProposals(
      country,
      language,
      searchTerm,
      page
    );
    setProposalsResult(results);
    setProposalsCount(total);
    setPage(1);
    setIsLoading(false);
  };

  const loadMoreProposals = async () => {
    setIsLoading(true);
    const { results } = await searchProposals(
      country,
      language,
      searchTerm,
      page,
      PROPOSALS_LIMIT
    );
    const newProposalList = [...proposalsResult, ...results];
    setProposalsResult(newProposalList);
    setPage(page + 1);
    setIsLoading(false);
  };

  useEffect(() => {
    initProposal();
  }, [searchTerm]);

  return (
    <React.Fragment>
      <MetaTags
        title={i18n.t('meta.search.proposals', {
          term: searchTerm,
          count: proposalsCount,
        })}
      />
      <SearchPageWrapperStyle>
        <SearchBackStyle as={Link} to={getSearchLink(country, language)}>
          <SvgAngleArrowLeft style={SearchBackArrowStyle} aria-hidden />
          {i18n.t('common.back')}
        </SearchBackStyle>
        <SearchPageTitleStyle>
          {isLoading
            ? i18n.t('search.titles.loading')
            : i18n.t('search.titles.proposals', {
                term: searchTerm,
                count: proposalsCount,
              })}
        </SearchPageTitleStyle>
        <SearchPageContentStyle>
          <SearchPageResultsStyle
            id="proposal_list"
            role="feed"
            aria-busy={isLoading}
          >
            <UnstyledListStyle>
              {proposalsResult.map((proposal, index) => (
                <SearchResultsProposalItemStyle key={proposal.id}>
                  <ProposalCardWithQuestion
                    proposal={proposal}
                    position={index + 1}
                    size={proposalsResult.length}
                  />
                </SearchResultsProposalItemStyle>
              ))}
            </UnstyledListStyle>
            {isLoading && <Spinner />}
            {getMoreButton && (
              <SearchMoreProposalsButtonStyle onClick={loadMoreProposals}>
                {i18n.t('consultation.proposal.load_more')}
              </SearchMoreProposalsButtonStyle>
            )}
          </SearchPageResultsStyle>
          <SearchSidebar />
        </SearchPageContentStyle>
      </SearchPageWrapperStyle>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  const { country, language } = state.appConfig;

  return {
    country,
    language,
  };
};

export const SearchResultsProposals = connect(mapStateToProps)(
  SearchResultsProposalsComponent
);
