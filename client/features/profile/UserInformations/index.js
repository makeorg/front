// @flow
import React, { type Element } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'Shared/store/actions/authentication';
import { type UserType } from 'Shared/types/user';
import { i18n } from 'Shared/i18n';
import { getAgeFromDateOfBirth } from 'Shared/helpers/date';
import { Avatar } from 'Client/ui/Avatar';
import { SignOutIconStyle } from 'Client/ui/Elements/Buttons/style';
import {
  ProfileAvatarStyle,
  ProfileContentWrapperStyle,
  ProfileTitleStyle,
  ProfileContentStyle,
  ProfileAvatarLayoutStyle,
  ProfileInformationButtonStyle,
  ProfileNavigationStyle,
  ProfileAlignLeftContentStyle,
  ProfileWebsiteLinkStyle,
  ProfileLinkIconStyle,
  ProfileMapIconStyle,
} from 'Client/ui/Elements/ProfileElements';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import { type StateRoot } from 'Shared/store/types';
import {
  TYPE_ORGANISATION,
  TYPE_PERSONALITY,
  TYPE_USER,
} from 'Shared/constants/user';
import { CertifiedIconStyle } from 'Client/ui/Proposal/DeprecatedAuthor/Styled';
import {
  formatUserName,
  formatOrganisationName,
} from 'Shared/helpers/stringFormatter';
import { matchMobileDevice } from 'Shared/helpers/styled';
import { UserDescription } from './Description';

type Props = {
  user: UserType,
  navigationBar: Element<any>,
};

export const UserInformations = ({ user, navigationBar }: Props) => {
  const dispatch = useDispatch();
  const { device } = useSelector((state: StateRoot) => state.appConfig);
  const isMobile = matchMobileDevice(device);
  const isOrganisation = user.userType === TYPE_ORGANISATION;
  const isPersonality = user.userType === TYPE_PERSONALITY;
  const isBasicUser = user.userType === TYPE_USER;

  const { avatarUrl, displayName, email } = user;
  const {
    firstName,
    lastName,
    politicalParty,
    postalCode,
    dateOfBirth,
    profession,
    description,
    website,
  } = user.profile;

  return (
    <>
      <ProfileAvatarLayoutStyle>
        <ScreenReaderItemStyle as="h2">
          {i18n.t('profile.common.infos')}
        </ScreenReaderItemStyle>
        <ProfileAvatarStyle avatarSize={isMobile ? 120 : 160}>
          <Avatar avatarSize={isMobile ? 120 : 160} avatarUrl={avatarUrl} />
        </ProfileAvatarStyle>
        {isOrganisation && (
          <ProfileContentWrapperStyle>
            <ProfileTitleStyle>
              <ScreenReaderItemStyle>
                {i18n.t('profile.common.labels.organisation')}
              </ScreenReaderItemStyle>
              {formatOrganisationName(displayName)}
              <CertifiedIconStyle aria-hidden focusable="false" />
            </ProfileTitleStyle>
          </ProfileContentWrapperStyle>
        )}
        <ProfileContentWrapperStyle>
          {!isOrganisation && (
            <>
              <ProfileTitleStyle>
                <ScreenReaderItemStyle>
                  {i18n.t('profile.common.labels.firstname')}
                </ScreenReaderItemStyle>
                {formatUserName(firstName)}
                &nbsp;
                {isPersonality && (
                  <>
                    <ScreenReaderItemStyle>
                      {i18n.t('profile.common.labels.lastname')}
                    </ScreenReaderItemStyle>
                    {formatUserName(lastName)}
                    <CertifiedIconStyle aria-hidden focusable="false" />
                  </>
                )}
              </ProfileTitleStyle>
              <ProfileContentStyle>
                <ScreenReaderItemStyle>
                  {i18n.t('profile.common.labels.email')}
                </ScreenReaderItemStyle>
                {email}
              </ProfileContentStyle>
            </>
          )}
          {politicalParty && (
            <ProfileContentStyle>
              <ScreenReaderItemStyle>
                {i18n.t('profile.common.labels.political_party')}
              </ScreenReaderItemStyle>
              {politicalParty}
            </ProfileContentStyle>
          )}
          {postalCode && (
            <ProfileContentStyle>
              <ScreenReaderItemStyle>
                {i18n.t('profile.common.labels.postal_code')}
              </ScreenReaderItemStyle>
              <ProfileMapIconStyle aria-hidden focusable="false" />
              {postalCode}
            </ProfileContentStyle>
          )}
          {dateOfBirth && (
            <ProfileContentStyle>
              <ScreenReaderItemStyle>
                {i18n.t('profile.common.labels.age')}
              </ScreenReaderItemStyle>
              {i18n.t('profile.common.age', {
                age: getAgeFromDateOfBirth(dateOfBirth),
              })}
            </ProfileContentStyle>
          )}
          {profession && (
            <ProfileContentStyle>
              <ScreenReaderItemStyle>
                {i18n.t('profile.common.labels.profession')}
              </ScreenReaderItemStyle>
              {profession}
            </ProfileContentStyle>
          )}
        </ProfileContentWrapperStyle>
      </ProfileAvatarLayoutStyle>
      {description && (
        <>
          <ScreenReaderItemStyle>
            {i18n.t('profile.common.labels.biography')}
          </ScreenReaderItemStyle>
          <UserDescription description={description} />
        </>
      )}
      {!isBasicUser && website && (
        <ProfileAlignLeftContentStyle>
          <ScreenReaderItemStyle>
            {i18n.t('profile.common.labels.website')}
          </ScreenReaderItemStyle>
          <ProfileLinkIconStyle aria-hidden focusable="false" />
          <ProfileWebsiteLinkStyle
            as="a"
            target="_blank"
            rel="noopener"
            href={website}
          >
            {website}
          </ProfileWebsiteLinkStyle>
        </ProfileAlignLeftContentStyle>
      )}
      <ProfileNavigationStyle>
        {navigationBar}
        <ProfileInformationButtonStyle onClick={() => dispatch(logout())}>
          <SignOutIconStyle aria-hidden focusable="false" />
          {i18n.t('profile.common.log_out')}
        </ProfileInformationButtonStyle>
      </ProfileNavigationStyle>
    </>
  );
};
