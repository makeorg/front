import styled from 'styled-components';
import { intToPx } from 'Shared/helpers/styled';
import { color, typography } from 'athena-design-tokens';
import {
  Breakpoints,
  Layouts,
  DefaultPadding,
} from 'Client/app/assets/vars/Breakpoints';
import { BasicButtonStyle } from 'Client/ui/Elements/Buttons/style';
import {
  CenterRowStyle,
  ColumnToRowElementStyle,
} from 'Client/ui/Elements/FlexElements';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import { SvgInfos } from 'Client/ui/Svg/elements';

export const CookieWrapperStyle = styled.section`
  width: 100%;
  background-color: ${color.infos};
  color: ${color.white};
  padding: ${intToPx(DefaultPadding.Mobile)} 35px
    ${intToPx(DefaultPadding.Mobile)} ${intToPx(DefaultPadding.Mobile)};
`;

export const CookieContentStyle = styled(CenterRowStyle)`
  margin: 0 auto;
  width: 100%;
  max-width: ${intToPx(Layouts.ContainerWidth)};
  .tofill {
    fill: ${color.white};
  }
`;

export const CookieContentInnerStyle = styled(ColumnToRowElementStyle)`
  align-items: flex-start;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    align-items: center;
  }
`;

export const CookieIconStyle = styled(SvgInfos)`
  min-width: 20px;
  margin-top: 4px;
  margin-right: 10px;
`;

export const CookieParagraphStyle = styled.p`
  font-size: ${intToPx(typography.font.fontsize.XS.value)};
  color: ${color.white};
  flex: 1 1 auto;
  a,
  a:hover,
  a:focus {
    font-family: ${MakeFonts.CircularStandardBold};
    color: ${color.white};
  }
`;

export const CookieButtonStyle = styled(BasicButtonStyle)`
  display: inline-flex;
  margin-top: 15px;
  background-color: ${color.white};
  color: ${color.black};
  padding: 5px 25px 2.5px;
  svg {
    fill: ${color.black};
  }
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    padding: 10px 30px 7.5px;
    margin: 0 0 0 15px;
  }
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    padding: 13px 35px 9.5px;
  }
`;
