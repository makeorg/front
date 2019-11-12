/* @flow */

import { ApiService } from 'Shared/api/ApiService';
import { TrackingApiService } from 'Shared/api/TrackingApiService';
import trackingConfiguration from 'Shared/services/trackingConfiguration.yaml';
import * as trackingConstants from 'Shared/constants/tracking';
import { TrackingService } from 'Shared/services/TrackingService';
import {
  trackClickMakeLogo,
  trackDisplaySequence,
  trackClickActionsTab,
  trackDisplayConsultation,
  trackClickHomepageConsultations,
  trackDisplaySignupForm,
  trackDisplayModerationText,
  trackDisplayAuthenticationForm,
  trackClickPersonnalDataLink,
  trackClickProposalSubmit,
  trackDisplayForgotPasswordForm,
  trackClickCloseModal,
  trackClickModerationLink,
  trackDisplayHomepage,
  trackLoadMoreProposals,
  trackUnqualify,
  trackQualify,
  trackUnvote,
  trackVote,
  trackFirstVote,
  trackDisplayFinalCard,
  trackClickPreviousCard,
  trackClickNextCard,
  trackLoginEmailFailure,
  trackLoginEmailSuccess,
  trackAuthenticationSocialFailure,
  trackAuthenticationSocialSuccess,
  trackDisplaySigninForm,
  trackSignupEmailFailure,
  trackSignupEmailSuccess,
  trackDisplayProposalSubmitValidation,
  trackClickStartSequence,
  trackDisplayBrowseConsultations,
  trackClickHomepageParticipate,
  trackClickHomepageDiscover,
  trackClickBrowseConsultations,
  trackClickBrowseResults,
  trackClickBlog,
  trackClickParticipate,
  trackClickPageNumber,
  trackClickResults,
  trackClickSubscribe,
  trackDisplayProposalField,
  trackClickBackProposals,
  trackClickKeepVoting,
  trackClickNextOnLastProposal,
} from './Tracking';
import { trackingParamsService } from './TrackingParamsService';

const eventParameters = {
  location: 'homepage',
  source: 'foo',
  language: 'foo',
  country: 'foo',
  questionId: 'foo',
  questionSlug: 'fooSlug',
  referrer: undefined,
  url: 'http://localhost/',
};

trackingParamsService.location = eventParameters.location;
trackingParamsService.source = eventParameters.source;
trackingParamsService.country = eventParameters.country;
trackingParamsService.language = eventParameters.language;
trackingParamsService.questionId = eventParameters.questionId;
trackingParamsService.questionSlug = eventParameters.questionSlug;
trackingParamsService.referrer = eventParameters.referrer;
trackingParamsService.url = eventParameters.url;

