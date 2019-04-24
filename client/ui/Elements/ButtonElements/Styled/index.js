/* @flow */

import styled from 'styled-components';
import { intToPx } from 'Shared/helpers/styled';
import {
  Breakpoints,
  DefaultPadding,
} from 'Client/app/assets/vars/Breakpoints';
import {
  BasicColors,
  IconColors,
  MakeThemeColors,
  BackgroundColors,
  ShadowColors,
} from 'Client/app/assets/vars/Colors';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';

export const ButtonsWrapperStyle = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    flex-flow: row;
    margin: 20px 0;
  }
`;

export const UnstyledButtonStyle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  border: none;
  background-color: transparent;
`;

const BasicButtonStyle = `
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${MakeFonts.RobotoCondensedBold};
  font-size: 14px;
  line-height: 18px;
  border: none;
  border-radius: 30px;
  text-transform: uppercase;
  box-shadow: 0 0 4px 0 ${ShadowColors.BlackZeroFiveOpacity};
  padding: 10px 15px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    font-size: 16px;
  }
`;

export const RedButtonStyle = styled.button`
  ${BasicButtonStyle};
  color: ${BasicColors.PureWhite};
  background-color: ${MakeThemeColors.Red};
  svg {
    fill: ${BasicColors.PureWhite};
  }
`;

export const GreyButtonStyle = styled.button`
  ${BasicButtonStyle};
  color: ${BasicColors.PureWhite};
  background-color: ${BackgroundColors.Grey};
  svg {
    fill: ${BasicColors.PureWhite};
  }
`;

export const SmallRedButtonStyle = styled(RedButtonStyle)`
  padding: 5px 15px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    padding: 10px 20px;
  }
`;

export const SmallGreyButtonStyle = styled(GreyButtonStyle)`
  padding: 5px 15px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    padding: 10px 20px;
  }
`;

export const ActiveButtonStyle = styled.button`
  ${BasicButtonStyle};
  color: ${BasicColors.PureWhite};
  background-color: ${MakeThemeColors.Red};
  svg {
    fill: ${BasicColors.PureWhite};
  }
  &:disabled {
    background-color: ${BackgroundColors.Grey};
  }
`;

export const IconWrapperStyle = styled.span`
  display: inline-flex;
  justify-content: flex-start;
  align-content: center;
  margin-right: 5px;
`;

export const SocialButtonStyle = styled(ActiveButtonStyle)`
  width: 100%;
  margin: 0 5px;
  padding: 5px 15px;
  color: ${BasicColors.PureWhite};
  svg {
    fill: ${BasicColors.PureWhite};
  }
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    padding: 10px 20px;
  }
`;

const SocialButtonMargin = `
  margin-top: 10px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    margin-top: 0;
  }
`;

export const FacebookButtonStyle = styled(SocialButtonStyle)`
  background-color: ${IconColors.Facebook};
`;

export const GoogleButtonStyle = styled(SocialButtonStyle)`
  ${SocialButtonMargin};
  background-color: ${IconColors.Google};
`;
export const EmailButtonStyle = styled(SocialButtonStyle)`
  ${SocialButtonMargin};
  background-color: ${MakeThemeColors.Red};
`;

export const RedLinkButtonStyle = styled(UnstyledButtonStyle)`
  display: inline-block;
  font-family: ${MakeFonts.RobotoBold};
  color: ${MakeThemeColors.Red};
  text-decoration: underline;
  margin: 0 5px;
`;

export const ButtonSmallWrapperStyle = styled(ButtonsWrapperStyle)`
  max-width: 410px;
`;

export const CloseButtonStyle = styled(UnstyledButtonStyle)`
  position: absolute;
  top: ${intToPx(DefaultPadding.Mobile)};
  right: ${intToPx(DefaultPadding.Mobile)};
  z-index: 1;
  font-size: 16px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    top: ${intToPx(DefaultPadding.Desktop)};
    right: ${intToPx(DefaultPadding.Desktop)};
  }
`;

export const CloseBannerButtonStyle = styled(CloseButtonStyle)`
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    top: 15px;
    right: 15px;
  }
`;
