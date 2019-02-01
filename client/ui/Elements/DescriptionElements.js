/* @flow */

import styled from 'styled-components';
import { pxToRem } from 'Shared/helpers/styled';
import { TextColors } from 'Client/app/assets/vars/Colors';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';

export const Description = styled.p`
  font-size: ${pxToRem('14px')};
  color: ${TextColors.MediumGrey};
  text-align: center;
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
      font-size: ${pxToRem('16px')};
  }
`;

export const AltDescription = styled(Description)`
  font-size: ${pxToRem('12px')};
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
      font-size: ${pxToRem('14px')};
  }
`;

export const DescriptionLink = styled.a`
  cursor: pointer;
`;