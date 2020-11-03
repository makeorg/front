import * as React from 'react';
import { ModernNormalizeStylesheet } from 'Client/app/assets/css-in-js/ModernNormalize';
import { FontFacesStylesheet } from 'Client/app/assets/css-in-js/FontFaces';
import { DefaultStylesheet } from 'Client/app/assets/css-in-js/DefaultStyle';
import { UIThemeStylesheet } from 'Client/app/assets/css-in-js/UITheme';
import {
  AppWrapperStyle,
  AppMainContentStyle,
} from 'Client/app/Styled/MainElements';
import { NAVIGATION_ARIA_CLASS, PANEL_ARIA_CLASS } from 'Shared/constants/a11y';
import { MAIN_CONTENT } from 'Shared/constants/ids';
import { NotificationBanner } from 'Client/ui/Elements/Notifications/Banner';
import { CookieBanner } from './CookieBanner';
import { Header } from './Header';
import { Footer } from './Footer';
import { Modal } from './Modal';
import { Routes } from './Routes';
import { SecureExpiration } from './Expiration/Secure';
import { SessionExpiration } from './Expiration/Session';
import { ErrorBoundary, ServiceErrorHandler } from './Error';
import { MainSkipLinks } from './SkipLinks/Main';
import { Panel } from './Panel';
import { CanonicalUrl } from './CanonicalUrl';
/**
 * Handles App Business Logic
 */
export const AppContainer = () => {
  return (
    <SecureExpiration>
      <SessionExpiration>
        <ServiceErrorHandler>
          <ErrorBoundary>
            {/** page_wrapper id is used to set page background color in usePageBackgroundColor hook */}
            <AppWrapperStyle id="page_wrapper">
              <CanonicalUrl />
              <ModernNormalizeStylesheet />
              <FontFacesStylesheet />
              <DefaultStylesheet />
              <UIThemeStylesheet />
              <CookieBanner />
              <MainSkipLinks />
              <Header />
              <AppMainContentStyle
                id={MAIN_CONTENT}
                data-cy-container="main"
                className={`${NAVIGATION_ARIA_CLASS} ${PANEL_ARIA_CLASS}`}
              >
                <NotificationBanner />
                <Routes />
              </AppMainContentStyle>
              <Modal />
              <Footer />
            </AppWrapperStyle>
            <Panel />
          </ErrorBoundary>
        </ServiceErrorHandler>
      </SessionExpiration>
    </SecureExpiration>
  );
};
