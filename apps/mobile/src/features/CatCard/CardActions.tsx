import { useMemo } from 'react';
import { View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { match, P } from 'ts-pattern';

import { Text } from '../../components/Text';
import { DownvoteButton } from './DownvoteButton';
import { CardProps } from './shared';
import { UpvoteButton } from './UpvoteButton';

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

const stylesheet = createStyleSheet((theme) => ({
  root: {},
  inner: {
    backgroundColor: theme.colors.background.translucent,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomLeftRadius: theme.radii.$3,
    borderBottomRightRadius: theme.radii.$3,
  },
  voteCount: {
    alignSelf: 'center',
    fontSize: theme.fontSizes.$3,
  },
}));
