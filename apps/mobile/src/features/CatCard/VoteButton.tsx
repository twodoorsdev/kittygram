import FontAwesome from '@expo/vector-icons/FontAwesome';
import { ComponentProps } from 'react';
import { StyleProp, TouchableOpacity, ViewStyle } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

export type VoteButtonProps = ComponentProps<typeof TouchableOpacity> & {
  iconProps: ComponentProps<typeof FontAwesome>;
};
export const VoteButton = ({ style, iconProps, ...props }: VoteButtonProps) => {
  const { styles } = useStyles(stylesheet);
  return (
    <TouchableOpacity
      style={[styles.root, style as StyleProp<ViewStyle>]}
      {...props}
    >
      <FontAwesome {...iconProps} />
    </TouchableOpacity>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  root: {
    marginVertical: theme.space.$2,
    flexDirection: 'row',
    columnGap: theme.space.$2,
  },
}));
