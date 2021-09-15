// @flow

import { DemographicsTrackingApiService } from 'Shared/api/DemographicsTrackingApiService';
import { DemographicsTrackingService } from 'Shared/services/DemographicsTracking';

jest.mock('Shared/api/DemographicsTrackingApiService');
jest.mock('Shared/services/Logger');

describe('DemographicsTrackingService Service', () => {
  describe('track function', () => {
    beforeEach(() => {
      jest.spyOn(DemographicsTrackingApiService, 'track');
    });
    afterEach(() => {
      DemographicsTrackingApiService.track.mockRestore();
    });

    it('track', async () => {
      await DemographicsTrackingService.track(
        'demographicId',
        'demographicToken',
        '12-25',
        {
          utm_test: 'hello',
          notrackparam: 'world',
        }
      );

      expect(DemographicsTrackingApiService.track).toHaveBeenNthCalledWith(
        1,
        'demographicId',
        'demographicToken',
        '12-25',
        { utm_test: 'hello' }
      );
    });
  });
});
