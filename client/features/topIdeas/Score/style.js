import styled from 'styled-components';
import { color } from 'athena-design-tokens';
import { intToPx } from 'Shared/helpers/styled';
import { Elements } from 'Client/app/assets/vars/Elements';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';

export const ScoringContentStyle = styled.div`
  background-color: ${color.greyLighter};
  padding: 20px;
  margin: 0 0 20px 0;
  width: 100%;
  border-radius: ${intToPx(Elements.BorderRadius)};
  &:nth-child(1) {
    margin-left: 0;
  }

  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    margin: 0 0 0 20px;
  }
`;

export const ScoringTextContainerStyle = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ScoringTextStyle = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 10px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    flex-direction: column;
    align-items: initial;
  }
`;

export const ScoringPercentageStyle = styled.span`
  font-size: 18px;
  font-family: ${MakeFonts.CircularStandardBold};
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    margin-bottom: 5px;
  }
`;

export const ScoringPercentageTextStyle = styled.span`
  font-size: 14px;
  margin-left: 5px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    margin-left: 0;
  }
`;
