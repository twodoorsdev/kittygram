import { FontAwesome5 } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useCallback, useMemo, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import {
  ApiFavourite,
  ApiImage,
  ApiVote,
  useDeleteImageMutation,
  useDownvoteImageMutation,
  useFavouriteImageMutation,
  useUnfavouriteImageMutation,
  useUpvoteImageMutation,
} from '../store/services/CatApi';
import { Image } from './Image';

export type CardProps = {
  item: ApiImage & { favourite?: ApiFavourite; votes?: ApiVote[] };
};

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

  console.log({ a: item.favourite });

  return (
    <View style={styles.overlay}>
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

const UpvoteButton = ({ item }: CardProps) => {
  const { styles } = useStyles(stylesheet);
  const [upvoteMutationFn, { data, error, isLoading }] =
    useUpvoteImageMutation();

  const totalUpvotes = useMemo(() => {
    const votes = item.votes || [];
    return votes.reduce((acc, curr) => acc + curr.value, 0);
  }, [item.votes]);
  const isUpvoted = totalUpvotes > 0;

  const handlePress = useCallback(() => {
    upvoteMutationFn(item.id);
  }, [item.id, upvoteMutationFn]);

  return (
    <Pressable style={styles.voteButton} onPress={handlePress}>
      <FontAwesome
        name="thumbs-o-up"
        size={24}
        color={isUpvoted ? 'green' : 'black'}
      />
      <Text style={styles.voteCount}>{totalUpvotes}</Text>
    </Pressable>
  );
};

const DownvoteButton = ({ item }: CardProps) => {
  const { styles } = useStyles(stylesheet);
  const [downvoteMutationFn, { data, error, isLoading }] =
    useDownvoteImageMutation();

  const totalDownvotes = useMemo(() => {
    const votes = item.votes || [];
    return votes.reduce((acc, curr) => acc + curr.value, 0);
  }, [item.votes]);
  const isDownvoted = totalDownvotes < 0;

  const handlePress = useCallback(() => {
    downvoteMutationFn(item.id);
  }, [item.id, downvoteMutationFn]);
  return (
    <Pressable style={styles.voteButton} onPress={handlePress}>
      <FontAwesome
        name="thumbs-o-down"
        size={24}
        color={isDownvoted ? 'red' : 'black'}
      />
      <Text style={styles.voteCount}>{totalDownvotes}</Text>
    </Pressable>
  );
};

export const CardActions = ({ item }: CardProps) => {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.voteActions}>
      <UpvoteButton item={item} />
      <DownvoteButton item={item} />
    </View>
  );
};

export const Card = ({ item }: CardProps) => {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.card}>
      {/*<Text>Card</Text>*/}
      <Image
        style={styles.image}
        source={item.url}
        // source="https://picsum.photos/seed/696/3000/2000"
        // placeholder={{ blurhash }}
      />
      <ImageOverlay item={item} />

      <CardActions item={item} />
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    opacity: 0.5,
    borderRadius: 100,
    margin: 8,
    padding: 16,
    flex: 1,
  },
  image: {
    // flex: 1,
    width: '100%',
    height: 200,
    backgroundColor: 'red',
  },
  voteActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  voteButton: {
    marginVertical: 8,
    flexDirection: 'row',
    columnGap: 8,
  },
  voteCount: {
    alignSelf: 'center',
    // marginVertical: 2,
  },
});
