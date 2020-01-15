// @flow
import * as React from 'react';
import { i18n } from 'Shared/i18n';
import { trackClickMakeLogo } from 'Shared/services/Tracking';
import Logo from 'Client/app/assets/images/logo.svg';
import { Link } from 'react-router-dom';
import { WHOAREWE_FR_LINK } from 'Shared/constants/url';
import { useDesktop } from 'Client/hooks/useMedia';
import { SearchInput } from 'Client/features/search/Form';
import { HeaderAuthentification } from './Authentification';
import {
  HeaderStyle,
  HeaderInnerStyle,
  HeaderLogoStyle,
  HeaderFlexLeftStyle,
  HeaderFlexRightStyle,
  WhoAreWeLinkStyle,
} from './style';

/**
 * Renders Main Header
 */
export const Header = () => {
  const isDesktop = useDesktop();
  return (
    <HeaderStyle>
      <HeaderInnerStyle>
        <HeaderFlexLeftStyle>
          <h1>
            <Link to="/">
              <HeaderLogoStyle
                onClick={() => trackClickMakeLogo()}
                src={Logo}
                alt={i18n.t('header.logo_alt')}
              />
            </Link>
          </h1>
          <SearchInput />
        </HeaderFlexLeftStyle>
        <HeaderFlexRightStyle>
          {isDesktop && (
            <WhoAreWeLinkStyle
              as="a"
              target="_blank"
              rel="noreferrer noopener"
              href={WHOAREWE_FR_LINK}
              to={WHOAREWE_FR_LINK}
            >
              {i18n.t('header.whoarewe')}
            </WhoAreWeLinkStyle>
          )}
          <HeaderAuthentification />
        </HeaderFlexRightStyle>
      </HeaderInnerStyle>
    </HeaderStyle>
  );
};
