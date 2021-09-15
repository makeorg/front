/* eslint-disable react-hooks/exhaustive-deps */
// @flow
import React, { useState } from 'react';
import { type QuestionType } from 'Shared/types/question';
import { useSelector } from 'react-redux';
import { trackClickOperationPage } from 'Shared/services/Tracking';
import { SequenceService } from 'Shared/services/Sequence';
import { ProposalSubmit } from 'Client/features/proposal/Submit';
import { CARD_TYPE_NO_PROPOSAL_CARD } from 'Shared/constants/card';
import { getParticipateLink } from 'Shared/helpers/url';
import { i18n } from 'Shared/i18n';
import { capitalizeFirstLetter } from 'Shared/helpers/stringFormatter';
import { useParams } from 'react-router';
import { MetaTags } from 'Client/app/MetaTags';
import { selectCurrentQuestion } from 'Shared/store/selectors/questions.selector';
import { isPushProposalCard } from 'Shared/helpers/sequence';
import { SequenceCard } from './Cards';
import {
  SequenceContainerStyle,
  ConsultationPageLinkStyle,
  SequenceContentStyle,
  SequenceAltTitleStyle,
  SequenceSpecialIconStyle,
  SequenceSpecialTitleStyle,
} from './style';
import { SequenceProgress } from './Progress';
import { SequencePlaceholder } from './Placeholder';
import { useSequence } from './Hooks/useSequence';

/**
 * Renders Sequence component with Intro / Push Proposal / Sign Up & Proposal Cards
 */
export const SequenceKeyword = () => {
  const { country } = useSelector((state: StateRoot) => state.appConfig);
  const { encodedKeyword } = useParams();
  const keyword = encodedKeyword && decodeURI(encodedKeyword);
  const [keywordLabel, setKeywordLabel] = useState('');
  const question: QuestionType = useSelector((state: StateRoot) =>
    selectCurrentQuestion(state)
  );

  const executeStartSequence = async (
    questionId: string,
    votedIds: string[]
  ) => {
    const response = await SequenceService.startSequenceByKeyword(
      questionId,
      votedIds,
      keyword
    );

    setKeywordLabel(response?.label || '');

    return { proposals: response?.proposals || [] };
  };

  const { isLoading, currentCard, isEmptySequence } = useSequence(
    question,
    false,
    country,
    executeStartSequence
  );

  if (isLoading) {
    return <SequencePlaceholder />;
  }

  const noProposalCard = {
    type: CARD_TYPE_NO_PROPOSAL_CARD,
    configuration: {
      title: i18n.t('no_proposal_card.title.keyword', {
        keyword: capitalizeFirstLetter(keywordLabel),
      }),
      description: i18n.t('no_proposal_card.description.special'),
    },
    index: 0,
  };

  const withProposalButton =
    question?.canPropose && !isPushProposalCard(currentCard);

  return (
    <>
      <MetaTags
        title={i18n.t('meta.sequence.title_keyword', {
          keywordLabel,
          question: question.wording.question,
        })}
        description={question.wording.metas.description}
        picture={question.wording.metas.picture}
      />
      <SequenceContainerStyle data-cy-container="sequence">
        <SequenceContentStyle>
          <SequenceAltTitleStyle>{question.question}</SequenceAltTitleStyle>
          <SequenceSpecialTitleStyle>
            <SequenceSpecialIconStyle aria-hidden focusable={false} />
            {capitalizeFirstLetter(keywordLabel)}
          </SequenceSpecialTitleStyle>

          <SequenceCard
            card={isEmptySequence ? noProposalCard : currentCard}
            question={question}
            sequenceKind={keyword}
          />
          {!isEmptySequence && <SequenceProgress />}
        </SequenceContentStyle>
        <ConsultationPageLinkStyle
          className={!withProposalButton && 'static'}
          to={getParticipateLink(country, question.slug)}
          onClick={() => trackClickOperationPage()}
        >
          {i18n.t('sequence.more')}
        </ConsultationPageLinkStyle>
        {withProposalButton && <ProposalSubmit />}
      </SequenceContainerStyle>
    </>
  );
};
