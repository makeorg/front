// @flow
import React from 'react';
import { useDispatch } from 'react-redux';
import { i18n } from 'Shared/i18n';
import {
  modalShowRegister,
  modalShowForgotPassword,
} from 'Shared/store/actions/modal';
import { FourthLevelTitleStyle } from 'Client/ui/Elements/TitleElements';
import {
  ExtraParagraphStyle,
  ExtraAltParagraphStyle,
} from 'Client/ui/Elements/Form/Styled/Content';
import { SmallSeparatorWithMarginStyle } from 'Client/ui/Elements/Separators';
import { RedLinkButtonStyle } from 'Client/ui/Elements/Buttons/style';
import { LoginForm } from './Form';
import { AuthenticationWrapperStyle, AuthenticationTitleStyle } from '../style';

export const Login = () => {
  const dispatch = useDispatch();

  const handleRegisterModal = () => {
    dispatch(modalShowRegister());
  };

  const handleForgotPasswordModal = () => {
    dispatch(modalShowForgotPassword());
  };

  return (
    <AuthenticationWrapperStyle
      aria-labelledby="login_title"
      data-cy-container="authentication"
    >
      <AuthenticationTitleStyle id="login_title">
        {i18n.t('login.title')}
      </AuthenticationTitleStyle>
      <SmallSeparatorWithMarginStyle />
      <FourthLevelTitleStyle as="h3">
        {i18n.t('login.email_connect')}
      </FourthLevelTitleStyle>
      <LoginForm />
      <ExtraParagraphStyle>
        {i18n.t('login.forgot_password_title')}
        <RedLinkButtonStyle onClick={handleForgotPasswordModal} type="button">
          {i18n.t('login.forgot_password_link')}
        </RedLinkButtonStyle>
      </ExtraParagraphStyle>
      <ExtraAltParagraphStyle>
        {i18n.t('login.registration_title')}
        <RedLinkButtonStyle onClick={handleRegisterModal} type="button">
          {i18n.t('login.registration_link')}
        </RedLinkButtonStyle>
      </ExtraAltParagraphStyle>
    </AuthenticationWrapperStyle>
  );
};
