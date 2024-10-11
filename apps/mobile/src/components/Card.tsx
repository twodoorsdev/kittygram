import FontAwesome from '@expo/vector-icons/FontAwesome';

import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { Image } from './Image';

import { ApiImage } from '../fixtures/images';

export type CardProps = {
  item: ApiImage;
};

export const Card = ({ item }: CardProps) => {
  const { styles } = useStyles(stylesheet);
  const [isFavorited, setIsFavorited] = useState(false);

  return (
    <View style={styles.card}>
      {/*<Text>Card</Text>*/}
      <Image
        style={styles.image}
        source={item.url}
        // source="https://picsum.photos/seed/696/3000/2000"
        // placeholder={{ blurhash }}
      />
      <View style={styles.overlay}>
        <Pressable
          style={styles.favorite}
          onPress={() => setIsFavorited((prevState) => !prevState)}
        >
          <FontAwesome
            name={isFavorited ? 'heart' : 'heart-o'}
            size={24}
            color="black"
          />
        </Pressable>
      </View>
    </View>
  );
};

const stylesheet = createStyleSheet({
  card: {
    // border: 1,
    // borderColor: 'black',
    width: '100%',
    // flex: 1,
    // backgroundColor: 'red',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  overlay: {
    position: 'absolute',
    right: 0,
  },
  favorite: {
    // position: 'absolute',
    // right: 0,
    padding: 16,
    flex: 1,
    // height: '100%',
    // width: '100%',
    // backgroundColor: 'blue',
  },
  image: {
    // flex: 1,
    width: '100%',
    height: 200,
    backgroundColor: 'red',
  },
});
