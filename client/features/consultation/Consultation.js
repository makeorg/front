// @flow
import React, { useState, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { type QuestionType } from 'Shared/types/question';
import { type TagType } from 'Shared/types/tag';
import { ParticipateBanner } from 'Client/features/consultation/ParticipateBanner';
import { InfiniteProposals } from 'Client/features/consultation/InfiniteProposals';
import { ConsultationProposal } from 'Client/features/consultation/Proposal';
import { ConsultationPageContentStyle } from 'Client/pages/Consultation/style';
import { trackDisplayOperationPage } from 'Shared/services/Tracking';
import { PROPOSALS_FEED_ALGORITHMS } from 'Shared/api/ProposalApiService';
import { selectQuestionPopularTags } from 'Shared/store/selectors/questions.selector';
import { fetchPopularTags } from 'Shared/store/reducers/questions/actions';
import { type StateRoot } from 'Shared/store/types';
import { matchMobileDevice } from 'Shared/helpers/styled';
import { ConsultationSidebar } from './Sidebar';
import { SortAndFilter } from './SortAndFilter';

type Props = {
  question: QuestionType,
};

export const ConsultationContent = ({ question }: Props) => {
  const dispatch = useDispatch();
  const questionTags: TagType[] = useSelector((state: StateRoot) =>
    selectQuestionPopularTags(state, question.slug)
  );
  const { device } = useSelector((state: StateRoot) => state.appConfig);

  // Sorting
  const AVAILABLE_SORTS_KEYS: string[] = useMemo(
    () => Object.keys(PROPOSALS_FEED_ALGORITHMS),
    []
  );
  const [sort, setSort] = useState<string>(AVAILABLE_SORTS_KEYS[0]);

  // Filtering
  const [tags, setTags] = useState<TagType[]>([]);

  useEffect(() => {
    trackDisplayOperationPage();
    dispatch(fetchPopularTags(question.questionId, question.slug));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [question]);

  useEffect(() => {
    if (questionTags) {
      const extendedTags = questionTags.map(tag => ({
        ...tag,
        isSelected: false,
      }));
      setTags(extendedTags);
    }
  }, [questionTags]);

  const isMobile = matchMobileDevice(device);
  const renderMobileProposal = question.canPropose && isMobile;
  const renderDesktopProposal = question.canPropose && !isMobile;

  const resetTags = () => {
    setTags(tags.map(tag => ({ ...tag, isSelected: false })));
  };

  const selectedTags = tags.filter(tag => tag.isSelected);

  return (
    <>
      {renderMobileProposal && <ConsultationProposal question={question} />}
      <ConsultationSidebar question={question} />
      <ConsultationPageContentStyle id="main" data-cy-container="main">
        <ParticipateBanner question={question} />
        {renderDesktopProposal && <ConsultationProposal question={question} />}
        <SortAndFilter
          sort={sort}
          setSort={setSort}
          tags={tags}
          setTags={setTags}
          resetTags={resetTags}
        />
        <InfiniteProposals
          question={question}
          sortTypeKey={sort}
          tags={selectedTags.map(tag => tag.tagId)}
        />
      </ConsultationPageContentStyle>
    </>
  );
};
