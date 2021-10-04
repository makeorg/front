// @flow
import { type StateRoot } from './types';

export const initialState: StateRoot = {
  appConfig: {
    source: '',
    language: '',
    country: '',
    translations: {},
    queryParams: {},
    countriesWithConsultations: [],
  },
  views: {},
  proposal: {
    popularProposals: [],
    error: undefined,
    data: undefined,
  },
  sequence: {
    questionSlug: undefined,
    currentIndex: 0,
    votedProposalIds: {},
    proposals: [],
    cards: [],
  },
  questions: {},
  currentQuestion: '',
  notifications: {
    banner: {},
    tip: {},
    dismissed: [],
  },
  user: {
    authentication: {
      errors: [],
      isLoggedIn: false,
      user: undefined,
    },
    passwordRecovery: {
      newPassword: undefined,
      resetToken: undefined,
      userId: undefined,
      errorMessage: undefined,
      error: false,
      updated: false,
    },
    cookiesPreferences: {
      facebook_tracking: false,
      twitter_tracking: false,
      facebook_sharing: false,
      twitter_sharing: false,
      linkedin_sharing: false,
    },
  },
  modal: {
    isOpen: false,
    contentType: '',
    showExpirationSession: false,
    showCookies: false,
    showDataPolicy: false,
    focusAfterClose: true,
    extraProps: {},
  },
  partners: {},
  panel: {
    isExpanded: false,
    panelContent: undefined,
  },
  session: {
    sessionId: '',
  },
};

export const createInitialState = (): StateRoot =>
  JSON.parse(JSON.stringify(initialState));
