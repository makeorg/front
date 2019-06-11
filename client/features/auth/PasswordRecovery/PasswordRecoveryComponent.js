/* @flow */

import * as React from 'react';
import { i18n } from 'Shared/i18n';
import { SecondLevelTitleStyle } from 'Client/ui/Elements/TitleElements';
import { SmallSeparatorWithMarginStyle } from 'Client/ui/Elements/Separators';
import { PasswordRecoveryFormComponent } from './Form';
import { PasswordRecoveryStyle, PasswordRecoveryTitleStyle } from './Styled';

export const PasswordRecoverySuccess = () => (
  <React.Fragment>
    <SecondLevelTitleStyle id="password_recovery_title">
      {i18n.t('reset_password.success.title')}
    </SecondLevelTitleStyle>
  </React.Fragment>
);

type Props = {
  /** User's password */
  password: string,
  /** Array with form errors */
  /** Boolean to check if form contain errors */
  error: boolean,
  /** Error message to display to the user */
  errorMessage: string,
  /** Boolean toggled when Form is succesfully submitted */
  updated: boolean,
  /** Boolean toggled when form is successfully submitted */
  updated: boolean,
  /** Method called when field's value changes */
  handleChange: (event: SyntheticInputEvent<HTMLInputElement>) => void,
  /** Method called when field's value is submitted */
  handleSubmit: (event: SyntheticEvent<HTMLButtonElement>) => void,
};

/**
 * Renders Password Recovery component
 */
export const PasswordRecoveryComponent = (props: Props) => {
  const { updated } = props;

  return (
    <PasswordRecoveryStyle aria-labelledby="password_recovery_title">
      {updated ? (
        <PasswordRecoverySuccess />
      ) : (
        <React.Fragment>
          <SecondLevelTitleStyle id="password_recovery_title">
            {i18n.t('reset_password.title')}
          </SecondLevelTitleStyle>
          <SmallSeparatorWithMarginStyle />
          <React.Fragment>
            <PasswordRecoveryTitleStyle>
              {i18n.t('reset_password.info')}
            </PasswordRecoveryTitleStyle>
            <PasswordRecoveryFormComponent {...props} />
          </React.Fragment>
        </React.Fragment>
      )}
    </PasswordRecoveryStyle>
  );
};
