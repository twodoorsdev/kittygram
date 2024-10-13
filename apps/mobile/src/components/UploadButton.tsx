import FontAwesome from '@expo/vector-icons/FontAwesome';
import { ComponentProps } from 'react';
import { Pressable, StyleProp, View, ViewStyle } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

export type UploadButtonProps = ComponentProps<typeof Pressable>;

export const UploadButton = ({ style, ...props }: UploadButtonProps) => {
  const { styles } = useStyles(stylesheet);

  return (
    <Pressable style={[styles.root, style as StyleProp<ViewStyle>]} {...props}>
      <View>
        <View style={styles.leftEar}></View>
        <View style={styles.rightEar}></View>
        <View style={styles.button}>
          <FontAwesome size={28} name="camera" color="white" />
        </View>
      </View>
    </Pressable>
  );
};

const stylesheet = createStyleSheet({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftEar: {
    position: 'absolute',
    top: -40,
    left: 0,
    height: 55,
    width: 20,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    backgroundColor: 'black',
  },
  rightEar: {
    position: 'absolute',
    top: -40,
    right: 0,
    height: 55,
    width: 20,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 25,
    backgroundColor: 'black',
  },
  button: {
    height: 60,
    width: 60,
    marginVertical: -30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: 100,
  },
});
