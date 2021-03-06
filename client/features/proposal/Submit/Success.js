// @flow
import React from 'react';
import { selectAuthentication } from 'Shared/store/selectors/user.selector';
import { useSelector, useDispatch } from 'react-redux';
import { type StateRoot } from 'Shared/store/types';
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
  const { user } = useSelector((state: StateRoot) =>
    selectAuthentication(state)
  );
  const handleCloseButton = () => {
    dispatch(modalClose());
    trackClickKeepVoting();
  };

  return (
    <ProposalSuccessWrapperStyle as="section">
      <ProposalSuccessIconStyle aria-hidden focusable="false" />
      <ProposalSuccessTitleStyle>
        {i18n.t('proposal_submit.success.title', {
          name: user ? user.displayName : '',
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