describe('Tracking Service', () => {
  const { location } = window;

  beforeAll(() => {
    delete window.location;
    window.location = { href: eventParameters.url, pathname: '/' };
  });

  afterAll(() => {
    window.location = location;
  });

  beforeEach(() => {
    jest.spyOn(TrackingService, 'sendAllTrackers');
    jest.spyOn(TrackingService, 'track');
  });

  afterEach(() => {
    TrackingService.track.mockRestore();
  });

  it('track performance', async () => {
    jest.spyOn(TrackingApiService, 'trackPerformance');
    const performanceTiming = {
      connectStart: 1,
      connectEnd: 2,
      domComplete: 3,
      domContentLoadedEventEnd: 4,
      domContentLoadedEventStart: 5,
      domInteractive: 6,
      domLoading: 7,
      domainLookupEnd: 8,
      domainLookupStart: 9,
      fetchStart: 10,
      loadEventEnd: 11,
      loadEventStart: 12,
      navigationStart: 13,
      redirectEnd: 14,
      redirectStart: 15,
      requestStart: 16,
      responseEnd: 17,
      responseStart: 18,
      secureConnectionStart: 19,
      unloadEventEnd: 20,
      unloadEventStart: 21,
    };
    const response = {
      status: 204,
    };

    TrackingApiService.trackPerformance.mockResolvedValue(response);

    const performance = await TrackingService.trackPerformance(
      'foo',
      performanceTiming
    );

    expect(performance).toEqual(undefined);
  });

  it('merge default event params with passed params', () => {
    const eventName = 'fooEvent';
    const expectedBody = JSON.stringify({
      eventName,
      eventParameters,
      eventType: 'trackCustom',
    });

    jest.spyOn(ApiService, 'callApi');

    TrackingService.track(eventName, eventParameters);
    expect(ApiService.callApi).toHaveBeenNthCalledWith(1, '/tracking/front', {
      body: expectedBody,
      method: 'POST',
    });
  });

  it('track DisplaySequence', () => {
    const eventName = trackingConfiguration.DISPLAY_SEQUENCE.key;

    trackDisplaySequence();
    expect(TrackingService.track).toHaveBeenNthCalledWith(1, eventName, {});
  });

  it('track Display Page Operation with consultation type', () => {
    const eventName = trackingConfiguration.DISPLAY_PAGE_OPERATION.key;

    trackDisplayConsultation('consultation');
    expect(TrackingService.track).toHaveBeenNthCalledWith(1, eventName, {
      type: 'consultation',
    });
  });

  it('track Display Page Operation with restults type', () => {
    const eventName = trackingConfiguration.DISPLAY_PAGE_OPERATION.key;

    trackDisplayConsultation('results');
    expect(TrackingService.track).toHaveBeenNthCalledWith(1, eventName, {
      type: 'results',
    });
  });

  it('track Click Actions Tab', () => {
    const eventName = trackingConfiguration.CLICK_ACTIONS_TAB.key;

    trackClickActionsTab();
    expect(TrackingService.track).toHaveBeenNthCalledWith(1, eventName, {});
  });

  it('track ClickMakeLogo', () => {
    const eventName = trackingConfiguration.CLICK_MAKEORG_LOGO.key;

    trackClickMakeLogo();
    expect(TrackingService.track).toHaveBeenNthCalledWith(1, eventName, {});
  });

  it('track Display Moderation Text', () => {
    const eventName = trackingConfiguration.DISPLAY_MODERATION_TEXT.key;

    trackDisplayModerationText();
    expect(TrackingService.track).toHaveBeenNthCalledWith(1, eventName, {});
  });

  it('track Click Moderation Text', () => {
    const eventName = trackingConfiguration.CLICK_MODERATION_LINK.key;

    trackClickModerationLink();
    expect(TrackingService.track).toHaveBeenNthCalledWith(1, eventName, {});
  });

  it('track Display Authentication Form', () => {
    const eventName = trackingConfiguration.DISPLAY_AUTHENTICATION_FORM.key;

    trackDisplayAuthenticationForm();
    expect(TrackingService.track).toHaveBeenNthCalledWith(1, eventName, {});
  });

  it('track Click Personnal DataLink', () => {
    const eventName = trackingConfiguration.CLICK_PERSONNAL_DATA_LINK.key;

    trackClickPersonnalDataLink();
    expect(TrackingService.track).toHaveBeenNthCalledWith(1, eventName, {});
  });

  it('track Display Proposal Field', () => {
    const eventName = trackingConfiguration.DISPLAY_PROPOSAL_FIELD.key;

    trackDisplayProposalField();
    expect(TrackingService.track).toHaveBeenNthCalledWith(1, eventName, {});
  });

  it('track Click Proposal Submit', () => {
    const eventName = trackingConfiguration.CLICK_PROPOSAL_SUBMIT.key;

    trackClickProposalSubmit();
    expect(TrackingService.track).toHaveBeenNthCalledWith(1, eventName, {});
  });

  it('track Click Back Proposals', () => {
    const eventName = trackingConfiguration.CLICK_BACK_PROPOSALS.key;

    trackClickBackProposals();
    expect(TrackingService.track).toHaveBeenNthCalledWith(1, eventName, {});
  });

  it('track Display Proposal Submit Validation', () => {
    const eventName =
      trackingConfiguration.DISPLAY_PROPOSAL_SUBMIT_VALIDATION.key;

    trackDisplayProposalSubmitValidation();
    expect(TrackingService.track).toHaveBeenNthCalledWith(1, eventName, {});
  });

  it('track Click Keep Voting', () => {
    const eventName = trackingConfiguration.CLICK_KEEP_VOTING.key;

    trackClickKeepVoting();
    expect(TrackingService.track).toHaveBeenNthCalledWith(1, eventName, {});
  });

  it('track Display Forgot Password Form', () => {
    const eventName = trackingConfiguration.DISPLAY_FORGOTPASSWORD_FORM.key;

    trackDisplayForgotPasswordForm();
    expect(TrackingService.track).toHaveBeenNthCalledWith(1, eventName, {});
  });

  it('track Click Close Modal', () => {
    const eventName = trackingConfiguration.CLICK_CLOSE_MODAL.key;
    const contextName = 'MODAL_LOGIN';
    const trackParams = { context: contextName };

    trackClickCloseModal(contextName);
    expect(TrackingService.track).toHaveBeenNthCalledWith(
      1,
      eventName,
      trackParams
    );
  });

  it('track Display Signup Form', () => {
    const eventName = trackingConfiguration.DISPLAY_SIGN_UP_FORM.key;

    trackDisplaySignupForm();
    expect(TrackingService.track).toHaveBeenNthCalledWith(1, eventName, {});
  });

  it('track Signup Email Success', () => {
    const eventName = trackingConfiguration.SIGN_UP_EMAIL_SUCCESS.key;

    trackSignupEmailSuccess();
    expect(TrackingService.track).toHaveBeenNthCalledWith(1, eventName, {});
  });

  it('track Signup Email Failure', () => {
    const eventName = trackingConfiguration.SIGN_UP_EMAIL_FAILURE.key;

    trackSignupEmailFailure();
    expect(TrackingService.track).toHaveBeenNthCalledWith(1, eventName, {});
  });

  it('track Display Signin Form', () => {
    const eventName = trackingConfiguration.DISPLAY_SIGN_IN_FORM.key;

    trackDisplaySigninForm();
    expect(TrackingService.track).toHaveBeenNthCalledWith(1, eventName, {});
  });

  it('track Authentication Social Success', () => {
    const eventName = trackingConfiguration.AUTHEN_SOCIAL_SUCCESS.key;
    const trackParams = {
      'social-network': 'foo',
      'account-creation': 'false',
    };

    trackAuthenticationSocialSuccess('foo', 'false');
    expect(TrackingService.track).toHaveBeenNthCalledWith(
      1,
      eventName,
      trackParams
    );
  });

  it('track Authentication Social Failure', () => {
    const eventName = trackingConfiguration.AUTHEN_SOCIAL_FAILURE.key;
    const trackParams = { 'social-network': 'foo' };

    trackAuthenticationSocialFailure('foo');
    expect(TrackingService.track).toHaveBeenNthCalledWith(
      1,
      eventName,
      trackParams
    );
  });

  it('track Login Email Success', () => {
    const eventName = trackingConfiguration.SIGN_IN_EMAIL_SUCCESS.key;

    trackLoginEmailSuccess();
    expect(TrackingService.track).toHaveBeenNthCalledWith(1, eventName, {});
  });

  it('track Login Email Failure', () => {
    const eventName = trackingConfiguration.SIGN_IN_EMAIL_FAILURE.key;

    trackLoginEmailFailure();
    expect(TrackingService.track).toHaveBeenNthCalledWith(1, eventName, {});
  });

  it('track Click Start Sequence', () => {
    const eventName = trackingConfiguration.CLICK_START_SEQUENCE.key;

    trackClickStartSequence();
    expect(TrackingService.track).toHaveBeenNthCalledWith(1, eventName, {});
  });

  it('track Click Next Card', () => {
    const eventName = trackingConfiguration.CLICK_SEQUENCE_NEXT_CARD.key;

    trackClickNextCard();
    expect(TrackingService.track).toHaveBeenNthCalledWith(1, eventName, {});
  });

  it('track Click Last Proposal Card', () => {
    const eventName = trackingConfiguration.CLICK_SEQUENCE_LAST_PROPOSAL.key;

    trackClickNextOnLastProposal();
    expect(TrackingService.track).toHaveBeenNthCalledWith(1, eventName, {});
  });

  it('track Click Previous Card', () => {
    const eventName = trackingConfiguration.CLICK_SEQUENCE_PREVIOUS_CARD.key;

    trackClickPreviousCard();
    expect(TrackingService.track).toHaveBeenNthCalledWith(1, eventName, {});
  });

  it('track Display Final Card', () => {
    const eventName = trackingConfiguration.DISPLAY_FINAL_CARD.key;

    trackDisplayFinalCard();
    expect(TrackingService.track).toHaveBeenNthCalledWith(1, eventName, {});
  });

  it('track First Vote', () => {
    const eventName = trackingConfiguration.CLICK_SEQUENCE_FIRST_VOTE.key;

    trackFirstVote('foo', 'bar', 999);
    expect(TrackingService.track).toHaveBeenNthCalledWith(1, eventName, {
      proposalId: 'foo',
      nature: 'bar',
      'card-position': '999',
    });
  });

  it('track Vote', () => {
    const eventName = trackingConfiguration.CLICK_PROPOSAL_VOTE.key;

    trackVote('foo', 'bar', 999, 'my-component');
    expect(TrackingService.track).toHaveBeenNthCalledWith(1, eventName, {
      proposalId: 'foo',
      nature: 'bar',
      'card-position': '999',
      component: 'my-component',
    });
  });

  it('track Unvote', () => {
    const eventName = trackingConfiguration.CLICK_PROPOSAL_UNVOTE.key;

    trackUnvote('foo', 'bar', 999);
    expect(TrackingService.track).toHaveBeenNthCalledWith(1, eventName, {
      proposalId: 'foo',
      nature: 'bar',
      'card-position': '999',
      component: '',
    });
  });

  it('track Vote on Single Proposal Card', () => {
    const eventName = trackingConfiguration.CLICK_PROPOSAL_VOTE.key;

    trackVote('foo', 'bar', undefined);
    expect(TrackingService.track).toHaveBeenNthCalledWith(1, eventName, {
      proposalId: 'foo',
      nature: 'bar',
      'card-position': 'single-proposal',
      component: '',
    });
  });

  it('track Unvote on Single Proposal Card', () => {
    const eventName = trackingConfiguration.CLICK_PROPOSAL_UNVOTE.key;

    trackUnvote('foo', 'bar', undefined);
    expect(TrackingService.track).toHaveBeenNthCalledWith(1, eventName, {
      proposalId: 'foo',
      nature: 'bar',
      'card-position': 'single-proposal',
      component: '',
    });
  });

  it('track Qualify', () => {
    const eventName = trackingConfiguration.CLICK_PROPOSAL_QUALIFY.key;

    trackQualify('foo', 'baz', 'bar', 999);
    expect(TrackingService.track).toHaveBeenNthCalledWith(1, eventName, {
      proposalId: 'foo',
      type: 'baz',
      nature: 'bar',
      'card-position': '999',
      component: '',
    });
  });

  it('track Unqualify', () => {
    const eventName = trackingConfiguration.CLICK_PROPOSAL_UNQUALIFY.key;

    trackUnqualify('foo', 'baz', 'bar', 999);
    expect(TrackingService.track).toHaveBeenNthCalledWith(1, eventName, {
      proposalId: 'foo',
      type: 'baz',
      nature: 'bar',
      'card-position': '999',
      component: '',
    });
  });

  it('track Load More Proposals without page number', () => {
    const eventName = trackingConfiguration.CLICK_PROPOSAL_VIEW_MORE.key;

    trackLoadMoreProposals('proposals');
    expect(TrackingService.track).toHaveBeenNthCalledWith(1, eventName, {
      page: undefined,
      component: 'proposals',
    });
  });

  it('track Load More Proposals with page number', () => {
    const eventName = trackingConfiguration.CLICK_PROPOSAL_VIEW_MORE.key;
    const componentName = trackingConstants.COMPONENT_PARAM_PROPOSALS;

    trackLoadMoreProposals(componentName, 9);
    expect(TrackingService.track).toHaveBeenNthCalledWith(1, eventName, {
      page: '9',
      component: componentName,
    });
  });

  it('track Display Homepage', () => {
    const eventName = trackingConfiguration.DISPLAY_HOMEPAGE.key;

    trackDisplayHomepage();
    expect(TrackingService.track).toHaveBeenNthCalledWith(1, eventName, {});
  });

  it('track Click Homepage Consultations', () => {
    const eventName = trackingConfiguration.CLICK_HOMEPAGE_CONSULTATION.key;

    trackClickHomepageConsultations();
    expect(TrackingService.track).toHaveBeenNthCalledWith(1, eventName, {});
  });

  it('track Display Browse Consultations', () => {
    const eventName = trackingConfiguration.DISPLAY_BROWSE_CONSULTATIONS.key;
    trackDisplayBrowseConsultations();
    expect(TrackingService.track).toHaveBeenNthCalledWith(1, eventName, {});
  });

  it('track Click Homepage Participate consultations', () => {
    const eventName = trackingConfiguration.CLICK_HOMEPAGE_PARTICIPATE.key;
    trackClickHomepageParticipate();
    expect(TrackingService.track).toHaveBeenNthCalledWith(1, eventName, {});
  });

  it('track Click Homepage Discover great causes', () => {
    const eventName = trackingConfiguration.CLICK_HOMEPAGE_GREAT_CAUSES.key;
    trackClickHomepageDiscover();
    expect(TrackingService.track).toHaveBeenNthCalledWith(1, eventName, {});
  });

  it('track Click Homepage Browse Consultations', () => {
    const eventName =
      trackingConfiguration.CLICK_HOMEPAGE_BROWSE_CONSULTATIONS.key;
    trackClickBrowseConsultations();
    expect(TrackingService.track).toHaveBeenNthCalledWith(1, eventName, {});
  });

  it('track Click Homepage Browse Results', () => {
    const eventName = trackingConfiguration.CLICK_HOMEPAGE_BROWSE_RESULTS.key;
    trackClickBrowseResults();
    expect(TrackingService.track).toHaveBeenNthCalledWith(1, eventName, {});
  });

  it('track Click view Blog', () => {
    const eventName = trackingConfiguration.CLICK_VIEW_BLOG.key;
    trackClickBlog('blog list');
    expect(TrackingService.track).toHaveBeenNthCalledWith(1, eventName, {
      component: 'blog list',
    });
  });

  it('track Click participate consultations', () => {
    const eventName = trackingConfiguration.CLICK_BROWSE_PARTICIPATE.key;

    trackClickParticipate(999);
    expect(TrackingService.track).toHaveBeenNthCalledWith(1, eventName, {
      'question-Id': '999',
    });
  });

  it('track Click page number', () => {
    const eventName = trackingConfiguration.CLICK_PAGINATION.key;

    trackClickPageNumber(9);
    expect(TrackingService.track).toHaveBeenNthCalledWith(1, eventName, {
      'page-number': '9',
    });
  });

  it('track Click see results', () => {
    const eventName = trackingConfiguration.CLICK_RESULTS.key;
    trackClickResults();
    expect(TrackingService.track).toHaveBeenNthCalledWith(1, eventName, {});
  });

  it('track Click susbscribe', () => {
    const eventName = trackingConfiguration.CLICK_SUBSCRIBE.key;
    trackClickSubscribe('subscribe-next-consultation');
    expect(TrackingService.track).toHaveBeenNthCalledWith(1, eventName, {
      component: 'subscribe-next-consultation',
    });
  });
});
