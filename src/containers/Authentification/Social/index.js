import React from 'react';
import { connect } from 'react-redux';
import AuthentificationSocialComponent from '../../../components/Authentification/Social';

class AuthentificationSocialContainer extends React.Component {
  render() {
    const { isPannelOpen } = this.props;
    return (
      <AuthentificationSocialComponent tabIndex={isPannelOpen ? 0 : -1} />
    );
  }
}


const mapStateToProps = (state) => {
  const { isPannelOpen } = state.pannel;

  return {
    isPannelOpen
  };
};

export default connect(mapStateToProps)(AuthentificationSocialContainer);