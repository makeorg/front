// @flow
import React, { useEffect } from 'react';
import { UnstyledListStyle } from 'Client/ui/Elements/ListElements';
import { i18n } from 'Shared/i18n';
import { unlockBody } from 'Shared/helpers/styled';
import { removeAriaHiddenByClass } from 'Shared/helpers/a11y';
import {
  NAVIGATION_ELEMENT_ARIA_CLASS,
  NAVIGATION_ARIA_CLASS,
  SEARCH_DESKTOP_EXPANDED,
} from 'Shared/constants/a11y';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import { WHOAREWE_FR_LINK } from 'Shared/constants/url';
import {
  DesktopMenuNavStyle,
  DesktopMenuItemStyle,
  MenuNewWindowIconStyle,
  DesktopMenuExternalLinkStyle,
} from './style';

export const DesktopMenu = () => {
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
        <DesktopMenuItemStyle
          className={`${SEARCH_DESKTOP_EXPANDED} with-border`}
        >
          <DesktopMenuExternalLinkStyle
            target="_blank"
            rel="noopener"
            href={WHOAREWE_FR_LINK}
          >
            {i18n.t('main-footer.whoarewe')}
            <> </>
            {externalLinkIcon}
          </DesktopMenuExternalLinkStyle>
        </DesktopMenuItemStyle>
      </UnstyledListStyle>
    </DesktopMenuNavStyle>
  );
};
