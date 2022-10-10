import React from 'react';
import * as RadixTabs from '@radix-ui/react-tabs';

const Tabs = ({}) => {
  return (
    <RadixTabs.Root defaultValue="sign">
      <RadixTabs.List>
        <RadixTabs.Trigger value="signin">Signin</RadixTabs.Trigger>
        <RadixTabs.Trigger value="signup">Signup</RadixTabs.Trigger>
      </RadixTabs.List>
    </RadixTabs.Root>
  );
};
export default Tabs;
