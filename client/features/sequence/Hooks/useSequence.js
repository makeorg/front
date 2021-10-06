/* eslint-disable react-hooks/exhaustive-deps */
// @flow
import { useEffect, useState } from 'react';
import { buildCards } from 'Shared/helpers/sequence';
import { type StateRoot } from 'Shared/store/types';
import { type SequenceCardType } from 'Shared/types/card';
import { type QuestionType } from 'Shared/types/question';
import { type ProposalType } from 'Shared/types/proposal';
import { type DemographicDataType } from 'Shared/types/demographic';
import { useSelector, useDispatch } from 'react-redux';
import { selectAuthentication } from 'Shared/store/selectors/user.selector';
import { scrollToTop } from 'Shared/helpers/styled';
import {
  setSequenceIndex,
  loadSequenceCards,
  resetSequenceVotedProposals,
} from 'Shared/store/actions/sequence';
import { Cookies } from 'react-cookie';
import { DEMOGRAPHICS_COOKIE } from 'Shared/constants/cookies';
import { useSequenceTracking } from './useSequenceTracking';
import { useSequenceVoteOnlyNotification } from './useSequenceVoteOnlyNotification';
import { useSequenceQueryParams } from './useSequenceQueryParams';

/**
 * Renders Sequence component with Intro / Push Proposal / Sign Up & Proposal Cards
 */
export const useSequence = (
  question: QuestionType,
  isStandardSequence: boolean,
  country,
  executeStartSequence: (
    questionId: string,
    votedIds: string[],
    demographicsCardId?: string,
    token?: string
  ) => { proposals: ProposalType[], demographics: ?DemographicDataType }
) => {
  // Dispatch
  const dispatch = useDispatch();

  // StateRoot
  const { isLoggedIn } = useSelector((state: StateRoot) =>
    selectAuthentication(state)
  );
  const { votedProposalIds, currentIndex } = useSelector((state: StateRoot) => {
    const { currentIndex: sCurrentIndex, votedProposalIds: sVotedProposalIds } =
      state.sequence;

    return {
      currentIndex: sCurrentIndex || 0,
      votedProposalIds: sVotedProposalIds,
    };
  });
  const votedProposalIdsOfQuestion = votedProposalIds[question?.slug] || [];

  // State
  const [currentCard, setCurrentCard] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [cards, setCards] = useState([]);
  const [sequenceProposals, setSequenceProposals] = useState([]);
  const [sequenceDemographic, setSequenceDemographic] = useState(null);

  // Sequence hooks
  useSequenceTracking();
  useSequenceVoteOnlyNotification(question);
  const { firstProposalParam, introCardParam, pushProposalParam } =
    useSequenceQueryParams();

  const cookies = new Cookies();
  const demographicsCookie = cookies.get(DEMOGRAPHICS_COOKIE);
  const withDemographicsCard = !demographicsCookie;

  // scroll to top
  useEffect(() => {
    scrollToTop();
    dispatch(setSequenceIndex(0));
  }, []);

  // load sequence data
  useEffect(async () => {
    const votedIds = firstProposalParam
      ? [firstProposalParam, ...votedProposalIdsOfQuestion]
      : votedProposalIdsOfQuestion;

    if (question) {
      const { proposals, demographics } = await executeStartSequence(
        question.questionId,
        votedIds,
        sequenceDemographic?.id,
        sequenceDemographic?.token
      );

      if (proposals.length === 0) {
        setLoading(false);
      }
      if (proposals) {
        setSequenceProposals(proposals);
        setSequenceDemographic(demographics);
      }
    }
  }, [question, firstProposalParam, isLoggedIn]);

  // build cards
  useEffect(() => {
    if (!question || !sequenceProposals.length) {
      return;
    }

    const buildedCards: SequenceCardType[] = buildCards(
      sequenceProposals,
      question.sequenceConfig,
      question.canPropose,
      isStandardSequence,
      introCardParam,
      pushProposalParam,
      withDemographicsCard && sequenceDemographic
    );
    setCards(buildedCards);
    dispatch(loadSequenceCards(buildedCards));
  }, [sequenceProposals, sequenceDemographic]);

  // set current card
  useEffect(() => {
    if (!cards.length) {
      return;
    }
    setCurrentCard(cards[currentIndex]);
    setLoading(false);
  }, [cards, currentIndex]);

  // reset voted proposals when unmount
  useEffect(
    () => () => {
      if (question) {
        dispatch(resetSequenceVotedProposals(question.slug));
      }
    },
    []
  );

  return {
    isLoading,
    currentCard,
    isEmptySequence: sequenceProposals.length === 0,
  };
};
