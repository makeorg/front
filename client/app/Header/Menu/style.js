import styled from 'styled-components';
import {
  BasicColors,
  BackgroundColors,
  ShadowColors,
} from 'Client/app/assets/vars/Colors';
import { UnstyledButtonStyle } from 'Client/ui/Elements/Buttons/style';
import { SpaceBetweenColumnStyle } from 'Client/ui/Elements/FlexElements';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import { Link } from 'react-router-dom';
import { SvgExternalLinkPlain } from 'Client/ui/Svg/elements';

export const MenuOpenTriggerStyle = styled(UnstyledButtonStyle)`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  margin-right: 20px;
`;

export const MenuBarStyle = styled.div`
  width: 16px;
  height: 3px;
  border-radius: 1.5px;
  background-color: ${BasicColors.PureBlack};
  &.first {
    width: 21px;
  }
  &.second {
    width: 26px;
    margin: 6px 0;
  }
`;

export const MenuPanelStyle = styled.div`
  position: fixed;
  top: 0;
  left: -100%;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  background-color: ${BackgroundColors.TaintedWhite};
  box-shadow: 0px 0px 20px ${ShadowColors.BlackZeroEightOpacity};
  transition: 0.5s ease-in left;
  &.expanded {
    left: 0;
  }
  &[aria-hidden='true'] a,
  &[aria-hidden='true'] button {
    visibility: hidden;
  }
`;

export const MenuCloseTriggerStyle = styled(UnstyledButtonStyle)`
  position: absolute;
  top: 30px;
  right: 30px;
  z-index: 101;
  &.tofill {
    fill: ${BasicColors.PureBlack};
  }
`;

export const MenuInnerStyle = styled(SpaceBetweenColumnStyle)`
  height: 100%;
  padding: 100px 0 40px;
  align-items: center;
`;

export const MenuNavStyle = styled.nav`
  width: 100%;
`;

export const MenuItemStyle = styled.li`
  line-height: 67px;
  width: 100%;
  &.white {
    background-color: ${BasicColors.PureWhite};
  }
  &.extra-margin-top {
    margin-top: 15px;
  }
`;

export const MenuItemTitleStyle = styled.span`
  font-family: ${MakeFonts.CircularStandardBold};
  padding: 0 30px;
`;

export const MenuInternalLinkStyle = styled(Link)`
  font-size: 15px;
  line-height: 67px;
  text-decoration: none;
  padding: 0 30px;
  &.current {
    font-family: ${MakeFonts.CircularStandardBold};
  }
`;

export const MenuExternalLinkStyle = styled.a`
  display: inline-flex;
  align-items: center;
  font-size: 14px;
  line-height: 67px;
  padding: 0 30px;
`;

export const MenuNewWindowIconStyle = styled(SvgExternalLinkPlain)`
  width: 10px;
  margin-left: 5px;
`;

export const DesktopMenuNavStyle = styled.nav`
  margin-left: 45px;
`;

export const DesktopMenuItemStyle = styled.li`
  display: inline-flex;
  &.with-border {
    border-left: 1px solid ${ShadowColors.BlackZeroOneOpacity};
    border-right: 1px solid ${ShadowColors.BlackZeroOneOpacity};
  }
`;

const DesktopLinkStyle = `
  display: inline-flex;
  font-family: ${MakeFonts.TradeGothicBoldCondensed};
  text-transform: uppercase;
  text-decoration: none;
  align-items: center;
  font-size: 15px;
  line-height: 40px;
  padding: 0 30px;
`;

export const DesktopMenuInternalLinkStyle = styled(Link)`
  ${DesktopLinkStyle};
`;

export const DesktopMenuExternalLinkStyle = styled.a`
  ${DesktopLinkStyle};
`;
