import * as React from 'react';
import { i18n } from 'Shared/i18n';
import { Link } from 'react-router-dom';
import { type ProposalType } from 'Shared/types/proposal';
import { getSequenceLink, getConsultationLink } from 'Shared/helpers/url';
import { Vote } from 'Client/features/vote';
import { ContentSeparatorStyle } from 'Client/ui/Elements/Separators';
import { TallCardStyle } from 'Client/ui/Cards';
import { isInProgress } from 'Shared/helpers/date';
import { DetailledVoteResults } from 'Client/ui/Proposal/DetailledVoteResults';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import {
  TopComponentContext,
  type TopComponentContextValueType,
  TopComponentContextValue,
} from 'Client/context/TopComponentContext';
import { useSelector } from 'react-redux';
import {
  InnerProposalStyle,
  ProposalCardContentStyle,
  ProposalFooterStyle,
  FooterContentSeparatorStyle,
  FooterContentStyle,
  DescriptionStyle,
  ButtonWrapperStyle,
  ButtonStyle,
} from './style';

type Props = {
  /** Object with all proposal's properties */
  proposal: ProposalType,
};

export const SingleProposalCard = ({ proposal }: Props) => {
  const isConsultationOpened = isInProgress(proposal.question);
  const topComponentContext: TopComponentContextValueType = TopComponentContextValue.getSingleProposal();
  const { country } = useSelector((state: StateRoot) => state.appConfig);

  return (
    <TopComponentContext.Provider value={topComponentContext}>
      <TallCardStyle id="proposal_card">
        <InnerProposalStyle>
          <ProposalCardContentStyle>
            <ScreenReaderItemStyle>
              {i18n.t('proposal_card.content')}
            </ScreenReaderItemStyle>
            {proposal.content}
          </ProposalCardContentStyle>
          {isConsultationOpened ? (
            <Vote
              proposal={proposal}
              votes={proposal.votes}
              proposalKey={proposal.proposalKey}
            />
          ) : (
            <DetailledVoteResults
              votes={proposal.votes}
              proposalId={proposal.id}
            />
          )}
        </InnerProposalStyle>
        <ProposalFooterStyle>
          <ContentSeparatorStyle />
          <FooterContentStyle>
            <DescriptionStyle
              dangerouslySetInnerHTML={{
                __html: i18n.t('proposal_page.footer_text', {
                  operation_name: `<a 
                  lang=${proposal.question.language}
                  href="${getConsultationLink(
                    country,
                    proposal.question.slug
                  )}">${proposal.question.wording.title}</a>`,
                }),
              }}
            />
            <FooterContentSeparatorStyle />
            <ButtonWrapperStyle>
              {isConsultationOpened && (
                <ButtonStyle
                  as={Link}
                  to={getSequenceLink(country, proposal.question.slug)}
                >
                  {i18n.t('proposal_page.button_1')}
                </ButtonStyle>
              )}
              <ButtonStyle
                as={Link}
                to={getConsultationLink(country, proposal.question.slug)}
              >
                {i18n.t('proposal_page.button_2')}
              </ButtonStyle>
            </ButtonWrapperStyle>
          </FooterContentStyle>
        </ProposalFooterStyle>
      </TallCardStyle>
    </TopComponentContext.Provider>
  );
};
