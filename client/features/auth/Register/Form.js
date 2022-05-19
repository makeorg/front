// @flow
import React from 'react';
import { i18n } from 'Shared/i18n';
import { type RegisterFormDataType } from 'Shared/types/form';
import { type ErrorObjectType } from 'Shared/types/api';
import {
  FormCenterAlignStyle,
  FormRequirementsStyle,
  CommentFieldStyle,
} from 'Client/ui/Elements/Form/Styled/Content';
import { getFieldError } from 'Shared/helpers/form';
import { UntypedInput } from 'Client/ui/Elements/Form/UntypedInput';
import { PasswordInput } from 'Client/ui/Elements/Form/PasswordInput';
import { REGISTER_FORMNAME } from 'Shared/constants/form';
import { SubmitButton } from 'Client/ui/Elements/Form/SubmitButton';
import { RegisterCheckBox } from 'Client/ui/Elements/Form/CheckBox/RegisterCheckbox';
import { OptinNewsletterCheckBox } from 'Client/ui/Elements/Form/CheckBox/OptinNewsletterCheckbox';
import {
  EmailFieldIcon,
  PasswordFieldIcon,
  NameFiledIcon,
  SubmitThumbsUpIcon,
} from 'Shared/constants/icons';
import { throttle } from 'Shared/helpers/throttle';
import { FormErrors } from 'Client/ui/Elements/Form/Errors';

type Props = {
  user: RegisterFormDataType,
  errors: ErrorObjectType[],
  handleChange: (event: SyntheticInputEvent<HTMLInputElement>) => any,
  handleSubmit: (event: SyntheticInputEvent<HTMLInputElement>) => any,
  handleCheckbox: (event: SyntheticInputEvent<HTMLInputElement>) => any,
  disableSubmit: boolean,
};
/**
 * Renders Register Form
 */
export const RegisterForm = ({
  user,
  errors,
  handleChange,
  handleSubmit,
  handleCheckbox,
  disableSubmit,
}: Props) => {
  const emailError = getFieldError('email', errors);
  const passwordError = getFieldError('password', errors);
  const firstnameError = getFieldError('firstname', errors);

  return (
    <FormCenterAlignStyle
      id={REGISTER_FORMNAME}
      onSubmit={throttle(handleSubmit)}
    >
      <FormRequirementsStyle>
        {i18n.t('common.form.requirements')}
      </FormRequirementsStyle>
      <FormErrors errors={errors} />
      <UntypedInput
        type="email"
        name="email"
        icon={EmailFieldIcon}
        value={user.email}
        label={i18n.t('common.form.label.email')}
        required
        error={emailError}
        handleChange={handleChange}
      />
      <PasswordInput
        name="password"
        icon={PasswordFieldIcon}
        value={user.password}
        error={passwordError}
        label={i18n.t('common.form.label.password')}
        handleChange={handleChange}
      />
      <CommentFieldStyle>
        {i18n.t('common.form.anonymous_proposals')}
      </CommentFieldStyle>
      <UntypedInput
        type="text"
        name="profile.firstname"
        icon={NameFiledIcon}
        error={firstnameError}
        value={user.profile.firstname}
        label={i18n.t('common.form.label.firstname')}
        required
        handleChange={handleChange}
      />
      <RegisterCheckBox required />
      <OptinNewsletterCheckBox handleCheckbox={handleCheckbox} />
      <SubmitButton
        formName={REGISTER_FORMNAME}
        id="authentication-register-submit"
        icon={SubmitThumbsUpIcon}
        label={i18n.t('common.register_label')}
        disabled={disableSubmit}
      />
    </FormCenterAlignStyle>
  );
};
