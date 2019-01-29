/* @flow */
import * as React from 'react';
import i18next from 'i18next';
import { connect } from 'react-redux';
import { throttle } from 'Shared/helpers/throttle';
import { doVote, doUnvote } from 'Src/helpers/vote';
import VoteService from 'Src/api/VoteService';
import { sequenceVote, sequenceUnvote } from 'Shared/store/actions/sequence';
import { NextButton } from 'Src/components/ProposalCard/Styled/Buttons';
import VoteStyled from 'Src/components/Vote/Styled';
import VoteComponent from 'Src/components/Vote';
import QualificationContainer from 'Src/containers/Qualification';
import VoteResultsContainer from './Result';

type Props = {
  /** Proposal's Id */
  proposalId: string,
  /** Array with votes received from Api */
  votes: Array<Object>,
  /** Boolean toggled when Sliding pannel is opened / closed */
  isPannelOpen?: boolean,
  /** Boolean toggled when Sequence is collapsed / expanded */
  isSequenceCollapsed?: boolean,
  /** Index of the card */
  index?: number,
  /** Incremented / Decremented Index */
  currentIndex?: number,
  /** Method called when next card button is clicked (Incremented currentIndex) */
  goToNextCard?: () => void,
  /** Method called on vote */
  handleVoteOnSequence: (string, string, ?number) => void,
  /** Method called on unvote */
  handleUnvoteOnSequence: (string, string, ?number) => void,
};

type State = {
  /** Tabindex for interactive items */
  hasVoted: boolean,
  /** Voted key property */
  votedKey: string,
  /** Array with votes received from Api */
  votes: Array<Object>,
  /** Array with qualifications received from Api */
  qualifications: Array<Object>
};

/**
 * Handles Vote Business Logic
 */
export class Vote extends React.Component<Props, State> {
  static defaultProps = {
    isPannelOpen: false,
    isSequenceCollapsed: false,
    index: undefined,
    currentIndex: undefined,
    goToNextCard: undefined
  }

  throttleVote: any = undefined;

  constructor(props: Props) {
    super(props);
    const userVote = props.votes.find(vote => vote.hasVoted === true);
    const hasVoted = (userVote !== undefined);
    const votedKey = (userVote !== undefined) ? userVote.voteKey : '';
    const qualifications = (userVote !== undefined) ? userVote.qualifications : [];

    this.state = {
      hasVoted,
      votedKey,
      qualifications,
      votes: props.votes
    };
    this.throttleVote = throttle(this.handleVote);
  }

  handleVote = (event: SyntheticEvent<*>, voteKey: string) => {
    event.preventDefault();
    const {
      proposalId,
      index,
      handleVoteOnSequence,
      handleUnvoteOnSequence
    } = this.props;
    const { hasVoted } = this.state;

    if (hasVoted) {
      VoteService.unvote(proposalId, voteKey)
        .then((vote) => {
          this.setState(prevState => doUnvote(prevState, vote));
          handleUnvoteOnSequence(proposalId, voteKey, index);
        });
    } else {
      VoteService.vote(proposalId, voteKey)
        .then((vote) => {
          this.setState(prevState => doVote(prevState, vote));
          handleVoteOnSequence(proposalId, voteKey, index);
        });
    }
  }

  render() {
    const {
      proposalId,
      isPannelOpen,
      isSequenceCollapsed,
      index,
      currentIndex,
      goToNextCard
    } = this.props;
    const {
      hasVoted,
      votedKey,
      votes,
      qualifications
    } = this.state;
    if (hasVoted) {
      return (
        <React.Fragment>
          <VoteStyled>
            <VoteResultsContainer
              proposalId={proposalId}
              votes={votes}
              votedKey={votedKey}
              index={index}
              handleVote={this.throttleVote}
              tabIndex={isPannelOpen || isSequenceCollapsed || index !== currentIndex ? -1 : 0}
            />
            <QualificationContainer
              proposalId={proposalId}
              qualifications={qualifications}
              votedKey={votedKey}
              index={index}
              tabIndex={isPannelOpen || isSequenceCollapsed || index !== currentIndex ? -1 : 0}
            />
          </VoteStyled>
          {index !== undefined
            && (
              <NextButton
                tabIndex={isPannelOpen || isSequenceCollapsed || index !== currentIndex ? -1 : 0}
                onClick={goToNextCard}
                id={`next-button-${index}`}
              >
                {i18next.t('proposal_card.next')}
                {' >'}
              </NextButton>
            )
          }
        </React.Fragment>
      );
    }

    return (
      <VoteComponent
        proposalId={proposalId}
        index={index}
        tabIndex={isPannelOpen || isSequenceCollapsed || index !== currentIndex ? -1 : 0}
        handleVote={this.throttleVote}
      />
    );
  }
}

const mapStateToProps = (state) => {
  const { isSequenceCollapsed } = state.sequence;
  const { isPannelOpen } = state.pannel;


  return {
    isSequenceCollapsed,
    isPannelOpen
  };
};

const mapDispatchToProps = dispatch => ({
  handleVoteOnSequence: (proposalId: string, voteKey: string, index: number) => {
    dispatch(sequenceVote(proposalId, voteKey, index));
  },
  handleUnvoteOnSequence: (proposalId: string, voteKey: string, index: number) => {
    dispatch(sequenceUnvote(proposalId, voteKey, index));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Vote);