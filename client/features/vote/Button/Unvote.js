// @flow
import React from 'react';
import { Tooltip } from 'Client/ui/Tooltip';
import { LoadingDots } from 'Client/ui/Elements/Loading/Dots';
import { i18n } from 'Shared/i18n';
import {
  VoteIconStyle,
  VoteButtonStyle,
} from 'Client/ui/Elements/Buttons/style';

type Props = {
  /** Vote key */
  voteKey: string,
  /** button className */
  buttonClass?: string,
  /** When button is in pending mode */
  displayPending?: boolean,
  /** Method called when vote button is clicked */
  handleUnvote?: () => void | Promise<void>,
  /** Boolean to disable click event on the qualification button */
  disableClick?: boolean,
};

export const UnvoteButton = ({
  voteKey,
  buttonClass = voteKey,
  displayPending = false,
  handleUnvote = () => {},
  disableClick = false,
}: Props) => {
  return (
    <Tooltip content={i18n.t(`unvote.title`)} direction="bottom">
      <VoteButtonStyle
        aria-label={
          displayPending ? i18n.t('common.loading') : i18n.t(`vote.${voteKey}`)
        }
        className={buttonClass}
        onClick={handleUnvote}
        onTouchEnd={handleUnvote}
        aria-busy={displayPending}
        data-cy-button="vote"
        data-cy-vote-key={voteKey}
        disabled={disableClick}
      >
        {displayPending ? (
          <LoadingDots />
        ) : (
          <VoteIconStyle className={buttonClass} aria-hidden />
        )}
      </VoteButtonStyle>
    </Tooltip>
  );
};
