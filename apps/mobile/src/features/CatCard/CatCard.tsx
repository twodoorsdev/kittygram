import { View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { CardActions } from './CardActions';
import { ImageOverlay } from './ImageOverlay';
import { CardProps } from './shared';
import { Image } from '../../components/Image';

export const CatCard = ({ item }: CardProps) => {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.root}>
      <Image style={styles.image} source={item.url} />
      <ImageOverlay item={item} />

      <CardActions item={item} />
    </View>
  );
};

const stylesheet = createStyleSheet({
  root: {
    width: '100%',
  },
  image: {
    width: '100%',
    height: 200,
    backgroundColor: 'white',
  },
});
