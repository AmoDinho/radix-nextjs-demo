import React from 'react';
import * as RadixTabs from '@radix-ui/react-tabs';

const Tabs = ({ tabPayload }) => {
  return (
    <RadixTabs.Root defaultValue={tabPayload[0].keyName}>
      <RadixTabs.List>
        {tabPayload.map((tabItem, tabIndex) => (
          <div key={tabIndex}>
            <RadixTabs.Trigger value={tabItem.keyName}>
              {tabItem.headingText}
            </RadixTabs.Trigger>
          </div>
        ))}
      </RadixTabs.List>
      {tabPayload.map((tabItem, tabIndex) => (
        <div key={tabIndex}>
          <RadixTabs.Content value={tabItem.keyName}>
            <p style={{ color: 'white' }}>{tabItem.content}</p>
          </RadixTabs.Content>
        </div>
      ))}
    </RadixTabs.Root>
  );
};
export default Tabs;
