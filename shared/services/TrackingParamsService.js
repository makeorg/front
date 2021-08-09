import { getTrackingLocation } from 'Shared/api/ApiService/getLocationContext';

/* @flow */
class TrackingParamsServiceClass {
  _source: string = '';

  _language: string = '';

  _country: string = '';

  _questionId: string = '';

  _questionSlug: string = '';

  _referrer: string = '';

  _location: string = '';

  _url: string = '';

  _all: Object = {};

  _visitorId: string = '';

  _listeners: Object[] = [];

  static _instance = Object;

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

  set source(source: string) {
    if (this._source !== source) {
      this._source = source;
      this._dispatchUpdate();
    }
  }

  set country(country: string) {
    if (this._country !== country) {
      this._country = country;
      this._dispatchUpdate();
    }
  }

  set language(language: string) {
    if (this._language !== language) {
      this._language = language;
      this._dispatchUpdate();
    }
  }

  set questionId(questionId: string) {
    if (this._questionId !== questionId) {
      this._questionId = questionId;
      this._dispatchUpdate();
    }
  }

  set questionSlug(questionSlug: string) {
    if (this.questionSlug !== questionSlug) {
      this._questionSlug = questionSlug;
      this._dispatchUpdate();
    }
  }

  set referrer(referrer: string) {
    if (this._referrer !== referrer) {
      this._referrer = referrer;
      this._dispatchUpdate();
    }
  }

  // specific param needed for mixpanel as distuniqueinctId
  // not present in common params : "this._all"
  set visitorId(visitorId: string) {
    if (this._visitorId !== visitorId) {
      this._visitorId = visitorId;
    }
  }

  get visitorId() {
    return this._visitorId;
  }

  _updateDynamicParams() {
    this._url =
      typeof window !== 'undefined' && window && window.location
        ? window.location.href
        : undefined;

    this._location = getTrackingLocation(window.location.pathname);
    this._dispatchUpdate();
  }

  _dispatchUpdate() {
    this._all = {
      location: this._location,
      source: this._source,
      language: this._language,
      country: this._country,
      questionId: this._questionId,
      questionSlug: this._questionSlug,
      referrer: this._referrer,
      url: this._url,
    };
    this._listeners.forEach(listener => listener.onTrackingUpdate(this._all));
  }

  addListener(object: Object) {
    const requiredMethod = object.onTrackingUpdate;
    if (requiredMethod === undefined) {
      throw new Error('Object does not support the interface.');
    }
    this._listeners.push(object);
  }

  all() {
    this._updateDynamicParams();
    return this._all;
  }
}

const instance = new TrackingParamsServiceClass();

export const trackingParamsService = instance;
