import React from 'react';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import ErrorBoundary from './Error';
import theme from '../../assets/vars/theme';
import AppComponent from '../../components/App';
import Tracking from '../../services/Tracking';

class AppContainer extends React.Component {
  componentDidMount = () => {
    Tracking.trackDisplaySequence();
  }

  render() {
    const { isSequenceCollapsed, country } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <ErrorBoundary>
          <AppComponent isSequenceCollapsed={isSequenceCollapsed} country={country} />
        </ErrorBoundary>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = (state) => {
  const { isSequenceCollapsed } = state.sequence;
  const { country } = state.appConfig;

  return {
    isSequenceCollapsed,
    country
  };
};


export default connect(mapStateToProps)(AppContainer);
