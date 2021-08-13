// @flow
import { ProposalApiService } from 'Shared/api/ProposalApiService';
import { getBaitText } from 'Shared/constants/proposal';
import { type ProposalType, type ProposalsType } from 'Shared/types/proposal';
import { defaultUnexpectedError } from './DefaultErrorHandler';

// @todo remove with DepreactedProposalSubmit
const deprecatedPropose = async (
  content: string,
  questionId: string,
  success: () => void,
  unexpectedError: () => void
): Promise<void> => {
  const proposalContent = getBaitText() + content;

  ProposalApiService.propose(proposalContent, questionId)
    .then(success)
    .catch(apiServiceError => {
      defaultUnexpectedError(apiServiceError);
      unexpectedError();
    });
};

const propose = async (content: string, questionId: string): Promise<void> => {
  try {
    await ProposalApiService.propose(content.trim(), questionId);
  } catch (apiServiceError) {
    defaultUnexpectedError(apiServiceError);
  }
};

const getProposal = async (proposalId: string): Promise<?ProposalType> => {
  try {
    const response = await ProposalApiService.getProposal(proposalId);

    return response.data;
  } catch (apiServiceError) {
    defaultUnexpectedError(apiServiceError);

    return null;
  }
};

const getPopularProposals = async (
  questionId: string
): Promise<?ProposalsType> => {
  try {
    const response = await ProposalApiService.getPopularProposals(questionId);

    return response.data;
  } catch (apiServiceError) {
    defaultUnexpectedError(apiServiceError);

    return null;
  }
};

const searchProposals = async (
  country: string,
  questionId?: string,
  content?: string,
  tagsIds?: string,
  seed?: ?number,
  limit?: number = 20,
  skip?: number = 0,
  sort?: string,
  order?: string,
  ideaIds?: string,
  sortAlgorithm?: string,
  keywords?: string,
  isNotVoted?: boolean,
  userType?: string
): Promise<?ProposalsType> => {
  try {
    const response = await ProposalApiService.searchProposals(
      country,
      questionId,
      content,
      tagsIds,
      seed,
      limit,
      skip,
      sort,
      order,
      ideaIds,
      sortAlgorithm,
      keywords,
      isNotVoted,
      userType
    );
    const { data } = response;

    // @toDo: hack multi-countries
    const { results } = data;

    const updateCountry = proposal => ({
      ...proposal,
      question: proposal.question,
    });

    return {
      ...data,
      results: results.map(proposal => updateCountry(proposal)),
    };
  } catch (apiServiceError) {
    defaultUnexpectedError(apiServiceError);

    return null;
  }
};

export const ProposalService = {
  // @todo remove with DepreactedProposalSubmit
  deprecatedPropose,
  propose,
  getProposal,
  getPopularProposals,
  searchProposals,
};
