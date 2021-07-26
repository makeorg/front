/* @flow */
import { TrackingApiService } from 'Shared/api/TrackingApiService';
import { env } from 'Shared/env';
import { type PerformanceTimingType } from 'Shared/types/tracking';
import trackingConfiguration from 'Shared/services/trackingConfiguration.yaml';
import Cookies from 'universal-cookie';
import { USER_PREFERENCES_COOKIE } from 'Shared/constants/cookies';
import { FacebookTracking } from './Trackers/FacebookTracking';
import { TwitterTracking } from './Trackers/TwitterTracking';
import { trackingParamsService } from './TrackingParamsService';
import { defaultUnexpectedError } from './DefaultErrorHandler';
import { MixpanelTracking } from './Trackers/MixpanelTracking';
import { Logger } from './Logger';

type TrackingConfigurationParamType = {
  key: string,
  description: string,
  values?: string[],
  optional?: boolean,
};

type TrackingConfigurationType = {
  key: string,
  description: string,
  parameters: TrackingConfigurationParamType[],
};

const validateParameters = (
  values: Object,
  expectedParameters: TrackingConfigurationParamType[]
) => {
  const keys = Object.keys(values);
  const expectedKeys = expectedParameters.map(param => param.key);
  const extraKeys = keys.filter(key => !expectedKeys.find(el => el === key));
  if (extraKeys.length) {
    throw new Error(
      `Tracking error : find unexpected tracking values "${extraKeys.toString()}"`
    );
  }
  expectedParameters.forEach(expectedParam => {
    if (
      values[expectedParam.key] === undefined &&
      expectedParam.optional !== true
    ) {
      throw new Error(
        `Tracking error : required param not found "${expectedParam.key}"`
      );
    }
    if (
      expectedParam.values &&
      expectedParam.values.length &&
      !expectedParam.values.find(el => el === values[expectedParam.key])
    ) {
      throw new Error(
        `Tracking error : invalid "${
          values[expectedParam.key]
        }" value. "${expectedParam.values.toString()}" expected.`
      );
    }
  });
};

const trackingEvent = {};
Object.keys(trackingConfiguration).forEach(key => {
  const eventConfiguration: TrackingConfigurationType =
    trackingConfiguration[key];
  trackingEvent[key] = (
    params: Object
  ): { eventName: string, parameters: Object } => {
    const {
      key: eventName,
      parameters,
      protected_parameters: protectedParameters,
    } = eventConfiguration;
    validateParameters(params || {}, parameters || []);

    return {
      eventName: eventName || '',
      parameters: params || {},
      protectedParameters: protectedParameters || [],
    };
  };
});

const getEventParameters = (parameters: Object = {}) => {
  const { parameters: defaultParameters } = trackingEvent.COMMON_PARAMETERS(
    trackingParamsService.all()
  );
  return {
    ...defaultParameters,
    ...parameters,
  };
};

const trackPerformance = async (
  applicationName: string,
  timings: PerformanceTimingType
): Promise<?void> => {
  try {
    await TrackingApiService.trackPerformance(applicationName, timings);
  } catch (apiServiceError) {
    defaultUnexpectedError(apiServiceError);
  }
};

export const track = (eventName: string, parameters: Object = {}) => {
  if (env.isDev()) {
    // eslint-disable-next-line no-console
    console.info(
      `Tracking: event ${eventName} params ${JSON.stringify(parameters)}`
    );
    return Promise.resolve();
  }
  const params = {
    eventName,
    eventParameters: parameters,
    eventType: 'trackCustom',
  };

  return TrackingApiService.track(params);
};

export const TrackingService = {
  trackPerformance,
  trackingEvent,
  sendAllTrackers: ({
    eventName,
    parameters,
    protectedParameters = [],
  }: {
    eventName: string,
    parameters: Object,
    protectedParameters: string[],
  }) => {
    const cookies = new Cookies();
    const preferencesCookie = cookies.get(USER_PREFERENCES_COOKIE);
    const externalTrackingParameters = Object.keys(parameters)
      .filter(key => !protectedParameters.includes(key))
      .reduce(
        (obj, key) => ({
          ...obj,
          [key]: parameters[key],
        }),
        {}
      );

    // API tracking
    track(eventName, getEventParameters(parameters));

    // Facebook
    if (preferencesCookie?.facebook_tracking) {
      FacebookTracking.trackCustom(
        eventName,
        getEventParameters(externalTrackingParameters)
      );
    }

    // Twitter
    if (preferencesCookie?.twitter_tracking) {
      TwitterTracking.track(eventName);
    }

    // Mixpanel
    if (!trackingParamsService.visitorId) {
      Logger.logError(
        `Tracking event "${eventName}" failed due to lack of unique id`
      );
      return;
    }

    MixpanelTracking.track(
      eventName,
      getEventParameters({
        ...externalTrackingParameters,
        distinctId: trackingParamsService.visitorId,
      })
    );
  },
};
