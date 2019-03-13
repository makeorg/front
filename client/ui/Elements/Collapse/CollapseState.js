import React from 'react';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { CollapseComponent } from './CollapseComponent';

type Props = {
  /** Label for Collapse Trigger */
  title: string,
  /** Content to render in collapse box */
  children: React.Node,
  /** Set collapse value */
  softExpand?: boolean,
  /** Force Expand on Desktop */
  forceExpand?: boolean,
};

type State = {
  isCollapsed: boolean,
  disableCollapse: boolean,
};

export class CollapseState extends React.Component<Props, State> {
  componentDidMount() {
    const { softExpand } = this.props;
    this.setState({ isCollapsed: !softExpand });
    this.forceExpandOnDesktop();

    window.addEventListener('resize', this.forceExpandOnDesktop);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.forceExpandOnDesktop);
  }

  forceExpandOnDesktop = () => {
    const { forceExpand } = this.props;
    const enabledDesktopExpand =
      forceExpand && window.innerWidth > Breakpoints.Desktop;
    this.setState({
      disableCollapse: enabledDesktopExpand,
    });
  };

  toggleCollapse = (event: SyntheticEvent<HTMLButtonElement>) => {
    event.preventDefault();
    this.setState(prevState => ({
      isCollapsed: !prevState.isCollapsed,
    }));
  };

  render() {
    const { title, children } = this.props;
    return (
      <CollapseComponent
        {...this.state}
        title={title}
        toggleCollapse={this.toggleCollapse}
      >
        {children}
      </CollapseComponent>
    );
  }
}

CollapseState.defaultProps = {
  softExpand: false,
  forceExpand: false,
};