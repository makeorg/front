// @flow
import React from 'react';
import { RedLinkHTMLElementStyle } from 'Client/ui/Elements/LinkElements';
import { i18n } from 'Shared/i18n';
import { CONTACT_EMAIL } from 'Shared/constants/config';
import { MetaTags } from 'Client/app/MetaTags';
import {
  StaticPageWrapperStyle,
  StaticSecondLevelTitleStyle,
  StaticParagraphStyle,
} from './style';

export const Contact = () => (
  <>
    <MetaTags title={i18n.t('meta.contact.title')} />
    <StaticPageWrapperStyle>
      <StaticSecondLevelTitleStyle>
        {i18n.t('contact.contactUs')}
      </StaticSecondLevelTitleStyle>
      <StaticParagraphStyle>
        {i18n.t('contact.paragraph')}
        &nbsp;
        <RedLinkHTMLElementStyle href={`mailto:${CONTACT_EMAIL}`}>
          {`${CONTACT_EMAIL}.`}
        </RedLinkHTMLElementStyle>
      </StaticParagraphStyle>
    </StaticPageWrapperStyle>
  </>
);

// default export needed for loadable component
export default Contact; // eslint-disable-line import/no-default-export
