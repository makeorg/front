/* @flow */
import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BottomTooltip, DisplayedTooltip } from 'Components/Elements/TooltipElments';
import { HiddenOnMobile } from 'Components/Elements/HiddenElements';
import { ButtonWrapper, Button } from '../Styled/Button';

type Props = {
  /** Color property passed to Styled Component */
  color: string,
  /** Vote key's Label */
  label: string,
  /** Vote key's Icon */
  icon: string,
  /** Rotate property passed to Styled Component */
  rotate: string,
  /** Tabindex for interactive items */
  tabIndex: number,
  /** Method called when vote button is clicked */
  id: string,
  /** React Element passed to Styled Component to render correct html tag */
  buttonType: React.Node,
  /** Method called when vote button is clicked */
  handleVote: Function
}

/**
 * Renders Vote Button element
 */
const VoteButtonComponent = (props: Props) => {
  const {
    color,
    label,
    icon,
    rotate,
    tabIndex,
    id,
    buttonType,
    handleVote,
    tooltipKey,
    displayTooltip,
    hideTooltip,
    isTooltipDisplayed
  } = props;

  return (
    <ButtonWrapper>
      <Button
        aria-label={label}
        id={id}
        tabIndex={tabIndex}
        color={color}
        rotate={rotate}
        as={buttonType}
        onClick={handleVote}
        onMouseEnter={displayTooltip}
        onMouseLeave={hideTooltip}
      >
        <FontAwesomeIcon icon={icon} />
      </Button>
      <HiddenOnMobile>
        <BottomTooltip
          id={tooltipKey}
          as={isTooltipDisplayed ? DisplayedTooltip : ''}
          aria-hidden={!isTooltipDisplayed}
          role="tooltip"
        >
          <p>{label}</p>
        </BottomTooltip>
      </HiddenOnMobile>
    </ButtonWrapper>
  );
};

export default VoteButtonComponent;
