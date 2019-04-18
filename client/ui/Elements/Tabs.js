import styled from 'styled-components';
import {
  Layouts,
  DefaultPadding,
  Breakpoints,
} from 'Client/app/assets/vars/Breakpoints';
import { intToPx } from 'Shared/helpers/styled';
import { BasicColors, BackgroundColors } from 'Client/app/assets/vars/Colors';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';

export const TabNavStyle = styled.nav`
  width: 100%;
`;

const TabListStyle = styled.ul`
  display: flex;
  width: 100%;
  max-width: ${intToPx(Layouts.ContainerWidth)};
  justify-content: flex-start;
  align-items: flex-end;
  padding: 0;
  margin-bottom: ${intToPx(DefaultPadding.Mobile)};
  overflow: auto hidden;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    margin-bottom: ${intToPx(DefaultPadding.Desktop)};
    overflow: visible;
  }
`;

const TabStyle = styled.li`
  list-style: none;
  min-width: 150px;
  background-color: ${props =>
    props.selected ? BackgroundColors.LightGrey : 'rgb(216,216,216)'};
  border-top: ${props =>
    props.selected
      ? `4px solid ${BasicColors.PureBlack}`
      : `1px solid ${BasicColors.PureBlack}`};
  border-bottom: ${props =>
    props.selected ? `1px solid ${BackgroundColors.LightGrey}` : 0};
  border-left: 1px solid ${BasicColors.PureBlack};
  border-right: 1px solid ${BasicColors.PureBlack};
  a {
    display: inline-flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-family: ${MakeFonts.RobotoCondensedBold};
    width: 100%;
    font-size: 14px;
    padding: ${props => (props.selected ? '7px 5px' : '5px')};
    text-decoration: none;
    text-align: center;
    color: ${BasicColors.PureBlack};
    text-transform: uppercase;
    @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
      flex-flow: row;
      font-size: 18px;
      padding: ${props => (props.selected ? '15px' : '10px 15px')};
    }
  }
`;

export const FullWidthTabStyle = styled(TabStyle)`
  flex: 1;
`;

export { TabStyle, TabListStyle };