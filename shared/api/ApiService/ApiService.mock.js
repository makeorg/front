import { IApiServiceStrategy } from './index';
import { type TypeToken } from './types';

export class ApiServiceMock implements IApiServiceStrategy {
  // eslint-disable-next-line class-methods-use-this
  callApi(url: string, options: Object = {}): Promise<any> {
    return Promise.resolve(url, options);
  }

  // eslint-disable-next-line class-methods-use-this
  set token(token: TypeToken) {
    // do not set token on ApiServiceServer
  }

  // eslint-disable-next-line class-methods-use-this
  get token(): ?TypeToken {
    return 'foo';
  }

  // eslint-disable-next-line class-methods-use-this
  get country(): string {
    return 'foo';
  }

  // eslint-disable-next-line class-methods-use-this
  get language(): string {
    return 'foo';
  }

  // eslint-disable-next-line class-methods-use-this
  get source(): string {
    return 'foo';
  }
}