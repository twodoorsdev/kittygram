import { useFocusEffect } from 'expo-router';
import { useCallback, useMemo } from 'react';
import { View, Text, FlatList } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { useSelector } from 'react-redux';

import { Card } from '../../components/Card';
import { getEnhancedImageList } from '../../store/selectors/getEnhancedImageList';

import {
  ApiFavourite,
  ApiImage,
  ApiVote,
  useGetMyFavouritesQuery,
  useGetMyImagesQuery,
  useGetMyVotesQuery,
} from '../../store/services/CatApi';

const NoImagesFound = () => {
  const { styles } = useStyles(stylesheet);
  return (
    <View style={styles.emptyListContainer}>
      <View>
        <Text>No images found</Text>
      </View>
      <Text>Imagine a vertical arrow pointing towards the + button</Text>
    </View>
  );
};

export type ImageListProps = {
  favourites: ApiFavourite[];
  images: ApiImage[];
  votes: ApiVote[];
};

const ImageList = ({ favourites, images, votes }: ImageListProps) => {
  const { styles } = useStyles(stylesheet);
  const memoizedImages = useSelector(getEnhancedImageList);

  return (
    <View style={styles.listContainer}>
      <GestureHandlerRootView>
        <FlatList
          // style={styles.list}
          contentContainerStyle={styles.list}
          data={memoizedImages}
          renderItem={({ item }) => <Card item={item} />}
          keyExtractor={(item) => item.id}
        />
      </GestureHandlerRootView>
    </View>
  );
};

const Home = () => {
  const { styles } = useStyles(stylesheet);
  const { data: images = [], refetch: refetchImages } = useGetMyImagesQuery({});
  const { data: favourites = [], refetch: refetchFavourites } =
    useGetMyFavouritesQuery();
  const { data: votes = [], refetch: refetchVotes } = useGetMyVotesQuery();

  // console.log({ favourites, images, votes });
  // console.log({ favourites });

  // Ensures that images and votes are refreshed when the screen is focused
  // useFocusEffect(
  //   useCallback(() => {
  //     refetchImages();
  //     refetchFavourites();
  //     refetchVotes();
  //   }, [refetchFavourites, refetchImages, refetchVotes])
  // );

  return (
    <View style={styles.container}>
      {images.length === 0 ? (
        <NoImagesFound />
      ) : (
        <ImageList favourites={favourites} images={images} votes={votes} />
      )}
    </View>
  );
};

const stylesheet = createStyleSheet({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  emptyListContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContainer: {
    // flex: 1,
    // backgroundColor: 'blue',
    width: '100%',
    height: '100%',
  },
  list: {
    // rowGap: 10,
    // flex: 1,
    // width: '100%',
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 5,
  },
});

export default Home;
