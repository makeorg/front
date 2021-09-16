/* @flow */
import { DemographicsTrackingApiService } from 'Shared/api/DemographicsTrackingApiService';
import { defaultUnexpectedError } from './DefaultErrorHandler';

const PREFIX_QUERY_PARAMS_ACCEPTED = 'utm_';

const sanitizeQueryParams = queryParams => {
  const queryParamSanitized = {};
  Object.keys(queryParams).forEach(key => {
    if (key.startsWith(PREFIX_QUERY_PARAMS_ACCEPTED)) {
      queryParamSanitized[key] = queryParams[key];
    }
  });

  return queryParamSanitized;
};

export const trackUnsecure = async (
  name: string,
  value: string,
  parameters: { [string]: string } = {},
  success: () => void = () => {},
  error: () => void = () => {}
): Promise<void> => {
  try {
    await DemographicsTrackingApiService.trackUnsecure(
      name,
      value,
      sanitizeQueryParams(parameters)
    );
    success();
  } catch (apiServiceError) {
    defaultUnexpectedError(apiServiceError);
    error();
  }
};

export const track = async (
  demographicsCardId: string,
  token: string,
  value: string,
  parameters: { [string]: string } = {},
  success: () => void = () => {},
  error: (message: string, data: ?Object) => void = () => {}
): Promise<void> => {
  try {
    await DemographicsTrackingApiService.track(
      demographicsCardId,
      token,
      value,
      sanitizeQueryParams(parameters)
    );
    success();
  } catch (apiServiceError) {
    if (apiServiceError.status === 400) {
      error(apiServiceError.message, apiServiceError.data);
      return;
    }

    defaultUnexpectedError(apiServiceError);
    error(apiServiceError.message, null);
  }
};

export const DemographicsTrackingService = {
  trackUnsecure,
  track,
};
