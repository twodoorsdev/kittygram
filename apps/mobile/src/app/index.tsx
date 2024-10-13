import { useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { match, P } from 'ts-pattern';

import { UploadButton } from '../components/UploadButton';
import { ImageList } from '../features/HomePage/ImageList';
import { NoImagesFound } from '../features/HomePage/NoImagesFound';
import { UploadImageSheet } from '../features/UploadImageModal/UploadImageSheet';
import {
  useGetMyFavouritesQuery,
  useGetMyImagesQuery,
  useGetMyVotesQuery,
} from '../store/services/CatApi';

const Home = () => {
  const { styles } = useStyles(stylesheet);
  const { data: images = [], isLoading: isImagesLoading } = useGetMyImagesQuery(
    {}
  );
  const { isLoading: isFavouritesLoading } = useGetMyFavouritesQuery();
  const { isLoading: isVotesLoading } = useGetMyVotesQuery();

  const isLoading = isImagesLoading || isFavouritesLoading || isVotesLoading;

  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  return (
    <GestureHandlerRootView style={styles.container}>
      {match({ isLoading, images })
        .with({ isLoading: true, images: P.any }, () => (
          <ActivityIndicator size="large" color="blue" />
        ))
        .with({ isLoading: false, images: [] }, () => <NoImagesFound />)
        .with({ isLoading: false, images: [P.any, ...P.array()] }, () => (
          <ImageList />
        ))
        .exhaustive()}
      <View style={styles.overlay}>
        <UploadButton
          onPress={() => {
            setIsBottomSheetOpen(true);
          }}
        />
      </View>
      <UploadImageSheet
        open={isBottomSheetOpen}
        onClose={() => {
          setIsBottomSheetOpen(false);
        }}
      />
    </GestureHandlerRootView>
  );
};

const stylesheet = createStyleSheet((theme, runtime) => ({
  container: {
    flex: 1,
    padding: 16,
  },
  overlay: {
    position: 'absolute',
    height: '10%',
    left: 0,
    right: 0,
    bottom: runtime.insets.bottom,
  },
}));

export default Home;
