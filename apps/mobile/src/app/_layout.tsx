import { Stack } from 'expo-router/stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';
import { Provider } from 'react-redux';
import { CustomToast } from '../components/CustomToast';
import { store } from '../store/store';

const toastConfig = {
  success: CustomToast,
  error: CustomToast,
};

const NavigationLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'KittyGram' }} />
    </Stack>
  );
};

const ProviderLayout = () => {
  return (
    <GestureHandlerRootView>
      <Provider store={store}>
        <NavigationLayout />
        <Toast config={toastConfig} />
        {/*<Toast />*/}
      </Provider>
    </GestureHandlerRootView>
  );
};

const Layout = () => {
  return <ProviderLayout />;
};

export default Layout;
