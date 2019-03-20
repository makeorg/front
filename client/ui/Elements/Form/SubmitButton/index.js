import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  RedButtonStyle,
  IconWrapperStyle,
  GreyButtonStyle,
} from 'Client/ui/Elements/ButtonElements';

type Props = {
  /** Name of the input */
  formName: string,
  /** Icon of the input */
  icon: IconDefinition,
  /** Label of the input */
  label: string,
  /** Is input required or optional */
  id?: string,
  /** Tabindex for interactive items */
  tabIndex?: number,
  /** disabled interaction */
  disabled?: boolean,
};

export class SubmitButton extends React.Component<Props> {
  static defaultProps = {
    id: undefined,
    tabIndex: 0,
    disabled: false,
  };

  render() {
    const { formName, icon, id, label, tabIndex, disabled } = this.props;
    const ButtonStyled = disabled ? GreyButtonStyle : RedButtonStyle;
    return (
      <ButtonStyled
        type="submit"
        form={formName}
        tabIndex={tabIndex}
        id={id}
        disabled={disabled}
      >
        <IconWrapperStyle>
          <FontAwesomeIcon icon={icon} />
        </IconWrapperStyle>
        {label}
      </ButtonStyled>
    );
  }
}
