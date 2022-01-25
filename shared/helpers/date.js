// @flow
import moment from 'moment';
import { type HomeQuestionType } from 'Shared/types/question';
import { DEFAULT_LANGUAGE } from 'Shared/constants/config';

let instance = null;

export const getDateOfBirthFromAge = (age: string = '') => {
  if (!age) {
    return null;
  }

  const birthYear = new Date().getFullYear() - Number(age);

  return `${birthYear}-01-01`;
};

export const getAgeFromDateOfBirth = (dateOfBirth: string) => {
  if (!dateOfBirth) {
    return '';
  }

  const today = new Date();
  const birthDate = new Date(dateOfBirth);

  if (birthDate.toString() === 'Invalid Date') {
    return '';
  }

  let age = today.getFullYear() - birthDate.getFullYear();
  const mounthDiff = today.getMonth() - birthDate.getMonth();
  if (
    mounthDiff < 0 ||
    (mounthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age -= 1;
  }

  return age.toString();
};

type ConsultationDates = {
  startDate: ?string | null,
  endDate: ?string | null,
};

export const isInProgress = (dates: ConsultationDates) => {
  if (!dates.endDate) {
    return true;
  }
  const end = new Date(dates.endDate);
  const today = new Date();

  if (!dates.startDate) {
    return today < end;
  }
  const start = new Date(dates.startDate);

  return start <= today && today < end;
};

export class DateHelperSingleton {
  _language: string;

  constructor(language: string) {
    if (!instance) {
      instance = this;
    }

    this._language = language;
  }

  set language(language: string) {
    this._language = language;
  }

  get language() {
    return this._language;
  }

  creationDateFormat(date: ?string | null) {
    if (!date) {
      return null;
    }
    const objectDate = new Date(date);
    if (Number.isNaN(objectDate.getMonth())) {
      return null;
    }
    moment.locale(this._language);

    return moment(objectDate).format('LL');
  }

  localizedllDate(date: ?string | null) {
    if (!date) {
      return null;
    }

    const objectDate = new Date(date);
    if (Number.isNaN(objectDate.getMonth())) {
      return null;
    }

    moment.locale(this._language);

    return moment(objectDate).format('ll');
  }

  localizedLDate(date: ?string | null) {
    if (!date) {
      return null;
    }

    const objectDate = new Date(date);
    if (Number.isNaN(objectDate.getMonth())) {
      return null;
    }

    moment.locale(this._language);

    return moment(objectDate).format('L');
  }

  localizedAndFormattedDate(date?: string, format?: string) {
    if (!date || !format) {
      return null;
    }

    const objectDate = new Date(date);
    if (Number.isNaN(objectDate.getMonth())) {
      return null;
    }

    moment.locale(this._language);

    return moment(objectDate).format(format);
  }

  getRemainingDays(endDate: ?string | null) {
    if (!endDate) {
      return null;
    }

    const objectNowDate = new Date();
    const objectEndDate = new Date(endDate);
    if (
      Number.isNaN(objectEndDate.getMonth()) ||
      Number.isNaN(objectNowDate.getMonth())
    ) {
      return null;
    }

    moment.locale(this._language);

    const momentNowDate = moment(objectNowDate);
    const momentEndDate = moment(objectEndDate);

    return momentEndDate.diff(momentNowDate, 'days');
  }
}

export const getDate = (dateString: ?string) => {
  if (!dateString) {
    return null;
  }
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) {
    return null;
  }

  return date;
};

export const orderByEndDate = (
  questionA: HomeQuestionType,
  questionB: HomeQuestionType
) => {
  const dateA = getDate(questionA.endDate);
  const dateB = getDate(questionB.endDate);

  if (dateA === null && dateB === null) {
    return 0;
  }
  if (dateB === null) {
    return 1;
  }
  if (dateA === null) {
    return -1;
  }

  return dateB - dateA;
};

export const DateHelper = new DateHelperSingleton(DEFAULT_LANGUAGE);
