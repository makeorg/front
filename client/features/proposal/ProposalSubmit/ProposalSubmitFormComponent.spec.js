/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import { ProposalSubmitFormComponent } from './ProposalSubmitFormComponent';
import { ProposalSubmitButtonComponent } from './Button';
import {
  ProposalSubmitFormStyle,
  ProposalLabelStyle,
  ProposalTextareaStyle,
  ProposalCharLimitStyle,
} from './Styled';

jest.mock('Shared/constants/proposal', () => ({
  getBaitText: () => 'should',
  MAX_PROPOSAL_LENGTH: 35,
}));

describe('ProposalSubmitFormComponent', () => {
  it('Renders and Props', () => {
    const props = {
      canSubmit: true,
      length: 15,
    };
    const wrapper = shallow(<ProposalSubmitFormComponent {...props} />);

    expect(wrapper.find(ProposalSubmitFormStyle)).toHaveLength(1);
    expect(wrapper.find(ProposalLabelStyle)).toHaveLength(1);
    expect(wrapper.find(ProposalLabelStyle).prop('htmlFor')).toBe('proposal');
    expect(wrapper.find(ProposalTextareaStyle)).toHaveLength(1);
    expect(wrapper.find(ProposalTextareaStyle).prop('autoCapitalize')).toBe(
      'none'
    );
    expect(wrapper.find(ProposalTextareaStyle).prop('autoComplete')).toBe(
      'off'
    );
    expect(wrapper.find(ProposalTextareaStyle).prop('spellCheck')).toBe(true);
    expect(wrapper.find(ProposalTextareaStyle).prop('maxLength')).toBe(
      35 - 'should'.length
    );
    expect(wrapper.find(ProposalLabelStyle).prop('htmlFor')).toBe('proposal');
    expect(wrapper.find(ProposalCharLimitStyle)).toHaveLength(1);
    expect(
      wrapper
        .find(ProposalCharLimitStyle)
        .first()
        .text()
    ).toBe(
      '15proposal_submit.entred_chars/common.from140proposal_submit.available_chars'
    );
    expect(wrapper.find(ProposalSubmitButtonComponent)).toHaveLength(1);
    expect(wrapper.find(ProposalSubmitButtonComponent).prop('canSubmit')).toBe(
      true
    );
  });
});
