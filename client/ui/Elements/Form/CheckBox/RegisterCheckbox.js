// @flow
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { SvgCheck } from 'Client/ui/Svg/elements';
import { i18n } from 'Shared/i18n';
import { getDataPageLink } from 'Shared/helpers/url';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import {
  HiddenCheckbox,
  StyledCheckbox,
  CheckboxWrapper,
  CheckboxLabelStyle,
  NewWindowIconStyle,
  DataPolicyNewWindowLinkStyle,
} from '../Styled/CheckBox';

type Props = {
  /** Method called on change legal field */
  handleLegalField: (fieldName: string, value: boolean) => any,
  /** Is input required or optional */
  required?: boolean,
};
export const RegisterCheckBox = ({
  handleLegalField,
  required = false,
}: Props) => {
  const [checked, setIsChecked] = useState<boolean>(false);
  const { country, language } = useSelector(
    (state: StateRoot) => state.appConfig
  );

  const handleChange = () => {
    handleLegalField('approvePrivacyPolicy', !checked);
    setIsChecked(!checked);
  };

  return (
    <CheckboxWrapper>
      <CheckboxLabelStyle noFontSizeChange>
        <HiddenCheckbox
          required={required}
          checked={checked}
          onChange={handleChange}
          id="registerCheckbox"
        />
        <StyledCheckbox checked={checked}>
          <SvgCheck />
        </StyledCheckbox>
        <span>
          {i18n.t('legal_consent.privacy_policy_text')}
          <DataPolicyNewWindowLinkStyle
            href={getDataPageLink(country, language)}
            target="_blank"
            rel="noopener"
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
