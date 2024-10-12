import { Tabs } from 'expo-router';

import { UploadButton } from '../../components/UploadButton';

const TabLayout = () => {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      {/* This route is a dummy route and can't be navigated to. We only do */}
      {/* this so we can render the "big" button */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'KittyGram',
          tabBarButton: () => <UploadButton />,
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
