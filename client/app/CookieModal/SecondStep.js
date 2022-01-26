// @flow
import React, { useEffect } from 'react';
import { i18n } from 'Shared/i18n';
import {
  SvgSettings,
  SvgSmiley,
  SvgStats,
  SvgLoudSpeaker,
  SvgArrowLeft,
} from 'Client/ui/Svg/elements';
import { ColumnElementStyle } from 'Client/ui/Elements/FlexElements';
import {
  trackDisplayModalCookieSecondStep,
  trackClickModalCookieBack,
} from 'Shared/services/Tracking';
import {
  CookieModalContentStyle,
  CookieModalHeaderWrapperStyle,
  CookieModalButtonWithLinkStyle,
  CookieModalSectionTitleStyle,
  CookieModalCookieDetailParagraphStyle,
  CookieModalSectionWrapperStyle,
  CookieModalElementStyle,
  CookieModalBackButtonStyle,
  CookieSVGStyle,
  CookieSectionWrapperStyle,
  CookieDescriptionStyle,
  CookieLabelStyle,
} from './style';
import { CookieSwitch } from './CookieSwitch';

type Props = {
  toggleCustomization: () => void,
  handleRejectAll: () => void,
};

export const SecondStepCookie = ({
  toggleCustomization,
  handleRejectAll,
}: Props) => {
  const handleBack = () => {
    trackClickModalCookieBack();
    toggleCustomization();
  };

  useEffect(() => {
    trackDisplayModalCookieSecondStep();
  }, []);

  return (
    <CookieModalContentStyle>
      <CookieModalHeaderWrapperStyle>
        <CookieModalBackButtonStyle
          type="button"
          onClick={handleBack}
          aria-label={i18n.t('cookie_modal.back')}
        >
          <SvgArrowLeft width="10" height="10" aria-hidden focusable="false" />
        </CookieModalBackButtonStyle>
        <CookieModalButtonWithLinkStyle
          type="button"
          onClick={handleRejectAll}
          className="with-margin-bottom"
        >
          {i18n.t('cookie_modal.refuse')}
        </CookieModalButtonWithLinkStyle>
      </CookieModalHeaderWrapperStyle>
      <CookieModalSectionTitleStyle>
        {i18n.t('cookie_modal.details.title')}
      </CookieModalSectionTitleStyle>
      <CookieModalSectionWrapperStyle>
        <CookieModalElementStyle className="with-separator">
          <SvgSettings style={CookieSVGStyle} aria-hidden focusable="false" />
          <ColumnElementStyle>
            <CookieSectionWrapperStyle>
              <CookieDescriptionStyle
                dangerouslySetInnerHTML={{
                  __html: i18n.t('cookie_modal.details.technicals'),
                }}
              />
              <CookieLabelStyle>
                {i18n.t('cookie_modal.mandatory')}
              </CookieLabelStyle>
            </CookieSectionWrapperStyle>
            <CookieModalCookieDetailParagraphStyle>
              {i18n.t('cookie_modal.technicals.secure')}
            </CookieModalCookieDetailParagraphStyle>
            <CookieModalCookieDetailParagraphStyle>
              {i18n.t('cookie_modal.technicals.expiration')}
            </CookieModalCookieDetailParagraphStyle>
          </ColumnElementStyle>
        </CookieModalElementStyle>
        <CookieModalElementStyle className="with-separator">
          <SvgSmiley style={CookieSVGStyle} aria-hidden focusable="false" />
          <ColumnElementStyle>
            <CookieSectionWrapperStyle>
              <CookieDescriptionStyle
                dangerouslySetInnerHTML={{
                  __html: i18n.t('cookie_modal.details.preferences'),
                }}
              />
              <CookieLabelStyle>
                {i18n.t('cookie_modal.mandatory')}
              </CookieLabelStyle>
            </CookieSectionWrapperStyle>
            <CookieModalCookieDetailParagraphStyle>
              {i18n.t('cookie_modal.preferences.session')}
            </CookieModalCookieDetailParagraphStyle>
            <CookieModalCookieDetailParagraphStyle>
              {i18n.t('cookie_modal.preferences.expiration')}
            </CookieModalCookieDetailParagraphStyle>
            <CookieModalCookieDetailParagraphStyle>
              {i18n.t('cookie_modal.preferences.cookie')}
            </CookieModalCookieDetailParagraphStyle>
          </ColumnElementStyle>
        </CookieModalElementStyle>
        <CookieModalElementStyle className="with-separator">
          <SvgStats style={CookieSVGStyle} aria-hidden focusable="false" />
          <ColumnElementStyle>
            <CookieSectionWrapperStyle>
              <CookieDescriptionStyle
                dangerouslySetInnerHTML={{
                  __html: i18n.t('cookie_modal.details.statistics'),
                }}
              />
              <CookieLabelStyle>
                {i18n.t('cookie_modal.mandatory')}
              </CookieLabelStyle>
            </CookieSectionWrapperStyle>
            <CookieModalCookieDetailParagraphStyle>
              {i18n.t('cookie_modal.statistics.visitor')}
            </CookieModalCookieDetailParagraphStyle>
            <CookieModalCookieDetailParagraphStyle>
              {i18n.t(
                'cookies_management.details.statistics.visitor-created-at'
              )}
            </CookieModalCookieDetailParagraphStyle>
          </ColumnElementStyle>
        </CookieModalElementStyle>
        <CookieModalElementStyle>
          <SvgLoudSpeaker
            style={CookieSVGStyle}
            aria-hidden
            focusable="false"
          />
          <ColumnElementStyle>
            <CookieDescriptionStyle
              dangerouslySetInnerHTML={{
                __html: i18n.t('cookie_modal.details.social_media'),
              }}
            />
            <CookieSwitch
              value="facebook_tracking"
              description={i18n.t('cookie_modal.social_media.facebook_pixel')}
            />
          </ColumnElementStyle>
        </CookieModalElementStyle>
      </CookieModalSectionWrapperStyle>
    </CookieModalContentStyle>
  );
};
