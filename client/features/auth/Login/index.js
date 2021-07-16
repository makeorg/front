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
import {
  SmallSeparatorWithMarginStyle,
  SeparatorWrapperStyle,
  TextSeparatorStyle,
  SeparatorStyle,
} from 'Client/ui/Elements/Separators';
import { RedLinkButtonStyle } from 'Client/ui/Elements/Buttons/style';
import { LoginForm } from './Form';
import { AuthenticationWrapperStyle, AuthenticationTitleStyle } from '../style';
import { AuthenticationButtonWrapperStyle } from '../Social/style';
import { FacebookAuthentication } from '../Social/FacebookAuthentication';
import { GoogleAuthentication } from '../Social/GoogleAuthentication';

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
        {i18n.t('login.social_connect')}
      </FourthLevelTitleStyle>
      <AuthenticationButtonWrapperStyle className="small-wrapper">
        <FacebookAuthentication />
        <GoogleAuthentication />
      </AuthenticationButtonWrapperStyle>
      <SeparatorWrapperStyle className="no-margin-top">
        <SeparatorStyle className="no-margin-top" />
        <TextSeparatorStyle>{i18n.t('login.or')}</TextSeparatorStyle>
        <SeparatorStyle className="no-margin-top" />
      </SeparatorWrapperStyle>
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
        <RedLinkButtonStyle
          onClick={handleRegisterModal}
          type="button"
          data-cy-button="register"
        >
          {i18n.t('login.registration_link')}
        </RedLinkButtonStyle>
      </ExtraAltParagraphStyle>
    </AuthenticationWrapperStyle>
  );
};
