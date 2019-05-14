// @flow
import { type OrganisationStances as TypeOrganisationStances } from 'Shared/types/organisation';
import { getFirstOrganisation, getLastOrganisation, getOtherOrganisations } from './organisation';

const organisationsVotes: TypeOrganisationStances[]  = [
  {
    organisationId: 'fooId',
    organisationName: 'fooName',
    organisationSlug: 'fooSlug'
  },
  {
    organisationId: 'barId',
    organisationName: 'barName',
    organisationSlug: 'barSlug'
  },
  {
    organisationId: 'bazId',
    organisationName: 'bazName',
    organisationSlug: 'bazSlug'
  },
  {
    organisationId: 'quxId',
    organisationName: 'quxName',
    organisationSlug: 'quxSlug'
  }
]

describe('Organisation Helper', () => {
  describe('getFirstOrganisation', () => {
    it('return the first element in organisations array', () => {
      const firstOrganisation: TypeOrganisationStances = getFirstOrganisation(organisationsVotes);
      expect(firstOrganisation.organisationId).toBe('fooId');
      expect(firstOrganisation.organisationName).toBe('fooName');
      expect(firstOrganisation.organisationSlug).toBe('fooSlug');
    });
  });

  describe('getLastOrganisation', () => {
    it('return the last element in organisations array', () => {
      const lastOrganisation: TypeOrganisationStances = getLastOrganisation(organisationsVotes);
      expect(lastOrganisation.organisationId).toBe('quxId');
      expect(lastOrganisation.organisationName).toBe('quxName');
      expect(lastOrganisation.organisationSlug).toBe('quxSlug');
    });
  });

  describe('getOtherOrganisations', () => {
    it('return organisations excluding first an last one in organisations array', () => {
      const otherOrganisationsToVote: TypeOrganisationStances = getOtherOrganisations(organisationsVotes);
      expect(otherOrganisationsToVote.length).toBe(2);
      expect(otherOrganisationsToVote[0].organisationId).toBe('barId');
      expect(otherOrganisationsToVote[0].organisationName).toBe('barName');
      expect(otherOrganisationsToVote[0].organisationSlug).toBe('barSlug');
      expect(otherOrganisationsToVote[1].organisationId).toBe('bazId');
      expect(otherOrganisationsToVote[1].organisationName).toBe('bazName');
      expect(otherOrganisationsToVote[1].organisationSlug).toBe('bazSlug');
    });
  });
});
