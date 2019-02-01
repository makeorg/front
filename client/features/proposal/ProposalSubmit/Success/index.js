import * as React from 'react';
import i18next from 'i18next';
import { Description } from 'Client/ui/Elements/DescriptionElements';
import { DescriptionWrapper } from '../Styled';

/**
 * Renders succes message after proposal is submitted
 */
const ProposalSubmitSuccessComponent = () => (
  <DescriptionWrapper>
    <Description id="proposal-submit-success">
      {i18next.t('proposal_submit.success')}
    </Description>
  </DescriptionWrapper>
);

export default ProposalSubmitSuccessComponent;