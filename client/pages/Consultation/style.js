import styled from 'styled-components';
import { color, typography } from 'athena-design-tokens';
import { intToPx, pxToPercent } from 'Shared/helpers/styled';
import {
  ColumnElementStyle,
  ColumnToRowElementStyle,
} from 'Client/ui/Elements/FlexElements';
import { Breakpoints, Layouts } from 'Client/app/assets/vars/Breakpoints';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import { SvgChat } from 'Client/ui/Svg/elements';
import { ContainerWithPadding } from 'Client/app/Styled/MainElements';

export const ConsultationHeaderWrapperStyle = styled.div`
  background-color: ${props => props.backgroundcolor};
  background: linear-gradient(
    115deg,
    ${props => props.gradientStart},
    ${props => props.gradientEnd}
  );
  margin-top: -5px;
`;

export const ConsultationPageWrapperStyle = styled.div`
  display: flex;
  flex-flow: column;
  box-sizing: border-box;
  width: 100%;
  max-width: ${intToPx(Layouts.ContainerWithPadding)};
  margin: ${props => (props.isGreatCause ? '20px auto' : '0 auto 20px')};
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    padding: 0 20px;
    margin: 20px auto;
  }
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    flex-flow: row;
    margin: 45px auto;
  }
`;

export const ContentElementStyle = styled(ColumnElementStyle)`
  width: 100%;
  height: 100%;
`;

export const ConsultationPageContentStyle = styled(ContentElementStyle)`
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    width: ${pxToPercent(780, 1140)};
  }
`;

export const ConsultationPageSidebarStyle = styled(ContentElementStyle)`
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    margin-bottom: 20px;
  }
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    margin-bottom: 0;
    padding-left: ${pxToPercent(20, 1140)};
    order: 1;
    width: ${pxToPercent(390, 1140)};
    position: sticky;
    ${props =>
      props.bottomAffix
        ? `bottom: 0; align-self: flex-end`
        : 'top: 0; align-self: flex-start'};
  }
`;

export const TopIdeasPageTitleStyle = styled.h2`
  font-size: ${intToPx(typography.font.fontsize.XS.value)};
  line-height: 1.5;
  margin: 10px 0 20px;
  padding: 0 20px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    margin: 0 0 20px;
    padding: 0;
    font-size: ${intToPx(typography.font.fontsize.S.value)};
  }
`;

export const TopIdeaDetailsPageTitleStyle = styled(TopIdeasPageTitleStyle)`
  margin: 40px 0 25px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    margin: 40px 0 25px;
  }
`;

export const TopIdeaDetailsIconStyle = styled(SvgChat)`
  margin-right: 15px;
  .tofill {
    fill: ${color.black};
  }
`;

export const TopIdeasListStyle = styled.ol`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const TopIdeasListItemStyle = styled.li`
  margin: 0 0 20px;
`;

export const ParticipateContentStyle = styled.section`
  display: flex;
  flex-flow: column;
  ${ContainerWithPadding};
`;

export const ParticipateTitleStyle = styled.h3`
  font-family: ${MakeFonts.CircularStandardBold};
  text-transform: none;
  font-size: ${intToPx(typography.font.fontsize.X2L.value)};
  margin: 40px 0 15px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    font-size: ${intToPx(typography.font.fontsize.X4L.value)};
    margin-bottom: 50px 0 5px;
  }
`;

export const ExploreTitleWrapperStyle = styled(ColumnToRowElementStyle)`
  margin-top: 30px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    align-items: baseline;
    margin-top: 50px;
  }
`;

export const ExploreTitleStyle = styled.h3`
  font-family: ${MakeFonts.CircularStandardBold};
  text-transform: none;
  font-size: ${intToPx(typography.font.fontsize.L.value)};
  letter-spacing: 0.5px;
  margin-bottom: 20px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    font-size: ${intToPx(typography.font.fontsize.XL.value)};
    margin-bottom: 0;
    margin-right: 15px;
  }
`;

export const ExploreProposalsCountStyle = styled.span`
  font-family: ${MakeFonts.CircularStandardBook};
  font-size: ${intToPx(typography.font.fontsize.XS.value)};
  color: ${color.greyDark};
  letter-spacing: 0.14px;
`;

export const ParticipateDescriptionStyle = styled.p`
  font-size: ${intToPx(typography.font.fontsize.XS.value)};
  max-width: 750px;
  margin-bottom: 40px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    margin-bottom: 50px;
  }
`;

export const ParticipateInnerStyle = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  max-width: ${intToPx(Layouts.ContainerWithPadding)};
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    flex-flow: row;
  }
`;

export const ParticipateMainContentStyle = styled(ColumnElementStyle)`
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    width: ${pxToPercent(750, 1140)};
  }
`;

export const ParticipateSidebarContentStyle = styled(ColumnElementStyle)`
  width: 100%;
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    margin-left: ${pxToPercent(30, 1140)};
    width: ${pxToPercent(360, 1140)};
  }
`;

export const ParticipateFullwidthContentStyle = styled(ColumnElementStyle)`
  width: 100%;
`;
