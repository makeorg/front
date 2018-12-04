/* @flow */

import * as React from 'react';
import i18next from 'i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import ProposalCard from './Styled';
import ProgressBarComponent from './ProgressBar';
import VoteContainer from '../../containers/Vote';
import { getPosition, getScale, getZIndex } from '../../helpers/sequence';
import DateHelper from '../../helpers/date';

type Props = {
  proposal: Object,
  index: number,
  totalIndex: number,
  currentIndex: number,
  isPannelOpen: boolean,
  isSequenceCollapsed: boolean,
  goToPreviousCard: Function,
  goToNextCard: Function
}
const ProposalCardComponent = (props: Props) => {
  const {
    proposal,
    index,
    totalIndex,
    currentIndex,
    isPannelOpen,
    isSequenceCollapsed,
    goToPreviousCard,
    goToNextCard
  } = props;
  const position = getPosition(index, currentIndex);
  const scale = getScale(index, currentIndex);
  const zindex = getZIndex(index, currentIndex);

  return (
    <ProposalCard
      position={position}
      scale={scale}
      zindex={zindex}
      className={index < currentIndex ? 'collapsed-card' : ''}
      id={`proposal-card-${index}`}
    >
      <ProposalCard.FakeNavWrapper>
        <ProposalCard.BackButton
          tabIndex={isPannelOpen || isSequenceCollapsed || index !== currentIndex ? -1 : 0}
          onClick={goToPreviousCard}
        >
          <ProposalCard.BackIcon>
            <FontAwesomeIcon aria-hidden icon={faArrowLeft} />
          </ProposalCard.BackIcon>
          {i18next.t('proposal_card.previous')}
        </ProposalCard.BackButton>
        <ProgressBarComponent index={index} totalIndex={totalIndex} />
      </ProposalCard.FakeNavWrapper>
      <ProposalCard.AuthorInfos>
        {proposal.author.firstName}
        &nbsp;-&nbsp;
        <time dateTime={proposal.createdAt}>
          {DateHelper.proposalCreationDateFormat(proposal.createdAt)}
        </time>
      </ProposalCard.AuthorInfos>
      <ProposalCard.Separator aria-hidden />
      <ProposalCard.Proposal>
        {proposal.content}
      </ProposalCard.Proposal>
      <VoteContainer
        proposalId={proposal.id}
        votes={proposal.votes}
        isPannelOpen={isPannelOpen}
        isSequenceCollapsed={isSequenceCollapsed}
        index={index}
        currentIndex={currentIndex}
        goToNextCard={goToNextCard}
      />
    </ProposalCard>
  );
};

export default ProposalCardComponent;
