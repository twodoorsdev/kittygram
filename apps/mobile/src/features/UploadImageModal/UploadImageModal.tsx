import { router } from 'expo-router';
import { useCallback } from 'react';
import { Text, View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { ImageSource } from '../../components/ImageSource';
import { useAppDispatch } from '../../store/overrides';
import { useUploadImageMutation } from '../../store/services/CatApi';
import { getPhotoLibrary } from '../../store/thunks/getPhotoLibrary';

const FromCamera = () => {
  return <ImageSource icon="camera" label="From Camera" />;
};

const FromLibrary = () => {
  const dispatch = useAppDispatch();
  const [uploadImageFn, { isLoading: isUpdating }] = useUploadImageMutation();
  const handleSelectAndUpload = useCallback(async () => {
    const response = await dispatch(getPhotoLibrary()).unwrap();

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

export const UploadImageModal = () => {
  const { styles } = useStyles(stylesheet);
  return (
    <View style={styles.root}>
      <View style={styles.title}>
        <Text style={styles.contentTitle}>Hi 👋!</Text>
        <Text>Hello from Overlay!</Text>
      </View>
      <View style={styles.content}>
        <FromCamera />
        <FromLibrary />
      </View>
    </View>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  root: {
    height: '100%',
    backgroundColor: 'white',
    padding: 22,
    borderTopRightRadius: 17,
    borderTopLeftRadius: 17,
  },
  title: {},
  content: {
    flex: 1,
    rowGap: 8,
  },
  contentTitle: {
    fontSize: 20,
    marginBottom: 12,
  },
  image: {
    // flex: 1,
    width: '100%',
    height: 200,
    backgroundColor: 'red',
  },
}));
