import { getRelativeCurrentUrl } from 'Shared/helpers/url';

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