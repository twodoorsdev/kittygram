import FontAwesome from '@expo/vector-icons/FontAwesome';
import { router } from 'expo-router';
import { useCallback } from 'react';
import { Pressable } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

export const UploadButton = () => {
  const { styles } = useStyles(stylesheet);

  const handlePress = useCallback(() => {
    router.push('modal');
  }, []);

  return (
    <Pressable style={styles.root} onPress={handlePress}>
      <FontAwesome size={28} name="plus-circle" color="blue" />
    </Pressable>
  );
};

const stylesheet = createStyleSheet({
  root: {
    height: 90,
    width: 90,
    backgroundColor: 'white',
    borderRadius: 100,
    marginVertical: -45,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
