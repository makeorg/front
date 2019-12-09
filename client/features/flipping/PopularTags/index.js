// @flow
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { i18n } from 'Shared/i18n';
import { type TypePopularTag } from 'Shared/types/tag';
import { type Question as TypeQuestion } from 'Shared/types/question';
import { TileWithTitle } from 'Client/ui/Elements/TileWithTitle';
import { fetchPopularTags } from 'Shared/store/actions/question';
import { selectQuestionPopularTags } from 'Shared/store/selectors/questions.selector';
import { UnstyledButtonStyle } from 'Client/ui/Elements/ButtonElements';
import {
  TAGS_LIST,
  TAGS_SECTION,
  FLUSH_TAGS_TRIGGER,
} from 'Shared/constants/ids';
import { SvgTrending } from 'Client/ui/Svg/elements';
import {
  PopularTagsListStyle,
  PopularTagsListItemStyle,
  FilterTriggerStyle,
  ProposalCountStyle,
} from './style';

type Props = {
  question: TypeQuestion,
};

const focusSelectTrigger = (id: string) => {
  const panelTriggerElement = document.getElementById(`panel_trigger_${id}`);
  if (!panelTriggerElement) {
    return null;
  }
  return panelTriggerElement.focus();
};

const toggleStake = (id: string) => {
  const stakeTriggerElement = document.getElementById(`stake_trigger_${id}`);
  if (!stakeTriggerElement) {
    return null;
  }
  return stakeTriggerElement.click();
};

const flushTags = () => {
  const flushTagsElement = document.getElementById(FLUSH_TAGS_TRIGGER);
  if (!flushTagsElement) {
    return null;
  }

  return flushTagsElement.click();
};

const scrollAndTrigger = (panelId: string, tagId: string) => {
  const tagListElement = document.getElementById(TAGS_SECTION);
  if (!tagListElement) {
    return null;
  }
  tagListElement.scrollIntoView({ behavior: 'smooth' });
  setTimeout(() => flushTags(), 750);
  return setTimeout(() => {
    toggleStake(tagId);
    focusSelectTrigger(panelId);
  }, 1000);
};

export const PopularTags = ({ question }: Props) => {
  const dispatch = useDispatch();
  const tags: TypePopularTag[] = useSelector(state =>
    selectQuestionPopularTags(state, question.slug)
  );

  useEffect(() => {
    dispatch(fetchPopularTags(question.questionId, question.slug));
  }, [question]);

  if (!tags) {
    return null;
  }

  return (
    <TileWithTitle
      title={i18n.t('consultation.tags.popular_title')}
      icon={<SvgTrending aria-hidden style={{ marginRight: '10px' }} />}
    >
      <PopularTagsListStyle>
        {tags.map(tag => (
          <PopularTagsListItemStyle key={tag.tagId}>
            <FilterTriggerStyle
              as={UnstyledButtonStyle}
              onClick={() => scrollAndTrigger(TAGS_LIST, tag.tagId)}
            >
              {tag.label}
            </FilterTriggerStyle>
            <ProposalCountStyle>
              {i18n.t('common.proposal_count', { count: tag.proposalCount })}
            </ProposalCountStyle>
          </PopularTagsListItemStyle>
        ))}
      </PopularTagsListStyle>
    </TileWithTitle>
  );
};