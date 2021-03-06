// @flow
import React from 'react';
import { i18n } from 'Shared/i18n';
import { type TagType } from 'Shared/types/proposal';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import {
  ProposalFooterTagListStyle,
  ProposalFooterTagListItemStyle,
} from '../Styled';

const NUMBER_OF_TAGS_TO_DISPLAY = 4;

type ProposalFooterWithTagElementProps = {
  tags: TagType[],
};

export const ProposalFooterWithTagElement = ({
  tags,
}: ProposalFooterWithTagElementProps) => {
  if (!tags.filter(tag => tag.display === true).length) {
    return null;
  }

  return (
    <>
      <ScreenReaderItemStyle
        as="p"
        dangerouslySetInnerHTML={{
          __html: i18n.t('consultation.tags.proposal_list'),
        }}
      />
      <ProposalFooterTagListStyle>
        {tags
          .filter(tag => tag.display === true)
          .slice(0, NUMBER_OF_TAGS_TO_DISPLAY)
          .map(tag => (
            <ProposalFooterTagListItemStyle as="li" key={tag.tagId}>
              <span>{tag.label}</span>
            </ProposalFooterTagListItemStyle>
          ))}
      </ProposalFooterTagListStyle>
    </>
  );
};
