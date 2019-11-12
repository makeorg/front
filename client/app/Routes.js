import React from 'react';
import { Route, Switch, Redirect, useLocation } from 'react-router-dom';
import loadable from '@loadable/component';
import {
  ROUTE_SEARCH,
  ROUTE_SEARCH_PROPOSALS,
  ROUTE_SEARCH_ORGANISATIONS,
  ROUTE_SEARCH_CONSULTATIONS,
  ROUTE_CONSULTATION,
  ROUTE_PARTICIPATE,
  ROUTE_EXPLORE,
  ROUTE_ACTION,
  ROUTE_SEQUENCE,
  ROUTE_SEQUENCE_POPULAR,
  ROUTE_SEQUENCE_CONTROVERSIAL,
  ROUTE_ACCOUNT_ACTIVATION,
  ROUTE_PROPOSAL,
  ROUTE_PASSWORD_RECOVERY,
  ROUTE_PROFILE,
  ROUTE_PROFILE_EDIT,
  ROUTE_PROFILE_PROPOSALS,
  ROUTE_PROFILE_FAVOURITES,
  ROUTE_PROFILE_FOLLOWING,
  ROUTE_ORGANISATION_PROFILE,
  ROUTE_ORGANISATION_PROPOSALS,
  ROUTE_ORGANISATION_VOTES,
  ROUTE_COUNTRY,
  ROUTE_STATIC_LEGAL,
  ROUTE_STATIC_CONTACT,
  ROUTE_RESULTS,
  ROUTE_TOP_IDEAS,
  ROUTE_PERSONALITY_PROFILE,
  ROUTE_TOP_IDEA_DETAILS,
  ROUTE_PROFILE_OPINIONS,
  ROUTE_STATIC_NOTFOUND,
  ROUTE_STATIC_LEGAL_EN,
  ROUTE_STATIC_CONTACT_EN,
  ROUTE_BROWSE_CONSULTATIONS,
  ROUTE_BROWSE_RESULTS,
  BASE_PREVIEW_PATH,
  ROUTE_STATIC_A11Y,
  ROUTE_STATIC_COOKIES,
} from 'Shared/routes';
import { QuestionWrapper } from 'Client/pages/Consultation/QuestionWrapper';
import { usePageBackgoundColor } from 'Client/hooks/usePageBackgroundColor';
import { BASE_URL } from 'Shared/constants/config';

const BrowsePage = loadable(() => import('../pages/Browse/index.js'));
const ConsultationPage = loadable(() =>
  import('../pages/Consultation/Consultation.js')
);
const ParticipatePage = loadable(() =>
  import('../pages/Consultation/Participate.js')
);
const ExplorePage = loadable(() => import('../pages/Consultation/Explore.js'));
const ActionsPage = loadable(() => import('../pages/Consultation/Actions.js'));
export const ResultsPage = loadable(() =>
  import('../pages/Consultation/Results.js')
);
const TopIdeasPage = loadable(() =>
  import('../pages/Consultation/TopIdeas.js')
);
const TopIdeaDetailsPage = loadable(() =>
  import('../pages/Consultation/TopIdeaDetails.js')
);
const SequencePage = loadable(() =>
  import('../pages/Consultation/Sequence.js')
);
const SequencePopularPage = loadable(() =>
  import('../pages/Consultation/Sequence.js')
);
const SequenceControversialPage = loadable(() =>
  import('../pages/Consultation/Sequence.js')
);

const PasswordRecoveryPage = loadable(() =>
  import('../pages/PasswordRecovery')
);
const NotFoundPage = loadable(() => import('../pages/NotFound'));
const ProposalPage = loadable(() => import('../pages/Proposal'));
const AccountActivationPage = loadable(() =>
  import('../pages/AccountActivation')
);
const ProfileEditPage = loadable(() => import('../pages/Profile/Edit'));

const ProfilePage = loadable(() => import('../pages/Profile'));

const ProfileOpinionsPage = loadable(() => import('../pages/Profile/Opinions'));

const OrganisationPage = loadable(() => import('../pages/Organisation'));

const PersonalityPage = loadable(() => import('../pages/Personality'));

const SearchPage = loadable(() => import('../pages/Search'));

const LegalPage = loadable(() => import('../pages/Static/Legal'));
const Contact = loadable(() => import('../pages/Static/Contact'));
const Accessibility = loadable(() => import('../pages/Static/Accessibility'));
const Cookies = loadable(() => import('../pages/Static/Cookies'));

