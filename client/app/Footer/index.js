// @flow
import React from 'react';
import { useSelector } from 'react-redux';
import { i18n } from 'Shared/i18n';
import { type StateRoot } from 'Shared/store/types';
import { trackClickBlog } from 'Shared/services/Tracking';
import { useDesktop } from 'Client/hooks/useMedia';
import { ColumnToRowElementStyle } from 'Client/ui/Elements/FlexElements';
import {
  JOBS_LINK,
  NEWS_LINK,
  DOTATION_FUNDS_LINK,
  PRESS_DETAILS_LINK,
} from 'Shared/constants/url';
import {
  getLegalPageLink,
  getGTUPageLink,
  getDataPageLink,
  getContactPageLink,
} from 'Shared/helpers/url';
import { scrollToTop } from 'Shared/helpers/styled';
import {
  NAVIGATION_ARIA_NEGATIVE_TAB_CLASS,
  PANEL_ARIA_NEGATIVE_TAB_CLASS,
} from 'Shared/constants/a11y';
import { MAIN_FOOTER } from 'Shared/constants/ids';
import {
  FooterStyle,
  FooterNavStyle,
  FooterItemStyle,
  FooterItemLinkStyle,
  FooterLinkIconStyle,
  FooterSeparatorStyle,
  FooterWrapperFirstListStyle,
  FooterWrapperSecondListStyle,
  FooterWrapperThirdListStyle,
  FooterItemAltLinkStyle,
  // FooterCountryIconStyle,
  FooterContactIconStyle,
} from './style';

/**
 * Renders Main Footer
 */
export const Footer = () => {
  const isDesktop = useDesktop();
  const { country } = useSelector((state: StateRoot) => state.appConfig);
  const isFR = country === 'FR';
  const isDesktopFR = isDesktop && isFR;
  return (
    <FooterStyle
      id={MAIN_FOOTER}
      className={`${NAVIGATION_ARIA_NEGATIVE_TAB_CLASS} ${PANEL_ARIA_NEGATIVE_TAB_CLASS}`}
      data-cy-container="footer"
    >
      <FooterNavStyle aria-label={i18n.t('common.footer_nav')}>
        <FooterWrapperFirstListStyle>
          {isDesktopFR && (
            <>
              <FooterItemStyle>
                <FooterItemLinkStyle
                  as="a"
                  target="_blank"
                  href={NEWS_LINK}
                  onClick={() => trackClickBlog('blog list')}
                >
                  {i18n.t('main-footer.news')}
                  <FooterLinkIconStyle
                    aria-label={i18n.t('common.open_new_window')}
                  />
                </FooterItemLinkStyle>
              </FooterItemStyle>
              <FooterItemStyle>
                <FooterItemLinkStyle
                  as="a"
                  target="_blank"
                  href={JOBS_LINK}
                  to={JOBS_LINK}
                >
                  {i18n.t('main-footer.jobs')}
                  <FooterLinkIconStyle
                    aria-label={i18n.t('common.open_new_window')}
                  />
                </FooterItemLinkStyle>
              </FooterItemStyle>
            </>
          )}
          {isFR && (
            <>
              <FooterItemStyle>
                <FooterItemLinkStyle
                  as="a"
                  target="_blank"
                  href={PRESS_DETAILS_LINK}
                >
                  {i18n.t('main-footer.press_details')}
                  <FooterLinkIconStyle
                    aria-label={i18n.t('common.open_new_window')}
                  />
                </FooterItemLinkStyle>
              </FooterItemStyle>
              <FooterItemStyle>
                <FooterItemLinkStyle
                  as="a"
                  target="_blank"
                  href={DOTATION_FUNDS_LINK}
                >
                  {i18n.t('main-footer.dotation_funds')}
                  <FooterLinkIconStyle
                    aria-label={i18n.t('common.open_new_window')}
                  />
                </FooterItemLinkStyle>
              </FooterItemStyle>
            </>
          )}
        </FooterWrapperFirstListStyle>
        <FooterSeparatorStyle />
        <ColumnToRowElementStyle>
          <FooterWrapperSecondListStyle>
            <FooterItemStyle>
              <FooterItemLinkStyle
                onClick={scrollToTop}
                to={getLegalPageLink(country)}
              >
                {i18n.t('main-footer.legal')}
              </FooterItemLinkStyle>
            </FooterItemStyle>
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
                to={getDataPageLink(country)}
              >
                {i18n.t('main-footer.data')}
              </FooterItemLinkStyle>
            </FooterItemStyle>
          </FooterWrapperSecondListStyle>
          <FooterWrapperThirdListStyle>
            {/* 
            Waiting for API endpoo
            <FooterItemStyle className="no-bullet">
              <FooterItemAltLinkStyle
                className="underline"
                onClick={scrollToTop}
                to="#"
              >
                <FooterCountryIconStyle />
                {i18n.t('main-footer.country')}
              </FooterItemAltLinkStyle>
            </FooterItemStyle> */}
            <FooterItemStyle>
              <FooterItemAltLinkStyle
                onClick={scrollToTop}
                to={getContactPageLink(country)}
              >
                <FooterContactIconStyle aria-hidden />
                {i18n.t('main-footer.contact')}
              </FooterItemAltLinkStyle>
            </FooterItemStyle>
          </FooterWrapperThirdListStyle>
        </ColumnToRowElementStyle>
      </FooterNavStyle>
    </FooterStyle>
  );
};
