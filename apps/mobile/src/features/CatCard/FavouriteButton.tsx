import { useCallback } from 'react';
import { IconButton } from '../../components/IconButton';
import {
  useFavouriteImageMutation,
  useUnfavouriteImageMutation,
} from '../../store/services/CatApi';
import { CardProps } from './shared';

export const FavouriteButton = ({ item }: CardProps) => {
  const [favouriteMutationFn, { isLoading: isFavouriteLoading }] =
    useFavouriteImageMutation();
  const [unfavouriteMutationFn, { isLoading: isUnfavouriteLoading }] =
    useUnfavouriteImageMutation();
  const handleFavourite = useCallback(() => {
    item.favourite
      ? unfavouriteMutationFn(item.favourite.id)
      : favouriteMutationFn(item.id);
  }, [favouriteMutationFn, item, unfavouriteMutationFn]);

  const isLoading = isFavouriteLoading || isUnfavouriteLoading;

  return (
    <IconButton
      rounded
      disabled={isLoading}
      iconProps={{
        name: item.favourite ? 'heart-fill' : 'heart',
        size: 24,
        color: 'red',
      }}
      onPress={handleFavourite}
    />
  );
};
