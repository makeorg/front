import styled from 'styled-components';
import {
  TextColors,
  BasicColors,
  StatusColors,
} from 'Client/app/assets/vars/Colors';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { intToPx } from 'Shared/helpers/styled';

export const AuthorInfosStyle = styled.cite`
  display: inline-flex;
  align-items: center;
  font-size: 12px;
  line-height: normal;
  color: ${TextColors.MediumGrey};
  font-style: normal;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    font-size: ${props => (props.withAvatar ? '14px' : '18px')};
  }
`;

export const AuthorSeparatorStyle = styled.span`
  padding: 0 5px;
  font-size: 24px;
`;

export const ProposalStatusStyle = styled.span`
  font-size: 12px;
  color: ${BasicColors.PureWhite};
  padding: 5px 10px;
  &.status-accepted {
    background-color: ${StatusColors.Accepted};
  }
  &.status-refused {
    background-color: ${StatusColors.Refused};
  }
  &.status-postponed,
  &.status-pending {
    background-color: ${StatusColors.Pending};
  }
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    font-size: 14px;
  }
`;