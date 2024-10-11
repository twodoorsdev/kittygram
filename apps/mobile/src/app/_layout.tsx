import { Stack } from 'expo-router/stack';
import { Provider } from 'react-redux';
import { store } from '../store/store';

const NavigationLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="(home)" options={{ headerShown: false }} />
      <Stack.Screen
        name="modal"
        options={{ headerShown: false, presentation: 'modal' }}
      />
    </Stack>
  );
};

const ProviderLayout = () => {
  return (
    <Provider store={store}>
      <NavigationLayout />
    </Provider>
  );
};

const Layout = () => {
  return <ProviderLayout />;
};

export default Layout;
