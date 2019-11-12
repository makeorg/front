// @flow
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { i18n } from 'Shared/i18n';
import { UserService } from 'Shared/services/User';
import { SubmitButton } from 'Client/ui/Elements/Form/SubmitButton';
import { PROFILE_UPDATE_FORMNAME } from 'Shared/constants/form';
import { TileWithTitle } from 'Client/ui/Elements/TileWithTitle';
import { SubmitSaveIcon } from 'Shared/constants/icons';
import { type UserType } from 'Shared/types/user';
import { type ErrorObjectType } from 'Shared/types/api';
import { getUser } from 'Shared/store/actions/authentication';
import { FormErrors } from 'Client/ui/Elements/Form/Errors';
import {
  FormRequirementsStyle,
  FormLeftAlignStyle,
} from 'Client/ui/Elements/Form/Styled/Content';
import { throttle } from 'Shared/helpers/throttle';
import { FormSuccessMessage } from 'Client/ui/Elements/Form/Success';
import {
  TYPE_PERSONALITY,
  TYPE_ORGANISATION,
  TYPE_USER,
} from 'Shared/constants/user';
import { getAgeFromDateOfBirth } from 'Shared/helpers/date';
import { OrganisationService } from 'Shared/services/Organisation';
import { PersonalityService } from 'Shared/services/Personality';
import { LegalConsent } from 'Client/features/auth/Register/LegalConsent';
import { CenterColumnStyle } from 'Client/ui/Elements/FlexElements';
import { OrganisationForm } from './Organisation';
import { PersonalityForm } from './Personality';
import { UserForm } from './User';

type Props = {
  /** User */
  user: UserType,
};

export const UpdateInformations = ({ user }: Props) => {
  const dispatch = useDispatch();

  let updateProfile;
  switch (user.userType) {
    case TYPE_ORGANISATION:
      updateProfile = OrganisationService.update;
      break;
    case TYPE_PERSONALITY:
      updateProfile = PersonalityService.update;
      break;
    case TYPE_USER:
      updateProfile = UserService.update;
      break;
    default:
      throw new Error(`Unexpected user type "${user.userType}"`);
  }

  const [profile, setProfileValues] = useState<Object>({
    ...user.profile,
    legalMinorConsent: false,
    legalAdvisorApproval: false,
  });
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState<boolean>(false);
  const [canSubmit, setCanSubmit] = useState<boolean>(false);
  const [errors, setErrors] = useState<ErrorObjectType[]>([]);
  const [needLegalConsent, displayLegalConsent] = useState<boolean>(false);
  const userIsAChild =
    user.userType === TYPE_USER &&
    // $FlowFixMe
    getAgeFromDateOfBirth(profile.dateOfBirth) < 15;

  const handleChange = (
    name: string,
    value: string | number | boolean | null
  ) => {
    setProfileValues({ ...profile, [name]: value });
    setCanSubmit(true);
    setIsSubmitSuccessful(false);
  };

  const handleSubmit = async (
    event: SyntheticInputEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();

    setCanSubmit(false);
    const success = () => {
      setIsSubmitSuccessful(true);
      setErrors([]);
      dispatch(getUser());
    };
    const handleErrors = (serviceErrors: ErrorObjectType[]) => {
      setIsSubmitSuccessful(false);
      setErrors(serviceErrors);
    };

    displayLegalConsent(false);

    const { userId } = user;
    await updateProfile(userId, profile, success, handleErrors);
  };

  const toggleLegalConsent = (event: SyntheticInputEvent<any>) => {
    event.preventDefault();
    displayLegalConsent(!needLegalConsent);
  };

  return (
    <TileWithTitle title={i18n.t('profile.informations_update.title')}>
      <CenterColumnStyle>
        <LegalConsent
          needLegalConsent={needLegalConsent}
          handleLegalField={handleChange}
          handleSubmit={throttle(handleSubmit)}
          toggleLegalConsent={toggleLegalConsent}
        />
      </CenterColumnStyle>
      <FormLeftAlignStyle
        id={PROFILE_UPDATE_FORMNAME}
        name={PROFILE_UPDATE_FORMNAME}
        onSubmit={userIsAChild ? toggleLegalConsent : throttle(handleSubmit)}
        className={needLegalConsent && 'hidden'}
      >
        <FormRequirementsStyle>
          {i18n.t('common.form.requirement')}
        </FormRequirementsStyle>
        <FormErrors errors={errors} />
        {user.userType === TYPE_ORGANISATION && (
          <OrganisationForm
            profile={user.profile}
            handleChange={handleChange}
            errors={errors}
          />
        )}
        {user.userType === TYPE_PERSONALITY && (
          <PersonalityForm
            profile={user.profile}
            handleChange={handleChange}
            errors={errors}
          />
        )}
        {user.userType === TYPE_USER && (
          <UserForm
            profile={user.profile}
            handleChange={handleChange}
            errors={errors}
          />
        )}
        <SubmitButton
          disabled={!canSubmit}
          formName={PROFILE_UPDATE_FORMNAME}
          icon={SubmitSaveIcon}
          label={i18n.t('profile.common.submit_label')}
        />
        {isSubmitSuccessful && <FormSuccessMessage />}
      </FormLeftAlignStyle>
    </TileWithTitle>
  );
};
