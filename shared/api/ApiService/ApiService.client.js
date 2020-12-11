/* @flow */
import axiosRetry from 'axios-retry';
import axios from 'axios';
import { IApiServiceStrategy } from './index';
import { ApiServiceShared } from './ApiService.shared';
import { getLocationContext } from './getLocationContext';

export class ApiServiceClient implements IApiServiceStrategy {
  _instance = null;

  _language: string = '';

  _country: string = '';

  _questionId: string = '';

  _source: string = '';

  _referrer: string = '';

  _customData: string = '';

  _isLogged: boolean = false;

  _headersListeners: Map<(headers: any) => void> = new Map();

  constructor() {
    if (!this._instance) {
      this._instance = this;
    }

    this._referrer =
      typeof window !== 'undefined' && !!window.document.referrer
        ? window.document.referrer
        : '';

    return this._instance;
  }

  set language(language: string) {
    this._language = language;
  }

  get language(): string {
    return this._language;
  }

  set country(country: string) {
    this._country = country;
  }

  get country(): string {
    return this._country;
  }

  set questionId(questionId: string) {
    this._questionId = questionId;
  }

  get questionId() {
    return this._questionId;
  }

  set isLogged(isLogged: boolean) {
    this._isLogged = isLogged;
  }

  get isLogged() {
    return this._isLogged;
  }

  set source(source: string) {
    this._source = source;
  }

  get source(): string {
    return this._source;
  }

  set referrer(referrer: string) {
    this._referrer = referrer;
  }

  get referrer(): string {
    return this._referrer;
  }

  set customData(customData: string) {
    this._customData = customData;
  }

  get customData(): string {
    return this._customData;
  }

  set headersListener(listeners: Map<(headers: Array<any>) => void>) {
    this._headersListeners = listeners;
  }

  addHeadersListener(identifier: string, listener: (headers: any) => void) {
    this._headersListeners.set(identifier, listener);
  }

  removeHeadersListener(identifier: string) {
    this._headersListeners.delete(identifier);
  }

  callApi(url: string, options: Object = {}): Promise<any> {
    const defaultHeaders = {
      'x-make-country': this._country,
      'x-make-language': this._language,
      'x-make-source': this._source,
      'x-make-question-id': this._questionId,
      'x-make-location': getLocationContext(
        window.location.pathname,
        this._questionId,
        options.proposalId
      ),
      'x-make-referrer': this._referrer,
      'x-make-custom-data': this._customData,
    };
    const headers = { ...defaultHeaders, ...(options.headers || {}) };

    axiosRetry(axios, {
      retries: 5,
      retryDelay: retryCount => retryCount * 100,
      retryCondition: error => {
        return (
          axiosRetry.isNetworkOrIdempotentRequestError(error) ||
          (error.response && error.response.status === 401 && this._isLogged)
        );
      },
    });

    try {
      const response = ApiServiceShared.callApi(url, {
        ...options,
        headers,
      });

      response.then(res =>
        this._headersListeners.forEach(listener => listener(res.headers))
      );

      return response;
    } catch (apiServiceError) {
      if (apiServiceError.status === 401) {
        this._isLogged = false;
      }
      throw apiServiceError;
    }
  }
}

export const apiClient = new ApiServiceClient();
