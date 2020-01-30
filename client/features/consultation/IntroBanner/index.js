// @flow
import React from 'react';
import { isGreatCause } from 'Shared/helpers/question';
import { type Question as TypeQuestion } from 'Shared/types/question';
import { i18n } from 'Shared/i18n';
import { DateHelper } from 'Shared/helpers/date';
import {
  GreatCauseIntroLabelStyle,
  GreatCauseIntroBannerTitleStyle,
  IntroWrapperStyle,
  DefaultBannerTitleStyle,
  DefaultBannerMainContainer,
  DefaultBannerTimeStyle,
  GreatCauseIntroWrapperStyle,
} from 'Client/features/consultation/Styled/IntroBanner';
import { NavigationWithTabs } from '../Navigation/Tabs';

type Props = {
  question: TypeQuestion,
};

export const IntroBanner = ({ question }: Props) => {
  return isGreatCause(question.operationKind) ? (
    <GreatCauseIntroWrapperStyle
      as="header"
      gradientStart={question.theme.gradientStart}
      gradientEnd={question.theme.gradientEnd}
      backgroundcolor={question.theme.gradientStart}
      id="intro"
    >
      <GreatCauseIntroLabelStyle>
        {i18n.t('consultation.header.label')}
      </GreatCauseIntroLabelStyle>
      {question.consultationImage ? (
        <h2>
          <img
            src={question.consultationImage}
            alt={question.wording.question}
          />
        </h2>
      ) : (
        <GreatCauseIntroBannerTitleStyle>
          {question.wording.question}
        </GreatCauseIntroBannerTitleStyle>
      )}
      <NavigationWithTabs question={question} />
    </GreatCauseIntroWrapperStyle>
  ) : (
    <IntroWrapperStyle
      as="header"
      gradientStart={question.theme.gradientStart}
      gradientEnd={question.theme.gradientEnd}
      backgroundcolor={question.theme.gradientStart}
      id="intro"
    >
      <DefaultBannerMainContainer>
        <DefaultBannerTitleStyle>
          {question.wording.question}
        </DefaultBannerTitleStyle>
        <DefaultBannerTimeStyle>
          {i18n.t('consultation.tabs.consultation')}
          {i18n.t('consultation.tabs.from')}
          <time dateTime={question.startDate}>
            {DateHelper.creationDateFormat(question.startDate)}
          </time>
          {i18n.t('consultation.tabs.to')}
          <time dateTime={question.endDate}>
            {DateHelper.creationDateFormat(question.endDate)}
          </time>
        </DefaultBannerTimeStyle>
      </DefaultBannerMainContainer>
    </IntroWrapperStyle>
  );
};
