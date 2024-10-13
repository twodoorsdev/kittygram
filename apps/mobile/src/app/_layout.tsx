import { Stack } from 'expo-router/stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { Provider } from 'react-redux';
import { CustomToast } from '../components/CustomToast';
import { store } from '../store/store';

const toastConfig = {
  success: CustomToast,
  error: CustomToast,
};

const NavigationLayout = () => {
  const { styles } = useStyles(stylesheet);
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerStyle: styles.header, title: 'KittyGram' }}
      />
    </Stack>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  header: { backgroundColor: theme.colors.background.$3 },
}));

const ProviderLayout = () => {
  return (
    <GestureHandlerRootView>
      <Provider store={store}>
        <NavigationLayout />
        <Toast config={toastConfig} />
      </Provider>
    </GestureHandlerRootView>
  );
};

const Layout = () => {
  return <ProviderLayout />;
};

export default Layout;
