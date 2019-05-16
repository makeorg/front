/* @flow */

import styled from 'styled-components';
import { intToPx } from 'Shared/helpers/styled';
import {
  Breakpoints,
  DefaultPadding,
} from 'Client/app/assets/vars/Breakpoints';

export const SecondLevelTitleStyle = styled.h2`
  font-size: 16px;
  @media (min-width: Breakpoints.Tablet) {
    font-size: 22px;
  }
`;

export const ThirdLevelTitleStyle = styled.h3`
  font-size: 14px;
  @media (min-width: Breakpoints.Tablet) {
    font-size: 18px;
  }
`;

export const FourthLevelTitleStyle = styled.h4`
  font-size: 12px;
  @media (min-width: Breakpoints.Tablet) {
    font-size: 16px;
  }
`;

export const HomeTitleStyle = styled.h2`
  font-size: 20px;
  line-height: 1;
  margin-bottom: ${intToPx(DefaultPadding.Mobile)};
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    font-size: 34px;
  }
`;
