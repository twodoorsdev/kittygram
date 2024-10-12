import { router } from 'expo-router';
import { useCallback } from 'react';
import { ImageSource } from '../../components/ImageSource';
import { useAppDispatch } from '../../store/overrides';
import { useUploadImageMutation } from '../../store/services/CatApi';
import { launchNativeCamera } from '../../store/thunks/launchNativeCamera';
import { requestCameraPermission } from '../../store/thunks/requestCameraPermission';

export const FromCamera = () => {
  const dispatch = useAppDispatch();
  const [uploadImageFn, { isLoading: isUpdating }] = useUploadImageMutation();
  const handleSelectAndUpload = useCallback(async () => {
    // @ts-expect-error Thunk does not need any parameters
    await dispatch(requestCameraPermission());
    // @ts-expect-error Thunk does not need any parameters
    const response = await dispatch(launchNativeCamera()).unwrap();

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
      icon="camera"
      label="From Camera"
      onPress={handleSelectAndUpload}
    />
  );
};
