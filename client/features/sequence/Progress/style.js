import styled from 'styled-components';
import { SvgPreviousArrowLeft } from 'Client/ui/Svg/elements';
import { color, typography } from 'athena-design-tokens';
import { UnstyledButtonStyle } from 'Client/ui/Elements/Buttons/style';
import { intToPx } from 'Shared/helpers/styled';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';

export const ProgressPreviousButtonStyle = styled(UnstyledButtonStyle)`
  flex: 0;
  padding: 5px 15px;
  border-radius: 20px;
  background-color: ${color.white};
  border-radius: 20px;
  &:disabled .tofill {
    fill: ${color.grey};
  }
`;

export const ProgressIconStyle = styled(SvgPreviousArrowLeft)`
  width: 13px;
`;

export const ProgressCounterStyle = styled.span`
  align-self: center;
  flex: 0;
  color: ${color.greyDark};
  font-size: ${intToPx(typography.font.fontsize.XS.value)};
  padding: 0 5px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    padding: 0 25px;
  }
`;

export const ProgressBarWrapperStyle = styled.div`
  position: relative;
  flex: 1;
  border-radius: 12.5px;
  overflow: hidden;
  background-color: ${color.white};
  border: 1px solid ${color.grey};
`;

export const ProgressBarStyle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: ${props => props.percentWidth};
  background-color: ${props => props.theme.color};
  transition: width ease-in 0.5s;
`;
