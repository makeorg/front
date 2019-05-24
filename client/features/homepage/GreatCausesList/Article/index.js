import React, { useState } from 'react';
import { i18n } from 'Shared/i18n';
import { Tracking } from 'Shared/services/Tracking';
import {
  GreatCausesArticleStyle,
  GreatCausesOverlayStyle,
  GreatCauseTriggerStyle,
  GreatCausesLinkStyle,
} from '../Styled';

type Props = {
  image: HTMLImageElement,
  title: string,
  linkText: string,
  linkUrl: string,
  children: React.Node,
};

export const GreatCauseArticle = (props: Props) => {
  const [isOverlayDisplayed, setDisplayOverlay] = useState(false);
  const { image, title, linkText, linkUrl, children } = props;
  return (
    <GreatCausesArticleStyle>
      <GreatCauseTriggerStyle
        type="image"
        src={image}
        alt={title}
        aria-label={i18n.t('common.display_pannel')}
        aria-hidden={isOverlayDisplayed}
        tabIndex={isOverlayDisplayed ? -1 : 0}
        onClick={() => setDisplayOverlay(true)}
        onFocus={() => setDisplayOverlay(true)}
        onBlur={() => setDisplayOverlay(false)}
      />
      <GreatCausesOverlayStyle
        className="overlay"
        aria-hidden={!isOverlayDisplayed}
      >
        {children}
        <GreatCausesLinkStyle
          href={linkUrl}
          onFocus={() => setDisplayOverlay(true)}
          onBlur={() => setDisplayOverlay(false)}
          onClick={() => Tracking.trackClickHomepageConsultations()}
          tabIndex={isOverlayDisplayed ? 0 : -1}
        >
          {linkText}
        </GreatCausesLinkStyle>
      </GreatCausesOverlayStyle>
    </GreatCausesArticleStyle>
  );
};
