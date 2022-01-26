// @flow
import React, { useEffect } from 'react';
import { i18n } from 'Shared/i18n';
import { COOKIE_MODAL } from 'Shared/constants/ids';
import { trackDisplayModalCookieFirstStep } from 'Shared/services/Tracking';
import {
  SvgSettings,
  SvgSmiley,
  SvgStats,
  SvgLoudSpeaker,
} from 'Client/ui/Svg/elements';
import {
  CookieModalContentStyle,
  CookieModalTitleWrapperStyle,
  CookieModalButtonWithLinkStyle,
  CookieModalTitleStyle,
  CookieModalParagraphStyle,
  CookieModalSectionWrapperStyle,
  CookieModalSectionTitleStyle,
  CookieModalElementStyle,
  CookieSVGStyle,
} from './style';

type Props = {
  handleRejectAll: () => void,
};

export const FirstStepCookie = ({ handleRejectAll }: Props) => {
  useEffect(() => {
    trackDisplayModalCookieFirstStep();
  }, []);

  return (
    <CookieModalContentStyle>
      <CookieModalTitleWrapperStyle>
        <CookieModalButtonWithLinkStyle
          className="with-margin-bottom"
          onClick={handleRejectAll}
          type="button"
        >
          {i18n.t('cookie_modal.refuse')}
        </CookieModalButtonWithLinkStyle>
        <CookieModalTitleStyle id={COOKIE_MODAL}>
          {i18n.t('cookie_modal.title')}
        </CookieModalTitleStyle>
      </CookieModalTitleWrapperStyle>
      <CookieModalParagraphStyle>
        {i18n.t('cookie_modal.description')}
      </CookieModalParagraphStyle>
      <CookieModalSectionTitleStyle as="h3">
        {i18n.t('cookie_modal.details.title')}
      </CookieModalSectionTitleStyle>
      <CookieModalSectionWrapperStyle>
        <CookieModalElementStyle>
          <SvgSettings style={CookieSVGStyle} aria-hidden focusable="false" />
          <span
            dangerouslySetInnerHTML={{
              __html: i18n.t('cookie_modal.details.technicals'),
            }}
          />
        </CookieModalElementStyle>
        <CookieModalElementStyle>
          <SvgSmiley style={CookieSVGStyle} aria-hidden focusable="false" />
          <span
            dangerouslySetInnerHTML={{
              __html: i18n.t('cookie_modal.details.preferences'),
            }}
          />
        </CookieModalElementStyle>
        <CookieModalElementStyle>
          <SvgStats style={CookieSVGStyle} aria-hidden focusable="false" />
          <span
            dangerouslySetInnerHTML={{
              __html: i18n.t('cookie_modal.details.statistics'),
            }}
          />
        </CookieModalElementStyle>
        <CookieModalElementStyle>
          <SvgLoudSpeaker
            style={CookieSVGStyle}
            aria-hidden
            focusable="false"
          />
          <span
            dangerouslySetInnerHTML={{
              __html: i18n.t('cookie_modal.details.social_media'),
            }}
          />
        </CookieModalElementStyle>
      </CookieModalSectionWrapperStyle>
    </CookieModalContentStyle>
  );
};
