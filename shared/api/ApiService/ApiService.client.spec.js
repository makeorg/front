import { ApiServiceShared } from './ApiService.shared';
import { ApiServiceClient, getLocationContext } from './ApiService.client';

jest.mock('./ApiService.shared');

describe('ApiServiceClient', () => {
  let apiClient: ApiServiceClient;
  beforeEach(() => {
    jest.spyOn(ApiServiceShared, 'callApi');
    apiClient = new ApiServiceClient();
  });

  afterEach(() => {
    ApiServiceShared.callApi.mockRestore();
    apiClient = undefined;
  });

  it('callApi must call ApiServiceShared.callApi by default', () => {
    // given
    const url = '/api/endpoint';
    const options = { headers: { value: 'value' } };
    // when
    apiClient.callApi(url, options);
    // then
    expect(ApiServiceShared.callApi).toHaveBeenNthCalledWith(1, url, {
      ...options,
      ...{
        headers: {
          'x-make-country': '',
          'x-make-language': '',
          'x-make-operation': '',
          'x-make-question': '',
          'x-make-question-id': '',
          'x-make-source': '',
          'x-make-location': 'unknown_location /',
          ...options.headers,
        },
      },
    });
  });

  it('callApi must call ApiServiceShared.callApi with headers', () => {
    // given
    const url = '/api/endpoint';
    const options = { headers: { value: 'value' } };
    // when
    apiClient.language = 'fr';
    apiClient.country = 'FR';
    apiClient.source = 'core';
    apiClient.questionId = '1234';
    apiClient.operationId = 'abcd';
    apiClient.callApi(url, options);
    // then
    expect(ApiServiceShared.callApi).toHaveBeenNthCalledWith(1, url, {
      ...options,
      ...{
        headers: {
          'x-make-country': 'FR',
          'x-make-language': 'fr',
          'x-make-operation': 'abcd',
          'x-make-question': '1234',
          'x-make-question-id': '1234',
          'x-make-source': 'core',
          'x-make-location': 'unknown_location /',
          ...options.headers,
        },
      },
    });
  });

  it('language property must be enabled', () => {
    expect(apiClient.language).toBe('');
    apiClient.language = 'fr';
    expect(apiClient.language).toBe('fr');
  });

  it('source property must be enabled', () => {
    expect(apiClient.source).toBe('');
    apiClient.source = 'core';
    expect(apiClient.source).toBe('core');
  });

  it('country property must be enabled', () => {
    expect(apiClient.country).toBe('');
    apiClient.country = 'FR';
    expect(apiClient.country).toBe('FR');
  });

  it('questionId property must be enabled', () => {
    expect(apiClient.questionId).toBe('');
    apiClient.questionId = '1234';
    expect(apiClient.questionId).toBe('1234');
  });

  it('operationId property must be enabled', () => {
    expect(apiClient.operationId).toBe('');
    apiClient.operationId = 'abcd';
    expect(apiClient.operationId).toBe('abcd');
  });
});

describe('getLocationContext', () => {
  it('get location context default', () => {
    expect(getLocationContext('/FR-fr')).toBe('unknown_location /FR-fr');
  });

  it('get location context ROUTE_CONSULTATION', () => {
    expect(
      getLocationContext('/FR-fr/consultation/foo/consultation', 'abcd')
    ).toBe('question_page abcd');
  });

  it('get location context ROUTE_SEQUENCE', () => {
    expect(
      getLocationContext('/FR-fr/consultation/foo/selection', 'abcd')
    ).toBe('sequence abcd');
  });

  it('get location context ROUTE_PROPOSAL', () => {
    expect(
      getLocationContext(
        '/FR-fr/consultation/foo/proposal/bar/2',
        undefined,
        'abcd'
      )
    ).toBe('proposal_page abcd');
  });
});
