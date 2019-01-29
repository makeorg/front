/* @flow */
import * as React from 'react';
import { connect } from 'react-redux';
import AuthentificationSocialComponent from 'Src/components/Authentification/Social';

type Props = {
  /** Boolean toggled when Sliding pannel is opened / closed */
  isPannelOpen: boolean,
  /** Method to track Facebook Login */
  trackFacebookLogin: Function,
  /** Method to track Google Login */
  trackGoogleLogin: Function
}

/**
 * Handles Google & Fracebook Authentification Business Logic
 */
const AuthentificationSocialContainer = (props: Props) => {
  const { isPannelOpen } = props;
  return (
    <AuthentificationSocialComponent
      tabIndex={isPannelOpen ? 0 : -1}
      {...props}
    />
  );
};

const mapStateToProps = (state) => {
  const { isPannelOpen } = state.pannel;

  return {
    isPannelOpen
  };
};

export default connect(mapStateToProps)(AuthentificationSocialContainer);