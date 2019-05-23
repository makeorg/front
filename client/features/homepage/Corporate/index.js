// @flow
import React from 'react';
import { i18n } from 'Shared/i18n';
import {
  CorporateWrapperStyle,
  CorporateContainerStyle,
  CorporateSectionStyle,
  CorporateIntroStyle,
  CorporateSeparatorStyle,
  CorporateTitleStyle,
  CorporateListItemStyle,
  CorporateIconStyle,
  CorporateLinkStyle,
} from 'Client/features/homepage/Corporate/Styled';
import { UnstyledListStyle } from 'Client/ui/Elements/ListElements';
import {
  SvgLightBulb,
  SvgThumbsUp,
  SvgUserGroup,
} from 'Client/ui/Svg/elements';

export const CorporateBanner = () => {
  return (
    <CorporateWrapperStyle id="corporate">
      <CorporateContainerStyle>
        <CorporateSectionStyle aria-labelledby="corporate_title">
          <CorporateIntroStyle id="corporate_title">
            {i18n.t('homepage.corporate.first-section.introduction')}
          </CorporateIntroStyle>
          <CorporateTitleStyle>
            {i18n.t('homepage.corporate.first-section.title')}
          </CorporateTitleStyle>
          <UnstyledListStyle>
            <CorporateListItemStyle>
              <SvgLightBulb aria-hidden style={CorporateIconStyle} />
              {i18n.t('homepage.corporate.first-section.list-item-1')}
            </CorporateListItemStyle>
            <CorporateListItemStyle>
              <SvgThumbsUp aria-hidden style={CorporateIconStyle} />
              {i18n.t('homepage.corporate.first-section.list-item-2')}
            </CorporateListItemStyle>
            <CorporateListItemStyle>
              <SvgUserGroup aria-hidden style={CorporateIconStyle} />
              {i18n.t('homepage.corporate.first-section.list-item-3')}
            </CorporateListItemStyle>
          </UnstyledListStyle>
        </CorporateSectionStyle>
        <CorporateSeparatorStyle />
        <CorporateSectionStyle aria-labelledby="who_are_we_title">
          <CorporateIntroStyle id="who_are_we_title">
            {i18n.t('homepage.corporate.second-section.introduction')}
          </CorporateIntroStyle>
          <CorporateTitleStyle>
            {i18n.t('homepage.corporate.second-section.title')}
          </CorporateTitleStyle>
          <CorporateListItemStyle as="p">
            {i18n.t('homepage.corporate.second-section.description')}
          </CorporateListItemStyle>
          <CorporateLinkStyle
            as="a"
            href="https://about.make.org/qui-sommes-nous"
          >
            {i18n.t('homepage.corporate.second-section.link-text')}
          </CorporateLinkStyle>
        </CorporateSectionStyle>
      </CorporateContainerStyle>
    </CorporateWrapperStyle>
  );
};
