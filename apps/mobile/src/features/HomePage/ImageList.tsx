import { FlatList, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { CatCard } from '../CatCard/CatCard';
import { useAppSelector } from '../../store/overrides';
import { getEnhancedImageList } from '../../store/selectors/getEnhancedImageList';

export const ImageList = () => {
  const { styles } = useStyles(stylesheet);
  const memoizedImages = useAppSelector(getEnhancedImageList);

  return (
    <View style={styles.root}>
      <GestureHandlerRootView>
        <FlatList
          // style={styles.list}
          contentContainerStyle={styles.list}
          data={memoizedImages}
          renderItem={({ item }) => <CatCard item={item} />}
          keyExtractor={(item) => item.id}
        />
      </GestureHandlerRootView>
    </View>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  root: {
    width: '100%',
    height: '100%',
  },
  list: {},
}));
