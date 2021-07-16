// @flow
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StateRoot } from 'Shared/store/types';
import { i18n } from 'Shared/i18n';
import { UserService } from 'Shared/services/User';
import {
  trackLoginEmailSuccess,
  trackSignupEmailFailure,
} from 'Shared/services/Tracking';
import { type ErrorObjectType } from 'Shared/types/api';
import {
  FormCenterAlignStyle,
  FormRequirementsStyle,
} from 'Client/ui/Elements/Form/Styled/Content';
import { UntypedInput } from 'Client/ui/Elements/Form/UntypedInput';
import { PasswordInput } from 'Client/ui/Elements/Form/PasswordInput';
import { SubmitButton } from 'Client/ui/Elements/Form/SubmitButton';
import { LOGIN_FORMNAME } from 'Shared/constants/form';
import { FormErrors } from 'Client/ui/Elements/Form/Errors';
import {
  EmailFieldIcon,
  PasswordFieldIcon,
  SubmitThumbsUpIcon,
} from 'Shared/constants/icons';
import { throttle } from 'Shared/helpers/throttle';
import { getFieldError } from 'Shared/helpers/form';
import { loginSuccess, getUser } from 'Shared/store/actions/authentication';
import {
  LOGIN_SUCCESS_MESSAGE,
  NOTIFICATION_LEVEL_SUCCESS,
} from 'Shared/constants/notifications';
import {
  modalClose,
  modalShowDataPolicyLogin,
} from 'Shared/store/actions/modal';
import { displayNotificationBanner } from 'Shared/store/actions/notifications';

type TypeLoginValues = {
  email: string,
  password: string,
};

export const LoginForm = () => {
  const dispatch = useDispatch();
  const { privacyPolicy } = useSelector((state: StateRoot) => state.appConfig);
  const defaultFormValues = {
    email: '',
    password: '',
  };
  const [formValues, setFormValues] =
    useState<TypeLoginValues>(defaultFormValues);
  const [errors, setErrors] = useState<ErrorObjectType[]>([]);
  const emailError = getFieldError('email', errors);
  const passwordError = getFieldError('password', errors);

  /** Method called when login form succeed */
  const handleLoginSuccess = () => {
    dispatch(loginSuccess());
  };

  /** Method called to load user after login */
  const handleGetUser = () => {
    dispatch(getUser());
  };

  const handleChange = (event: SyntheticInputEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setFormValues({
      ...formValues,
      [id]: value,
    });
  };

  const handleSubmit = async (event: SyntheticEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const success = () => {
      handleLoginSuccess();
      trackLoginEmailSuccess();
      setErrors([]);
      handleGetUser();
      dispatch(
        displayNotificationBanner(
          LOGIN_SUCCESS_MESSAGE,
          NOTIFICATION_LEVEL_SUCCESS
        )
      );
    };
    const handleErrors = (serviceErrors: ErrorObjectType[]) => {
      setErrors(serviceErrors);
      trackSignupEmailFailure();
    };
    const unexpectedError = () => dispatch(modalClose());
    await UserService.checkLoginPrivacyPolicy(
      formValues.email,
      formValues.password,
      privacyPolicy,
      () =>
        dispatch(
          modalShowDataPolicyLogin(formValues.email, formValues.password)
        ),
      success,
      handleErrors,
      unexpectedError
    );
  };

  return (
    <FormCenterAlignStyle id={LOGIN_FORMNAME} onSubmit={throttle(handleSubmit)}>
      <FormRequirementsStyle>
        {i18n.t('common.form.requirements')}
      </FormRequirementsStyle>
      <FormErrors errors={errors} />
      <UntypedInput
        type="email"
        name="email"
        id="email"
        icon={EmailFieldIcon}
        value={formValues.email}
        label={i18n.t('common.form.label.email')}
        required
        error={emailError}
        handleChange={handleChange}
      />
      <PasswordInput
        name="password"
        icon={PasswordFieldIcon}
        value={formValues.password}
        label={i18n.t('common.form.label.password')}
        required
        error={passwordError}
        handleChange={handleChange}
      />
      <SubmitButton
        formName={LOGIN_FORMNAME}
        icon={SubmitThumbsUpIcon}
        id="authentication-login-submit"
        label={i18n.t('common.connexion_label')}
      />
    </FormCenterAlignStyle>
  );
};
