import React from 'react';
import { i18n } from 'Shared/i18n';
import { type QuestionConfiguration } from 'Shared/types/sequence';
import { MetaTags } from 'Client/app/MetaTags';
import { IntroBanner } from 'Client/features/consultation/IntroBanner';
import { SidebarTile } from 'Client/ui/Elements/SidebarTile';
import { Presentation } from 'Client/features/consultation/Presentation';
import { Sharing } from 'Client/features/sharing';
import {
  ConsultationPageWrapperStyle,
  ConsultationPageContentStyle,
  ConsultationPageSidebarStyle,
} from './Styled';

type Props = {
  questionConfiguration: QuestionConfiguration,
};

export const ConsultationPageComponent = (props: Props) => {
  const { questionConfiguration } = props;

  if (!questionConfiguration) {
    return null;
  }

  const { metas } = questionConfiguration.wording;

  return (
    <React.Fragment aria-describedby="presentation_text">
      <MetaTags
        title={metas.title}
        description={metas.description}
        picture={metas.picture}
      />
      <IntroBanner />
      <ConsultationPageWrapperStyle>
        <ConsultationPageContentStyle>
          left content
        </ConsultationPageContentStyle>
        <ConsultationPageSidebarStyle as="aside">
          <SidebarTile title={i18n.t('consultation.presentation.title')}>
            <Presentation />
          </SidebarTile>
          <SidebarTile title={i18n.t('consultation.sharing.title')}>
            <Sharing />
          </SidebarTile>
        </ConsultationPageSidebarStyle>
      </ConsultationPageWrapperStyle>
    </React.Fragment>
  );
};
