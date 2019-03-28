import * as React from 'react';
import { MiddleFakeInputStyle, BasicInputStyle } from '../Styled/Input';
import { CenterInputIconStyle } from '../Styled/Icons';
import { PasswordButton } from './Button';

type Props = {
  /** Name of the input */
  name: string,
  /** Icon of the input */
  icon: IconDefinition,
  /** Value of the input */
  value: string,
  /** Label of the input */
  label: string,
  /** Mehtod called on change event */
  handleChange: (event: SyntheticInputEvent<HTMLInputElement>) => void,
  /** Mehtod called on PasswordButton click */
  toggleIsPasswordDisplayed: (
    event: SyntheticInputEvent<HTMLInputElement>
  ) => void,
  /** Boolean toggled when password is shown / hidden */
  isPasswordDisplayed: boolean,
  /** Array containing form errors */
  errors: Array<ErrorObject>,
  /** Is input required or optional */
  required: boolean,
};

export const PasswordInputComponent = (props: Props) => {
  const {
    name,
    icon,
    errors,
    value,
    label,
    required,
    handleChange,
    isPasswordDisplayed,
    toggleIsPasswordDisplayed,
  } = props;

  return (
    <MiddleFakeInputStyle hasError={errors}>
      <CenterInputIconStyle htmlFor={name} aria-label={label}>
        <span aria-hidden>{icon}</span>
      </CenterInputIconStyle>
      <BasicInputStyle
        type={isPasswordDisplayed ? 'text' : 'password'}
        name={name}
        id={name}
        placeholder={label}
        value={value}
        aria-required={required}
        required={required}
        onChange={handleChange}
      />
      <PasswordButton
        toggleIsPasswordDisplayed={toggleIsPasswordDisplayed}
        isPasswordDisplayed={isPasswordDisplayed}
      />
    </MiddleFakeInputStyle>
  );
};
