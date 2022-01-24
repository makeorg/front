// @flow
import { type ErrorObjectType } from 'Shared/types/api';
import { type HomeViewType } from 'Shared/types/views';
import {
  type QuestionType,
  type QuestionResultsType,
} from 'Shared/types/question';
import { type ProposalType } from 'Shared/types/proposal';
import { type TagType } from 'Shared/types/tag';
import { type PersonalityType } from 'Shared/types/user';
import { type SequenceCardType } from 'Shared/types/card';

// Config State
export type StateConfig = $ReadOnly<{
  source: string,
  language: string,
  country: string,
  translations: Object,
  countriesWithConsultations: [],
}>;

// Config Homepage
export type StateViews = $ReadOnly<{
  homepage?: HomeViewType,
  country?: string,
}>;

// Proposal State
export type StateProposal = $ReadOnly<{
  hasProposed: boolean,
}>;

// Sequence State
export type StateSequence = $ReadOnly<{
  firstProposal?: string,
  currentIndex: number,
  votedProposalIds: { [string]: string[] },
  proposals: ProposalType[],
  cards: SequenceCardType[],
}>;

// Notification State
export type StateNotification = $ReadOnly<{
  banner: { contentId?: any, level?: string, params?: Object },
  tip: { id?: string, content?: any, level?: string },
  dismissed: string[],
}>;

// Authentication State
export type StateAuthentication = $ReadOnly<{
  isLoggedIn: boolean,
  errors: ErrorObjectType[],
  user?: {
    userId: string,
  },
}>;

// Registration State
export type StateRegistration = $ReadOnly<{
  errors: [],
}>;

// User Forgot Password State
export type StateForgotPassword = $ReadOnly<{
  isSuccess: boolean,
  errors: [],
}>;

// User Password Recovery State
export type StateUserPasswordRecovery = $ReadOnly<{
  newPassword?: string,
  resetToken?: string,
  userId?: string,
  errorMessage?: string,
  error: boolean,
  updated: boolean,
}>;

// User State
export type StateUser = $ReadOnly<{
  authentication: StateAuthentication,
  passwordRecovery: StateUserPasswordRecovery,
}>;

export type StateQuestions = $ReadOnly<{
  [string]: {
    question: QuestionType,
    questionResults: QuestionResultsType,
    popularTags: TagType[],
    popularProposals: ProposalType[],
    personalities: PersonalityType[],
  },
}>;

export type StateModal = $ReadOnly<{
  isOpen: boolean,
  showExpirationSession: boolean,
  contentType: string,
  focusAfterClose: boolean,
}>;

export type StateActor = $ReadOnly<{
  organisationId: string,
  organisationName: string,
  slug: string,
  avatarUrl: string,
  description: string,
  publicProfile: boolean,
  proposalsCount: number,
  votesCount: number,
  language: string,
  country: string,
  website: ?string,
  countsByQuestion: Object,
}>;

export type StateActors = $ReadOnly<{
  total: number,
  results: StateActor[],
}>;

export type StatePartners = $ReadOnly<{
  [string]: {
    actors: StateActors,
  },
}>;

export type StatePanel = $ReadOnly<{
  isExpanded: boolean,
  panelContent: any,
}>;
export type StateSession = $ReadOnly<{
  sessionId: string,
}>;

// All state
export type StateRoot = {
  appConfig: StateConfig,
  views: StateViews,
  proposal: StateProposal,
  sequence: StateSequence,
  currentQuestion: ?string,
  notifications: StateNotification,
  user: StateUser,
  questions: StateQuestions,
  modal: StateModal,
  partners: StatePartners,
  panel: StatePanel,
  session: StateSession,
};

// Cookies Preferences
export type StateUserCookiesPreferences = $ReadOnly<{
  facebook_tracking: boolean,
}>;
