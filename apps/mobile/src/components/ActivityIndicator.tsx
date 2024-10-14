import { ComponentProps } from 'react';
import { ActivityIndicator as RNActivityIndicator, View } from 'react-native';
import {
  createStyleSheet,
  UnistylesVariants,
  useStyles,
} from 'react-native-unistyles';

export type ActivityIndicatorProps = ComponentProps<
  typeof RNActivityIndicator
> &
  UnistylesVariants<typeof stylesheet>;

export const ActivityIndicator = ({
  expand = false,
  size = 'large',
}: ActivityIndicatorProps) => {
  const { styles, theme } = useStyles(stylesheet, { expand });
  return (
    <View style={styles.root}>
      <RNActivityIndicator size={size} color={theme.colors.typography.$5} />
    </View>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  root: {
    variants: {
      expand: {
        false: {},
        true: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        },
      },
    },
  },
}));
