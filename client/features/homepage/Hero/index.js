import React from 'react';
import { i18n } from 'Shared/i18n';
import {
  trackClickHomepageParticipate,
  trackClickHomepageDiscover,
} from 'Shared/services/Tracking';
import { useSelector } from 'react-redux';
import { type StateRoot } from 'Shared/store/types';
import { matchDesktopDevice } from 'Shared/helpers/styled';
import { HeroPictures } from './Pictures';
import {
  ColumnToRowToColumnStyle,
  HeroTitleStyle,
  HeroDescriptionStyle,
  HeroRedButtonStyle,
  HeroTransparentButtonStyle,
  WhiteArrowDownIcon,
  BlackArrowDownIcon,
  HeroContentStyle,
  HeroInnerContentStyle,
  HeroWrapperStyle,
} from './style';

export const Hero = () => {
  const { country, device } = useSelector(
    (state: StateRoot) => state.appConfig
  );
  const { homepage } = useSelector((state: StateRoot) => state.views);
  const { featuredQuestions, posts } = homepage || {
    featuredQuestions: [],
    posts: [],
  };
  const isDesktop = matchDesktopDevice(device);
  const isFr = country === 'FR';
  const hasActiveConsultations = homepage?.currentQuestions.length > 0;
  const hasFeaturedQuestions = featuredQuestions?.length > 0;
  const hasPosts = posts?.length > 0;

  return (
    <HeroWrapperStyle as="section" aria-labelledby="hero-title">
      <HeroContentStyle>
        <HeroInnerContentStyle>
          <HeroTitleStyle id="hero-title" data-cy-container="hero-title">
            {i18n.t('homepage.hero.title')}
          </HeroTitleStyle>
          {!isDesktop && <HeroPictures />}
          <HeroDescriptionStyle>
            {i18n.t('homepage.hero.description')}
          </HeroDescriptionStyle>
          <ColumnToRowToColumnStyle>
            {hasActiveConsultations && (
              <HeroRedButtonStyle
                as="a"
                href="#current_questions"
                onClick={() => trackClickHomepageParticipate()}
                data-cy-link="participate-consultations"
              >
                {i18n.t('homepage.hero.participate')}
                <WhiteArrowDownIcon aria-hidden focusable="false" />
              </HeroRedButtonStyle>
            )}
            {isFr && hasFeaturedQuestions && hasPosts && (
              <HeroTransparentButtonStyle
                as="a"
                href="#featured_questions"
                onClick={() => trackClickHomepageDiscover()}
                data-cy-link="discover-great-causes"
              >
                {i18n.t('homepage.hero.discover')}
                <BlackArrowDownIcon aria-hidden focusable="false" />
              </HeroTransparentButtonStyle>
            )}
          </ColumnToRowToColumnStyle>
        </HeroInnerContentStyle>
        {isDesktop && <HeroPictures />}
      </HeroContentStyle>
    </HeroWrapperStyle>
  );
};
