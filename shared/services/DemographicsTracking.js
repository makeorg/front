/* @flow */
import {
  DemographicsTrackingApiService,
  TypeDemographicName,
} from 'Shared/api/DemographicsTrackingApiService';
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

export const track = async (
  name: TypeDemographicName,
  value: string,
  parameters: { [string]: string } = {},
  success: () => void = () => {},
  error: () => void = () => {}
): Promise<void> => {
  try {
    await DemographicsTrackingApiService.track(
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

export const DemographicsTrackingService = {
  track,
};
