/* @flow */

import { Elements } from 'Assets/vars/Elements';
import { DefaultPadding } from 'Assets/vars/Breakpoints';

export const
  CALC_HEIGHT_MOBILE: number = Elements.HeaderHeightMobile
  + Elements.FooterHeightMobile;

export const
  CALC_HEIGHT_DESKTOP: number = Elements.HeaderHeightDesktop
  + Elements.FooterHeightDesktop;

export const
  CALC_WIDTH_MOBILE: number = DefaultPadding.Mobile * 2;

export const
  CALC_WIDTH_DESKTOP: number = DefaultPadding.Desktop * 2;

export const
  CALC_RECOVERY_HEIGHT_MOBILE: number = Elements.HeaderHeightMobile
  + Elements.FooterHeightMobile
  + DefaultPadding.Mobile;

export const
  CALC_RECOVERY_HEIGHT_DESKTOP: number = Elements.HeaderHeightDesktop
  + Elements.FooterHeightDesktop
  + DefaultPadding.Desktop;