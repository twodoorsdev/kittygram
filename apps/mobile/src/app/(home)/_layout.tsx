import { Tabs } from 'expo-router';

import { UploadButton } from '../../components/UploadButton';

const TabLayout = () => {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
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
