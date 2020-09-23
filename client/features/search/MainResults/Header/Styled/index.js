import styled from 'styled-components';
import { TextColors, BorderColors } from 'Client/app/assets/vars/Colors';
import {
  PlayfairParagraphStyle,
  ParagraphStyle,
} from 'Client/ui/Elements/ParagraphElements';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { intToPx } from 'Shared/helpers/styled';

export const MainResultsHeaderStyle = styled.div`
  padding: 0 20px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    padding: 0;
  }
`;

export const MainResultsHeaderContentStyle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 10px;
  border-bottom: 1px solid ${BorderColors.LightGrey};
  margin-bottom: 20px;
`;

export const MainResultsTitleWrapperStyle = styled(ParagraphStyle)`
  color: ${TextColors.DarkGrey};
`;

export const MainResultsTitleStyle = styled(PlayfairParagraphStyle)`
  display: inline-flex;
  margin-right: 10px;
`;
