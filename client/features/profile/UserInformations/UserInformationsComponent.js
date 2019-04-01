/* @flow */
import React from 'react';
import { type User } from 'Shared/types/user';
import { i18n } from 'Shared/i18n';
import { getAgeFromDateOfBrth } from 'Shared/helpers/date';
import { Avatar } from 'Client/ui/Avatar';
import { SvgMarker } from 'Client/ui/Svg/elements';
import { GreyButtonStyle } from 'Client/ui/Elements/ButtonElements';
import { CenterRowStyle } from 'Client/ui/Elements/FlexElements';
import {
  UserAvatarStyle,
  UserWrapperStyle,
  UserContentWrapperStyle,
  UserTitleStyle,
  UserContentStyle,
  UserSeparatorStyle,
  UserAvatarLayoutStyle,
} from '../Styled/UserInformations';

type Props = {
  user: User,
  handleLogout: () => void,
};

export const UserInformationsComponent = (props: Props) => {
  const { user, handleLogout } = props;
  const { profile } = user;

  return (
    <UserWrapperStyle>
      <UserAvatarLayoutStyle>
        <UserAvatarStyle>
          <Avatar avatarSize={160}>
            {profile.avatarUrl && (
              <img src={profile.avatarUrl} alt={user.firstName} aria-hidden />
            )}
          </Avatar>
        </UserAvatarStyle>
        <UserContentWrapperStyle>
          <UserTitleStyle>{user.firstName}</UserTitleStyle>
          {profile.postalCode && (
            <UserContentStyle>
              <SvgMarker />
              {profile.postalCode}
            </UserContentStyle>
          )}
          {profile.dateOfBirth && (
            <UserContentStyle>
              {i18n.t('profile.age', {
                age: getAgeFromDateOfBrth(profile.dateOfBirth),
              })}
            </UserContentStyle>
          )}
          {profile.profession && (
            <UserContentStyle>{profile.profession}</UserContentStyle>
          )}
        </UserContentWrapperStyle>
      </UserAvatarLayoutStyle>
      <UserSeparatorStyle aria-hidden />
      {profile.description && (
        <UserContentStyle>{profile.description}</UserContentStyle>
      )}
      <UserSeparatorStyle aria-hidden />
      <CenterRowStyle>
        <GreyButtonStyle onClick={handleLogout}>
          {i18n.t('common.disconnexion_label')}
        </GreyButtonStyle>
      </CenterRowStyle>
    </UserWrapperStyle>
  );
};
