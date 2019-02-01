import * as React from 'react';
import i18next from 'i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { BackArrow, BackButton } from '../Styled/Button';

/**
 * Renders button used to expand the Sequence
 */
const CollapseToggle = ({ isSequenceCollapsed, handleExpandSequence, isPannelOpen }) => {
  if (!isSequenceCollapsed) {
    return null;
  }

  return (
    <div>
      <BackArrow aria-hidden onClick={handleExpandSequence} tabIndex={isPannelOpen ? -1 : 0}>
        <FontAwesomeIcon icon={faArrowUp} />
      </BackArrow>
      <BackButton aria-hidden onClick={handleExpandSequence} tabIndex={isPannelOpen ? -1 : 0}>
        {i18next.t('sequence.return')}
      </BackButton>
    </div>
  );
};

export default CollapseToggle;