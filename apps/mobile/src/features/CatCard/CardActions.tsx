import { useCallback, useMemo } from 'react';
import { Text, View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { match, P } from 'ts-pattern';
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

    const scorePrefix = match(scoreInteger)
      .with(P.number.positive(), () => '😼')
      .with(P.number.negative(), () => '😾')
      .otherwise(() => '🐱');
    return `${scorePrefix} ${scoreInteger}`;
  }, [item.votes]);

  return (
    <View style={styles.root}>
      <View style={styles.inner}>
        <UpvoteButton item={item} />
        <Text style={styles.voteCount}>{score}</Text>
        <DownvoteButton item={item} />
      </View>
    </View>
  );
};

const stylesheet = createStyleSheet({
  root: {},
  inner: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  voteCount: {
    alignSelf: 'center',
    fontSize: 20,
  },
});
