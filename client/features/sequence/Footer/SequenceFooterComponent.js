/* @flow */
import * as React from 'react';
import { i18n } from 'Shared/i18n';
import { Tracking } from 'Shared/services/Tracking';
import { type QuestionTheme } from 'Shared/types/sequence';
import { FooterStyle, FooterTitleStyle, FooterLinkStyle } from '../Styled';

type Props = {
  /** UI theme for the question */
  theme: QuestionTheme,
  consultationLink: string,
  questionTitle: string,
};

/**
 * Renders Sequence Footer
 */
export const SequenceFooterComponent = (props: Props) => {
  const { theme, consultationLink, questionTitle } = props;

  return (
    <FooterStyle aria-labelledby="footer_title">
      <FooterTitleStyle
        style={{ color: theme.footerFontColor }}
        id="footer_title"
      >
        {questionTitle}
      </FooterTitleStyle>
      <FooterLinkStyle
        className={theme.footerFontColor}
        to={consultationLink}
        onClick={() => Tracking.trackClickConsultation()}
      >
        {i18n.t('footer_sequence.link')}
      </FooterLinkStyle>
    </FooterStyle>
  );
};
