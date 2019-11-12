// @flow
import React from 'react';
import { i18n } from 'Shared/i18n';
import { type ProposalType } from 'Shared/types/proposal';
import { type OrganisationType } from 'Shared/types/organisation';
import {
  getProposalLink,
  getOrganisationProfileLink,
} from 'Shared/helpers/url';
import { RedLinkRouterStyle } from 'Client/ui/Elements/LinkElements';

import { VoteResultElement } from 'Client/ui/Proposal/VoteResultElement';
import { ProposalFooterWithTagElement } from 'Client/ui/Proposal/FooterElement/ProposalWithTag';
import {
  ProposalStyle,
  ProposalInnerStyle,
} from 'Client/ui/Elements/ProposalCardElements';
import { CertifiedIconStyle } from 'Client/ui/Proposal/DeprecatedAuthor/Styled';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import { CardStyle } from 'Client/ui/Cards';
import { formatOrganisationName } from 'Shared/helpers/stringFormatter';
import { VoteIconStyle } from 'Client/ui/Elements/Buttons/style';
import { useSelector } from 'react-redux';
import { type StateRoot } from 'Shared/store/types';
import {
  ProfileVoteCardStyle,
  ProfileVoteWrapperStyle,
  ProfileVoteTitleStyle,
  ProfileHasVotedStyle,
} from './style';

type Props = {
  /** Object with all organisation's properties */
  organisation: OrganisationType,
  /** Object with all proposal's properties */
  proposal: ProposalType,
  /** Nature of the organisation's vote */
  voteKey: string,
  /** Proposal's position in list */
  position: number,
  /** Size of proposals list */
  size: number,
};

export const ProfileVoteCard = ({
  voteKey,
  organisation,
  proposal,
  position,
  size,
}: Props) => {
  const { country } = useSelector((state: StateRoot) => state.appConfig);
  return (
    <ProfileVoteWrapperStyle aria-posinset={position} aria-setsize={size}>
      <ProfileVoteTitleStyle>
        <ProfileHasVotedStyle
          aria-label={i18n.t(`vote.${voteKey}`)}
          className={`${voteKey} voted`}
        >
          <VoteIconStyle className={`${voteKey} voted`} aria-hidden />
        </ProfileHasVotedStyle>
        <div>
          <RedLinkRouterStyle
            to={getOrganisationProfileLink(
              organisation.country,
              organisation.slug
            )}
          >
            {formatOrganisationName(organisation.organisationName)}
          </RedLinkRouterStyle>
          <CertifiedIconStyle aria-hidden focusable="false" />
          &nbsp;
          {i18n.t(`profile.organisation.proposal_${voteKey}`)}
        </div>
      </ProfileVoteTitleStyle>
      <ProfileVoteCardStyle>
        <CardStyle as="div">
          <ProposalInnerStyle>
            <ScreenReaderItemStyle>
              {i18n.t('proposal_card.content')}
            </ScreenReaderItemStyle>
            <ProposalStyle
              id={`vote_card_proposal_content_${position}`}
              to={getProposalLink(
                country,
                proposal.question.slug,
                proposal.id,
                proposal.slug
              )}
              lang={proposal.question.language}
            >
              {proposal.content}
            </ProposalStyle>
            <VoteResultElement
              proposalId={proposal.id}
              votes={proposal.votes}
              votedKey={voteKey}
              proposalKey={proposal.proposalKey}
              disableClick
              withTooltip={false}
            />
          </ProposalInnerStyle>

          <ProposalFooterWithTagElement tags={proposal.tags} />
        </CardStyle>
      </ProfileVoteCardStyle>
    </ProfileVoteWrapperStyle>
  );
};
