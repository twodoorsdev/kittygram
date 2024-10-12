import { FontAwesome5 } from '@expo/vector-icons';
import { ComponentProps } from 'react';
import { Pressable, StyleProp, Text, ViewStyle } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

export type ImageSourceProps = ComponentProps<typeof Pressable> & {
  icon: string;
  label: string;
};
export const ImageSource = ({
  label,
  icon,
  style,
  ...props
}: ImageSourceProps) => {
  const { styles } = useStyles(stylesheet);

  return (
    <Pressable style={[styles.root, style as StyleProp<ViewStyle>]} {...props}>
      <FontAwesome5 name={icon} size={32} />
      <Text>{label}</Text>
    </Pressable>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'dashed',
    borderWidth: 1,
    borderRadius: 10,
    // padding: 32,
  },
}));
