import React from 'react';
import i18next from 'i18next';
import {
  Bar,
  Tooltip,
  DisplayedTooltip,
  HiddenTooltip
} from '../Styled/Graph';

class ResultItemComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isTooltipDisplayed: false
    };

    this.toggleTooltip = this.toggleTooltip.bind(this);
    this.displayTooltip = this.displayTooltip.bind(this);
    this.hideTooltip = this.hideTooltip.bind(this);
  }

  toggleTooltip(event) {
    event.preventDefault();
    const { isTooltipDisplayed } = this.state;
    if (isTooltipDisplayed) {
      this.setState({
        isTooltipDisplayed: false
      });
    } else {
      this.setState({
        isTooltipDisplayed: true
      });
    }
  }

  displayTooltip(event) {
    event.preventDefault();
    this.setState({
      isTooltipDisplayed: true
    });
  }

  hideTooltip(event) {
    event.preventDefault();
    this.setState({
      isTooltipDisplayed: false
    });
  }

  render() {
    const {
      listKey,
      barKey,
      tooltipKey,
      voteColor,
      votePercent,
      tabIndex,
      voteKey
    } = this.props;
    const { isTooltipDisplayed } = this.state;
    return (
      <li key={listKey}>
        <Bar
          key={barKey}
          color={voteColor}
          percent={votePercent}
          tabIndex={tabIndex}
          onClick={this.toggleTooltip}
          onMouseEnter={this.displayTooltip}
          onMouseLeave={this.hideTooltip}
          onFocus={this.displayTooltip}
          onBlur={this.hideTooltip}
        />
        <Tooltip
          key={tooltipKey}
          as={isTooltipDisplayed ? DisplayedTooltip : HiddenTooltip}
          aria-hidden
        >
          <p>{i18next.t(`vote.${voteKey}`)}</p>
          <p>Votes %</p>
        </Tooltip>
      </li>
    );
  }
}

export default ResultItemComponent;
