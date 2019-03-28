import styled from 'styled-components';
import { LinkAsRedButton } from 'Client/ui/Elements/LinkElements';
import { UnstyledListStyle } from 'Client/ui/Elements/ListElements';
import { intToPx } from 'Shared/helpers/styled';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';

export const ParticipateButtonStyle = styled(LinkAsRedButton)`
  margin: 10px 0 15px;
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    margin: 20px 0;
  }
`;

export const PartnersListStyle = styled(UnstyledListStyle)`
  margin: 10px 0;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px;
`;

export const AvatarWrapperStyle = styled.div`
  position: relative;
  z-index: 1;
`;
