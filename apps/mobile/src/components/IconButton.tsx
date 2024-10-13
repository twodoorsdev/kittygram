import { Octicons } from '@expo/vector-icons';
import { ComponentProps } from 'react';
import { Pressable, StyleProp, ViewStyle } from 'react-native';
import {
  createStyleSheet,
  UnistylesVariants,
  useStyles,
} from 'react-native-unistyles';

export type IconButtonProps = ComponentProps<typeof Pressable> &
  UnistylesVariants<typeof stylesheet> & {
    iconProps: ComponentProps<typeof Octicons>;
  };

export const IconButton = ({
  // Get icon props first
  iconProps,
  // Unistyles variants
  rounded,
  // Pressable props
  style,
  ...props
}: IconButtonProps) => {
  const { styles, theme } = useStyles(stylesheet, { rounded });

  const themedIconProps = {
    ...iconProps,
    color: iconProps.color || theme.colors.typography.$5,
  };

  return (
    <Pressable style={[styles.root, style as StyleProp<ViewStyle>]} {...props}>
      <Octicons {...themedIconProps} />
    </Pressable>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.background.translucent,
    // borderRadius: theme.radii.circle,
    margin: theme.space.$1,
    padding: theme.space.$2,

    variants: {
      rounded: {
        false: {},
        true: {
          borderRadius: theme.radii.circle,
          // margin: theme.space.$1,
          // padding: theme.space.$2,
        },
      },
    },
  },
}));
