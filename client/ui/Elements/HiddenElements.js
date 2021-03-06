/* @flow */

import styled from 'styled-components';
import { pxToRem } from 'Shared/helpers/styled';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';

export const HiddenItemStyle = styled.span`
  position: absolute;
  display: none;
  width: 0;
  height: 0;
  z-index: -100;
  visibility: hidden;
`;

export const HiddenOnTablet = styled.span`
  display: none !important;
  visibility: hidden;
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}) {
    display: flex !important;
    visibility: visible;
  }
`;
