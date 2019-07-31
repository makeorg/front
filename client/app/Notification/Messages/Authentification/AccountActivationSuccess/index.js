// @flow

import React from 'react';
import { i18n } from 'Shared/i18n';

export const AccountActivationSuccessMessage = () => (
  <React.Fragment>
    {i18n.t('common.notifications.activate_account', { context: 'success' })}
  </React.Fragment>
);
