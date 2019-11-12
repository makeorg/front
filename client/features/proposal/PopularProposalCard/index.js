// @flow
import React from 'react';
import { i18n } from 'Shared/i18n';
import { isInProgress } from 'Shared/helpers/date';
import { type ProposalType } from 'Shared/types/proposal';
import {
  ProposalStyle,
  ProposalInnerStyle,
} from 'Client/ui/Elements/ProposalCardElements';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import { Vote } from 'Client/features/vote';
import { DetailledVoteResults } from 'Client/ui/Proposal/DetailledVoteResults';
import { getProposalLink } from 'Shared/helpers/url';
import { useSelector } from 'react-redux';
import { type StateRoot } from 'Shared/store/types';
import { AuthorWrapperStyle } from 'Client/ui/Proposal/DeprecatedAuthor/Styled';
import { DeprecatedProposalAuthor } from 'Client/ui/Proposal/DeprecatedAuthor';
import {
  PopularProposalWrapperStyle,
  PopularProposalHeader,
  PopularProposalTagStyle,
} from './style';

type Props = {
  /** Object with all proposal's properties */
  proposal: ProposalType,
  /** Proposal's position in list */
  position: number,
  /** Size of proposals list */
  size: number,
};

export const PopularProposalCard = ({
  proposal,
  position = 0,
  size = 0,
}: Props) => {
  const { country } = useSelector((state: StateRoot) => state.appConfig);
  const canVote = isInProgress(proposal.question);
  return (
    <PopularProposalWrapperStyle aria-posinset={position} aria-setsize={size}>
      <PopularProposalHeader aria-hidden>
        {`#${position}`}
      </PopularProposalHeader>
      <AuthorWrapperStyle>
        <DeprecatedProposalAuthor proposal={proposal} withCreationDate />
      </AuthorWrapperStyle>
      <ProposalInnerStyle>
        <ScreenReaderItemStyle>
          {i18n.t('proposal_card.content')}
        </ScreenReaderItemStyle>
        <ProposalStyle
          id={`popular_proposal_content_${position}`}
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
        {canVote ? (
          <Vote
            proposal={proposal}
            votes={proposal.votes}
            proposalKey={proposal.proposalKey}
            index={position}
          />
        ) : (
          <DetailledVoteResults
            votes={proposal.votes}
            proposalId={proposal.id}
          />
        )}
      </ProposalInnerStyle>
      {proposal.selectedStakeTag && proposal.selectedStakeTag.display && (
        <PopularProposalTagStyle>
          <ScreenReaderItemStyle
            dangerouslySetInnerHTML={{
              __html: i18n.t('consultation.tags.proposal_list'),
            }}
          />
          {proposal.selectedStakeTag.label}
        </PopularProposalTagStyle>
      )}
    </PopularProposalWrapperStyle>
  );
};
