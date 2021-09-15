/* @flow */
import {
  CARD_TYPE_EXTRASLIDE_DEMOGRAPHICS_CARD,
  CARD_TYPE_EXTRASLIDE_FINAL_CARD,
  CARD_TYPE_EXTRASLIDE_INTRO,
  CARD_TYPE_EXTRASLIDE_PUSH_PROPOSAL,
} from 'Shared/constants/card';
import { KIND_CONTROVERSY, KIND_POPULAR } from 'Shared/constants/sequence';
import * as helpers from './sequence';

describe('Sequence Helper', () => {
  describe('test buildCards', () => {
    const proposals = [];

    const defaultDemographicData = {
      id: 'demographicId',
      name: 'demographicName',
      layout: 'OneColumnRadio',
      title: 'demographic title',
      parameters: [
        { label: 'label1', value: 'value1' },
        { label: 'label2', value: 'value2' },
      ],
      token: 'demographicToken',
    };

    it("doesn't contain intro card in API conf and in params", () => {
      const extraSlidesConfig = {
        introCard: { enabled: false },
      };
      const introCardParam = false;
      const cards = helpers.buildCards(
        proposals,
        extraSlidesConfig,
        false,
        false,
        'standard',
        introCardParam,
        false,
        defaultDemographicData
      );
      expect(cards.length).toBe(2);
      expect(cards).toEqual([
        {
          index: 0,
          type: CARD_TYPE_EXTRASLIDE_DEMOGRAPHICS_CARD,
          configuration: defaultDemographicData,
        },
        {
          index: 1,
          type: CARD_TYPE_EXTRASLIDE_FINAL_CARD,
          configuration: undefined,
        },
      ]);
    });

    it('contain intro card in API conf but false in params', () => {
      const extraSlidesConfig = {
        introCard: { enabled: true },
      };
      const introCardParam = false;
      const cards = helpers.buildCards(
        proposals,
        extraSlidesConfig,
        false,
        false,
        'standard',
        introCardParam,
        false,
        defaultDemographicData
      );
      expect(cards.length).toBe(2);
      expect(cards).toEqual([
        {
          index: 0,
          type: CARD_TYPE_EXTRASLIDE_DEMOGRAPHICS_CARD,
          configuration: defaultDemographicData,
        },
        {
          index: 1,
          type: CARD_TYPE_EXTRASLIDE_FINAL_CARD,
          configuration: undefined,
        },
      ]);
    });

    it("doesn't contain intro card in API conf but true in params", () => {
      const extraSlidesConfig = {
        introCard: { enabled: false },
      };
      const introCardParam = true;
      const cards = helpers.buildCards(
        proposals,
        extraSlidesConfig,
        false,
        false,
        'standard',
        introCardParam,
        false,
        defaultDemographicData
      );
      expect(cards.length).toBe(2);
      expect(cards).toEqual([
        {
          index: 0,
          type: CARD_TYPE_EXTRASLIDE_DEMOGRAPHICS_CARD,
          configuration: defaultDemographicData,
        },
        {
          index: 1,
          type: CARD_TYPE_EXTRASLIDE_FINAL_CARD,
          configuration: undefined,
        },
      ]);
    });

    it('contain intro card in API conf and in params', () => {
      const extraSlidesConfig = {
        introCard: { enabled: true },
      };
      const introCardParam = true;
      const cards = helpers.buildCards(
        proposals,
        extraSlidesConfig,
        false,
        false,
        'standard',
        introCardParam,
        false,
        defaultDemographicData
      );

      expect(cards.length).toBe(3);
      expect(cards).toEqual([
        {
          index: 0,
          type: CARD_TYPE_EXTRASLIDE_INTRO,
          configuration: extraSlidesConfig.introCard,
        },
        {
          index: 1,
          type: CARD_TYPE_EXTRASLIDE_DEMOGRAPHICS_CARD,
          configuration: defaultDemographicData,
        },
        {
          index: 2,
          type: CARD_TYPE_EXTRASLIDE_FINAL_CARD,
          configuration: undefined,
        },
      ]);
    });

    it("doesn't contain push proposal card in API conf and in params", () => {
      const extraSlidesConfig = {
        pushProposalCard: { enabled: false },
      };
      const pushProposalParam = false;
      const hasProposed = false;
      const canPropose = true;
      const cards = helpers.buildCards(
        proposals,
        extraSlidesConfig,
        hasProposed,
        canPropose,
        'standard',
        false,
        pushProposalParam,
        defaultDemographicData
      );
      expect(cards.length).toBe(2);
      expect(cards).toEqual([
        {
          index: 0,
          type: CARD_TYPE_EXTRASLIDE_DEMOGRAPHICS_CARD,
          configuration: defaultDemographicData,
        },
        {
          index: 1,
          type: CARD_TYPE_EXTRASLIDE_FINAL_CARD,
          configuration: undefined,
        },
      ]);
    });

    it('contain push proposal in API conf but false in params', () => {
      const extraSlidesConfig = {
        pushProposalCard: { enabled: true },
      };
      const pushProposalParam = false;
      const hasProposed = false;
      const canPropose = true;
      const cards = helpers.buildCards(
        proposals,
        extraSlidesConfig,
        hasProposed,
        canPropose,
        'standard',
        false,
        pushProposalParam,
        defaultDemographicData
      );
      expect(cards.length).toBe(2);
      expect(cards).toEqual([
        {
          index: 0,
          type: CARD_TYPE_EXTRASLIDE_DEMOGRAPHICS_CARD,
          configuration: defaultDemographicData,
        },
        {
          index: 1,
          type: CARD_TYPE_EXTRASLIDE_FINAL_CARD,
          configuration: undefined,
        },
      ]);
    });

    it("doesn't contain push proposal in API conf but true in params", () => {
      const extraSlidesConfig = {
        pushProposalCard: { enabled: false },
      };
      const pushProposalParam = true;
      const hasProposed = false;
      const canPropose = true;
      const cards = helpers.buildCards(
        proposals,
        extraSlidesConfig,
        hasProposed,
        canPropose,
        'standard',
        false,
        pushProposalParam,
        defaultDemographicData
      );
      expect(cards.length).toBe(2);
      expect(cards).toEqual([
        {
          index: 0,
          type: CARD_TYPE_EXTRASLIDE_DEMOGRAPHICS_CARD,
          configuration: defaultDemographicData,
        },
        {
          index: 1,
          type: CARD_TYPE_EXTRASLIDE_FINAL_CARD,
          configuration: undefined,
        },
      ]);
    });

    it('contain push proposal in API conf and in params', () => {
      const extraSlidesConfig = {
        pushProposalCard: { enabled: true },
      };
      const pushProposalParam = true;
      const hasProposed = false;
      const canPropose = true;
      const cards = helpers.buildCards(
        proposals,
        extraSlidesConfig,
        hasProposed,
        canPropose,
        'standard',
        false,
        pushProposalParam,
        defaultDemographicData
      );

      expect(cards.length).toBe(3);
      expect(cards).toEqual([
        {
          index: 0,
          type: CARD_TYPE_EXTRASLIDE_PUSH_PROPOSAL,
          configuration: extraSlidesConfig.pushProposalCard,
        },
        {
          index: 1,
          type: CARD_TYPE_EXTRASLIDE_DEMOGRAPHICS_CARD,
          configuration: defaultDemographicData,
        },
        {
          index: 2,
          type: CARD_TYPE_EXTRASLIDE_FINAL_CARD,
          configuration: undefined,
        },
      ]);
    });

    it('contain push proposal but has already proposed', () => {
      const extraSlidesConfig = {
        pushProposalCard: { enabled: true },
      };
      const pushProposalParam = true;
      const hasProposed = true;
      const canPropose = true;
      const cards = helpers.buildCards(
        proposals,
        extraSlidesConfig,
        hasProposed,
        canPropose,
        'standard',
        false,
        pushProposalParam,
        defaultDemographicData
      );

      expect(cards.length).toBe(2);
      expect(cards).toEqual([
        {
          index: 0,
          type: CARD_TYPE_EXTRASLIDE_DEMOGRAPHICS_CARD,
          configuration: defaultDemographicData,
        },
        {
          index: 1,
          type: CARD_TYPE_EXTRASLIDE_FINAL_CARD,
          configuration: undefined,
        },
      ]);
    });

    it('contain push proposal but canPropose is disabled', () => {
      const extraSlidesConfig = {
        pushProposalCard: { enabled: true },
      };
      const pushProposalParam = true;
      const hasProposed = false;
      const canPropose = false;
      const cards = helpers.buildCards(
        proposals,
        extraSlidesConfig,
        hasProposed,
        canPropose,
        'standard',
        false,
        pushProposalParam,
        defaultDemographicData
      );

      expect(cards.length).toBe(2);
      expect(cards).toEqual([
        {
          index: 0,
          type: CARD_TYPE_EXTRASLIDE_DEMOGRAPHICS_CARD,
          configuration: defaultDemographicData,
        },
        {
          index: 1,
          type: CARD_TYPE_EXTRASLIDE_FINAL_CARD,
          configuration: undefined,
        },
      ]);
    });
  });

  describe('get sequence title by kind', () => {
    it('title from controversy kind', () => {
      const specialTitle =
        helpers.getSequenceTitleBySequenceKind(KIND_CONTROVERSY);
      expect(specialTitle).toEqual('sequence_zone.controversial_title');
    });

    it('title from consensus kind', () => {
      const specialTitle = helpers.getSequenceTitleBySequenceKind(KIND_POPULAR);
      expect(specialTitle).toEqual('sequence_zone.popular_title');
    });

    it('title from unknown kind', () => {
      const specialTitle = helpers.getSequenceTitleBySequenceKind('foo');
      expect(specialTitle).toEqual(null);
    });
  });
});
