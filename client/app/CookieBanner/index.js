// @flow
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { i18n } from 'Shared/i18n';
import { useCookies } from 'react-cookie';
import { getCookiesPageLink } from 'Shared/helpers/url';
import { type StateRoot } from 'Shared/store/types';
import {
  NAVIGATION_ARIA_NEGATIVE_TAB_CLASS,
  PANEL_ARIA_NEGATIVE_TAB_CLASS,
} from 'Shared/constants/a11y';
import { COOKIE_BANNER } from 'Shared/constants/ids';
import {
  CookieContentStyle,
  CookieWrapperStyle,
  CookieParagraphStyle,
  CookieButtonStyle,
  CookieContentInnerStyle,
  CookieIconStyle,
} from './style';

const acceptCookieName: string = 'make-cookie';
// set cookie duration to a year
const today = new Date();
const nextYear = new Date();
nextYear.setFullYear(today.getFullYear() + 1);

export const CookieBanner = () => {
  const { country } = useSelector((state: StateRoot) => state.appConfig);
  const [cookies, setCookies] = useCookies([acceptCookieName]);
  const [hasAccepted, setAccepted] = useState<boolean>(
    cookies[acceptCookieName] !== undefined
  );

  const handleClose = () => {
    setCookies(acceptCookieName, true, {
      path: '/',
      expires: nextYear,
    });
    setAccepted(true);
  };

  if (hasAccepted) {
    return null;
  }

  return (
    <CookieWrapperStyle
      id={COOKIE_BANNER}
      aria-label={i18n.t('common.cookie_area')}
      data-cy-container="cookie-banner"
      className={`${NAVIGATION_ARIA_NEGATIVE_TAB_CLASS} ${PANEL_ARIA_NEGATIVE_TAB_CLASS}`}
    >
      <CookieContentStyle>
        <CookieIconStyle
          aria-label={i18n.t('common.notifications.icons.information')}
          focusable="false"
        />
        <CookieContentInnerStyle>
          <CookieParagraphStyle
            dangerouslySetInnerHTML={{
              __html: i18n.t('cookie_alert.text', {
                cookies: `<a href="${getCookiesPageLink(
                  country || 'FR'
                )}" data-cy-link="gtu">$t(cookie_alert.cookies)</a>`,
              }),
            }}
          />
          <CookieButtonStyle
            onClick={handleClose}
            data-cy-button="cookie-accept"
            type="button"
          >
            OK
          </CookieButtonStyle>
        </CookieContentInnerStyle>
      </CookieContentStyle>
    </CookieWrapperStyle>
  );
};
