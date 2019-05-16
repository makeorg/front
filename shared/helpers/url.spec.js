/* @flow */
import * as urlHelper from './url';
import { ROUTE_PROPOSAL } from 'Shared/routes';
import { FRONT_URL } from 'Shared/constants/config';

const pathName = "/fooPath";
const aboutUrl = "https://foo.bar/baz"
const country = "FR";
const language = "fr";
const countryLanguage = `${country}-${language}`;
const questionSlug = "fooQuestionSlug";
const proposalId = "fooProposalId";
const proposalSlug = "fooProposalSlug";


describe('Url Helper', () => {

  it('return relative current url', () => {
    const link = urlHelper.getRelativeCurrentUrl(pathName);

    expect(link).toEqual(FRONT_URL+pathName);
  });

  it('return about link with #partenaires anchor', () => {
    const link = urlHelper.getPartnerAnchor(aboutUrl);

    expect(link).toEqual(`${aboutUrl}#partenaires`);
  });

  it('return sequence link', () => {
    const link = urlHelper.getSequenceLink(country,language,questionSlug);

    expect(link).toEqual(`/${countryLanguage}/consultation/${questionSlug}/selection`);
  });

  it('return consultation link', () => {
    const link = urlHelper.getConsultationLink(country,language,questionSlug);

    expect(link).toEqual(`/${countryLanguage}/consultation/${questionSlug}/consultation`);
  });

  it('return action link', () => {
    const link = urlHelper.getActionLink(country,language,questionSlug);

    expect(link).toEqual(`/${countryLanguage}/consultation/${questionSlug}/actions`);
  });

  it('return proposal link', () => {
    const link = urlHelper.getProposalLink(country,language,questionSlug, proposalId, proposalSlug);

    expect(link).toEqual(`/${countryLanguage}/consultation/${questionSlug}/proposal/${proposalId}/${proposalSlug}`);
  });
});
