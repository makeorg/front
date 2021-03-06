import styled from 'styled-components';
import { color } from 'athena-design-tokens';
import { intToPx } from 'Shared/helpers/styled';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { UnstyledButtonStyle } from '../../Buttons/style';

export const TipWrapperStyle = styled.div`
  position: relative;
  font-family: ${MakeFonts.CircularStandardBook};
  background-color: ${color.infos};
  color: ${color.white};
  margin-top: ${props => (props.isFirstSequenceVote ? '20px' : '0px')};
  padding: 6px 37px 6px 10px;
  border-radius: 2px;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.14px;
`;

export const TipCrossStyle = styled(UnstyledButtonStyle)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 10px;
  &:before {
    content: '';
    position: absolute;
    right: 16px;
    width: 1px;
    height: 16px;
    border: 1px solid ${color.greyDark};
    background-color: ${color.greyDark};
  }
  svg {
    width: 9px;
    height: 9px;
  }
  .tofill {
    fill: ${color.white};
  }
`;

export const TriangleUpStyle = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 6px 9px 6px;
  border-color: transparent transparent ${color.infos} transparent;
  margin-left: 73%;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    margin-left: 440px;
  }
`;

export const TriangleDownStyle = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 9px 6px 0 6px;
  border-color: ${color.infos} transparent transparent transparent;
`;

export const TipLinkStyle = styled(UnstyledButtonStyle)`
  display: inline;
  color: ${color.white};
  text-decoration: underline;
  margin-left: 5px;
  font-family: ${MakeFonts.CircularStandardBook};
  &:hover,
  &:focus {
    color: ${color.white};
  }
`;
