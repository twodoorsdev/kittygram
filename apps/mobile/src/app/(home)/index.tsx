import { ActivityIndicator, View } from 'react-native';
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
  const { data: images = [], isLoading: isImagesLoading } = useGetMyImagesQuery(
    {}
  );
  const { isLoading: isFavouritesLoading } = useGetMyFavouritesQuery();
  const { isLoading: isVotesLoading } = useGetMyVotesQuery();

  const isLoading = isImagesLoading || isFavouritesLoading || isVotesLoading;

  return (
    <View style={styles.container}>
      {isLoading && <ActivityIndicator size="large" color="blue" />}
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
