/* @flow */

import { createGlobalStyle } from 'styled-components';
import { intToPx } from 'Shared/helpers/styled';
import { MakeThemeColors, ShadowColors, BasicColors } from '../vars/Colors';
import { Layouts, DefaultPadding, Breakpoints } from '../vars/Breakpoints';

export const UIThemeStylesheet = createGlobalStyle`
  .red-link {
    color: ${MakeThemeColors.Red};
    &:hover,
    &:focus {
      color: ${MakeThemeColors.Red};
    }
  }

  /** Modal */
  .modal-overlay {
    display: flex;
    justify-content: center;
    align-content: center;
    flex-flow: column;
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 10;
    background-color: ${ShadowColors.BlackZeroEightOpacity};
    padding: ${intToPx(DefaultPadding.Mobile)};
    @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
      padding: ${intToPx(DefaultPadding.Desktop)};
    }
  }

  .modal-dialog {
    position: relative;
    z-index: 2;
    align-self: center;
    max-width: ${intToPx(Layouts.ContainerWidth)};
    max-height: 100%;
    padding: ${intToPx(DefaultPadding.Mobile)};
    background-color: ${BasicColors.PureWhite};
    box-shadow: 0 1px 1px 0 ${ShadowColors.BlackZeroFiveOpacity};
    overflow-y: auto;
    border-radius: 8px;
    @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
      padding: ${intToPx(DefaultPadding.Desktop)};
    }
  }
`;
