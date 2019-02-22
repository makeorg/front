import * as React from 'react';

import { ModernNormalizeStylesheet } from 'Client/app/assets/css-in-js/ModernNormalize';
import { FontFacesStylesheet } from 'Client/app/assets/css-in-js/FontFaces';
import { DefaultStylesheet } from 'Client/app/assets/css-in-js/DefaultStyle';
import { UIThemeStylesheet } from 'Client/app/assets/css-in-js/UITheme';
import {
  AppWrapperStyle,
  AppMainContentStyle,
} from 'Client/app/Styled/MainElements';
import { Notification } from './Notification';
import { CookieBanner } from './CookieBanner';
import { Header } from './Header';
import { Footer } from './Footer';
import { Pannel } from './Pannel';
import { Routes } from './Routes';
import { ErrorBoundary } from './Error';

/**
 * Handles App Business Logic
 */
export const AppContainer = () => (
  <ErrorBoundary>
    <AppWrapperStyle>
      <ModernNormalizeStylesheet />
      <FontFacesStylesheet />
      <DefaultStylesheet />
      <UIThemeStylesheet />
      <CookieBanner />
      <Header />
      <AppMainContentStyle role="main">
        <Notification />
        <Routes />
        <Pannel />
      </AppMainContentStyle>
      <Footer />
    </AppWrapperStyle>
  </ErrorBoundary>
);
