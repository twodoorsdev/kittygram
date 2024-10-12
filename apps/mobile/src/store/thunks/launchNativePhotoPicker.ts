import * as ImagePicker from 'expo-image-picker';

import { createAppAsyncThunk } from '../overrides';

export const launchNativePhotoPicker = createAppAsyncThunk(
  'photos/launchNativePhotoPicker',
  async () => {
    return ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      // allowsEditing: true,
      // aspect: [4, 3],/
      // quality: 1,
    });
  }
);
