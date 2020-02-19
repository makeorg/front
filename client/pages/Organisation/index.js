// @flow
import React, { useEffect, useState } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import * as OrganisationService from 'Shared/services/Organisation';
import {
  Redirect,
  matchPath,
  type match as TypeMatch,
  type Location as TypeLocation,
} from 'react-router';
import loadable from '@loadable/component';
import { i18n } from 'Shared/i18n';
import { MetaTags } from 'Client/app/MetaTags';
import { type Organisation as TypeOrganisation } from 'Shared/types/organisation';
import { useMobile } from 'Client/hooks/useMedia';
import { TabNavStyle, TabListStyle, TabStyle } from 'Client/ui/Elements/Tabs';
import {
  ROUTE_ORGANISATION_PROPOSALS,
  ROUTE_ORGANISATION_VOTES,
  getRouteOrganisationProposals,
  getRouteOrganisationVotes,
} from 'Shared/routes';
import { Spinner } from 'Client/ui/Elements/Loading/Spinner';
import { MiddlePageWrapperStyle } from 'Client/app/Styled/MainElements';
import {
  ProfileWrapperStyle,
  ProfileHeaderStyle,
  ProfilePageContentWrapperStyle,
  ProfilePageSidebarWrapperStyle,
  ProfilePageSidebarStyle,
  ProfilePageContentStyle,
  ProfileAvatarLayoutStyle,
  ProfileAvatarStyle,
  ProfileContentWrapperStyle,
  ProfileTitleStyle,
  ProfileAlignLeftContentStyle,
  ProfileWebsiteLinkStyle,
} from 'Client/ui/Elements/ProfileElements';
import { Avatar } from 'Client/ui/Avatar';
import { SvgCheckedSymbol } from 'Client/ui/Svg/elements/CheckedSymbol';
import { UserDescription } from 'Client/features/profile/UserInformations/Description';
import { OrganisationProfileSkipLinks } from 'Client/app/SkipLinks/Organisation';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import { SvgLink } from 'Client/ui/Svg/elements';
import { TileWithTitle } from 'Client/ui/Elements/TileWithTitle';
import { Sharing } from 'Client/features/sharing';
import { TYPE_ORGANISATION } from 'Shared/constants/user';
import { trackDisplayPublicProfile } from 'Shared/services/Tracking';
import { CertifiedIconStyle } from 'Client/ui/Proposal/AuthorElement/Styled';
import { formatOrganisationName } from 'Shared/helpers/stringFormatter';

const OrganisationProposalsPage = loadable(() =>
  import('Client/pages/Organisation/Proposals')
);
const OrganisationVotesPage = loadable(() =>
  import('Client/pages/Organisation/Votes')
);

type Props = {
  match: TypeMatch,
  location: TypeLocation,
};

const OrganisationPage = (props: Props) => {
  const [organisation, setOrganisation] = useState(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const isMobile = useMobile();
  const { match, location } = props;
  const { country, language, organisationSlug } = match.params;
  const organisationProposalsLink = getRouteOrganisationProposals(
    country,
    language,
    organisationSlug
  );
  const organisationFavouritesLink = getRouteOrganisationVotes(
    country,
    language,
    organisationSlug
  );

  const isOrganisationProposalsActive = !!matchPath(
    location.pathname,
    ROUTE_ORGANISATION_PROPOSALS
  );
  const isOrganisationVotesActive = !!matchPath(
    location.pathname,
    ROUTE_ORGANISATION_VOTES
  );

  useEffect(() => {
    trackDisplayPublicProfile(TYPE_ORGANISATION);
  }, []);

  useEffect(() => {
    const fetchOrganisation = async () => {
      const loadedOrganisation: ?TypeOrganisation = await OrganisationService.getOrganisationBySlug(
        organisationSlug
      );

      setOrganisation(loadedOrganisation);
      setIsLoading(false);
    };

    fetchOrganisation();
  }, [organisationSlug]);

  if (!organisation && isLoading) {
    return (
      <MiddlePageWrapperStyle aria-busy>
        <Spinner />
      </MiddlePageWrapperStyle>
    );
  }

  if (!organisation) {
    return <Redirect to="/" />;
  }

  return (
    <ProfileWrapperStyle>
      <OrganisationProfileSkipLinks />
      <MetaTags />
      <ProfileHeaderStyle aria-hidden />
      <ProfilePageContentWrapperStyle>
        <ProfilePageSidebarWrapperStyle>
          <ProfilePageSidebarStyle>
            <ProfileAvatarLayoutStyle>
              <ProfileAvatarStyle>
                <Avatar
                  avatarSize={isMobile ? 120 : 160}
                  avatarUrl={organisation.avatarUrl}
                />
              </ProfileAvatarStyle>
            </ProfileAvatarLayoutStyle>
            <ProfileContentWrapperStyle>
              <ProfileTitleStyle>
                <ScreenReaderItemStyle>
                  {i18n.t('profile.common.labels.organisation')}
                </ScreenReaderItemStyle>
                {formatOrganisationName(organisation.organisationName)}

                <SvgCheckedSymbol style={CertifiedIconStyle} />
              </ProfileTitleStyle>
            </ProfileContentWrapperStyle>
            {organisation.description && (
              <>
                <ScreenReaderItemStyle>
                  {i18n.t('profile.common.labels.biography')}
                </ScreenReaderItemStyle>
                <UserDescription description={organisation.description} />
              </>
            )}
            {organisation.website && (
              <ProfileAlignLeftContentStyle>
                <ScreenReaderItemStyle>
                  {i18n.t('profile.common.labels.website')}
                </ScreenReaderItemStyle>
                <SvgLink aria-hidden style={{ marginRight: '5px' }} />
                <ProfileWebsiteLinkStyle
                  as="a"
                  target="_blank"
                  rel="noreferrer noopener"
                  href={organisation.website}
                >
                  {organisation.website}
                </ProfileWebsiteLinkStyle>
              </ProfileAlignLeftContentStyle>
            )}
          </ProfilePageSidebarStyle>
          <TileWithTitle title={i18n.t('profile.organisation.sharing_title')}>
            <Sharing />
          </TileWithTitle>
        </ProfilePageSidebarWrapperStyle>
        <ProfilePageContentStyle>
          <TabNavStyle
            aria-label={i18n.t('common.secondary_nav')}
            id="organisation_nav"
          >
            <TabListStyle>
              <TabStyle isSelected={isOrganisationProposalsActive}>
                <Link
                  to={organisationProposalsLink}
                  aria-current={isOrganisationProposalsActive}
                >
                  {i18n.t('organisation.tabs.proposals')}
                </Link>
              </TabStyle>
              <TabStyle isSelected={isOrganisationVotesActive}>
                <Link
                  to={organisationFavouritesLink}
                  aria-current={isOrganisationVotesActive}
                >
                  {i18n.t('organisation.tabs.votes')}
                </Link>
              </TabStyle>
            </TabListStyle>
          </TabNavStyle>
          <Switch>
            <Route
              path={ROUTE_ORGANISATION_PROPOSALS}
              exact
              component={() => (
                <OrganisationProposalsPage organisation={organisation} />
              )}
            />
            <Route
              path={ROUTE_ORGANISATION_VOTES}
              exact
              component={() => (
                <OrganisationVotesPage organisation={organisation} />
              )}
            />
          </Switch>
        </ProfilePageContentStyle>
      </ProfilePageContentWrapperStyle>
    </ProfileWrapperStyle>
  );
};

// default export needed for loadable component
export default OrganisationPage; // eslint-disable-line import/no-default-export
