import * as React from 'react';
import { connect } from 'react-redux';
import type { SignUpCardConfig, SignUpCardWording } from 'Src/types/card';
import Tracking from 'Src/services/Tracking';
import SignUpCardComponent from '../../../components/ProposalCard/SignUpCard';
import { getPosition, getScale, getZIndex } from '../../../helpers/sequence';

type Props = {
  /** Object with Dynamic properties used to configure the Sequence (questionId, country, ...) */
  question: Object,
  /** Object with Static properties used to configure the Sign Up Card */
  configuration: SignUpCardConfig,
  /** Object with Static properties used to customise the wording of the Sign Up Card */
  wording: SignUpCardWording,
  /** Index of the card */
  index: number,
  /** Incremented / Decremented Index */
  currentIndex: number,
  /** Total of cards */
  cardsCount: number,
  /** Method called when previous card button is clicked  */
  goToPreviousCard: Function,
  /** Method called when next card button is clicked  */
  skipSignUpCard: Function,
  /** Boolean toggled when Sliding pannel is opened / closed */
  isPannelOpen: boolean,
  /** Boolean toggled when Sequence is collapsed / expanded */
  isSequenceCollapsed: boolean
}

/**
 * Handles Sign Up Card Business Logic
 */
class SignUpCardContainer extends React.Component<Props> {
  componentDidUpdate = () => {
    const { question, index, currentIndex } = this.props;
    if (index === currentIndex) {
      Tracking.trackDisplaySignUpCard(question.slug);
    }
  }

  render() {
    const {
      configuration,
      wording,
      index,
      currentIndex,
      isPannelOpen,
      isSequenceCollapsed
    } = this.props;
    const position = getPosition(index, currentIndex);
    const scale = getScale(index, currentIndex);
    const zindex = getZIndex(index, currentIndex);

    return (
      <SignUpCardComponent
        signUpConfig={configuration}
        signUpWording={wording}
        position={position}
        scale={scale}
        zindex={zindex}
        tabIndex={isPannelOpen || isSequenceCollapsed || index !== currentIndex ? -1 : 0}
        {...this.props}
      />
    );
  }
}

const mapStateToProps = (state) => {
  const { isPannelOpen } = state.pannel;
  const { isSequenceCollapsed, question } = state.sequence;

  return {
    isPannelOpen,
    isSequenceCollapsed,
    question
  };
};

export default connect(mapStateToProps)(SignUpCardContainer);