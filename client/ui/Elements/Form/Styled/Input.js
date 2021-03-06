import styled from 'styled-components';
import { color, typography } from 'athena-design-tokens';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import { intToPx } from 'Shared/helpers/styled';

export const BasicInputStyle = styled.input`
  border: none;
  background: transparent;
  background-color: transparent;
  width: 100%;
  font-family: ${MakeFonts.CircularStandardBold};
  color: ${color.greyDark};
  font-size: ${intToPx(typography.font.fontsize.XS.value)};
  line-height: 38px;
  padding: 0 5px;
`;
