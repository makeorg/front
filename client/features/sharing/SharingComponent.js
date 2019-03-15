import * as React from 'react';
import { UnstyledListStyle } from 'Client/ui/Elements/ListElements';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import { i18n } from 'Shared/i18n';
import {
  SharingStyle,
  FacebookButtonStyle,
  TwitterButtonStyle,
  LinkedInButtonStyle,
} from './Styled';

type Props = {
  twitterShareUrl: string,
  facebookShareUrl: string,
  linkedinShareUrl: string,
  tabIndex?: number,
};

/**
 * Renders Sharing
 */
export class SharingComponent extends React.Component<Props> {
  static defaultProps = {
    tabIndex: undefined,
  };

  render() {
    const {
      twitterShareUrl,
      facebookShareUrl,
      linkedinShareUrl,
      tabIndex,
    } = this.props;
    return (
      <SharingStyle as={UnstyledListStyle}>
        <li>
          <FacebookButtonStyle
            rel="noreferrer noopener"
            aria-label={i18n.t('sharing.facebook')}
            as="a"
            href={facebookShareUrl}
            target="_blank"
            tabIndex={tabIndex}
          >
            <FontAwesomeIcon aria-hidden icon={faFacebookF} />
          </FacebookButtonStyle>
        </li>
        <li>
          <TwitterButtonStyle
            rel="noreferrer noopener"
            aria-label={i18n.t('sharing.twitter')}
            as="a"
            href={twitterShareUrl}
            target="_blank"
            tabIndex={tabIndex}
          >
            <FontAwesomeIcon aria-hidden icon={faTwitter} />
          </TwitterButtonStyle>
        </li>
        <li>
          <LinkedInButtonStyle
            rel="noreferrer noopener"
            aria-label={i18n.t('sharing.linkedin')}
            as="a"
            href={linkedinShareUrl}
            target="_blank"
            tabIndex={tabIndex}
          >
            <FontAwesomeIcon aria-hidden icon={faLinkedinIn} />
          </LinkedInButtonStyle>
        </li>
      </SharingStyle>
    );
  }
}
