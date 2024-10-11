import { ImagePickerAsset } from 'expo-image-picker';
import { router } from 'expo-router';
import { useCallback, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { Image } from '../components/Image';
import { useAppDispatch } from '../store/overrides';
import { getPhotoLibrary } from '../store/thunks/getPhotoLibrary';
import { requestPhotoLibraryPermission } from '../store/thunks/requestPhotoLibraryPermission';

const Modal = () => {
  const { styles } = useStyles(stylesheet);
  const dispatch = useAppDispatch();

  const [selectedImage, setSelectedImage] = useState<ImagePickerAsset>();

  const handleSelectImage = useCallback(() => {
    dispatch(getPhotoLibrary())
      .unwrap()
      .then((r) => {
        if (Array.isArray(r.assets)) {
          setSelectedImage(r.assets[0]);
        }
      });
  }, [dispatch]);

  console.log({ selectedImage });

  return (
    <View style={styles.content}>
      <Text style={styles.contentTitle}>Hi 👋!</Text>
      <Text>Hello from Overlay!</Text>

      <Pressable onPress={() => dispatch(requestPhotoLibraryPermission())}>
        <Text>Get permission to photo library</Text>
      </Pressable>

      <Pressable onPress={handleSelectImage}>
        <Text>Get photo library</Text>
      </Pressable>

      <Pressable onPress={() => router.back()}>
        <Text>Close</Text>
      </Pressable>

      {selectedImage ? (
        <Image
          style={styles.image}
          source={selectedImage.uri}
          // source="https://picsum.photos/seed/696/3000/2000"
          // placeholder={{ blurhash }}
        />
      ) : null}
    </View>
  );
};

const stylesheet = createStyleSheet({
  content: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 17,
    borderTopLeftRadius: 17,
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
});

export default Modal;
