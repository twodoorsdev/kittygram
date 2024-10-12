import { FontAwesome5 } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useCallback } from 'react';
import { Pressable, View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import {
  useDeleteImageMutation,
  useFavouriteImageMutation,
  useUnfavouriteImageMutation,
} from '../../store/services/CatApi';
import { CardProps } from './shared';

export const ImageOverlay = ({ item }: CardProps) => {
  const { styles } = useStyles(stylesheet);

  const [favouriteMutationFn] = useFavouriteImageMutation();
  const [unfavouriteMutationFn] = useUnfavouriteImageMutation();

  const [deleteMutationFn, { isLoading, data, error }] =
    useDeleteImageMutation();

  const handleFavourite = useCallback(() => {
    item.favourite
      ? unfavouriteMutationFn(item.favourite.id)
      : favouriteMutationFn(item.id);
  }, [favouriteMutationFn, item, unfavouriteMutationFn]);

  const handleDelete = useCallback(() => {
    deleteMutationFn(item.id);
  }, [deleteMutationFn, item.id]);

  return (
    <View style={styles.root}>
      <Pressable
        style={styles.favorite}
        // onPress={() => setIsFavorited((prevState) => !prevState)}
        onPress={handleFavourite}
      >
        <FontAwesome
          name={item.favourite ? 'heart' : 'heart-o'}
          size={24}
          color="red"
        />
      </Pressable>
      <Pressable
        style={styles.favorite}
        // onPress={() => setIsFavorited((prevState) => !prevState)}
        onPress={handleDelete}
      >
        <FontAwesome5 name="trash" size={24} color="black" />
      </Pressable>
    </View>
  );
};

const stylesheet = createStyleSheet({
  root: {
    position: 'absolute',
    right: 0,
  },
  favorite: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    opacity: 0.5,
    borderRadius: 100,
    margin: 8,
    padding: 16,
    flex: 1,
  },
});
