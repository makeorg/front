import styled from 'styled-components';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import { intToPx } from 'Shared/helpers/styled';
import {
  Breakpoints,
  DefaultPadding,
} from 'Client/app/assets/vars/Breakpoints';
import {
  MakeThemeColors,
  BasicColors,
  ShadowColors,
} from 'Client/app/assets/vars/Colors';

export const SvgLikeStyle = {
  fontSize: '72px',
  fill: `${MakeThemeColors.Red}`,
  margin: '15px 0 5px',
};

export const LightBulbStyle = {
  fontSize: '72px',
  fill: 'rgb(255, 212, 0)',
  margin: '15px 0 5px',
};

export const PlaceholderParagraphStyle = styled.p`
  font-family: ${MakeFonts.RobotoBold};
  font-size: 14px;
  margin: ${intToPx(DefaultPadding.Mobile)} 0 0;
  padding: 0 10px;
  text-align: center;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    font-size: 18px;
    padding: 0;
  }
`;

export const FavouritesCardStyle = styled.aside`
  padding: 0 30px;
  background-color: ${BasicColors.PureWhite};
  box-shadow: 0 1px 1px 0 ${ShadowColors.BlackZeroFiveOpacity};
  margin-top: 30px;
`;

export const FavouritesProposalStyle = styled.p`
  font-size: 12px;
  line-height: normal;
  font-family: ${MakeFonts.RobotoBold};
  font-weight: bold;
  text-align: center;
  margin-top: 15px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    font-size: 18px;
  }
`;
