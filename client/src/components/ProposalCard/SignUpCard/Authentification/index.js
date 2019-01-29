/* @flow */
import * as React from 'react';
import i18next from 'i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  EmailButton,
  IconInButton,
  SmallButtonsWrapper,
  RedLinkButton
} from 'Src/components/Elements/ButtonElements';
import { CenterColumn } from 'Src/components/Elements/FlexElements';
import { ExtraAltParagraph } from 'Src/components/Elements/Form';
import FacebookAuthentificationButtonComponent
  from 'Src/components/Authentification/Social/FacebookAuthentification/Button';
import GoogleAuthentificationButtonComponent from 'Src/components/Authentification/Social/GoogleAuthentification/Button';

type Props = {
  /** Method called to render Register Pannel */
  handleRegisterClick: () => void,
  /** Method called to render Login Pannel */
  handleLoginClick: () => void,
  /** Tabindex for interactive items */
  tabIndex: number
}

/**
 * Renders Authentification in Sign Up Card
 */
const SignUpCardAuthentificationComponent = (props: Props) => {
  const {
    handleRegisterClick,
    handleLoginClick,
    tabIndex
  } = props;

  return (
    <CenterColumn>
      <SmallButtonsWrapper>
        <FacebookAuthentificationButtonComponent
          tabIndex={tabIndex}
        />
        <GoogleAuthentificationButtonComponent
          tabIndex={tabIndex}
        />
        <EmailButton
          onClick={handleRegisterClick}
          tabIndex={tabIndex}
          id="authentification-register-button"
        >
          <IconInButton>
            <FontAwesomeIcon aria-hidden icon={faEnvelope} />
          </IconInButton>
          {i18next.t('common.email')}
        </EmailButton>
      </SmallButtonsWrapper>
      <ExtraAltParagraph>
        {i18next.t('register.login_title')}
        <RedLinkButton
          tabIndex={tabIndex}
          onClick={handleLoginClick}
        >
          {i18next.t('register.login_link')}
        </RedLinkButton>
      </ExtraAltParagraph>
    </CenterColumn>
  );
};

export default SignUpCardAuthentificationComponent;