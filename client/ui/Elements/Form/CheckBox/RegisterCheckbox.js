// @flow
import React, { useState } from 'react';
import { SvgCheck } from 'Client/ui/Svg/elements';
import { i18n } from 'Shared/i18n';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import { DATA_POLICY_LINK } from 'Shared/constants/url';
import {
  HiddenCheckbox,
  StyledCheckbox,
  CheckboxWrapper,
  CheckboxLabelStyle,
  NewWindowIconStyle,
  DataPolicyNewWindowLinkStyle,
} from '../Styled/CheckBox';

export const RegisterCheckBox = () => {
  const [checked, setIsChecked] = useState<boolean>(false);

  const handleChange = () => {
    setIsChecked(!checked);
  };

  return (
    <CheckboxWrapper>
      <CheckboxLabelStyle isRegister>
        <HiddenCheckbox required checked={checked} onChange={handleChange} />
        <StyledCheckbox checked={checked}>
          <SvgCheck />
        </StyledCheckbox>
        <span>
          {i18n.t('legal_consent.privacy_policy_text')}
          <DataPolicyNewWindowLinkStyle
            target="_blank"
            href={DATA_POLICY_LINK}
            rel="noopener noreferrer"
          >
            {i18n.t('legal_consent.privacy_policy')}
            <NewWindowIconStyle />
            <ScreenReaderItemStyle>
              {i18n.t('common.open_new_window')}
            </ScreenReaderItemStyle>
          </DataPolicyNewWindowLinkStyle>
          {i18n.t('legal_consent.privacy_make')}
        </span>
      </CheckboxLabelStyle>
    </CheckboxWrapper>
  );
};
