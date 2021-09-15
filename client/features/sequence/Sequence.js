/* eslint-disable react-hooks/exhaustive-deps */
// @flow
import React from 'react';
import {
  getNoProposalCardTitleBySequenceKind,
  getSequenceTitleBySequenceKind,
  isPushProposalCard,
  isStandardSequence,
} from 'Shared/helpers/sequence';
import { type QuestionType } from 'Shared/types/question';
import { useSelector } from 'react-redux';
import { trackClickOperationPage } from 'Shared/services/Tracking';
import { SequenceService } from 'Shared/services/Sequence';
import { ProposalSubmit } from 'Client/features/proposal/Submit';
import { CARD_TYPE_NO_PROPOSAL_CARD } from 'Shared/constants/card';
import { getParticipateLink } from 'Shared/helpers/url';
import { i18n } from 'Shared/i18n';
import { selectCurrentQuestion } from 'Shared/store/selectors/questions.selector';
import { MetaTags } from 'Client/app/MetaTags';
import {
  KIND_CONTROVERSY,
  KIND_POPULAR,
  KIND_STANDARD,
} from 'Shared/constants/sequence';
import { SequenceCard } from './Cards';
import {
  SequenceContainerStyle,
  ConsultationPageLinkStyle,
  SequenceContentStyle,
  SequenceAltTitleStyle,
  SequenceSpecialIconStyle,
  SequenceSpecialTitleStyle,
  SequenceTitleStyle,
} from './style';
import { SequenceProgress } from './Progress';
import { SequencePlaceholder } from './Placeholder';
import { useSequence } from './Hooks/useSequence';

export type Props = {
  /** kind parameter for popular and controversy sequences */
  sequenceKind: string,
};

/**
 * Renders Sequence component with Intro / Push Proposal / Sign Up & Proposal Cards
 */
export const Sequence = ({ sequenceKind }: Props) => {
  const question: QuestionType = useSelector((state: StateRoot) =>
    selectCurrentQuestion(state)
  );
  const { country } = useSelector((state: StateRoot) => state.appConfig);

  const executeStartSequence = async (
    questionId: string,
    votedIds: string[],
    demographicCardId?: string,
    token?: string
  ) => {
    const { proposals, demographics } =
      await SequenceService.startSequenceByKind(
        questionId,
        votedIds,
        sequenceKind,
        demographicCardId,
        token
      );

    return { proposals: proposals || [], demographics };
  };

  const { isLoading, currentCard, isEmptySequence } = useSequence(
    question,
    isStandardSequence(sequenceKind),
    country,
    executeStartSequence
  );

  if (isLoading) {
    return <SequencePlaceholder />;
  }

  const noProposalCard = {
    type: CARD_TYPE_NO_PROPOSAL_CARD,
    configuration: {
      title: getNoProposalCardTitleBySequenceKind(sequenceKind),
      description: isStandardSequence(sequenceKind)
        ? i18n.t('no_proposal_card.description.regular')
        : i18n.t('no_proposal_card.description.special'),
    },
    index: 0,
  };

  const getMetaTitle = () => {
    if (sequenceKind === KIND_STANDARD) {
      return 'meta.sequence.title_standard';
    }
    if (sequenceKind === KIND_CONTROVERSY) {
      return 'meta.sequence.title_controversy';
    }
    if (sequenceKind === KIND_POPULAR) {
      return 'meta.sequence.title_popular';
    }

    return null;
  };

  const withProposalButton =
    question?.canPropose && !isPushProposalCard(currentCard);

  return (
    <>
      <MetaTags
        title={i18n.t(getMetaTitle(), {
          question: question.wording.question,
        })}
        description={question.wording.metas.description}
        picture={question.wording.metas.picture}
      />
      <SequenceContainerStyle data-cy-container="sequence">
        <SequenceContentStyle>
          {isStandardSequence(sequenceKind) ? (
            <SequenceTitleStyle>{question.question}</SequenceTitleStyle>
          ) : (
            <>
              <SequenceAltTitleStyle>{question.question}</SequenceAltTitleStyle>
              <SequenceSpecialTitleStyle>
                <SequenceSpecialIconStyle aria-hidden focusable={false} />
                {getSequenceTitleBySequenceKind(sequenceKind)}
              </SequenceSpecialTitleStyle>
            </>
          )}
          <SequenceCard
            card={isEmptySequence ? noProposalCard : currentCard}
            question={question}
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
