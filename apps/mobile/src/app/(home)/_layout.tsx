import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { UploadButton } from '../../components/UploadButton';

const TabLayout = () => {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />
      {/* This route is a dummy route and can't be navigated to. We only do */}
      {/* this so we can render the "big" button */}
      <Tabs.Screen
        name="upload"
        options={{
          title: 'Upload',
          tabBarButton: () => <UploadButton />,
        }}
      />
      <Tabs.Screen
        name="leaderboard"
        options={{
          title: 'Leaderboard',
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="trophy" color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
