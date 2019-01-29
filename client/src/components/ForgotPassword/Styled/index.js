import styled from 'styled-components';
import { pxToRem } from 'Src/helpers/styled';
import { Form } from 'Src/components/Elements/Form';

const ForgotPassword = styled.section`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: ${pxToRem('100px')};
  max-width: ${pxToRem('697px')};
`;

const ForgotPasswordForm = styled(Form)`
  max-width: ${pxToRem('490px')};
`;

ForgotPassword.Form = ForgotPasswordForm;

export default ForgotPassword;