// @flow
import React from 'react';
import { RedLinkHTMLElementStyle } from 'Client/ui/Elements/LinkElements';
import { i18n } from 'Shared/i18n';
import { MetaTags } from 'Client/app/MetaTags';
import { CONTACT_EMAIL, CONTACT_EMAIL_DE } from 'Shared/constants/config';
import { useSelector } from 'react-redux';
import { StateRoot } from 'Shared/store/types';
import {
  StaticPageWrapperStyle,
  StaticSecondLevelTitleStyle,
  StaticParagraphStyle,
} from './style';

export const Contact = () => {
  const { country } = useSelector((state: StateRoot) => state.appConfig);
  const isDE = country === 'DE';

  return (
    <>
      <MetaTags
        title={i18n.t('meta.contact.title')}
        description={i18n.t('meta.contact.description')}
      />
      <StaticPageWrapperStyle>
        <StaticSecondLevelTitleStyle>
          {i18n.t('contact.contactUs')}
        </StaticSecondLevelTitleStyle>
        <StaticParagraphStyle>
          {i18n.t('contact.paragraph')}
          &nbsp;
          <RedLinkHTMLElementStyle
            href={`mailto:${isDE ? CONTACT_EMAIL_DE : CONTACT_EMAIL}`}
          >
            {`${isDE ? CONTACT_EMAIL_DE : CONTACT_EMAIL}`}
          </RedLinkHTMLElementStyle>
        </StaticParagraphStyle>
      </StaticPageWrapperStyle>
    </>
  );
};

// default export needed for loadable component
export default Contact; // eslint-disable-line import/no-default-export
