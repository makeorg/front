// @flow
import React from 'react';
import { type FeaturedConsultationType } from 'Shared/types/views';
import { FeaturedArticle } from '../Article';
import { FeaturedArticleWrapperStyle, FeaturedArticleStyle } from '../Styled';

type Props = {
  featureds: FeaturedConsultationType[],
  country: string,
  language: string,
};

export const FeaturedMobile = ({ featureds, country, language }: Props) => {
  return (
    <FeaturedArticleWrapperStyle>
      {featureds.map(featured => (
        <FeaturedArticleStyle key={`article_title_${featured.slot}`}>
          <FeaturedArticle
            featured={featured}
            index={featured.slot}
            country={country}
            language={language}
            featuredsLength={featureds.length}
          />
        </FeaturedArticleStyle>
      ))}
    </FeaturedArticleWrapperStyle>
  );
};