import Toast from 'react-native-toast-message';
import { createAppAsyncThunk } from '../overrides';

type ShowToastOptions = {
  title: string;
  message: string;
};

export const showToast = createAppAsyncThunk(
  'app/showToast',
  async ({ title, message }: ShowToastOptions) => {
    Toast.show({
      topOffset: 60,
      type: 'success',
      text1: title,
      text2: message,
    });
  }
);
