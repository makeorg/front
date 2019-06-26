// @flow

import 'url-search-params-polyfill';
import { FRONT_URL } from 'Shared/constants/config';
import {
  ROUTE_CONSULTATION,
  ROUTE_ACTION,
  ROUTE_SEQUENCE,
  ROUTE_PROPOSAL,
  ROUTE_ORGANISATION_PROFILE,
} from 'Shared/routes';

export const getParamsQuery = (searchParams: string) => {
  const params = new URLSearchParams(searchParams);

  return params.toString();
};

export const getRelativeCurrentUrl = (pathName: string) =>
  `${FRONT_URL}${pathName}`;

export const getPartnerAnchor = (aboutUrl: string) => `${aboutUrl}#partenaires`;

export const buildInternalConsultationLink = (
  target: ?string,
  questionSlug: ?string,
  country: string,
  language: string
) => {
  if (!questionSlug || !target) {
    return null;
  }

  return `/${country}-${language}/consultation/${questionSlug}/${target}`;
};
/**
 * Get the sequence link
 * @param  {string} country
 * @param  {string} language
 * @param  {string} questionSlug
 *
 * @return {string}
 */
export const getSequenceLink = (
  country: string,
  language: string,
  questionSlug: string
) => {
  return ROUTE_SEQUENCE.replace(':country', country)
    .replace(':language', language)
    .replace(':questionSlug', questionSlug);
};

/**
 * Get the consultation link
 *
 * @param  {string} country
 * @param  {string} language
 * @param  {string} questionSlug
 *
 * @return {string}
 */
export const getConsultationLink = (
  country: string,
  language: string,
  questionSlug: string
) => {
  return ROUTE_CONSULTATION.replace(':country', country)
    .replace(':language', language)
    .replace(':questionSlug', questionSlug);
};

/**
 * Get the action link
 *
 * @param  {string} country
 * @param  {string} language
 * @param  {string} questionSlug
 *
 * @return {string}
 */
export const getActionLink = (
  country: string,
  language: string,
  questionSlug: string
) => {
  return ROUTE_ACTION.replace(':country', country)
    .replace(':language', language)
    .replace(':questionSlug', questionSlug);
};

/**
 * Get the proposal link
 *
 * @param  {string} country
 * @param  {string} language
 * @param  {string} questionSlug
 * @param  {string} proposalId
 * @param  {string} proposalSlug
 *
 * @return {string}
 */
export const getProposalLink = (
  country: string,
  language: string,
  questionSlug: string,
  proposalId: string,
  proposalSlug: string
) => {
  return ROUTE_PROPOSAL.replace(':country', country)
    .replace(':language', language)
    .replace(':questionSlug', questionSlug)
    .replace(':proposalId', proposalId)
    .replace(':proposalSlug', proposalSlug);
};

/**
 * Get the organisation profile link
 *
 * @param  {string} country
 * @param  {string} language
 * @param  {string} organisationSlug
 * @return {string}
 */
export const getOrganisationProfileLink = (
  country: string,
  language: string,
  organisationSlug: string
) => {
  return ROUTE_ORGANISATION_PROFILE.replace(':country', country)
    .replace(':language', language)
    .replace(':organisationSlug', organisationSlug);
};
