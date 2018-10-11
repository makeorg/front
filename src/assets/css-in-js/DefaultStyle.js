import { createGlobalStyle } from 'styled-components';
import { MakeFonts } from '../vars/Fonts';
import { BasicColors } from '../vars/Colors';

const DefaultStyle = createGlobalStyle`
  body {
    font-family: ${MakeFonts.CircularBook};
    color: ${BasicColors.PureBlack};
    background: ${BasicColors.PureWhite};
    background-color: ${BasicColors.PureWhite};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${MakeFonts.TradeGothic};
    text-transform: uppercase;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    margin: 0;
  }

  a {
    font-family: ${MakeFonts.CircularBold};
    color: ${BasicColors.PureBlack};
    text-decoration: underline;
  }

  input,
  a:hover,
  a:focus {
    color: ${BasicColors.PureBlack};
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  label {
    font-family: ${MakeFonts.CircularBold};
    color: ${BasicColors.PureBlack};
  }

  label:hover,
  button:hover {
    cursor: pointer
  }

  button:disabled {
    cursor: not-allowed;
  }
`;

export default DefaultStyle;
