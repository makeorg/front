// @flow
import * as React from 'react';
import i18next from 'i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import {
  SmallRedButton,
  EmailButton,
  IconInButton,
  ButtonsWrapper,
  SmallButtonsWrapper
} from 'Src/components/Elements/ButtonElements';
import { SecondLevelTitle, ThirdLevelTtitle } from 'Src/components/Elements/TitleElements';
import { AltDescription, DescriptionLink } from 'Src/components/Elements/DescriptionElements';
import * as Separators from 'Src/components/Elements/Separators';
import FacebookAuthentificationButtonComponent
  from 'Src/components/Authentification/Social/FacebookAuthentification/Button';
import GoogleAuthentificationButtonComponent from 'Src/components/Authentification/Social/GoogleAuthentification/Button';
import { localizeDataPolicyLink } from 'Src/helpers/url';
import ProposalSubmitAuthentificationWrapper from '../Styled/Authentification';

type Props = {
  /** Method called to render Register Component in Sliding Pannel */
  handleRegisterClick: Function,
  /** Method called to render Register Component in Sliding Pannel */
  handleLoginClick: Function,
  /** Method called to track DescriptionLink */
  trackPersonnalDataLink: Function,
  /** Boolean toggled when Sliding pannel is opened / closed */
  isPannelOpen: boolean
}

/**
 * Renders authentification component after proposal submit button is clicked
 */
const ProposalSubmitAuthentificationComponent = (props: Props) => {
  const {
    handleRegisterClick,
    handleLoginClick,
    trackPersonnalDataLink,
    isPannelOpen
  } = props;

  return (
    <ProposalSubmitAuthentificationWrapper id="proposal-submit-authentification">
      <SecondLevelTitle>{i18next.t('authentification.title')}</SecondLevelTitle>
      <ThirdLevelTtitle>
        {i18next.t('authentification.description')}
      </ThirdLevelTtitle>
      <SmallButtonsWrapper>
        <FacebookAuthentificationButtonComponent
          tabIndex={isPannelOpen ? -1 : 0}
        />
        <GoogleAuthentificationButtonComponent
          tabIndex={isPannelOpen ? -1 : 0}
        />
        <EmailButton
          onClick={handleRegisterClick}
          tabIndex={isPannelOpen ? -1 : 0}
          id="authentification-register-button"
        >
          <IconInButton>
            <FontAwesomeIcon aria-hidden icon={faEnvelope} />
          </IconInButton>
          {i18next.t('common.email')}
        </EmailButton>
      </SmallButtonsWrapper>
      <AltDescription>
        {i18next.t('authentification.commitment')}
        <DescriptionLink
          href={localizeDataPolicyLink()}
          target="_blank"
          tabIndex={isPannelOpen ? -1 : 0}
          onClick={trackPersonnalDataLink}
        >
          {i18next.t('authentification.personal_data')}
          <IconInButton>
            <FontAwesomeIcon aria-label={i18next.t('common.open_new_window')} icon={faExternalLinkAlt} />
          </IconInButton>
        </DescriptionLink>
      </AltDescription>
      <Separators.Small aria-hidden />
      <SecondLevelTitle>{i18next.t('login.title')}</SecondLevelTitle>
      <ButtonsWrapper>
        <SmallRedButton
          onClick={handleLoginClick}
          tabIndex={isPannelOpen ? -1 : 0}
          id="authentification-login-button"
        >
          {i18next.t('login.button_connect')}
        </SmallRedButton>
      </ButtonsWrapper>
    </ProposalSubmitAuthentificationWrapper>
  );
};

export default ProposalSubmitAuthentificationComponent;