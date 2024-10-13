import { View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { DeleteButton } from './DeleteButton';
import { FavouriteButton } from './FavouriteButton';
import { CardProps } from './shared';

export const ImageOverlay = ({ item }: CardProps) => {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.root}>
      <FavouriteButton item={item} />
      <DeleteButton item={item} />
    </View>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  root: {
    position: 'absolute',
    right: 0,
  },
}));
