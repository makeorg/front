// @flow

import { ApiService } from './ApiService';

export const ORGANISATIONS_PATH = '/organisations';
export const ORGANISATION_PROPOSALS_PATH =
  '/organisations/:organisationId/proposals';
export const ORGANISATION_VOTES_PATH = '/organisations/:organisationId/votes';

export class OrganisationApiService {
  static getOrganisations(slug: string) {
    return ApiService.callApi(ORGANISATIONS_PATH, {
      method: 'GET',
      params: {
        slug,
      },
    });
  }

  static getOrganisationProposals(organisationId: string) {
    return ApiService.callApi(
      ORGANISATION_PROPOSALS_PATH.replace(':organisationId', organisationId),
      {
        method: 'GET',
      }
    );
  }

  static getOrganisationVotes(organisationId: string) {
    return ApiService.callApi(
      ORGANISATION_VOTES_PATH.replace(':organisationId', organisationId),
      {
        method: 'GET',
        params: {
          votes: 'agree,disagree',
        },
      }
    );
  }
}