/* @flow */

import styled from 'styled-components';
import { pxToRem } from 'Shared/helpers/styled';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';

export const FlexElement = styled.div`
  display: flex;
`;

export const ColumnToRowElement = styled(FlexElement)`
  flex-flow: column;
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    flex-flow: row;
  }
`;

export const ColumnElement = styled(FlexElement)`
  flex-flow: column;
`;

/* Row Elements */
export const CenterRow = styled(FlexElement)`
  justify-content: center;
`;

export const MiddleRow = styled(CenterRow)`
  align-items: center;
`;

export const SpaceBetweenRow = styled(FlexElement)`
  justify-content: space-between;
`;

/* Column Elements */
export const CenterColumn = styled(ColumnElement)`
  align-items: center;
`;

export const MiddleColumn = styled(CenterColumn)`
  justify-content: center;
`;

export const SpaceBetweenColumn = styled(ColumnElement)`
  justify-content: space-between;
`;

/* Column To Row Elements */
export const CenterColumnToRow = styled(ColumnToRowElement)`
  align-items: center;
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    justify-content: center;
  }
`;

export const MiddleColumnToRow = styled(CenterColumnToRow)`
  justify-content: center;
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    align-items: center;
  }
`;

export const SpaceBetweenColumnToRow = styled(ColumnToRowElement)`
  align-items: center;
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    justify-content: space-between;
  }
`;