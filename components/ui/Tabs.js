import React from 'react';
import * as RadixTabs from '@radix-ui/react-tabs';

const Tabs = ({ tabPayload }) => {
  return (
    <RadixTabs.Root defaultValue="sign">
      <RadixTabs.List>
        {tabPayload.map((tabItem, tabIndex) => (
          <div key={tabIndex}>
            <RadixTabs.Trigger value={tabItem.keyName}>
              {tabItem.headingText}
            </RadixTabs.Trigger>
          </div>
        ))}
      </RadixTabs.List>
    </RadixTabs.Root>
  );
};
export default Tabs;
