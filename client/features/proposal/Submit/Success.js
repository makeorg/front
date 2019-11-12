// @flow
import React from 'react';
import { useDispatch } from 'react-redux';
import { i18n } from 'Shared/i18n';
import { RedButtonStyle } from 'Client/ui/Elements/Buttons/style';
import { modalClose } from 'Shared/store/actions/modal';
import { trackClickKeepVoting } from 'Shared/services/Tracking';
import {
  ProposalSuccessWrapperStyle,
  ProposalSuccessTitleStyle,
  ProposalSuccessParagraphStyle,
  ProposalSuccessIconStyle,
} from './style';

export const ProposalSuccess = () => {
  const dispatch = useDispatch();
  const handleCloseButton = () => {
    dispatch(modalClose());
    trackClickKeepVoting();
  };

  return (
    <ProposalSuccessWrapperStyle as="section">
      <ProposalSuccessIconStyle aria-hidden focusable="false" />
      <ProposalSuccessTitleStyle>
        {i18n.t('proposal_submit.success.title', {
          name: '',
        })}
      </ProposalSuccessTitleStyle>
      <ProposalSuccessParagraphStyle>
        {i18n.t('proposal_submit.success.description')}
      </ProposalSuccessParagraphStyle>
      <RedButtonStyle onClick={handleCloseButton}>
        {i18n.t('proposal_submit.success.button')}
      </RedButtonStyle>
    </ProposalSuccessWrapperStyle>
  );
};
