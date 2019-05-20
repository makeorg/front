import React from 'react';
import { SvgLike } from 'Client/ui/Svg/elements';
import { i18n } from 'Shared/i18n';
import {
  SvgLikeStyle,
  PlaceholderParagraphStyle,
} from 'Client/ui/Elements/PlaceholdersElements';

export const ProfileFollowingPlaceholder = () => {
  return (
    <React.Fragment>
      <SvgLike aria-hidden style={SvgLikeStyle} />
      <PlaceholderParagraphStyle>
        {i18n.t('profile.following.description.introduction')}
      </PlaceholderParagraphStyle>
      <PlaceholderParagraphStyle>
        {i18n.t('profile.following.description.explanation_step_one')}
      </PlaceholderParagraphStyle>
      <PlaceholderParagraphStyle>
        {i18n.t('profile.following.description.explanation_step_two')}
      </PlaceholderParagraphStyle>
    </React.Fragment>
  );
};