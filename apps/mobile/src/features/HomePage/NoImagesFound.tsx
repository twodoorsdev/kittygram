import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Text, View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

export const NoImagesFound = () => {
  const { styles } = useStyles(stylesheet);
  return (
    <View style={styles.root}>
      <View style={styles.message}>
        <FontAwesome name="warning" size={24} color="grey" />
        <Text>No images found</Text>
      </View>
      {/*<Text>Imagine a vertical arrow pointing towards the + button</Text>*/}
    </View>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.space.$2,
    borderRadius: theme.radii.$3,
    backgroundColor: theme.colors.background.$6,
    columnGap: theme.space.$2,
  },
}));
