import * as ImagePicker from 'expo-image-picker';

import { createAppAsyncThunk } from '../overrides';

export const getPhotoLibrary = createAppAsyncThunk(
  'photos/getLibrary',
  async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      // allowsEditing: true,
      // aspect: [4, 3],/
      // quality: 1,
    });

    return result;
  }
);
