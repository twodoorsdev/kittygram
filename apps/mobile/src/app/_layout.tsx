import { Stack } from 'expo-router/stack';
import { Provider } from 'react-redux';
import { store } from '../store/store';

const NavigationLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'KittyGram' }} />
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
