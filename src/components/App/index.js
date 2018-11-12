import React from 'react';
import { ThemeProvider } from 'styled-components';
import ModernNormalizeStylesheet from '../../assets/css-in-js/ModernNormalize';
import FontLoaderContainer from '../../containers/Elements/FontLoader';
import DefaultStylesheet from '../../assets/css-in-js/DefaultStyle';
import AnimationsStylesheet from '../../assets/css-in-js/Animations';
import { AppWrapper, MainContent } from '../Elements/MainElements';
import MainHeaderContainer from '../../containers/MainHeader';
import MainFooterContainer from '../../containers/MainFooter';
import ProposalSubmitContainer from '../../containers/ProposalSubmit';
import PannelContainer from '../../containers/Pannel';
import SequenceContainer from '../../containers/Sequence';
import theme from '../../assets/vars/theme';

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <AppWrapper>
          <ModernNormalizeStylesheet />
          <FontLoaderContainer />
          <DefaultStylesheet />
          <AnimationsStylesheet />
          <MainHeaderContainer />
          <MainContent role="main">
            <ProposalSubmitContainer />
            <SequenceContainer />
            <PannelContainer />
          </MainContent>
          <MainFooterContainer />
        </AppWrapper>
      </ThemeProvider>
    );
  }
}

export default App;
