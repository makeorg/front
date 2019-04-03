import React from 'react';
import { TabPanel } from 'react-tabs';
import { type TabsContent } from 'Shared/types/tabs';
import {
  TabListStyle,
  TabStyle,
  TabsWrapperStyle,
} from 'Client/ui/Elements/Tabs';

type Props = {
  tabsContent: TabsContent[],
  selectedTab?: number,
};

export const TabsComponent = (props: Props) => {
  const { tabsContent, selectedTab } = props;
  return (
    <TabsWrapperStyle defaultIndex={selectedTab}>
      <TabListStyle>
        {tabsContent.map(content => (
          <TabStyle key={content.tab} disabled={content.isDisabled}>
            {content.tab}
          </TabStyle>
        ))}
      </TabListStyle>
      {tabsContent.map(content => (
        <TabPanel key={content.tab}>{content.panel}</TabPanel>
      ))}
    </TabsWrapperStyle>
  );
};
