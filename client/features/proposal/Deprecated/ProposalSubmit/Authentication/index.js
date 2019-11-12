// @flow
import React, { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { i18n } from 'Shared/i18n';
import {
  trackDisplayAuthenticationForm,
  trackClickPersonnalDataLink,
} from 'Shared/services/Tracking';
import {
  RedButtonStyle,
  ButtonsWrapperStyle,
} from 'Client/ui/Elements/Buttons/style';
import {
  FourthLevelTitleStyle,
  ThirdLevelTitleStyle,
} from 'Client/ui/Elements/TitleElements';
import { CenterParagraphStyle } from 'Client/ui/Elements/ParagraphElements';
import { modalShowLogin } from 'Shared/store/actions/modal';
import { AuthenticationRegisterButtons } from 'Client/features/auth/Register/Buttons';
import { DATA_POLICY_LINK } from 'Shared/constants/url';
import {
  DeprecatedProposalSubmitAuthenticationWrapperStyle,
  ProposalSubmitSeparatorStyle,
} from '../style';

/**
 * Renders authentication component after proposal submit button is clicked
 */
export const DeprecatedProposalSubmitAuthentication = () => {
  const authetificationRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    trackDisplayAuthenticationForm();
  }, []);

  useEffect(() => {
    if (authetificationRef.current) {
      authetificationRef.current.focus();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authetificationRef.current]);

  return (
    <DeprecatedProposalSubmitAuthenticationWrapperStyle
      id="proposal-submit-authentication"
      ref={authetificationRef}
      tabIndex={0}
    >
      <ThirdLevelTitleStyle>
        {i18n.t('authentication.title')}
      </ThirdLevelTitleStyle>
      <FourthLevelTitleStyle>
        {i18n.t('authentication.description')}
      </FourthLevelTitleStyle>
      <AuthenticationRegisterButtons />
      <CenterParagraphStyle>
        {i18n.t('authentication.commitment')}
        <a
          target="_blank"
          href={DATA_POLICY_LINK}
          rel="noopener noreferrer"
          onClick={() => trackClickPersonnalDataLink()}
        >
          {i18n.t('authentication.personal_data')}
        </a>
      </CenterParagraphStyle>
      <ProposalSubmitSeparatorStyle />
      <ThirdLevelTitleStyle>{i18n.t('login.title')}</ThirdLevelTitleStyle>
      <ButtonsWrapperStyle>
        <RedButtonStyle
          onClick={() => dispatch(modalShowLogin())}
          id="authentication-login-button"
          type="button"
        >
          {i18n.t('login.button_connect')}
        </RedButtonStyle>
      </ButtonsWrapperStyle>
    </DeprecatedProposalSubmitAuthenticationWrapperStyle>
  );
};
