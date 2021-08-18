// @flow
import React from 'react';
import { useDispatch } from 'react-redux';
import { modalShowRegister } from 'Shared/store/actions/modal';
import { i18n } from 'Shared/i18n';
import {
  SeparatorWrapperStyle,
  TextSeparatorStyle,
  SeparatorStyle,
} from 'Client/ui/Elements/Separators';
import { FacebookAuthentication } from '../Social/FacebookAuthentication';
import { GoogleAuthentication } from '../Social/GoogleAuthentication';
import {
  AuthenticationButtonWrapperStyle,
  AuthenticationEmailIconStyle,
  EmailButtonStyle,
  SocialButtonLabelStyle,
} from '../Social/style';

export const AuthenticationRegisterButtons = () => {
  const dispatch = useDispatch();
  return (
    <AuthenticationButtonWrapperStyle data-cy-container="signup-auth-buttons">
      <GoogleAuthentication />
      <FacebookAuthentication />
      <SeparatorWrapperStyle className="no-margin-top no-margin-bottom">
        <SeparatorStyle className="no-margin-top" />
        <TextSeparatorStyle>{i18n.t('login.or')}</TextSeparatorStyle>
        <SeparatorStyle className="no-margin-top" />
      </SeparatorWrapperStyle>
      <EmailButtonStyle
        onClick={() => dispatch(modalShowRegister())}
        id="authentication-register-button"
        type="button"
      >
        <AuthenticationEmailIconStyle
          aria-hidden
          focusable="false"
          type="button"
        />
        <SocialButtonLabelStyle>
          {i18n.t('common.social_login.email_register')}
        </SocialButtonLabelStyle>
      </EmailButtonStyle>
    </AuthenticationButtonWrapperStyle>
  );
};