export const Routes = () => {
  const location = useLocation();
  const { pathname } = location;

  usePageBackgoundColor(pathname);

  return (
    <Switch>
      <Route path={ROUTE_BROWSE_CONSULTATIONS} component={BrowsePage} />
      <Route path={ROUTE_BROWSE_RESULTS} component={BrowsePage} />
      <Route path={ROUTE_CONSULTATION}>
        <QuestionWrapper withRedirect>
          <ConsultationPage />
        </QuestionWrapper>
      </Route>
      <Route path={ROUTE_PARTICIPATE}>
        <QuestionWrapper withRedirect>
          <ParticipatePage />
        </QuestionWrapper>
      </Route>
      <Route path={ROUTE_EXPLORE}>
        <QuestionWrapper withRedirect>
          <ExplorePage />
        </QuestionWrapper>
      </Route>
      <Route path={ROUTE_ACTION}>
        <QuestionWrapper>
          <ActionsPage />
        </QuestionWrapper>
      </Route>
      <Route path={ROUTE_SEQUENCE}>
        <QuestionWrapper withRedirect>
          <SequencePage />
        </QuestionWrapper>
      </Route>
      <Route path={ROUTE_SEQUENCE_POPULAR}>
        <QuestionWrapper withRedirect>
          <SequencePopularPage zone="consensus" />
        </QuestionWrapper>
      </Route>
      <Route path={ROUTE_SEQUENCE_CONTROVERSIAL}>
        <QuestionWrapper withRedirect>
          <SequenceControversialPage zone="controversy" />
        </QuestionWrapper>
      </Route>
      <Route path={ROUTE_RESULTS}>
        <QuestionWrapper>
          <ResultsPage />
        </QuestionWrapper>
      </Route>
      <Route path={`${BASE_PREVIEW_PATH}${ROUTE_RESULTS}`}>
        <QuestionWrapper>
          <ResultsPage />
        </QuestionWrapper>
      </Route>
      <Route path={ROUTE_TOP_IDEA_DETAILS}>
        <QuestionWrapper>
          <TopIdeaDetailsPage />
        </QuestionWrapper>
      </Route>
      <Route path={ROUTE_TOP_IDEAS}>
        <QuestionWrapper>
          <TopIdeasPage />
        </QuestionWrapper>
      </Route>
      <Route
        path={ROUTE_ACCOUNT_ACTIVATION}
        component={AccountActivationPage}
      />
      <Route path={ROUTE_PROPOSAL} component={ProposalPage} />
      <Route path={ROUTE_PASSWORD_RECOVERY} component={PasswordRecoveryPage} />
      <Route path={ROUTE_PROFILE_EDIT} component={ProfileEditPage} />
      <Route path={ROUTE_PROFILE_PROPOSALS} component={ProfilePage} />
      <Route path={ROUTE_PROFILE_FAVOURITES} component={ProfilePage} />
      <Route path={ROUTE_PROFILE_FOLLOWING} component={ProfilePage} />
      <Route path={ROUTE_PROFILE_OPINIONS} component={ProfileOpinionsPage} />
      <Route path={ROUTE_ORGANISATION_PROPOSALS} component={OrganisationPage} />
      <Route path={ROUTE_ORGANISATION_VOTES} component={OrganisationPage} />
      <Route path={ROUTE_SEARCH} component={SearchPage} />
      <Route path={ROUTE_SEARCH_PROPOSALS} component={SearchPage} />
      <Route path={ROUTE_SEARCH_ORGANISATIONS} component={SearchPage} />
      <Route path={ROUTE_SEARCH_CONSULTATIONS} component={SearchPage} />
      <Route path={ROUTE_PERSONALITY_PROFILE} component={PersonalityPage} />
      <Redirect
        path={ROUTE_ORGANISATION_PROFILE}
        to={ROUTE_ORGANISATION_PROPOSALS}
      />
      <Redirect path={ROUTE_PROFILE} to={ROUTE_PROFILE_PROPOSALS} />
      <Redirect exact path={ROUTE_COUNTRY} to={BASE_URL} />

      <Route path={ROUTE_STATIC_LEGAL} component={LegalPage} />
      <Route path={ROUTE_STATIC_CONTACT} component={Contact} />
      <Route path={ROUTE_STATIC_NOTFOUND} component={NotFoundPage} />
      <Route path={ROUTE_STATIC_A11Y} component={Accessibility} />

      {/* Routes used for en language */}
      <Route path={ROUTE_STATIC_LEGAL_EN} component={LegalPage} />
      <Route path={ROUTE_STATIC_CONTACT_EN} component={Contact} />
      <Route path={ROUTE_STATIC_COOKIES} component={Cookies} />

      <Route path={ROUTE_STATIC_NOTFOUND} component={NotFoundPage} />
      <Redirect exact path="/" to={BASE_URL} />

      <Route component={NotFoundPage} />
    </Switch>
  );
};
