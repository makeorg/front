// @flow
import { type VoteType } from 'Shared/types/vote';
import { BadArgumentError } from 'Shared/errors';
import {
  VOTE_AGREE_KEY,
  VOTE_DISAGREE_KEY,
  VOTE_NEUTRAL_KEY,
} from 'Shared/constants/vote';

/**
 * calculate total number of vote
 *
 * @param {VoteType[]} votes
 */
export const getTotalVotesCount = (votes: VoteType[]): number => {
  if (!votes.length) {
    throw new BadArgumentError('votes cannot be an empty array');
  }

  return votes
    .map(vote => vote.count)
    .reduce((total, voteCount) => total + voteCount);
};

/**
 * calculate the percent by vote key
 *
 * @param {VoteType} votes
 * @param {number} votesCount
 */
export const getVotesPercent = (votes: VoteType[], votesCount: number) => {
  const agreeVote: ?Object = votes.find(
    vote => vote.voteKey === VOTE_AGREE_KEY
  );
  const disagreeVote: ?Object = votes.find(
    vote => vote.voteKey === VOTE_DISAGREE_KEY
  );
  const neutralVote: ?Object = votes.find(
    vote => vote.voteKey === VOTE_NEUTRAL_KEY
  );

  return {
    [VOTE_AGREE_KEY]:
      agreeVote && votesCount
        ? Math.round((agreeVote.count / votesCount) * 100)
        : 0,
    [VOTE_DISAGREE_KEY]:
      disagreeVote && votesCount
        ? Math.round((disagreeVote.count / votesCount) * 100)
        : 0,
    [VOTE_NEUTRAL_KEY]:
      neutralVote && votesCount
        ? Math.round((neutralVote.count / votesCount) * 100)
        : 0,
  };
};

/**
 * calculate the vote ratio betweem votesCount and votesTarget
 *
 * @param {number} votesCount
 * @param {number} votesTarget
 */
export const getVotesRatio = (votesCount: number, votesTarget: number) => {
  const percent = (votesCount * 100) / votesTarget;

  return percent.toFixed(1);
};
