// @flow
import React from 'react';
import { RedLinkHTMLElementStyle } from 'Client/ui/Elements/LinkElements';
import { i18n } from 'Shared/i18n';
import { MetaTags } from 'Client/app/MetaTags';
import { CONTACT_EMAIL } from 'Shared/constants/config';
import {
  StaticPageWrapperStyle,
  StaticSecondLevelTitleStyle,
  StaticParagraphStyle,
} from './style';

export const LegalPage = () => (
  <>
    <MetaTags title={i18n.t('meta.legal.title')} />
    <StaticPageWrapperStyle>
      <StaticSecondLevelTitleStyle>
        {i18n.t('legal.title')}
      </StaticSecondLevelTitleStyle>
      <StaticParagraphStyle>{i18n.t('legal.make_infos')}</StaticParagraphStyle>
      <StaticParagraphStyle>
        {i18n.t('legal.mail')}
        &nbsp;
        <RedLinkHTMLElementStyle as="a" href={`mailto:${CONTACT_EMAIL}`}>
          {CONTACT_EMAIL}
        </RedLinkHTMLElementStyle>
      </StaticParagraphStyle>
      <StaticParagraphStyle>
        {i18n.t('legal.make_phone')}
        {i18n.t('legal.make_phone_number')}
      </StaticParagraphStyle>
      <StaticParagraphStyle>
        {i18n.t('legal.director')}
        Axel Dauchez
      </StaticParagraphStyle>
      <StaticParagraphStyle>
        {i18n.t('legal.host')}
        {i18n.t('legal.host_address')}
      </StaticParagraphStyle>
      <StaticParagraphStyle>
        {i18n.t('legal.host_phone')}
        {i18n.t('legal.host_phone_number')}
      </StaticParagraphStyle>
      <StaticParagraphStyle>
        {i18n.t('legal.cnil')}
        {i18n.t('legal.cnil_number')}
      </StaticParagraphStyle>
    </StaticPageWrapperStyle>
  </>
);

// default export needed for loadable component
export default LegalPage; // eslint-disable-line import/no-default-export
