import { ViewsApiService } from 'Shared/api/ViewsApiService';
import homepageFixture from '../../apiMocks/db/views.json';
import { ViewsService } from './ViewsService';
import { logger } from '../logger';

const cache = require('memory-cache');

jest.mock('memory-cache');
jest.mock('fs');
jest.mock('Shared/api/ViewsApiService');

jest.mock('../logger', () => ({
  logger: { log: jest.fn() },
}));

const country = 'FR';
const language = 'fr';

describe('Views Service', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getHome', () => {
    it('return content from cache', async () => {
      jest.spyOn(cache, 'get');

      cache.get.mockReturnValueOnce('fooCache');

      const result = await ViewsService.getHome(country, language);

      expect(cache.get).toHaveBeenCalledWith('HOMEPAGE');

      expect(result).toBe('fooCache');
    });

    it('return content from Api and put it in cache', async () => {
      jest.spyOn(cache, 'put');

      ViewsApiService.getHome.mockReturnValueOnce({ data: homepageFixture });

      const result = await ViewsService.getHome(country, language);

      expect(cache.put).toHaveBeenCalledWith(
        'HOMEPAGE',
        homepageFixture,
        300000
      );

      expect(result).toBe(homepageFixture);
    });

    it('throw error when fetching content from Api and log it', async () => {
      jest.spyOn(logger, 'log');
      const error = {
        response: {
          status: 500,
        },
        message: 'error',
      };
      ViewsApiService.getHome.mockRejectedValue(error);

      const result = await ViewsService.getHome(homepageFixture);

      expect(cache.put).not.toHaveBeenCalled();
      expect(logger.log).toHaveBeenCalledWith(
        'error in server/service/ViewsService/getHome',
        error
      );

      expect(result).toBeNull();
    });
  });
});