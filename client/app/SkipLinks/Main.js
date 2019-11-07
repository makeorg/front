import React from 'react';
import { i18n } from 'Shared/i18n';
import { SkipLink } from 'Client/app/Styled/MainElements';
import { UnstyledListStyle } from 'Client/ui/Elements/ListElements';

export const MainSkipLinks = () => (
  <UnstyledListStyle>
    <li>
      <SkipLink as="a" href="#main_content">
        {i18n.t('skip_links.main_content')}
      </SkipLink>
    </li>
    <li>
      <SkipLink as="a" href="#main_footer">
        {i18n.t('skip_links.main_footer')}
      </SkipLink>
    </li>
  </UnstyledListStyle>
);