// @flow
import React from 'react';
import { useSelector } from 'react-redux';
import { type StateRoot } from 'Shared/store/types';
import { FooterDE } from './localized/DE';
import { FooterFR } from './localized/FR';
import { FooterINT } from './localized/INT';

/**
 * Renders Main Footer
 */
export const Footer = () => {
  const { language } = useSelector((state: StateRoot) => state.appConfig);

  switch (language) {
    case 'fr':
      return <FooterFR />;
    case 'de':
      return <FooterDE />;
    default:
      return <FooterINT />;
  }
};
