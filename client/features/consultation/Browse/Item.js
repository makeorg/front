// @flow
import React from 'react';
import { type HomeQuestionType } from 'Shared/types/question';
import { DateHelper } from 'Shared/helpers/date';
import {
  ConsultationElementPictureStyle,
  ConsultationElementSubtitleStyle,
  ConsultationElementTitleStyle,
  ConsultationElementParagraphStyle,
  ClockIconStyle,
  ConsultationArticleStyle,
  ConsultationPeopleIconStyle,
  ConsultationLightIconStyle,
  ConsultationItemStyle,
  ConsultationActionIconStyle,
} from 'Client/features/consultation/Browse/style';
import { i18n } from 'Shared/i18n';

import {
  useDesktop,
  useScreenMobileContainerWidth,
  useTablet,
} from 'Client/hooks/useMedia';
import { formatMillionToText } from 'Shared/helpers/numberFormatter';
import { getSixteenPerNineRatioHeight } from 'Shared/helpers/styled';
import { ConsultationLink } from './Link';

type Props = {
  question: HomeQuestionType,
  resultsContext: boolean,
  itemsCount: number,
};

export const getHomepageRatio = (height: number, itemsCount: number) => {
  switch (itemsCount) {
    case 4:
      return (height * 255) / 248;
    case 3:
      return (height * 353) / 248;
    default: {
      return (height * 275) / 124;
    }
  }
};

export const ConsultationItem = ({
  question,
  resultsContext,
  itemsCount,
}: Props) => {
  const {
    descriptionImage,
    descriptionImageAlt,
    featured,
    startDate,
    endDate,
    resultsLink,
    participantsCount,
    proposalsCount,
    language,
    actions,
  } = question;
  const hasTopIdeas =
    resultsContext && resultsLink && resultsLink.value === 'top-ideas';
  const hasInternalResults =
    resultsContext && resultsLink && resultsLink.value === 'results';
  const hasExternalResults =
    resultsContext && resultsLink && resultsLink.kind === 'external';
  const hasContributors = participantsCount > 0;
  const hasProposals = proposalsCount > 0;

  let linkText = i18n.t('browse.consultations.participate');

  if (resultsContext) {
    linkText = i18n.t('browse.results.coming_results');
  }

  if (hasTopIdeas) {
    linkText = i18n.t('browse.results.see_topideas');
  }

  if (hasInternalResults || hasExternalResults) {
    linkText = i18n.t('browse.results.see_results');
  }

  const isDesktop = useDesktop();
  const isTablet = useTablet();
  const containerWidth = useScreenMobileContainerWidth();

  let imageWidth = containerWidth;
  let imageHeight = getSixteenPerNineRatioHeight(containerWidth);

  if (isTablet) {
    imageWidth = containerWidth / 2;
    imageHeight = getSixteenPerNineRatioHeight(containerWidth / 2);
  }

  if (isDesktop) {
    imageWidth = getHomepageRatio(248, itemsCount);
    imageHeight = 248;
  }

  return (
    <ConsultationArticleStyle>
      <ConsultationElementPictureStyle
        src={descriptionImage}
        alt={descriptionImageAlt || ''}
        width={imageWidth}
        height={imageHeight}
        crop
      />
      {featured && (
        <ConsultationElementSubtitleStyle>
          {i18n.t('browse.initiative')}
        </ConsultationElementSubtitleStyle>
      )}
      <ConsultationElementTitleStyle lang={question.language}>
        {question.question}
      </ConsultationElementTitleStyle>
      <ConsultationElementParagraphStyle>
        {hasContributors && (
          <ConsultationItemStyle>
            <ConsultationPeopleIconStyle aria-hidden focusable="false" />
            <> </>
            {formatMillionToText(participantsCount, language)}
            <> </>
            {` ${i18n.t('browse.consultations.contributors', {
              count: participantsCount,
            })}`}
          </ConsultationItemStyle>
        )}
        {hasProposals && (
          <ConsultationItemStyle>
            <ConsultationLightIconStyle aria-hidden focusable="false" />
            <> </>
            {formatMillionToText(proposalsCount, language)}
            <> </>
            {` ${i18n.t('browse.consultations.proposals', {
              count: proposalsCount,
            })}`}
          </ConsultationItemStyle>
        )}
        {actions && (
          <ConsultationItemStyle className="red">
            <ConsultationActionIconStyle aria-hidden focusable="false" />
            <> </>
            {actions}
          </ConsultationItemStyle>
        )}
        <ConsultationItemStyle>
          <ClockIconStyle aria-hidden focusable="false" />
          <> </>
          {i18n.t('browse.date', {
            startDate: DateHelper.creationDateFormat(startDate),
            endDate: DateHelper.creationDateFormat(endDate),
          })}
        </ConsultationItemStyle>
      </ConsultationElementParagraphStyle>
      <ConsultationLink question={question} label={linkText} />
    </ConsultationArticleStyle>
  );
};
