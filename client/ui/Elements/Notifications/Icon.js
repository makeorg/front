// @flow
import React from 'react';
import {
  NOTIFICATION_LEVEL_SUCCESS,
  NOTIFICATION_LEVEL_INFORMATION,
  NOTIFICATION_LEVEL_ERROR,
  NOTIFICATION_LEVEL_ALERT,
} from 'Shared/constants/notifications';
import { i18n } from 'Shared/i18n';
import {
  NotificationAlertStyle,
  NotificationSuccessStyle,
  NotificationInfosStyle,
} from './style';

type Props = {
  level: string,
  context?: string,
};

export const NotificationIcon = ({ level, context = 'banner' }: Props) => {
  switch (level) {
    case NOTIFICATION_LEVEL_INFORMATION:
      return (
        <NotificationInfosStyle
          aria-label={i18n.t('common.notifications.icons.information')}
          className={context}
          focusable="false"
        />
      );
    case NOTIFICATION_LEVEL_SUCCESS:
      return (
        <NotificationSuccessStyle
          aria-label={i18n.t('common.notifications.icons.success')}
          className={context}
          focusable="false"
        />
      );
    case NOTIFICATION_LEVEL_ERROR:
      return (
        <NotificationAlertStyle
          aria-label={i18n.t('common.notifications.icons.error')}
          className={context}
          focusable="false"
        />
      );
    case NOTIFICATION_LEVEL_ALERT:
      return (
        <NotificationAlertStyle
          aria-label={i18n.t('common.notifications.icons.alert')}
          className={context}
          focusable="false"
        />
      );

    default:
      return null;
  }
};
