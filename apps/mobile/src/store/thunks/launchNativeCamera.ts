import * as ImagePicker from 'expo-image-picker';

import { createAppAsyncThunk } from '../overrides';

export const launchNativeCamera = createAppAsyncThunk(
  'photos/launchNativeCamera',
  async () => {
    return ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      // allowsEditing: true,
      // aspect: [4, 3],/
      // quality: 1,
    });
  }
);
