import { View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { ImageList } from '../../features/HomePage/ImageList';
import { NoImagesFound } from '../../features/HomePage/NoImagesFound';

import {
  useGetMyFavouritesQuery,
  useGetMyImagesQuery,
  useGetMyVotesQuery,
} from '../../store/services/CatApi';

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
      {images.length === 0 ? <NoImagesFound /> : <ImageList />}
    </View>
  );
};

const stylesheet = createStyleSheet({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 5,
  },
});

export default Home;
