// @flow
import React, { useRef } from 'react';
import { i18n } from 'Shared/i18n';
import { type ProposalType } from 'Shared/types/proposal';
import { type SliderParamsType } from 'Shared/types/views';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import { ProposalCardWithQuestion } from 'Client/features/proposal/ProposalCardWithQuestion';
import { useSlider } from 'Client/hooks/useSlider';
import { GliderStylesheet } from 'Client/app/assets/css-in-js/GliderStyle';
import {
  ProposalsSliderWrapperStyle,
  ProposalsSliderListStyle,
  ProposalsSliderListItemStyle,
} from './style';

type PopularProposalsProps = {
  proposals: ProposalType[],
  sliderName: string,
};

const sliderParams: SliderParamsType = {
  slidesToShow: 1.15,
  responsive: [
    {
      breakpoint: Breakpoints.Tablet,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
  interactiveChildren: {
    links: true,
    buttons: true,
  },
};

export const ProposalsShowcase = ({
  proposals,
  sliderName,
}: PopularProposalsProps) => {
  const sliderRef = useRef();
  const hasProposals = proposals.length > 0;

  useSlider(sliderRef, sliderParams, hasProposals);

  if (!hasProposals) {
    return null;
  }

  return (
    <>
      <ScreenReaderItemStyle>
        {i18n.t('common.slider.introduction')}
      </ScreenReaderItemStyle>
      <GliderStylesheet />

      <ProposalsSliderWrapperStyle className={`${sliderName} glider-contain`}>
        <div className={`${sliderName} glider`} ref={sliderRef}>
          <ProposalsSliderListStyle className={`${sliderName} glider-track`}>
            {proposals.map((proposal, index) => (
              <ProposalsSliderListItemStyle
                key={proposal.id}
                className={sliderName}
              >
                <ProposalCardWithQuestion
                  proposal={proposal}
                  position={index + 1}
                  size={2}
                  withOrganisations
                  withMobileRadius
                />
              </ProposalsSliderListItemStyle>
            ))}
          </ProposalsSliderListStyle>
        </div>
      </ProposalsSliderWrapperStyle>
    </>
  );
};
