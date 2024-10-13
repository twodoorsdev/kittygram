import { useCallback } from 'react';
import { IconButton } from '../../components/IconButton';
import { useDownvoteImageMutation } from '../../store/services/CatApi';
import { CardProps } from './shared';

export const DownvoteButton = ({ item }: CardProps) => {
  const [downvoteMutationFn, { isLoading }] = useDownvoteImageMutation();

  const handlePress = useCallback(() => {
    downvoteMutationFn(item.id);
  }, [item.id, downvoteMutationFn]);
  return (
    <IconButton
      disabled={isLoading}
      iconProps={{ name: 'thumbsdown', size: 24, color: 'red' }}
      onPress={handlePress}
    />
  );
};
