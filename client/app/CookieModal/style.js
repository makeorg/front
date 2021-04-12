import styled from 'styled-components';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { intToPx } from 'Shared/helpers/styled';
import { color, typography } from 'athena-design-tokens';
import { FlexElementStyle } from 'Client/ui/Elements/FlexElements';
import {
  RedButtonStyle,
  UnstyledButtonStyle,
} from 'Client/ui/Elements/Buttons/style';
import { SvgCookie } from 'Client/ui/Svg/elements';
import { MakeFonts } from '../assets/vars/Fonts';

export const CookieModalContentStyle = styled.div`
  display: flex;
  flex-flow: column;
  align-items: start;
  justify-content: space-between;
  width: 335px;
  max-height: 440px;
  padding: 20px 20px 76px;
  overflow-y: auto;
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    width: 800px;
    max-height: 530px;
    padding: 30px 30px 81px;
  }
`;

export const CookieModalTitleWrapperStyle = styled(FlexElementStyle)`
  flex-direction: column;
  align-items: flex-end;
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

export const CookieModalButtonWithLinkStyle = styled(UnstyledButtonStyle)`
  display: flex;
  flex-direction: row-reverse;
  font-family: ${MakeFonts.CircularStandardBook};
  font-size: ${intToPx(typography.font.fontsize.XS.value)};
  color: ${color.greyDark};
  text-decoration: underline;
  &.with-margin-bottom {
    margin-bottom: 30px;
  }
`;

export const CookieModalTitleStyle = styled.h2`
  font-family: ${MakeFonts.CircularStandardBold};
  font-size: ${intToPx(typography.font.fontsize.S.value)};
  text-transform: none;
  letter-spacing: 0.12px;
  margin-bottom: 20px;
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    max-width: 60%;
    margin-bottom: 30px;
  }
`;

export const CookieModalParagraphStyle = styled.p`
  font-family: ${MakeFonts.CircularStandardBook};
  font-size: ${intToPx(typography.font.fontsize.XS.value)};
  padding-bottom: 30px;
`;

export const CookieModalSectionWrapperStyle = styled.ul`
  display: flex;
  flex-flow: column;
  padding: 0px;
  margin-bottom: 30px;
`;

export const CookieModalSectionTitleStyle = styled(CookieModalTitleStyle)`
  text-transform: none;
  letter-spacing: normal;
  margin-bottom: 15px;
`;

export const CookieModalBannerWrapperStyle = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  background-color: #f3f3f3;
  bottom: 0;
  width: 100%;
  border-radius: 0px;
  left: 0;
  z-index: 5;
  padding: 20px;
`;

export const CookieModalElementStyle = styled.li`
  display: flex;
  flex-flow: row;
  font-size: ${intToPx(typography.font.fontsize.XS.value)};
  font-family: ${MakeFonts.CircularStandardBook};
  margin-bottom: 10px;
  strong {
    font-family: ${MakeFonts.CircularStandardBold};
  }
  &.with-separator {
    border-bottom: 1px solid ${color.grey};
    padding-bottom: 20px;
    margin-bottom: 20px;
  }
`;

export const CookieSVGStyle = {
  minWidth: '16px',
  marginTop: '6px',
  marginRight: '16px',
};

export const CookieModalRedButtonStyle = styled(RedButtonStyle)`
  margin-left: 15px;
`;

export const SvgCookieStyle = styled(SvgCookie)`
  position: absolute;
  left: -17px;
  top: 20px;
  width: 67px;
  height: 65px;
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    width: 108px;
    height: 104px;
    top: 14px;
    left: -21px;
  }
`;

export const CookieModalHeaderWrapperStyle = styled(FlexElementStyle)`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: flex-start;
`;

export const CookieModalCookieDetailParagraphStyle = styled(FlexElementStyle)`
  font-family: ${MakeFonts.CircularStandardBook};
  font-size: ${intToPx(typography.font.fontsize.X2S.value)};
  border-top: 1px solid ${color.grey};
  margin-top: 10px;
  padding-top: 10px;
`;

export const CookieModalElementSwitchWrapperStyle = styled(FlexElementStyle)`
  flex-direction: column;
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    align-items: center;
  }
`;

export const CookieModalBackButtonStyle = styled(UnstyledButtonStyle)`
  background-color: ${color.grey};
  border-radius: 20px;
  display: flex;
  justify-content: center;
  svg {
    margin: 5px 15px;
  }
`;

export const CookieSectionWrapperStyle = styled(FlexElementStyle)`
  flex-direction: column;
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const CookieDescriptionStyle = styled.span`
  flex: 1;
`;

export const CookieLabelStyle = styled.span`
  font-size: ${intToPx(typography.font.fontsize.XS.value)};
  margin-top: 10px;
  align-self: flex-end;
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    margin-top: 0;
    margin-left: 20px;
    align-self: flex-start;
  }
`;
