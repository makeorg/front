import styled from 'styled-components';
import { pxToRem } from 'Helpers/styled';
import { IconInButton } from 'Components/Elements/ButtonElements';
import { IconColors } from 'Assets/vars/Colors';
import { Breakpoints } from 'Assets/vars/Breakpoints';

const Link = styled.button`
  font-size: ${pxToRem('16px')};
  border: none;
  padding: 0;
  margin: 0 ${pxToRem('5px')};
  background: none;
  text-transform: uppercase;
  border-bottom-width: ${pxToRem('1px')};
  border-bottom-style: solid;
`;

export const FacebookLink = styled(Link)`
  color: ${IconColors.Facebook};
  border-bottom-color: ${IconColors.Facebook};
`;

export const GoogleLink = styled(Link)`
  color: ${IconColors.Google};
  border-bottom-color: ${IconColors.Google};
`;

export const SocialIcon = styled(IconInButton)`
  margin-right: ${pxToRem('5px')};
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    margin-right: ${pxToRem('5px')};
  }
`;
