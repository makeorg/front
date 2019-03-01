/* @flow */

import { type ApiServiceHeaders } from './type';
import { ApiService } from './ApiService';

const PATH_PROPOSAL_PROPOSE = '/proposals';
const PATH_PROPOSAL_GET = '/proposals/:proposalId';

export class ProposalService {
  static propose(content: string, questionId: string): Promise<Object> {
    return ApiService.callApi(PATH_PROPOSAL_PROPOSE, {
      method: 'POST',
      body: JSON.stringify({
        content,
        questionId,
        country: ApiService.country,
        language: ApiService.language,
      }),
    });
  }

  static getProposal(proposalId: string, headers: ApiServiceHeaders = {}) {
    return ApiService.callApi(
      PATH_PROPOSAL_GET.replace(':proposalId', proposalId),
      {
        method: 'GET',
        headers,
        proposalId,
      }
    );
  }
}
