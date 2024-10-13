import { ComponentProps } from 'react';
import { Text as RNText } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

export type TextProps = ComponentProps<typeof RNText>;

export const Text = ({ style, ...props }: TextProps) => {
  const { styles } = useStyles(stylesheet);
  return <RNText style={[styles.root, style]} {...props} />;
};

const stylesheet = createStyleSheet((theme) => ({
  root: {
    color: theme.colors.typography.$5,
  },
}));
