import { useCallback } from 'react';
import { Alert } from 'react-native';
import { IconButton } from '../../components/IconButton';
import { useDeleteImageMutation } from '../../store/services/CatApi';
import { CardProps } from './shared';

export const DeleteButton = ({ item }: CardProps) => {
  const [deleteMutationFn, { isLoading }] = useDeleteImageMutation();

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
    <IconButton
      rounded
      disabled={isLoading}
      iconProps={{ name: 'trash', size: 24 }}
      onPress={handleDelete}
    />
  );
};
