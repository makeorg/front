// @flow
import React, { useState, useEffect } from 'react';
import { i18n } from 'Shared/i18n';
import * as UserService from 'Shared/services/User';
import { type TypeUser } from 'Shared/types/user';
import { type Proposal as TypeProposal } from 'Shared/types/proposal';
import { ThirdLevelTitleStyle } from 'Client/ui/Elements/TitleElements';
import { ProfileProposalsPlaceholder } from 'Client/pages/Profile/Placeholders/Proposals';
import { ProfileProposalCard } from 'Client/features/proposal/ProfileProposalCard';
import { Spinner } from 'Client/ui/Elements/Loading/Spinner';
import {
  ProfileContentHeaderStyle,
  ProfileTitleSeparatorStyle,
} from 'Client/ui/Elements/ProfileElements';
import { MetaTags } from 'Client/app/MetaTags';
import { trackLoadMoreProposals } from 'Shared/services/Tracking';
import { LoadMoreWrapperStyle } from 'Client/features/consultation/Styled/Proposal';
import { RedButtonStyle } from 'Client/ui/Elements/ButtonElements';

type Props = {
  user: TypeUser,
};

const ProfileProposalsPage = ({ user }: Props) => {
  const [proposals, setProposals] = useState<TypeProposal[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasMore, setHasMore] = useState<boolean>(false);
  const [seed, setSeed] = useState(undefined);
  const [page, setPage] = useState<number>(0);

  const initProposal = async () => {
    setIsLoading(true);
    const { results, total, seed: apiSeed } = await UserService.myProposals(
      user.userId
    );
    setProposals(results);
    setHasMore(results.length < total);
    setSeed(apiSeed);
    setPage(1);
    setIsLoading(false);
  };

  const loadProposals = async () => {
    setIsLoading(true);
    const { results, total, seed: apiSeed } = await UserService.myProposals(
      user.userId,
      seed,
      page
    );
    const newProposalList = [...proposals, ...results];
    setProposals(newProposalList);
    setHasMore(newProposalList.length < total);
    setSeed(apiSeed);
    setPage(page + 1);
    setIsLoading(false);
  };

  const clickLoadMore = () => {
    loadProposals();
    trackLoadMoreProposals(page);
  };

  useEffect(() => {
    initProposal();
  }, [user]);

  const proposalsLength = proposals.length;
  const renderPlaceholder = !proposalsLength && !isLoading;
  const renderProposals = !!proposalsLength;
  const displayLoadMoreButton = hasMore && !isLoading;
  return (
    <React.Fragment>
      <MetaTags title={i18n.t('meta.profile.proposals.title')} />
      <ProfileContentHeaderStyle>
        <ThirdLevelTitleStyle as="h2">
          {i18n.t('profile.proposals.title')}
        </ThirdLevelTitleStyle>
        <ProfileTitleSeparatorStyle />
      </ProfileContentHeaderStyle>
      {renderProposals && (
        <section role="feed" aria-live="polite">
          {proposals.map((proposal, index) => (
            <ProfileProposalCard
              key={proposal.id}
              proposal={proposal}
              size={proposalsLength}
              position={index}
              withStatus
            />
          ))}
        </section>
      )}
      {isLoading && <Spinner />}
      {displayLoadMoreButton && (
        <LoadMoreWrapperStyle>
          <RedButtonStyle onClick={clickLoadMore}>
            {i18n.t('consultation.proposal.load_more')}
          </RedButtonStyle>
        </LoadMoreWrapperStyle>
      )}
      {renderPlaceholder && <ProfileProposalsPlaceholder />}
    </React.Fragment>
  );
};

// default export needed for loadable component
export default ProfileProposalsPage; // eslint-disable-line import/no-default-export