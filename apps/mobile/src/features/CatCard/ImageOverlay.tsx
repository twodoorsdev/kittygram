import { FontAwesome5 } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useCallback } from 'react';
import { Alert, Pressable, View } from 'react-native';
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
    Alert.alert('Delete', 'Are you sure you want to delete this image?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Delete',
        onPress: () => deleteMutationFn(item.id),
      },
    ]);
  }, [deleteMutationFn, item.id]);

  return (
    <View style={styles.root}>
      <Pressable style={styles.favorite} onPress={handleFavourite}>
        <FontAwesome
          name={item.favourite ? 'heart' : 'heart-o'}
          size={24}
          color="red"
        />
      </Pressable>
      <Pressable style={styles.favorite} onPress={handleDelete}>
        <FontAwesome5 name="trash" size={24} color="black" />
      </Pressable>
    </View>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  root: {
    position: 'absolute',
    right: 0,
  },
  favorite: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.background.translucent,
    borderRadius: theme.radii.circle,
    margin: theme.space.$1,
    padding: theme.space.$2,
  },
}));
