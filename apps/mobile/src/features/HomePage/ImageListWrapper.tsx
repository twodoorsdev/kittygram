import type { ReactNode } from 'react';
import { View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

export type ImageListWrapperProps = {
  children?: ReactNode;
};

export const ImageListWrapper = ({ children }: ImageListWrapperProps) => {
  const { styles } = useStyles(stylesheet);

  return <View style={styles.root}>{children}</View>;
};

const stylesheet = createStyleSheet((theme) => ({
  root: {
    rowGap: theme.space.$2,
  },
}));
