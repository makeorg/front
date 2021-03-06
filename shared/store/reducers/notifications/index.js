/* @flow */
import {
  CLOSE_NOTIFICATION_BANNER,
  CLOSE_NOTIFICATION_TIP,
  DISMISS_NOTIFICATION,
  DISPLAY_NOTIFICATION_BANNER,
  DISPLAY_NOTIFICATION_TIP,
} from 'Shared/store/actionTypes';
import { NOTIFICATION_LEVEL_INFORMATION } from 'Shared/constants/notifications';

type Notification = {
  contentId?: String,
  level?: string,
  toDimiss?: boolean,
};

type NotificationsState = {
  banner: Notification,
  tip: Notification,
  dismissed: string[],
};

const initialState = {
  banner: {},
  tip: {},
  dismissed: [],
};

export function notifications(
  state: NotificationsState = initialState,
  action: any
) {
  switch (action.type) {
    case DISMISS_NOTIFICATION:
      return {
        ...state,
        dismissed: [...state.dismissed, action.payload.contentId],
      };
    case CLOSE_NOTIFICATION_BANNER:
      return {
        ...state,
        banner: {},
      };
    case DISPLAY_NOTIFICATION_BANNER:
      return {
        ...state,
        banner: {
          contentId: action.payload.contentId,
          params: action.payload.params || {},
          level: action.payload.level
            ? action.payload.level
            : NOTIFICATION_LEVEL_INFORMATION,
          toDismiss: action.payload.toDismiss
            ? action.payload.toDismiss
            : false,
        },
      };
    case CLOSE_NOTIFICATION_TIP:
      return {
        ...state,
        tip: {},
      };
    case DISPLAY_NOTIFICATION_TIP:
      return {
        ...state,
        tip: {
          contentId: action.payload.contentId,
          level: action.payload.level
            ? action.payload.level
            : NOTIFICATION_LEVEL_INFORMATION,
          toDismiss: action.payload.toDismiss
            ? action.payload.toDismiss
            : false,
        },
      };
    default:
      return state;
  }
}
