/* @flow */
import { TrackingApiService } from 'Shared/api/TrackingApiService';
import { env } from 'Shared/env';
import { type PerformanceTimingType } from 'Shared/types/tracking';
import trackingConfiguration from 'Shared/services/trackingConfiguration.yaml';
import { trackingParamsService } from './TrackingParamsService';
import { defaultUnexpectedError } from './DefaultErrorHandler';

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
    const { key: eventName, parameters } = eventConfiguration;
    validateParameters(params || {}, parameters || []);

    return { eventName: eventName || '', parameters: params || {} };
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
  const eventParameters = getEventParameters(parameters);

  if (env.isDev()) {
    // eslint-disable-next-line no-console
    console.info(
      `Tracking: event ${eventName} params ${JSON.stringify(eventParameters)}`
    );
    return Promise.resolve();
  }
  const params = {
    eventName,
    eventParameters,
    eventType: 'trackCustom',
  };

  return TrackingApiService.track(params);
};

export const TrackingService = {
  trackPerformance,
  trackingEvent,
  track,
  sendAllTrackers: ({
    eventName,
    parameters,
  }: {
    eventName: string,
    parameters: Object,
  }) => {
    TrackingService.track(eventName, parameters);
  },
};
