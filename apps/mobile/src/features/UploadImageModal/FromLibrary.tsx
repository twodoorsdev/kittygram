import { router } from 'expo-router';
import { useCallback } from 'react';

import { ImageSource } from '../../components/ImageSource';
import { useAppDispatch } from '../../store/overrides';
import { useUploadImageMutation } from '../../store/services/CatApi';
import { launchNativePhotoPicker } from '../../store/thunks/launchNativePhotoPicker';
import { requestPhotoLibraryPermission } from '../../store/thunks/requestPhotoLibraryPermission';

export const FromLibrary = () => {
  const dispatch = useAppDispatch();
  const [uploadImageFn, { isLoading: isUpdating }] = useUploadImageMutation();
  const handleSelectAndUpload = useCallback(async () => {
    await dispatch(requestPhotoLibraryPermission());
    const response = await dispatch(launchNativePhotoPicker()).unwrap();

    if (!Array.isArray(response.assets)) {
      // @TODO Handle this better
      throw new Error('No images found');
    }

    if (response.assets.length > 1) {
      // @TODO Handle this better
      throw new Error('More than one image found');
    }

    const [firstImage] = response.assets;

    await uploadImageFn(firstImage).unwrap();
    router.back();
  }, [dispatch, uploadImageFn]);

  return (
    <ImageSource
      icon="images"
      label="From Photos"
      onPress={handleSelectAndUpload}
    />
  );
};
