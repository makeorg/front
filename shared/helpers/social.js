import { getRelativeCurrentUrl } from 'Shared/helpers/url';
import {
  GOOGLE_LINK_FR,
  GOOGLE_LINK_DE,
  GOOGLE_LINK_EN,
  TWITTER_LINK_FR,
  TWITTER_LINK_DE,
  TWITTER_LINK_EN,
  LINKEDIN_LINK_FR,
  LINKEDIN_LINK_DE,
  LINKEDIN_LINK_EN,
} from 'Shared/constants/config';

export const twitterShareUrl = (
  pathName: string = '',
  message: string = '',
  hashtags: string = ''
) =>
  `https://twitter.com/intent/tweet/?text=${encodeURIComponent(
    message
  )}&hashtags=${encodeURIComponent(hashtags)}&url=${encodeURIComponent(
    getRelativeCurrentUrl(pathName)
  )}`;

export const facebookShareUrl = (pathName: string = '') =>
  `https://facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    getRelativeCurrentUrl(pathName)
  )}`;

export const linkedinShareUrl = (pathName: string = '', message: string = '') =>
  `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
    getRelativeCurrentUrl(pathName)
  )}&title=${encodeURIComponent(message)}&summary=${encodeURIComponent(
    message
  )}&source=${encodeURIComponent(getRelativeCurrentUrl(pathName))}`;

export const twitterMakeUrl = 'https://twitter.com/Make_org';
export const instagramMakeUrl = 'https://www.instagram.com/make_org/';
export const facebookMakeUrl = 'https://www.facebook.com/Make.org/';
export const linkedinMakeUrl = 'https://fr.linkedin.com/company/make.org';

export const googleLinkPrivacy = country => {
  if (country === 'FR') return GOOGLE_LINK_FR;
  if (country === 'DE') return GOOGLE_LINK_DE;
  return GOOGLE_LINK_EN;
};
export const twitterLinkPrivacy = country => {
  if (country === 'FR') return TWITTER_LINK_FR;
  if (country === 'DE') return TWITTER_LINK_DE;
  return TWITTER_LINK_EN;
};
export const linkedInLinkPrivacy = country => {
  if (country === 'FR') return LINKEDIN_LINK_FR;
  if (country === 'DE') return LINKEDIN_LINK_DE;
  return LINKEDIN_LINK_EN;
};
