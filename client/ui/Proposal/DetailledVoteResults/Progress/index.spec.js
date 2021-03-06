import React from 'react';
import renderer from 'react-test-renderer';
import { proposalTypeFixture } from 'Shared/types/__fixtures__/proposal.fixture';
import { VoteProgress } from './index';

jest.mock('Client/ui/Elements/AccessibilityElements', () => ({
  ScreenReaderItemStyle: 'ScreenReaderItemStyle',
}));

jest.mock('../style', () => ({
  VoteProgressContainerStyle: 'VoteProgressContainerStyle',
  VoteProgressWrapperStyle: 'VoteProgressWrapperStyle',
  VoteCounterStyle: 'VoteCounterStyle',
  VoteProgressItemStyle: 'VoteProgressItemStyle',
}));

describe('VoteProgress', () => {
  const { votes, id: proposalId } = proposalTypeFixture;

  it('must match the snapshot with default Props', () => {
    const component = renderer
      .create(<VoteProgress votes={votes} proposalId={proposalId} />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
