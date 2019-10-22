// @flow
import * as React from 'react';
import { i18n } from 'Shared/i18n';
import { trackClickLearnMore } from 'Shared/services/Tracking';
import { IntroParagraphStyle, MoreWrapperStyle } from '../../Styled/Content';
import { FinalLinkStyle } from '../../Styled/Buttons';

type Props = {
  /** Title of the More paragraph */
  title?: string,
  /** Url of show more button */
  url?: string,
  /** Text of the button */
  textButton?: string,
};

/**
 * Renders finalCard More component
 */
export const More = ({ title, url, textButton }: Props) => {
  return (
    <MoreWrapperStyle>
      <IntroParagraphStyle>
        {title || i18n.t('final_card.more.title')}
      </IntroParagraphStyle>
      <FinalLinkStyle as="a" href={url} onClick={() => trackClickLearnMore()}>
        {textButton || i18n.t('final_card.more.button')}
      </FinalLinkStyle>
    </MoreWrapperStyle>
  );
};
