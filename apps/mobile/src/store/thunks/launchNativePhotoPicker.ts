import * as ImagePicker from 'expo-image-picker';

import { createAppAsyncThunk } from '../overrides';
import { requestPhotoLibraryPermission } from './requestPhotoLibraryPermission';

export const launchNativePhotoPicker = createAppAsyncThunk(
  'photos/launchNativePhotoPicker',
  async (_, { dispatch }) => {
    // @ts-expect-error Thunk does not need any parameters
    await dispatch(requestPhotoLibraryPermission());

    return ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      // allowsEditing: true,
      // aspect: [4, 3],/
      // quality: 1,
    });
  }
);
