import styled from 'styled-components';
import { pxToRem } from '../../../helpers/styled';
import { BasicColors, BorderColors } from '../../../assets/vars/Colors';
import Breakpoints from '../../../assets/vars/Breakpoints';
import {
  Label,
  Input,
  CharLimit,
  ProposalButton,
  DisabledProposalButton
} from './ProposalField';

export const DescriptionWrapper = styled.div``;

const ProposalSubmitForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: ${pxToRem('45px')};
  max-width: ${pxToRem(Breakpoints.sequenceWidth)};
  padding: 0 ${pxToRem('8px')};
  border: ${pxToRem('1px')} solid ${BorderColors.LightGrey};
  border-radius: ${pxToRem('30px')};
  margin-bottom: ${pxToRem('30px')};
  background: ${BasicColors.PureWhite};
  background-color: ${BasicColors.PureWhite};
  @media (min-width: ${pxToRem(Breakpoints.mobile)}){
    min-height: ${pxToRem('50px')};
  }
`;

/* Proposal Field */
ProposalSubmitForm.Label = Label;
ProposalSubmitForm.Input = Input;
ProposalSubmitForm.CharLimit = CharLimit;
ProposalSubmitForm.ProposalButton = ProposalButton;
ProposalSubmitForm.DisabledProposalButton = DisabledProposalButton;

export default ProposalSubmitForm;