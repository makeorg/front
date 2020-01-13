// @flow
import React, { useEffect, useState, useRef, useLayoutEffect } from 'react';
import { type Question as TypeQuestion } from 'Shared/types/question';
import { useSlider } from 'Client/hooks/useSlider';
import { type StateRoot } from 'Shared/store/types';
import { type TypeSliderParams } from 'Shared/types/views';
import { type TypePersonality } from 'Shared/types/user';
import { useDispatch, useSelector } from 'react-redux';
import { fechQuestionPersonalities } from 'Shared/store/reducers/questions/actions';
import { FourthLevelTitleStyle } from 'Client/ui/Elements/TitleElements';
import { useMobile } from 'Client/hooks/useMedia';
import { GliderStylesheet } from 'Client/app/assets/css-in-js/GliderStyle';
import { UnstyledListStyle } from 'Client/ui/Elements/ListElements';
import {
  MiddleColumnStyle,
  CenterRowStyle,
  MiddleRowStyle,
} from 'Client/ui/Elements/FlexElements';
import { Avatar } from 'Client/ui/Avatar';
import { Link } from 'react-router-dom';
import { getPersonalityProfileLink } from 'Shared/helpers/url';
import { SvgCheckedSymbol } from 'Client/ui/Svg/elements';
import { i18n } from 'Shared/i18n';
import { CertifiedIconStyle } from 'Client/ui/Proposal/AuthorElement/Styled';
import { intToPx } from 'Shared/helpers/styled';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import {
  CandidateInformationsStyle,
  CandidateWrapperStyle,
  CandidateHeadingStyle,
  CandidateSeparatorStyle,
  CandidateTitleStyle,
  CandidateLinkStyle,
  CandidateListItemStyle,
  PoliticalPartyStyle,
} from './style';

type Props = {
  question: TypeQuestion,
};

export const CandidateEngagement = ({ question }: Props) => {
  const [personalities, setPersonalities] = useState(null);
  const dispatch = useDispatch();
  const personalitiesState: TypePersonality[] = useSelector(
    (state: StateRoot) => state.questions[question.slug].personalities
  );
  const isMobile = useMobile();

  useEffect(() => {
    setPersonalities(personalitiesState);
  }, [personalitiesState]);

  useEffect(() => {
    dispatch(fechQuestionPersonalities(question.questionId, question.slug));
  }, [question]);

  if (!personalities) {
    return null;
  }

  return (
    <CandidateWrapperStyle>
      <GliderStylesheet />
      {isMobile ? (
        <>
          <CandidateHeadingStyle>
            <FourthLevelTitleStyle>
              {i18n.t('consultation.municipal.position.title')}
            </FourthLevelTitleStyle>
            <CandidateSeparatorStyle />
          </CandidateHeadingStyle>
          <CandidateMobileSlider personalities={personalities} />
        </>
      ) : (
        <CandidateDesktopSlider personalities={personalities} />
      )}
    </CandidateWrapperStyle>
  );
};

type SliderProps = {
  personalities: TypePersonality[],
};

export const CandidateMobileSlider = ({ personalities }: SliderProps) => {
  const sliderName = 'candidate_mobile';
  const sliderRef = useRef();
  const sliderParams: TypeSliderParams = {
    slidesToShow: 'auto',
  };
  useSlider(sliderRef, sliderParams, personalities.length > 0);

  return (
    <div className={`${sliderName} glider-contain`}>
      <ScreenReaderItemStyle>
        {i18n.t('common.slider.introduction')}
      </ScreenReaderItemStyle>
      <div className={`${sliderName} glider`} ref={sliderRef}>
        <UnstyledListStyle className={`${sliderName} glider-track`}>
          {personalities.map(personality => (
            <CandidateListItemStyle
              key={personality.userId}
              className={sliderName}
            >
              <CandidateItem personality={personality} />
            </CandidateListItemStyle>
          ))}
        </UnstyledListStyle>
      </div>
    </div>
  );
};

export const CandidateDesktopSlider = ({ personalities }: SliderProps) => {
  const [slideOffset, setSlideOffset] = useState(0);
  const sliderName = 'candidate_desktop';
  const sliderRef = useRef();
  const sliderParams: TypeSliderParams = {
    responsive: [
      {
        breakpoint: Breakpoints.Tablet,
        settings: {
          slidesToShow: 'auto',
          draggable: true,
        },
      },
    ],
  };
  useSlider(sliderRef, sliderParams, personalities.length > 0);

  useLayoutEffect(() => {
    const mainContainer = document.getElementById('main');
    if (!mainContainer) {
      return setSlideOffset(0);
    }

    const containerLeftOffset = mainContainer.getBoundingClientRect().left + 20;
    return setSlideOffset(containerLeftOffset);
  }, []);

  return (
    <div className={`${sliderName} glider-contain`}>
      <ScreenReaderItemStyle>
        {i18n.t('common.slider.introduction')}
      </ScreenReaderItemStyle>
      <div className={`${sliderName} glider`} ref={sliderRef}>
        <UnstyledListStyle className={`${sliderName} glider-track`}>
          <li
            className={sliderName}
            style={{ paddingLeft: intToPx(slideOffset) }}
          >
            <CandidateTitleStyle as="h2" id="candidate_position_title">
              {i18n.t('consultation.municipal.position.title')}
            </CandidateTitleStyle>
          </li>
          {personalities.map(personality => (
            <CandidateListItemStyle
              key={personality.userId}
              className={sliderName}
            >
              <CandidateItem personality={personality} />
            </CandidateListItemStyle>
          ))}
        </UnstyledListStyle>
      </div>
    </div>
  );
};

type CandidateProps = {
  personality: TypePersonality,
};

export const CandidateItem = ({ personality }: CandidateProps) => {
  const isMobile = useMobile();
  const { country, language } = useSelector(
    (state: StateRoot) => state.appConfig
  );
  const personalityFullName = `${personality.firstName} ${
    personality.lastName
  }`;
  return (
    <CenterRowStyle as={isMobile && MiddleColumnStyle}>
      <Link
        to={getPersonalityProfileLink(country, language, personality.userId)}
      >
        <Avatar
          avatarUrl={personality.avatarUrl}
          avatarSize={isMobile ? 35 : 50}
          avatarAlt={i18n.t('consultation.partners.profile_link', {
            name: personalityFullName,
          })}
        />
      </Link>
      <CandidateInformationsStyle>
        <MiddleRowStyle>
          <CandidateLinkStyle
            to={getPersonalityProfileLink(
              country,
              language,
              personality.userId
            )}
          >
            {personalityFullName}
          </CandidateLinkStyle>
          <SvgCheckedSymbol style={CertifiedIconStyle} />
        </MiddleRowStyle>
        <PoliticalPartyStyle>{personality.politicalParty}</PoliticalPartyStyle>
      </CandidateInformationsStyle>
    </CenterRowStyle>
  );
};
