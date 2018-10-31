import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '../Styled/Button';

class VoteButtonComponent extends React.Component {
  render() {
    const {
      color,
      label,
      icon,
      rotate,
      handleVote,
      buttonType,
      tabIndex
    } = this.props;
    return (
      <Button aria-label={label} tabIndex={tabIndex} color={color} rotate={rotate} as={buttonType} onClick={handleVote}>
        <FontAwesomeIcon icon={icon} />
      </Button>
    );
  }
}

export default VoteButtonComponent;