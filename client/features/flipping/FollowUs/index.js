// @flow
import React from 'react';
import { type QuestionType } from 'Shared/types/question';
import { UnstyledListStyle } from 'Client/ui/Elements/ListElements';
import { i18n } from 'Shared/i18n';
import {
  SvgFacebookLogoF,
  SvgTwitterLogo,
  SvgInstagramLogo,
  SvgLinkedinLogoIn,
  SvgMegaphone,
} from 'Client/ui/Svg/elements';
import {
  twitterMakeUrl,
  instagramMakeUrl,
  facebookMakeUrl,
  linkedinMakeUrl,
} from 'Shared/helpers/social';
import { trackClickFollowUs, trackClickBlog } from 'Shared/services/Tracking';
import { TileWithTitle } from 'Client/ui/Elements/TileWithTitle';
import { ParagraphStyle } from 'Client/ui/Elements/ParagraphElements';
import {
  RedLinkHTMLElementStyle,
  NewWindowIconStyle,
} from 'Client/ui/Elements/LinkElements';
import { checkIsFeatureActivated } from 'Client/helper/featureFlipping';
import { CONSULTATION_FOLLOW_US_ACTIVE } from 'Shared/constants/featureFlipping';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import {
  FollowUsStyle,
  FollowUsIconsStyle,
  FacebookButtonStyle,
  TwitterButtonStyle,
  InstagramButtonStyle,
  LinkedInButtonStyle,
  FollowUsListItemStyle,
} from './style';

type Props = {
  question: QuestionType,
};

export const FollowUs = ({ question }: Props) => {
  const isFollowUsActive: boolean = checkIsFeatureActivated(
    CONSULTATION_FOLLOW_US_ACTIVE,
    question.activeFeatures
  );

  if (!isFollowUsActive) {
    return null;
  }

  return (
    <TileWithTitle
      icon={<SvgMegaphone style={FollowUsIconsStyle} focusable="false" />}
      title={i18n.t('consultation.followus.title')}
    >
      <ParagraphStyle>
        {i18n.t('consultation.followus.description')}
      </ParagraphStyle>
      <FollowUsStyle as={UnstyledListStyle}>
        <FollowUsListItemStyle>
          <FacebookButtonStyle
            data-network-name="facebook"
            target="_blank"
            rel="noopener"
            as="a"
            href={facebookMakeUrl}
            onClick={trackClickFollowUs}
          >
            <SvgFacebookLogoF aria-hidden focusable="false" />
            <ScreenReaderItemStyle>
              {i18n.t('consultation.followus.facebook')}
            </ScreenReaderItemStyle>
          </FacebookButtonStyle>
        </FollowUsListItemStyle>
        <FollowUsListItemStyle>
          <TwitterButtonStyle
            data-network-name="twitter"
            target="_blank"
            rel="noopener"
            as="a"
            href={twitterMakeUrl}
            onClick={trackClickFollowUs}
          >
            <SvgTwitterLogo aria-hidden focusable="false" />
            <ScreenReaderItemStyle>
              {i18n.t('consultation.followus.twitter')}
            </ScreenReaderItemStyle>
          </TwitterButtonStyle>
        </FollowUsListItemStyle>
        <FollowUsListItemStyle>
          <InstagramButtonStyle
            data-network-name="instagram"
            target="_blank"
            rel="noopener"
            as="a"
            href={instagramMakeUrl}
            onClick={trackClickFollowUs}
          >
            <SvgInstagramLogo aria-hidden focusable="false" />
            <ScreenReaderItemStyle>
              {i18n.t('consultation.followus.instagram')}
            </ScreenReaderItemStyle>
          </InstagramButtonStyle>
        </FollowUsListItemStyle>
        <FollowUsListItemStyle>
          <LinkedInButtonStyle
            data-network-name="linkedin"
            target="_blank"
            rel="noopener"
            as="a"
            href={linkedinMakeUrl}
            onClick={trackClickFollowUs}
          >
            <SvgLinkedinLogoIn aria-hidden focusable="false" />
            <ScreenReaderItemStyle>
              {i18n.t('consultation.followus.linkedin')}
            </ScreenReaderItemStyle>
          </LinkedInButtonStyle>
        </FollowUsListItemStyle>
      </FollowUsStyle>
      <RedLinkHTMLElementStyle
        target="_blank"
        rel="noopener"
        href={question.aboutUrl}
        onClick={() => trackClickBlog('blog list')}
      >
        {i18n.t('consultation.followus.discover')}
        <> </>
        <NewWindowIconStyle aria-hidden focusable="false" />
        <ScreenReaderItemStyle>
          {i18n.t('common.open_new_window')}
        </ScreenReaderItemStyle>
      </RedLinkHTMLElementStyle>
    </TileWithTitle>
  );
};
