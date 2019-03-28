import * as React from 'react';
import { SvgCheck } from 'Client/ui/Svg/elements';
import {
  CheckboxWrapper,
  FakeCheckboxInputStyle,
  CheckboxLabelStyle,
} from '../Styled/CheckBox';
import { CheckboxIconStyle } from '../Styled/Icons';

type Props = {
  /** Name of the checkbox */
  id: string,
  /** Name of the checkbox */
  name: string,
  /** Value of the checkbox */
  value: string,
  /** Label of the checkbox */
  label: string,
  /** handleLabelClick of the checkbox */
  handleLabelClick: (event: SyntheticEvent<HTMLLabelElement>) => void,
  /** Label of the checkbox */
  handleEnterKey: (event: SyntheticEvent<HTMLLabelElement>) => void,
  /** Default value of the checkbox */
  isChecked: boolean,
  /** Is input required or optional */
  required: boolean,
};

export const CheckBoxComponent = (props: Props) => {
  const {
    name,
    id,
    value,
    label,
    required,
    isChecked,
    handleLabelClick,
    handleEnterKey,
  } = props;

  return (
    <CheckboxWrapper>
      <input
        type="checkbox"
        id={id}
        name={name}
        vale={value}
        required={required}
        checked={isChecked}
        hidden
      />
      <CheckboxLabelStyle
        htmlFor={id}
        onClick={handleLabelClick}
        onKeyPress={handleEnterKey}
      >
        <FakeCheckboxInputStyle aria-hidden>
          {isChecked ? (
            <CheckboxIconStyle tabIndex="-1">
              <SvgCheck />
            </CheckboxIconStyle>
          ) : null}
        </FakeCheckboxInputStyle>
        {label}
      </CheckboxLabelStyle>
    </CheckboxWrapper>
  );
};
