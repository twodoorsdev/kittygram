import { Text, View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { FromCamera } from './FromCamera';
import { FromLibrary } from './FromLibrary';

export const UploadImageModal = () => {
  const { styles } = useStyles(stylesheet);
  return (
    <View style={styles.root}>
      <View style={styles.title}>
        <Text style={styles.titleLabel}>🐈‍⬛ Upload a new cat picture</Text>
      </View>
      <View style={styles.content}>
        <FromCamera />
        <FromLibrary />
      </View>
    </View>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  root: {
    height: '100%',
    backgroundColor: 'white',
    padding: 22,
    borderTopRightRadius: 17,
    borderTopLeftRadius: 17,
  },
  title: {},
  content: {
    flex: 1,
    rowGap: 8,
  },
  titleLabel: {
    fontSize: 20,
    marginBottom: 12,
  },
}));
