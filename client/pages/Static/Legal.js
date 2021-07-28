// @flow
import React from 'react';
import { RedLinkHTMLElementStyle } from 'Client/ui/Elements/LinkElements';
import { i18n } from 'Shared/i18n';
import { MetaTags } from 'Client/app/MetaTags';
import {
  CONTACT_EMAIL,
  HOST_ADDRESS,
  MAKE_ADDRESS,
  MAKE_CAPITAL,
  MAKE_RCS,
  HOST_PHONE_NUMBER,
  CNIL_NUMBER,
  MAKE_PHONE_NUMBER,
} from 'Shared/constants/config';
import {
  StaticPageWrapperStyle,
  StaticSecondLevelTitleStyle,
  StaticParagraphStyle,
  StaticPhoneNumberLink,
} from './style';

export const LegalPage = () => (
  <>
    <MetaTags title={i18n.t('meta.legal.title')} />
    <StaticPageWrapperStyle>
      <StaticSecondLevelTitleStyle>
        {i18n.t('legal.title')}
      </StaticSecondLevelTitleStyle>
      <StaticParagraphStyle>
        {i18n.t('legal.make_infos', {
          make_capital: MAKE_CAPITAL,
          make_address: MAKE_ADDRESS,
          make_rcs: MAKE_RCS,
        })}
      </StaticParagraphStyle>
      <StaticParagraphStyle>
        {i18n.t('legal.mail')}
        &nbsp;
        <RedLinkHTMLElementStyle as="a" href={`mailto:${CONTACT_EMAIL}`}>
          {`${CONTACT_EMAIL}`}
        </RedLinkHTMLElementStyle>
      </StaticParagraphStyle>
      <StaticParagraphStyle>
        {i18n.t('legal.make_phone')}
        <StaticPhoneNumberLink href={`tel:${MAKE_PHONE_NUMBER}`}>
          {i18n.t('legal.make_phone_number', {
            make_phone_number: MAKE_PHONE_NUMBER,
          })}
        </StaticPhoneNumberLink>
      </StaticParagraphStyle>
      <StaticParagraphStyle>
        {i18n.t('legal.director')}
        Axel Dauchez
      </StaticParagraphStyle>
      <StaticParagraphStyle>
        {i18n.t('legal.host')}
        {i18n.t('legal.host_address', { make_host_address: HOST_ADDRESS })}
      </StaticParagraphStyle>
      <StaticParagraphStyle>
        {i18n.t('legal.host_phone')}
        <StaticPhoneNumberLink href={`tel:${HOST_PHONE_NUMBER}`}>
          {i18n.t('legal.host_phone_number', {
            host_number: HOST_PHONE_NUMBER,
          })}
        </StaticPhoneNumberLink>
      </StaticParagraphStyle>
      <StaticParagraphStyle>
        {i18n.t('legal.cnil')}
        {i18n.t('legal.cnil_number', {
          cnil_number: CNIL_NUMBER,
        })}
      </StaticParagraphStyle>
    </StaticPageWrapperStyle>
  </>
);

// default export needed for loadable component
export default LegalPage; // eslint-disable-line import/no-default-export
