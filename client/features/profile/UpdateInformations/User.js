// @flow

import {
  getAgeFromDateOfBirth,
  getDateOfBirthFromAge,
} from 'Shared/helpers/date';
import {
  getFieldError,
  transformFieldValueToProfileValue,
  transformProfileToFormData,
} from 'Shared/helpers/form';
import React, { useState } from 'react';
import { UntypedInput } from 'Client/ui/Elements/Form/UntypedInput';
import { i18n } from 'Shared/i18n';
import { NameFiledIcon } from 'Shared/constants/icons';
import { type UserProfileType } from 'Shared/types/user';
import { type ErrorObjectType } from 'Shared/types/api';

type ProfileFormProps = {
  profile: UserProfileType,
  handleChange: (name: string, value: string | number | null) => void,
  errors: ErrorObjectType[],
};

export const UserForm = ({
  profile,
  handleChange,
  errors,
}: ProfileFormProps) => {
  const firstNameError = getFieldError('firstName', errors);
  const labelFirstName = `${i18n.t('common.form.label.firstname')} (${i18n.t(
    'common.form.anonymous_proposals'
  )})`;

  const [values, setValues] = useState<UserProfileType>({
    ...transformProfileToFormData(profile),
    age: getAgeFromDateOfBirth(profile.dateOfBirth),
  });

  const onChange = (event: SyntheticInputEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });

    if (name === 'age') {
      handleChange('dateOfBirth', getDateOfBirthFromAge(value));
      return;
    }

    handleChange(name, transformFieldValueToProfileValue(value));
  };

  const { firstName } = values;

  return (
    <>
      <UntypedInput
        type="text"
        name="firstName"
        icon={NameFiledIcon}
        value={firstName}
        label={labelFirstName}
        error={firstNameError}
        required
        handleChange={onChange}
      />
    </>
  );
};
