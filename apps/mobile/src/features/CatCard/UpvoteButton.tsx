import { useCallback } from 'react';
import { IconButton } from '../../components/IconButton';
import { useUpvoteImageMutation } from '../../store/services/CatApi';
import { CardProps } from './shared';

export const UpvoteButton = ({ item }: CardProps) => {
  const [upvoteMutationFn, { data, error, isLoading }] =
    useUpvoteImageMutation();

  const handlePress = useCallback(() => {
    upvoteMutationFn(item.id);
  }, [item.id, upvoteMutationFn]);

  return (
    <IconButton
      iconProps={{ name: 'thumbsup', size: 24, color: 'green' }}
      onPress={handlePress}
    />
  );
};
