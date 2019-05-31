/* @flow */
import * as React from 'react';
import { i18n } from 'Shared/i18n';
import { ReadableItemStyle } from 'Client/ui/Elements/HiddenElements';
import { ProposalCharLimitStyle } from '../Styled';

type Props = {
  /** Min value */
  minLength: number,
  /** Value's lentgh */
  currentLength: number,
};
/**
 * Render the Proposal Field
 */
export const CharsCounter = (props: Props) => {
  const { minLength, currentLength } = props;

  return (
    <React.Fragment>
      <ProposalCharLimitStyle aria-hidden>
        {`${currentLength}/140`}
      </ProposalCharLimitStyle>
      <ReadableItemStyle
        as="meter"
        min={minLength}
        max={140}
        value={currentLength}
      >
        {i18n.t('proposal_submit.counter', {
          current: currentLength,
          total: 140,
        })}
      </ReadableItemStyle>
    </React.Fragment>
  );
};