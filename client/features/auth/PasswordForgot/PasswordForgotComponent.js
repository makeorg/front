/* @flow */

import * as React from 'react';
import { i18n } from 'Shared/i18n';
import { type ErrorObject } from 'Shared/types/form';
import { ExtraAltParagraphStyle } from 'Client/ui/Elements/Form/Styled/Content';
import { SecondLevelTitleStyle } from 'Client/ui/Elements/TitleElements';
import * as Separators from 'Client/ui/Elements/Separators';
import { RedLinkButtonStyle } from 'Client/ui/Elements/ButtonElements';
import { ForgotPasswordFormComponent } from './Form';
import { ForgotPasswordStyle, ForgotPasswordTitleStyle } from './Styled';

type Props = {
  /** User's email */
  email: string,
  /** Array with form errors */
  errors: Array<ErrorObject>,
  /** Method called when field's value changes */
  handleChange: Function,
  /** Method called when field's value is submitted */
  handleSubmit: Function,
  /** Boolean toggled when form is successfully submitted */
  isSuccess: boolean,
  /** Boolean toggled when Sliding pannel is opened / closed */
  isPannelOpen: boolean,
  /** Method called to render Login Component in Sliding Pannel */
  handleLoginPannel: Function,
};

/**
 * Renders Forgot Password component
 */
export const PasswordForgotComponent = (props: Props) => {
  const { isSuccess, isPannelOpen, handleLoginPannel } = props;

  return (
    <ForgotPasswordStyle role="region" aria-labelledby="forgot_password_title">
      <SecondLevelTitleStyle id="forgot_password_title">
        {i18n.t('forgot_password.title')}
      </SecondLevelTitleStyle>
      <Separators.Small />
      {isSuccess ? (
        <ForgotPasswordTitleStyle>
          {i18n.t('forgot_password.success')}
        </ForgotPasswordTitleStyle>
      ) : (
        <React.Fragment>
          <ForgotPasswordTitleStyle>
            {i18n.t('forgot_password.description')}
          </ForgotPasswordTitleStyle>
          <ForgotPasswordFormComponent {...props} />
        </React.Fragment>
      )}
      <ExtraAltParagraphStyle>
        {i18n.t('forgot_password.return')}
        <RedLinkButtonStyle
          tabIndex={isPannelOpen ? 0 : -1}
          onClick={handleLoginPannel}
        >
          {i18n.t('forgot_password.login_link')}
        </RedLinkButtonStyle>
      </ExtraAltParagraphStyle>
    </ForgotPasswordStyle>
  );
};
