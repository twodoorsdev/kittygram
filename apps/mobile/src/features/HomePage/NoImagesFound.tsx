import { Text, View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

export const NoImagesFound = () => {
  const { styles } = useStyles(stylesheet);
  return (
    <View style={styles.root}>
      <View>
        <Text>No images found</Text>
      </View>
      <Text>Imagine a vertical arrow pointing towards the + button</Text>
    </View>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
  },
}));
