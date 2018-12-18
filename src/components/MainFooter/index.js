/* @flow */

import * as React from 'react';
import i18next from 'i18next';
import { HiddenItem } from 'Components/Elements/HiddenElements';
import { consultationLink } from 'Constants/config';
import MainFooter from './Styled';

type Props = {
  questionConfiguration: Object,
  handleTracking: Function
};

const MainFooterComponent = (props: Props) => {
  const { questionConfiguration, handleTracking } = props;

  return (
    <MainFooter role="contentinfo">
      <MainFooter.Nav role="navigation" aria-labelledby="footer_title">
        <MainFooter.Title
          color={questionConfiguration.theme.footerFontColor}
          id="footer_title"
        >
          <HiddenItem aria-hidden>{i18next.t('footer_sequence.see_more')}</HiddenItem>
          {questionConfiguration.question}
        </MainFooter.Title>
        <MainFooter.Link
          color={questionConfiguration.theme.footerFontColor}
          target="_blank"
          href={consultationLink}
          onClick={handleTracking}
        >
          {i18next.t('footer_sequence.link')}
        </MainFooter.Link>
      </MainFooter.Nav>
    </MainFooter>
  );
};

export default MainFooterComponent;
