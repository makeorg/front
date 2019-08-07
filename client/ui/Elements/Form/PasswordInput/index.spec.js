import React from 'react';
import snapshotDiff from 'snapshot-diff';
import renderer from 'react-test-renderer';
import { PasswordInput } from './index';

jest.mock('./Button', () => ({
  PasswordButton: 'PasswordButton',
}));

jest.mock('Client/ui/Elements/Form/Styled/Input', () => ({
  BasicInputStyle: 'BasicInputStyle',
}));

jest.mock('Client/ui/Elements/Form/Styled/Content', () => ({
  MiddleFakeFieldStyle: 'MiddleFakeFieldStyle',
  FloatingLabelStyle: 'FloatingLabelStyle',
  FieldWrapperStyle: 'FieldWrapperStyle',
}));

jest.mock('Client/ui/Elements/Form/Styled/Icons', () => ({
  CenterInputIconStyle: 'CenterInputIconStyle',
}));

describe('PasswordInput', () => {
  const defaultProps = {
    type: 'foo',
    name: 'bar',
    icon: 'SvgLock',
    value: 'baz',
    label: 'qux',
    handleChange: () => {},
    togglePasswordIsDisplayed: () => {},
  };

  it('must match the snapshot with default Props', () => {
    const component = renderer
      .create(<PasswordInput {...defaultProps} />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
  it('must return the diff between snapshot when password is displayed vs hidden', () => {
    const ShowPassword = renderer
      .create(<PasswordInput {...defaultProps} passwordIsDisplayed />)
      .toJSON();
    const HidePassword = renderer
      .create(<PasswordInput {...defaultProps} passwordIsDisplayed={false} />)
      .toJSON();
    expect(snapshotDiff(ShowPassword, HidePassword)).toMatchSnapshot();
  });

  it('must return the diff between snapshot when password is required or optionnal', () => {
    const RequiredPassword = renderer
      .create(<PasswordInput {...defaultProps} required />)
      .toJSON();
    const OptionnalPassword = renderer
      .create(<PasswordInput {...defaultProps} />)
      .toJSON();
    expect(snapshotDiff(RequiredPassword, OptionnalPassword)).toMatchSnapshot();
  });
});