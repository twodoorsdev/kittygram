import { FlatList, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { useSelector } from 'react-redux';

import { Card } from '../../components/Card';
import { getEnhancedImageList } from '../../store/selectors/getEnhancedImageList';
import { useGetMyFavouritesQuery } from '../../store/services/CatApi';

export const ImageList = () => {
  const { styles } = useStyles(stylesheet);
  const memoizedImages = useSelector(getEnhancedImageList);
  // const [queryFn, { isLoading, data, error }] = useLazyGetMyFavouritesQuery();

  const { data: favourites = [], refetch: refetchFavourites } =
    useGetMyFavouritesQuery();

  return (
    <View style={styles.root}>
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

const stylesheet = createStyleSheet((theme) => ({
  root: {
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
}));
