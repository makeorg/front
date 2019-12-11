/* @flow */

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actionTypes from 'Shared/store/actionTypes';
import * as Tracking from 'Shared/services/Tracking';

import * as actions from './index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore();

describe('Sequence Actions', () => {
  beforeEach(() => {
    jest.spyOn(Tracking, 'track');
    jest.spyOn(Tracking, 'trackVote');
    jest.spyOn(Tracking, 'trackFirstVote');

    store.clearActions();
  });

  afterEach(() => {
    Tracking.track.mockRestore();
    Tracking.trackVote.mockRestore();
    Tracking.trackFirstVote.mockRestore();
  });

  it('Creates SEQUENCE_COLLAPSE when calling action', () => {
    const expectedActions = [
      {
        type: actionTypes.SEQUENCE_COLLAPSE,
      },
    ];

    store.dispatch(actions.sequenceCollapse());
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('Creates SEQUENCE_PROPOSAL_VOTE when calling action', () => {
    const proposalId = 'foo';
    const questionSlug = 'question-slug';
    const expectedActions = [
      {
        type: actionTypes.SEQUENCE_PROPOSAL_VOTE,
        payload: { proposalId, questionSlug },
      },
    ];

    store.dispatch(actions.voteProposal(proposalId, questionSlug));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('Creates SEQUENCE_PROPOSAL_UNVOTE when calling action', () => {
    const proposalId = 'foo';
    const questionSlug = 'question-slug';
    const expectedActions = [
      {
        type: actionTypes.SEQUENCE_PROPOSAL_UNVOTE,
        payload: { proposalId, questionSlug },
      },
    ];

    store.dispatch(actions.unvoteProposal(proposalId, questionSlug));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('Track sequence vote when first vote', () => {
    const proposalId = 'foo';
    const voteKey = 'bar';
    const index = 0;
    const questionId = 'baz';
    const questionSlug = 'baz-slug';
    const newStore = mockStore({
      sequence: { votedProposalIds: {}, questionId },
    });

    const expectedActions = [
      {
        type: actionTypes.SEQUENCE_PROPOSAL_VOTE,
        payload: { proposalId, questionSlug },
      },
    ];

    newStore.dispatch(
      actions.sequenceVote(proposalId, questionSlug, voteKey, index)
    );

    expect(Tracking.trackFirstVote).toHaveBeenNthCalledWith(
      1,
      proposalId,
      voteKey,
      index
    );
    expect(newStore.getActions()).toEqual(expectedActions);
  });

  it('Track sequence vote when second vote', () => {
    const proposalId = 'foo';
    const voteKey = 'bar';
    const index = 0;
    const questionId = 'baz';
    const questionSlug = 'baz-slug';
    const newStore = mockStore({
      sequence: { votedProposalIds: { [questionSlug]: ['fooId'] }, questionId },
    });

    const expectedActions = [
      {
        type: actionTypes.SEQUENCE_PROPOSAL_VOTE,
        payload: { proposalId, questionSlug },
      },
    ];

    newStore.dispatch(
      actions.sequenceVote(proposalId, questionSlug, voteKey, index)
    );

    expect(Tracking.trackFirstVote).not.toHaveBeenCalled();
    expect(newStore.getActions()).toEqual(expectedActions);
  });
});
