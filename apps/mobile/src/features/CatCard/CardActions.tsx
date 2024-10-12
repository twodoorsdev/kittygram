import { useCallback, useMemo } from 'react';
import { Text, View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import {
  useDownvoteImageMutation,
  useUpvoteImageMutation,
} from '../../store/services/CatApi';
import { CardProps } from './shared';
import { VoteButton } from './VoteButton';

export const UpvoteButton = ({ item }: CardProps) => {
  const [upvoteMutationFn, { data, error, isLoading }] =
    useUpvoteImageMutation();

  const handlePress = useCallback(() => {
    upvoteMutationFn(item.id);
  }, [item.id, upvoteMutationFn]);

  return (
    <VoteButton
      iconProps={{ name: 'thumbs-o-up', size: 24, color: 'green' }}
      onPress={handlePress}
    />
  );
};

export const DownvoteButton = ({ item }: CardProps) => {
  const [downvoteMutationFn, { data, error, isLoading }] =
    useDownvoteImageMutation();

  const handlePress = useCallback(() => {
    downvoteMutationFn(item.id);
  }, [item.id, downvoteMutationFn]);
  return (
    <VoteButton
      iconProps={{ name: 'thumbs-o-down', size: 24, color: 'red' }}
      onPress={handlePress}
    />
  );
};

export const CardActions = ({ item }: CardProps) => {
  const { styles } = useStyles(stylesheet);

  const score = useMemo(() => {
    const votes = item.votes || [];
    const scoreInteger = votes.reduce((acc, curr) => acc + curr.value, 0);

    const scorePrefix =
      scoreInteger === 0 ? '🐱' : scoreInteger > 0 ? '😼' : '😾';
    return `${scorePrefix} ${scoreInteger}`;
  }, [item.votes]);

  return (
    <View style={styles.voteActions}>
      <Text style={styles.voteCount}>{score}</Text>
      <UpvoteButton item={item} />
      <DownvoteButton item={item} />
    </View>
  );
};

const stylesheet = createStyleSheet({
  voteActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  voteCount: {
    alignSelf: 'center',
    fontSize: 20,
  },
});
