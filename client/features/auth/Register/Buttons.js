// @flow
import React from 'react';
import { useDispatch } from 'react-redux';
import { modalShowRegister } from 'Shared/store/actions/modal';
import { i18n } from 'Shared/i18n';
import {
  AuthenticationButtonWrapperStyle,
  AuthenticationEmailIconStyle,
  EmailButtonStyle,
} from '../Social/style';

export const AuthenticationRegisterButtons = () => {
  const dispatch = useDispatch();
  return (
    <AuthenticationButtonWrapperStyle data-cy-container="signup-auth-buttons">
      <EmailButtonStyle
        onClick={() => dispatch(modalShowRegister())}
        id="authentication-register-button"
      >
        <AuthenticationEmailIconStyle aria-hidden focusable="false" />
        {i18n.t('common.email')}
      </EmailButtonStyle>
    </AuthenticationButtonWrapperStyle>
  );
};
