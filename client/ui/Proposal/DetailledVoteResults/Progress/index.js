// @flow
import React from 'react';
import { i18n } from 'Shared/i18n';
import { type VoteType } from 'Shared/types/vote';
import { getTotalVotesCount, getVotesPercent } from 'Shared/helpers/voteResult';
import { voteStaticParams } from 'Shared/constants/vote';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import {
  VoteProgressContainerStyle,
  VoteProgressWrapperStyle,
  VoteCounterStyle,
  VoteProgressItemStyle,
} from '../style';

type Props = {
  /** Array of votes */
  votes: VoteType[],
  /** Id of the proposal */
  proposalId: string,
};

/**
 * Vote Progress component
 */
export const VoteProgress = (props: Props) => {
  const { votes, proposalId } = props;
  const votesCount = getTotalVotesCount(votes);
  const votesPercent = getVotesPercent(votes, votesCount);
  return (
    <VoteProgressContainerStyle>
      <VoteCounterStyle>
        <ScreenReaderItemStyle as="span">
          {i18n.t('results.static_total')}
        </ScreenReaderItemStyle>
        {i18n.t('vote.label', { count: votesCount })}
      </VoteCounterStyle>
      <VoteProgressWrapperStyle>
        {votes.map(vote => (
          <VoteProgressItemStyle
            key={`vote_progress_${proposalId}_${vote.voteKey}`}
            color={voteStaticParams[vote.voteKey].color}
            percent={votesPercent[vote.voteKey]}
          />
        ))}
      </VoteProgressWrapperStyle>
    </VoteProgressContainerStyle>
  );
};
