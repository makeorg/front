// @flow
import { type PerformanceTimingType } from 'Shared/types/tracking';
import { ApiService } from './ApiService';

const PATH_POST_TRACKING = '/tracking/front';
export const PATH_PERFORMANCE = '/tracking/performance';

export class TrackingApiService {
  static track = async (parameters: Object = {}): Promise<Object> =>
    ApiService.callApi(PATH_POST_TRACKING, {
      method: 'POST',
      body: JSON.stringify(parameters),
    });

  static trackPerformance(
    applicationName: string,
    timings: PerformanceTimingType
  ): Promise<{ status: number, data: any }> {
    return ApiService.callApi(PATH_PERFORMANCE, {
      method: 'POST',
      body: JSON.stringify({ applicationName, timings }),
    });
  }
}
