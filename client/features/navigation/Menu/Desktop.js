// @flow
import React, { useEffect } from 'react';
import { type StateRoot } from 'Shared/store/types';
import { UnstyledListStyle } from 'Client/ui/Elements/ListElements';
import { i18n } from 'Shared/i18n';
import { useSelector } from 'react-redux';
import {
  getBrowseConsultationsLink,
  getWebflowDynamicLink,
} from 'Shared/helpers/url';
import { scrollToTop, unlockBody } from 'Shared/helpers/styled';
import { removeAriaHiddenByClass } from 'Shared/helpers/a11y';
import {
  NAVIGATION_ELEMENT_ARIA_CLASS,
  NAVIGATION_ARIA_CLASS,
  SEARCH_DESKTOP_EXPANDED,
} from 'Shared/constants/a11y';
import { ROUTE_PARTNERSHIP, ROUTE_WHOAREWE } from 'Shared/routes';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import { getCountryWithConsultations } from 'Shared/helpers/countries';
import {
  DesktopMenuNavStyle,
  DesktopMenuItemStyle,
  DesktopMenuInternalLinkStyle,
  MenuNewWindowIconStyle,
  DesktopMenuExternalLinkStyle,
} from './style';

export const DesktopMenu = () => {
  const { country, language, countriesWithConsultations } = useSelector(
    (state: StateRoot) => state.appConfig
  );
  const browseConsultationsLink = getBrowseConsultationsLink(country);
  const displayExtraNavLinks = country === 'DE' || 'FR';
  const countryHasConsultations = getCountryWithConsultations(
    country,
    countriesWithConsultations
  );

  useEffect(() => {
    removeAriaHiddenByClass(NAVIGATION_ARIA_CLASS);
    removeAriaHiddenByClass(NAVIGATION_ELEMENT_ARIA_CLASS);
    unlockBody();
  }, []);

  const externalLinkIcon = (
    <>
      <MenuNewWindowIconStyle aria-hidden focusable="false" />
      <ScreenReaderItemStyle>
        {i18n.t('common.open_new_window')}
      </ScreenReaderItemStyle>
    </>
  );

  return (
    <DesktopMenuNavStyle aria-label={i18n.t('header.main_navigation')}>
      <UnstyledListStyle>
        {countryHasConsultations && (
          <DesktopMenuItemStyle className="with-border">
            <DesktopMenuInternalLinkStyle
              to={browseConsultationsLink}
              onClick={scrollToTop}
            >
              {i18n.t('browse.page_title')}
            </DesktopMenuInternalLinkStyle>
          </DesktopMenuItemStyle>
        )}
        <DesktopMenuItemStyle
          className={`${SEARCH_DESKTOP_EXPANDED} with-border`}
        >
          <DesktopMenuExternalLinkStyle
            target="_blank"
            rel="noopener"
            href={getWebflowDynamicLink(language, ROUTE_WHOAREWE)}
          >
            {i18n.t('main_footer.whoarewe')}
            <> </>
            {externalLinkIcon}
          </DesktopMenuExternalLinkStyle>
        </DesktopMenuItemStyle>
        {displayExtraNavLinks && (
          <DesktopMenuItemStyle
            className={`${SEARCH_DESKTOP_EXPANDED} with-border`}
          >
            <DesktopMenuExternalLinkStyle
              target="_blank"
              rel="noopener"
              href={getWebflowDynamicLink(language, ROUTE_PARTNERSHIP)}
            >
              {i18n.t('homepage.partnership.subtitle')}
              <> </>
              {externalLinkIcon}
            </DesktopMenuExternalLinkStyle>
          </DesktopMenuItemStyle>
        )}
      </UnstyledListStyle>
    </DesktopMenuNavStyle>
  );
};
