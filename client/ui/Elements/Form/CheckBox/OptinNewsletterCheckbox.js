// @flow
import React, { useState } from 'react';
import { SvgCheck } from 'Client/ui/Svg/elements';
import { i18n } from 'Shared/i18n';
import {
  HiddenCheckbox,
  StyledCheckbox,
  CheckboxWrapper,
  CheckboxLabelStyle,
} from '../Styled/CheckBox';

type Props = {
  handleCheckbox: (fieldName: string, value: boolean) => void,
};

export const OptinNewsletterCheckBox: React.FC<Props> = ({
  handleCheckbox,
}) => {
  const [checked, setIsChecked] = useState<boolean>(false);

  const handleChange = () => {
    handleCheckbox('optInNewsletter', !checked);
    setIsChecked(!checked);
  };
  return (
    <CheckboxWrapper>
      <CheckboxLabelStyle isRegister>
        <HiddenCheckbox
          checked={checked}
          onChange={handleChange}
          id="optInNewsletter"
        />
        <StyledCheckbox checked={checked}>
          <SvgCheck />
        </StyledCheckbox>
        <span>{i18n.t('legal_consent.optin_newsletter')}</span>
      </CheckboxLabelStyle>
    </CheckboxWrapper>
  );
};
