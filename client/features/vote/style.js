import styled from 'styled-components';
import { intToPx } from 'Shared/helpers/styled';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { UnstyledListStyle } from 'Client/ui/Elements/ListElements';

export const VoteContainerStyle = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: ${props => (props.isSequence ? '22px 0' : '35px 0 50px')};
  &.opinions {
    margin: 30px 0 10px;
  }
  &.placeholder {
    margin: 20px 0 10px;
  }
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    min-width: 250px;
    margin: 30px 0 60px;
    &.opinions {
      margin: 30px 0 10px;
    }
    &.placeholder {
      margin: 20px 0 10px;
    }
  }
`;

export const VoteWrapperStyle = styled(UnstyledListStyle)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 175px;
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    max-width: 200px;
  }
`;

export const VoteButtonWrapperStyle = styled.div`
  position: relative;
  z-index: 1;
`;
