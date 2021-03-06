// @flow
import React from 'react';
import { useSelector } from 'react-redux';
import { i18n } from 'Shared/i18n';
import { type TagType } from 'Shared/types/tag';
import { type QuestionType } from 'Shared/types/question';
import { TileWithTitle } from 'Client/ui/Elements/TileWithTitle';
import { selectQuestionPopularTags } from 'Shared/store/selectors/questions.selector';
import { UnstyledButtonStyle } from 'Client/ui/Elements/Buttons/style';
import {
  TAGS_LIST,
  TAGS_SECTION,
  FLUSH_TAGS_TRIGGER,
} from 'Shared/constants/ids';
import { ParagraphStyle } from 'Client/ui/Elements/ParagraphElements';
import { checkIsFeatureActivated } from 'Client/helper/featureFlipping';
import { CONSULTATION_POPULAR_TAGS } from 'Shared/constants/featureFlipping';
import {
  PopularTagsListStyle,
  PopularTagsListItemStyle,
  FilterTriggerStyle,
  ProposalCountStyle,
  PopularTagsIconStyle,
} from './style';

type Props = {
  question: QuestionType,
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

const scrollAndTriggerTag = (panelId: string, tagId: string) => {
  const elementToScroll = document.getElementById(TAGS_SECTION);
  if (!elementToScroll) {
    return;
  }

  const elementTop = elementToScroll.getBoundingClientRect().top;
  const scrollTop = window.pageYOffset;

  elementToScroll.scrollIntoView({ behavior: 'smooth' });
  document.addEventListener('scroll', () => {
    if (Math.round(elementTop + scrollTop) === Math.round(window.pageYOffset)) {
      flushTags();
      toggleStake(tagId);
      focusSelectTrigger(panelId);
      document.removeEventListener('scroll', () => {});
    }
  });
};

export const PopularTags = ({ question }: Props) => {
  const tags: TagType[] = useSelector(state =>
    selectQuestionPopularTags(state, question.slug)
  );
  const isPopularTagsActive = checkIsFeatureActivated(
    CONSULTATION_POPULAR_TAGS,
    question.activeFeatures
  );

  if (!tags || !isPopularTagsActive) {
    return null;
  }

  return (
    <TileWithTitle
      title={i18n.t('consultation.tags.popular_title')}
      icon={<PopularTagsIconStyle aria-hidden focusable="false" />}
    >
      <PopularTagsListStyle>
        {tags.slice(0, 5).map((tag, index) => (
          <PopularTagsListItemStyle key={tag.tagId}>
            <span>
              <ParagraphStyle as="span" aria-hidden>
                {`${index + 1}. `}
              </ParagraphStyle>
              <FilterTriggerStyle
                as={UnstyledButtonStyle}
                onClick={() => scrollAndTriggerTag(TAGS_LIST, tag.tagId)}
              >
                {tag.label}
              </FilterTriggerStyle>
            </span>
            <ProposalCountStyle>
              {i18n.t('common.proposal_count', { count: tag.proposalCount })}
            </ProposalCountStyle>
          </PopularTagsListItemStyle>
        ))}
      </PopularTagsListStyle>
    </TileWithTitle>
  );
};
