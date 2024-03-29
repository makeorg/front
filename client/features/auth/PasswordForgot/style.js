import styled from 'styled-components';
import { FormCenterAlignStyle } from 'Client/ui/Elements/Form/Styled/Content';
import { FourthLevelTitleStyle } from 'Client/ui/Elements/TitleElements';

export const ForgotPasswordStyle = styled.section`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100px;
  max-width: 697px;
`;

export const ForgotPasswordFormStyle = styled(FormCenterAlignStyle)`
  max-width: 490px;
`;

export const ForgotPasswordTitleStyle = styled(FourthLevelTitleStyle)`
  margin-bottom: 20px;
`;
