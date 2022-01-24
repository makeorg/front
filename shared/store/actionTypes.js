/* @flow */

/** Proposal Action */
export const PROPOSE_SUCCESS = 'PROPOSAL_PROPOSE_SUCCESS';
export const PROPOSAL_LOAD = 'PROPOSAL_LOAD';
/** Register Action */
export const REGISTER_REQUEST = 'USER_REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'USER_REGISTER_FAILURE';
/** Login Action */
export const LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'USER_LOGIN_FAILURE';
export const GET_INFO = 'USER_GET_INFO';
export const GET_TOKEN = 'USER_GET_TOKEN';
export const LOGIN_SOCIAL_REQUEST = 'USER_LOGIN_SOCIAL_REQUEST';
export const LOGIN_SOCIAL_SUCCESS = 'USER_LOGIN_SOCIAL_SUCCESS';
export const LOGIN_SOCIAL_FAILURE = 'USER_LOGIN_SOCIAL_FAILURE';
export const LOGOUT = 'USER_LOGOUT';
/** Forgot Password Action */
export const FORGOT_PASSWORD_REQUEST = 'USER_FORGOT_PASSWORD_REQUEST';
export const FORGOT_PASSWORD_SUCCESS = 'USER_FORGOT_PASSWORD_SUCCESS';
export const FORGOT_PASSWORD_FAILURE = 'USER_FORGOT_PASSWORD_FAILURE';
export const FORGOT_PASSWORD_INIT = 'USER_FORGOT_PASSWORD_INIT';
/** Modal action */
export const MODAL_CLOSE = 'MODAL_CLOSE';
export const MODAL_SHOW_LOGIN = 'MODAL_SHOW_LOGIN';
export const MODAL_SHOW_REGISTER = 'MODAL_SHOW_REGISTER';
export const MODAL_SHOW_FORGOT_PASSWORD = 'MODAL_SHOW_FORGOT_PASSWORD';
export const MODAL_SHOW_DEPARTMENT_FORM = 'MODAL_SHOW_DEPARTMENT_FORM';
export const MODAL_SHOW_SESSION_EXPIRATION = 'MODAL_SHOW_SESSION_EXPIRATION';
export const MODAL_CLOSE_SESSION_EXPIRATION = 'MODAL_CLOSE_SESSION_EXPIRATION';
export const MODAL_SHOW_PROPOSAL_SUCCESS = 'MODAL_SHOW_PROPOSAL_SUCCESS';
export const MODAL_SHOW_COUNTRIES = 'MODAL_SHOW_COUNTRIES';
export const MODAL_SHOW_COOKIES = 'MODAL_SHOW_COOKIES';
export const MODAL_CLOSE_COOKIES = 'MODAL_CLOSE_COOKIES';
/** Sequence action */
export const QUESTION_LOAD = 'QUESTION_LOAD';
export const QUESTION_UNLOAD = 'QUESTION_UNLOAD';
export const CURRENT_QUESTION_UPDATE = 'CURRENT_QUESTION_UPDATE';
export const SEQUENCE_PROPOSAL_VOTE = 'SEQUENCE_PROPOSAL_VOTE';
export const SEQUENCE_PROPOSAL_UNVOTE = 'SEQUENCE_PROPOSAL_UNVOTE';
export const SEQUENCE_LOAD_PROPOSALS = 'SEQUENCE_LOAD_PROPOSALS';
export const SEQUENCE_UNLOAD_PROPOSALS = 'SEQUENCE_UNLOAD_PROPOSALS';
export const SEQUENCE_LOAD_CARDS = 'SEQUENCE_LOAD_CARDS';
export const SEQUENCE_UPDATE_CARD_STATE = 'SEQUENCE_UPDATE_CARD_STATE';
export const SEQUENCE_RESET_VOTED_PROPOSALS = 'SEQUENCE_RESET_VOTED_PROPOSALS';
export const SEQUENCE_RESET_INDEX = 'SEQUENCE_RESET_INDEX';
export const SEQUENCE_SET_INDEX = 'SEQUENCE_SET_INDEX';
export const SEQUENCE_INCREMENT_INDEX = 'SEQUENCE_INCREMENT_INDEX';
export const SEQUENCE_DECREMENT_INDEX = 'SEQUENCE_DECREMENT_INDEX';
export const SEQUENCE_RESET_FIRST_PROPOSAL = 'SEQUENCE_RESET_FIRST_PROPOSAL';

/** Notification action */
export const DISPLAY_NOTIFICATION_BANNER = 'DISPLAY_NOTIFICATION_BANNER';
export const DISPLAY_NOTIFICATION_TIP = 'DISPLAY_NOTIFICATION_TIP';
export const CLOSE_NOTIFICATION_BANNER = 'CLOSE_NOTIFICATION_BANNER';
export const CLOSE_NOTIFICATION_TIP = 'CLOSE_NOTIFICATION_TIP';
export const DISMISS_NOTIFICATION = 'DISMISS_NOTIFICATION';

/** Password Recovery */
export const PASSWORD_RECOVERY_REQUEST = 'USER_PASSWORD_RECOVERY_REQUEST';
export const PASSWORD_RECOVERY_FAILURE = 'USER_PASSWORD_RECOVERY_FAILURE';
export const PASSWORD_RECOVERY_SUCCESS = 'USER_PASSWORD_RECOVERY_SUCCESS';
/** Custom data */
export const CUSTOM_DATA_SET_KEY = 'CUSTOM_DATA_SET_KEY';
export const CUSTOM_DATA_REMOVE_KEY = 'CUSTOM_DATA_REMOVE_KEY';
/** Session */
export const SET_SESSION_ID = 'SET_SESSION_ID';
/** i18n */
export const SET_COUNTRY_CONFIGURATION = 'SET_COUNTRY_CONFIGURATION';
/** Cookies Preferences */
export const SET_COOKIES_PREFERENCES = 'SET_COOKIES_PREFERENCES';
export const REJECT_ALL_COOKIES_PREFERENCES = 'REJECT_ALL_COOKIES_PREFERENCES';
export const ACCEPT_ALL_COOKIES_PREFERENCES = 'ACCEPT_ALL_COOKIES_PREFERENCES';
