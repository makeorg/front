// @flow
import React, { useEffect } from 'react';
import { type StateRoot } from 'Shared/store/types';
import { i18n } from 'Shared/i18n';
import { ColumnElementStyle } from 'Client/ui/Elements/FlexElements';
import { AuthenticationRegisterButtons } from 'Client/features/auth/Register/Buttons';
import {
  trackClickPersonnalDataLink,
  trackDisplayAuthenticationForm,
} from 'Shared/services/Tracking';
import { useSelector, useDispatch } from 'react-redux';
import {
  closePanel,
  removePanelContent,
} from 'Shared/store/reducers/panel/actions';
import { modalShowLogin } from 'Shared/store/actions/modal';
import { selectAuthentication } from 'Shared/store/selectors/user.selector';
import { DATA_POLICY_LINK } from 'Shared/constants/url';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import { NewWindowLinkStyle } from 'Client/features/consultation/Sidebar/Link/style';
import { NewWindowIconStyle } from 'Client/ui/Elements/LinkElements';
import {
  ProposalStepWrapperStyle,
  ProposalBackButtonStyle,
  ProposalBackIconWrapperStyle,
  ProposalBackIconStyle,
  ProposalAuthWrapperStyle,
  ProposalAltStepTitleStyle,
  ProposalAuthDisclaimerStyle,
  ProposalAuthSeparatorStyle,
  ProposalAuthLoginStyle,
  ProposalAuthCancelStyle,
} from './style';

type Props = {
  handleStepBack: () => void,
  handleCancel: () => void,
  handleProposeAPICall: () => void,
};

export const ProposalAuthentication = ({
  handleStepBack,
  handleCancel,
  handleProposeAPICall,
}: Props) => {
  const dispatch = useDispatch();
  const { isLoggedIn, user } = useSelector((state: StateRoot) =>
    selectAuthentication(state)
  );
  const handleModerationLink = () => {
    dispatch(closePanel());
    dispatch(removePanelContent());
    trackClickPersonnalDataLink();
  };

  useEffect(() => {
    trackDisplayAuthenticationForm();
  }, []);

  useEffect(() => {
    if (isLoggedIn && user && user.profile) {
      handleProposeAPICall();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn, user]);

  return (
    <ProposalStepWrapperStyle>
      <ColumnElementStyle>
        <ProposalBackButtonStyle onClick={handleStepBack}>
          <ProposalBackIconWrapperStyle>
            <ProposalBackIconStyle aria-hidden focusable="false" />
          </ProposalBackIconWrapperStyle>
          {i18n.t('proposal_submit.authentication.button_back')}
        </ProposalBackButtonStyle>
        <ProposalAuthWrapperStyle>
          <ProposalAltStepTitleStyle className="center">
            {i18n.t('proposal_submit.authentication.title')}
          </ProposalAltStepTitleStyle>
          <ProposalAuthDisclaimerStyle className="with-margin-top">
            {i18n.t('proposal_submit.authentication.subtitle')}
          </ProposalAuthDisclaimerStyle>
          <AuthenticationRegisterButtons />
          <ProposalAuthDisclaimerStyle>
            {i18n.t('authentication.commitment')}
            <NewWindowLinkStyle
              target="_blank"
              href={DATA_POLICY_LINK}
              rel="noopener noreferrer"
              onClick={handleModerationLink}
            >
              {i18n.t('authentication.personal_data')}
              <NewWindowIconStyle aria-hidden focusable="false" />
              <ScreenReaderItemStyle>
                {i18n.t('common.open_new_window')}
              </ScreenReaderItemStyle>
            </NewWindowLinkStyle>
          </ProposalAuthDisclaimerStyle>
          <ProposalAuthSeparatorStyle />
          <ProposalAuthLoginStyle onClick={() => dispatch(modalShowLogin())}>
            {i18n.t('proposal_submit.authentication.button_login')}
          </ProposalAuthLoginStyle>
        </ProposalAuthWrapperStyle>
      </ColumnElementStyle>
      <ProposalAuthCancelStyle onClick={handleCancel}>
        {i18n.t('proposal_submit.form.button_cancel')}
      </ProposalAuthCancelStyle>
    </ProposalStepWrapperStyle>
  );
};
