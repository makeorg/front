// @flow
import React from 'react';
import { type Proposal as TypeProposal } from 'Shared/types/proposal';
import { getProposalLink, getConsultationLink } from 'Shared/helpers/url';
import { DetailledVoteResults } from 'Client/features/vote/DetailledResults';
import { ProposalAuthorElement } from 'Client/ui/Proposal/AuthorElement';
import { ProposalFooterWithQuestionElement } from 'Client/ui/Proposal/FooterElement';
import { ProfileProposalCardStyle, ProposalStyle } from './Styled';

type Props = {
  proposal: TypeProposal,
  position: number,
  size: number,
  withStatus?: boolean,
};

export const ProfileProposalCard = (props: Props) => {
  const { proposal, position, size } = props;
  const { author, question } = proposal;
  const formattedProposalStatus = proposal.status.toLowerCase();
  const isProposalAccepted = formattedProposalStatus === 'accepted';

  return (
    <ProfileProposalCardStyle
      role="article"
      aria-posinset={position}
      aria-setsize={size}
      className={`proposal-${formattedProposalStatus}`}
    >
      <ProposalAuthorElement
        author={author}
        country={proposal.country}
        language={proposal.language}
        createdAt={proposal.createdAt}
        withAvatar
        withStatus
        formattedProposalStatus={formattedProposalStatus}
      />
      <ProposalStyle
        id={`proposal_content_${position}`}
        {...(isProposalAccepted
          ? {
              href: getProposalLink(
                proposal.country,
                proposal.language,
                question.slug,
                proposal.id,
                proposal.slug
              ),
            }
          : { as: 'p' })}
      >
        {proposal.content}
      </ProposalStyle>
      {isProposalAccepted && (
        <DetailledVoteResults votes={proposal.votes} proposalId={proposal.id} />
      )}
      <ProposalFooterWithQuestionElement
        question={question}
        consultationLink={getConsultationLink(
          proposal.country,
          proposal.language,
          question.slug
        )}
        isProposalAccepted={isProposalAccepted}
      />
    </ProfileProposalCardStyle>
  );
};

ProfileProposalCard.defaultPropTypes = {
  withStatus: false,
};
