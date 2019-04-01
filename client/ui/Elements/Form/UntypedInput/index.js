import * as React from 'react';
import { MiddleFakeInputStyle, BasicInputStyle } from '../Styled/Input';
import { CenterInputIconStyle } from '../Styled/Icons';
import { FormLabel } from '../Styled/Content';

type Props = {
  /** Type of the input */
  type: string,
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
  /** Array containing form errors */
  errors?: Array<ErrorObject>,
  /** Is input required or optional */
  required?: boolean,
};

export class UntypedInput extends React.Component<Props> {
  static defaultProps = {
    required: false,
    errors: undefined,
  };

  render() {
    const {
      type,
      name,
      icon,
      errors,
      value,
      label,
      required,
      handleChange,
    } = this.props;

    return (
      <MiddleFakeInputStyle hasError={errors}>
        <CenterInputIconStyle htmlFor={name} aria-label={label}>
          <span aria-hidden>{icon}</span>
        </CenterInputIconStyle>
        <BasicInputStyle
          type={type}
          name={name}
          id={name}
          value={value}
          aria-required={required}
          required={required}
          onChange={handleChange}
        />
        <FormLabel>{label}</FormLabel>
      </MiddleFakeInputStyle>
    );
  }
}
