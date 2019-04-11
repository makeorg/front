import styled from 'styled-components';
import { intToPx } from 'Shared/helpers/styled';
import { ColumnElementStyle } from 'Client/ui/Elements/FlexElements';
import {
  Breakpoints,
  Layouts,
  DefaultPadding,
} from 'Client/app/assets/vars/Breakpoints';
import {
  TabsOffsetMobile,
  TabsOffsetTablet,
  TabsOffsetDesktop,
} from 'Shared/constants/tabs';

const MobileOffset = intToPx(TabsOffsetMobile);
const DesktopOffset = intToPx(TabsOffsetDesktop);
const TabletOffset = intToPx(TabsOffsetTablet);
const MobileMarginWithOffset = DefaultPadding.Mobile - TabsOffsetMobile;
const DesktopMarginWithOffset = DefaultPadding.Desktop - TabsOffsetDesktop;

export const ConsultationPageWrapperStyle = styled.div`
  display: flex;
  flex: 1;
  align-items: flex-start;
  flex-flow: column;
  width: 100%;
  max-width: ${intToPx(Layouts.ContainerWidth)};
  margin: 0 auto ${intToPx(MobileMarginWithOffset)};
  transform: translateY(-${MobileOffset});
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    justify-content: space-between;
    margin: 0 auto ${intToPx(DesktopMarginWithOffset)};
    transform: translateY(-${TabletOffset});
  }
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    transform: translateY(-${DesktopOffset});
  }
`;

export const ContentElementStyle = styled(ColumnElementStyle)`
  width: 100%;
  flex: 1;
`;

export const ConsultationPageContentStyle = styled(ContentElementStyle)`
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    max-width: 750px;
    margin-right: 15px;
  }
`;

export const ConsultationPageSidebarStyle = styled(ContentElementStyle)`
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    order: 1;
    max-width: 360px;
    position: sticky;
    ${props =>
      props.bottomAffix
        ? `bottom: -${DesktopOffset}; align-self: flex-end`
        : `top: ${DesktopOffset} ; align-self: flex-start`};
  }
`;

export const ConsultationPageNav = styled.nav`
  width: 100%;
`;
