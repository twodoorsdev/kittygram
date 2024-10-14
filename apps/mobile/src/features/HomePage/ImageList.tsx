import { View } from 'react-native';
import Animated, { LinearTransition } from 'react-native-reanimated';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { CatCard } from '../CatCard/CatCard';
import { useAppSelector } from '../../store/overrides';
import { getEnhancedImageList } from '../../store/selectors/getEnhancedImageList';

export const ImageList = () => {
  const { styles } = useStyles(stylesheet);
  const memoizedImages = useAppSelector(getEnhancedImageList);

  return (
    <View style={styles.root}>
      <Animated.FlatList
        testID={`List<CatCard>`}
        // style={styles.list}
        itemLayoutAnimation={LinearTransition}
        contentContainerStyle={styles.list}
        data={memoizedImages}
        renderItem={({ item }) => <CatCard item={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  root: {
    width: theme.space.full,
    height: theme.space.full,
  },
  list: {
    rowGap: theme.space.$2,
  },
}));
