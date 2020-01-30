import styled from 'styled-components';
import {
  Breakpoints,
  DefaultPadding,
  Layouts,
} from 'Client/app/assets/vars/Breakpoints';
import { intToPx } from 'Shared/helpers/styled';
import { MiddleColumnStyle } from 'Client/ui/Elements/FlexElements';
import { ConsultationLabelStyle } from 'Client/ui/Elements/ConsultationElements';
import { SecondLevelTitleStyle } from 'Client/ui/Elements/TitleElements';

export const IntroWrapperStyle = styled(MiddleColumnStyle)`
  padding: 30px ${intToPx(DefaultPadding.Mobile)};
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    padding: 50px ${intToPx(DefaultPadding.Desktop)};
  }
`;

export const GreatCauseIntroLabelStyle = styled(ConsultationLabelStyle)`
  margin-bottom: 5px;
`;

export const GreatCauseIntroBannerTitleStyle = styled(SecondLevelTitleStyle)`
  text-align: center;
  max-width: 550px;
  color: ${props => props.theme.fontColor};
  line-height: 1.33;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    line-height: 1.53;
  }
`;

export const DefaultBannerMainContainer = styled.div`
  width: 100%;
  max-width: ${intToPx(Layouts.ContainerWidth)};
  line-height: 1.33;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    line-height: 1.53;
  }
`;

export const DefaultBannerTitleStyle = styled(SecondLevelTitleStyle)`
  color: ${props => props.theme.fontColor};
  line-height: 1.33;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    line-height: 1.53;
  }
`;

export const DefaultBannerTimeStyle = styled.div`
  color: ${props => props.theme.fontColor};
  line-height: 24px;
  margin-top: 10px;
  font-size: 0.9em;
`;
