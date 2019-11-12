// @flow
import React from 'react';
import { i18n } from 'Shared/i18n';
import { type ProposalType } from 'Shared/types/proposal';
import { DateHelper } from 'Shared/helpers/date';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import {
  AuthorDescriptionStyle,
  AuthorInfosStyle,
  ProposalStatusStyle,
} from './Styled';

type Props = {
  /** Object with author's properties */
  proposal: ProposalType,
  /** Include creation date */
  withCreationDate?: boolean,
  /** Include formatted proposal status */
  formattedProposalStatus?: string,
  /** Specifc design for sequence avatar */
  isSequence?: boolean,
};

export const DeprecatedProposalAuthor = ({
  proposal,
  withCreationDate = false,
  formattedProposalStatus = false,
  isSequence = false,
}: Props) => (
  <AuthorDescriptionStyle>
    <AuthorInfosStyle as="div" isSequence={isSequence}>
      {withCreationDate && !!proposal.createdAt && (
        <>
          {i18n.t('proposal_card.posted_at')}
          &nbsp;
          <time dateTime={proposal.createdAt}>
            {DateHelper.creationDateFormat(proposal.createdAt)}
          </time>
        </>
      )}
    </AuthorInfosStyle>
    {formattedProposalStatus && (
      <ProposalStatusStyle className={`status-${formattedProposalStatus}`}>
        <ScreenReaderItemStyle>
          {i18n.t('proposal_card.status.title')}
        </ScreenReaderItemStyle>
        {i18n.t(`proposal_card.status.${formattedProposalStatus}`)}
      </ProposalStatusStyle>
    )}
  </AuthorDescriptionStyle>
);
