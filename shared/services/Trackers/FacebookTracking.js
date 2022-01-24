// @flow
import { env } from 'Shared/env';
import { Logger } from '../Logger';
import { fbq } from './fbq';

const makePixelId: string = '260470104426586';

let initialized: boolean = false;

type FacebookEventParams = {
  source: string,
  location: string,
  url: string,
  country: string,
  language: string,
  referer?: string,
  question: string,
  cardPosition?: string,
  sequenceId?: string,
  proposalId?: string,
  questionId?: string,
  questionSlug?: string,
};

export const isFBInitialized = (): boolean => {
  if (!initialized) {
    // eslint-disable-next-line no-console
    console.warn(
      'Facebook Tracking not initialized before using call FacebookTracking.init with required params'
    );
  }

  return initialized;
};

export const FacebookTracking = {
  init(): void {
    try {
      fbq.load();
      fbq.track('init', makePixelId);
      initialized = true;
    } catch (e) {
      Logger.logError(e);
    }
  },

  isInitialized(): void {
    if (isFBInitialized()) {
      return true;
    }

    return false;
  },

  pageView(): void {
    if (!isFBInitialized()) {
      return;
    }

    if (env.isDev()) {
      return;
    }
    try {
      fbq.track('track', 'PageView');
    } catch (e) {
      Logger.logError(e);
    }
  },

  trackCustom(eventName: string, eventParameters: FacebookEventParams): void {
    if (!isFBInitialized()) {
      return;
    }

    if (env.isDev()) {
      // eslint-disable-next-line no-console
      console.info(
        `Tracking Custom Facebook (${makePixelId})
        event => ${eventName}
        params => ${JSON.stringify(eventParameters)}`
      );
      return;
    }
    try {
      fbq.track('trackSingleCustom', makePixelId, eventName, eventParameters);
    } catch (e) {
      Logger.logError(e);
    }
  },
};
