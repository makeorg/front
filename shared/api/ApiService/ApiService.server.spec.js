import { ApiServiceShared } from './ApiService.shared';
import { ApiServiceServer } from './ApiService.server';

jest.mock('./ApiService.shared');

describe('ApiServiceServer', () => {
  let apiServer: ApiServiceServer;
  beforeEach(() => {
    jest.spyOn(ApiServiceShared, 'callApi');
    apiServer = new ApiServiceServer();
  });

  it('callApi must call ApiServiceShared.callApi', () => {
    // given
    const url = '/api/endpoint';
    const options = { headers: { value: 'value' } };
    // when
    apiServer.callApi(url, options);
    // then
    expect(ApiServiceShared.callApi).toHaveBeenNthCalledWith(1, url, options);
  });

  it('token property must be disable', () => {
    expect(apiServer.token).toBe(undefined);
    apiServer.token = {
      token_type: 'token_type',
      access_token: 'access_token'
    };
    expect(apiServer.token).toBe(undefined);
  });

  it('language property must be disable', () => {
    expect(apiServer.language).toBe(undefined);
  });

  it('source property must be disable', () => {
    expect(apiServer.source).toBe(undefined);
  });

  it('country property must be disable', () => {
    expect(apiServer.country).toBe(undefined);
  });
});