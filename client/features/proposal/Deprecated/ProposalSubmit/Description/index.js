// @flow
import React, { useEffect } from 'react';
import { color } from 'athena-design-tokens';
import { useSelector } from 'react-redux';
import { type StateRoot } from 'Shared/store/types';
import { i18n } from 'Shared/i18n';
import { CenterParagraphStyle } from 'Client/ui/Elements/ParagraphElements';
import {
  MODERATION_CHARTER_FR_LINK,
  MODERATION_CHARTER_EN_LINK,
} from 'Shared/constants/url';
import { trackDisplayModerationText } from 'Shared/services/Tracking';
import { SvgExternalLink } from 'Client/ui/Svg/elements';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import { DescriptionWrapperStyle } from '../style';

type Props = {
  /** Method called to track link */
  trackModerationLink: () => void,
};

/**
 * Renders description component after proposal submit button is clicked
 */
export const DeprecatedProposalSubmitDescription = ({
  trackModerationLink,
}: Props) => {
  const { country } = useSelector((state: StateRoot) => state.appConfig);
  const isFR = country === 'FR';

  useEffect(() => {
    trackDisplayModerationText();
  }, []);

  return (
    <DescriptionWrapperStyle id="proposal-submit-description">
      <CenterParagraphStyle>
        {i18n.t('proposal_submit.deprecated.description')}
      </CenterParagraphStyle>
      <CenterParagraphStyle>
        {i18n.t('proposal_submit.deprecated.moderation_charter')}
        <a
          target="_blank"
          rel="noreferrer noopener"
          href={isFR ? MODERATION_CHARTER_FR_LINK : MODERATION_CHARTER_EN_LINK}
          onClick={trackModerationLink}
        >
          {i18n.t('proposal_submit.deprecated.moderation_charter_label')}
          <> </>
          <SvgExternalLink
            aria-hidden
            focusable="false"
            style={{ marginLeft: '5px', fill: color.brandSecondary }}
          />
          <ScreenReaderItemStyle>
            {i18n.t('common.open_new_window')}
          </ScreenReaderItemStyle>
        </a>
      </CenterParagraphStyle>
    </DescriptionWrapperStyle>
  );
};
