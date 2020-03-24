// @flow
import { type QuestionExtraSlidesConfigType } from 'Shared/types/question';

export function queryParamIsDisable(query: Object, param: string) {
  return query[param] === 'false';
}

export function disableExtraSlidesByQuery(
  sequenceExtraSlides: QuestionExtraSlidesConfigType,
  query: Object
) {
  const extraSlidesConfig = { ...sequenceExtraSlides };
  if (queryParamIsDisable(query, 'introCard'))
    delete extraSlidesConfig.introCard;
  if (queryParamIsDisable(query, 'pushProposal'))
    delete extraSlidesConfig.pushProposalCard;
  if (queryParamIsDisable(query, 'signUpCard'))
    delete extraSlidesConfig.signUpCard;
  return extraSlidesConfig;
}
