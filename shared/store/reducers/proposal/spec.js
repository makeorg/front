/* @flow */

import { proposal } from './index';

describe('Proposal reducer', () => {
  let previousState;
  beforeEach(() => {
    previousState = {
      error: undefined,
      data: undefined,
      popularProposals: [],
    };
  });

  it('Return the initial state', () => {
    expect(proposal(undefined, {})).toEqual(previousState);
  });
});
