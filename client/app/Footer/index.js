// @flow
import React from 'react';
import { i18n } from 'Shared/i18n';
import { ColumnToRowElementStyle } from 'Client/ui/Elements/FlexElements';
import {
  LEGAL_LINK,
  CONTACT_LINK,
  DATA_POLICY_LINK,
} from 'Shared/constants/url';
import {
  NAVIGATION_ARIA_NEGATIVE_TAB_CLASS,
  PANEL_ARIA_NEGATIVE_TAB_CLASS,
} from 'Shared/constants/a11y';
import { MAIN_FOOTER } from 'Shared/constants/ids';
import { isSequencePage as getIsSequencePage } from 'Shared/routes';
import { useLocation } from 'react-router';
import { type StateRoot } from 'Shared/store/types';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import { getCookiesPageLink, getGTUPageLink } from 'Shared/helpers/url';
import { scrollToTop } from 'Shared/helpers/styled';
import { useSelector } from 'react-redux';
import {
  FooterStyle,
  FooterNavStyle,
  FooterItemStyle,
  FooterItemLinkStyle,
  FooterLinkIconStyle,
  FooterWrapperSecondListStyle,
} from './style';

/**
 * Renders Main Footer
 */
export const Footer = () => {
  const location = useLocation();
  const isSequencePage = getIsSequencePage(location.pathname);
  const { country } = useSelector((State: StateRoot) => State.appConfig);

  const externalLinkIcon = (
    <>
      <FooterLinkIconStyle aria-hidden focusable="false" />
      <ScreenReaderItemStyle>
        {i18n.t('common.open_new_window')}
      </ScreenReaderItemStyle>
    </>
  );
  return country ? (
    <FooterStyle
      id={MAIN_FOOTER}
      className={`${NAVIGATION_ARIA_NEGATIVE_TAB_CLASS} ${PANEL_ARIA_NEGATIVE_TAB_CLASS} ${
        isSequencePage && 'extra-mobile-padding-bottom'
      }`}
      data-cy-container="footer"
    >
      <FooterNavStyle aria-label={i18n.t('common.footer_nav')}>
        <ColumnToRowElementStyle>
          <FooterWrapperSecondListStyle>
            <FooterItemStyle>
              <FooterItemLinkStyle
                onClick={scrollToTop}
                to={getGTUPageLink(country)}
              >
                {i18n.t('main-footer.terms')}
              </FooterItemLinkStyle>
            </FooterItemStyle>
            <FooterItemStyle>
              <FooterItemLinkStyle
                onClick={scrollToTop}
                to={getCookiesPageLink(country)}
              >
                {i18n.t('main-footer.cookies')}
              </FooterItemLinkStyle>
            </FooterItemStyle>
            <FooterItemStyle>
              <FooterItemLinkStyle
                as="a"
                target="_blank"
                href={LEGAL_LINK}
                rel="noopener noreferrer"
              >
                {i18n.t('main-footer.legal')}
                <> </>
                {externalLinkIcon}
              </FooterItemLinkStyle>
            </FooterItemStyle>
            <FooterItemStyle>
              <FooterItemLinkStyle
                as="a"
                target="_blank"
                href={DATA_POLICY_LINK}
                rel="noopener noreferrer"
              >
                {i18n.t('main-footer.data')}
                <> </>
                {externalLinkIcon}
              </FooterItemLinkStyle>
            </FooterItemStyle>
            <FooterItemStyle>
              <FooterItemLinkStyle
                as="a"
                target="_blank"
                href={CONTACT_LINK}
                rel="noopener noreferrer"
              >
                {i18n.t('main-footer.contact')}
                <> </>
                {externalLinkIcon}
              </FooterItemLinkStyle>
            </FooterItemStyle>
          </FooterWrapperSecondListStyle>
        </ColumnToRowElementStyle>
      </FooterNavStyle>
    </FooterStyle>
  ) : (
    <></>
  );
};
