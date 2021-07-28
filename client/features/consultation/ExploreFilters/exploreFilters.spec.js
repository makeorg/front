// @flow
import React from 'react';
import { FilterAndSort } from 'Client/features/consultation/ExploreFilters';
import { shallow } from 'enzyme';

describe('Sort and filters on explore page', () => {
  const keywords = [
    { key: 'foo', label: 'foo' },
    { key: 'bar', label: 'bar' },
  ];
  const filterAndSortValues = {
    keywords: undefined,
    sortAlgorithm: undefined,
    feedAlgorithm: 'RECENT',
    isNotVoted: false,
    userType: undefined,
  };
  const wrapper = shallow(
    <FilterAndSort
      keywords={keywords}
      filterAndSortValues={filterAndSortValues}
    />
  );

  it('should render one form', () => {
    expect(wrapper.find('form')).toHaveLength(1);
  });

  it('should render 7 different inputs', () => {
    expect(wrapper.find('input')).toHaveLength(7);
  });

  it('should render 2 keywords input', () => {
    expect(wrapper.find('[name="keywords"]')).toHaveLength(2);
  });

  it('should render 1 input for recent proposals', () => {
    expect(wrapper.find('[name="recent"]')).toHaveLength(1);
  });

  it('should render 1 input for popular proposals', () => {
    expect(wrapper.find('[name="popular"]')).toHaveLength(1);
  });

  it('should render 1 input for controversy proposals', () => {
    expect(wrapper.find('[name="controversy"]')).toHaveLength(1);
  });

  it('should render one IsNotVoted input', () => {
    expect(wrapper.find('[name="isNotVoted"]')).toHaveLength(1);
  });

  it('should render one userType input', () => {
    expect(wrapper.find('[name="userType"]')).toHaveLength(1);
  });
});
