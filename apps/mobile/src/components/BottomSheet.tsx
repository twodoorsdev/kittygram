import React, { ComponentProps, ReactNode } from 'react';
import RNBottomSheet, {
  BottomSheetView as RNBottomSheetView,
} from '@gorhom/bottom-sheet';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

export type BottomSheetProps = Omit<
  ComponentProps<typeof RNBottomSheet>,
  'children'
> & {
  children?: ReactNode;
  open?: boolean;
};

export const BottomSheet = ({
  children,
  open = false,
  ...props
}: BottomSheetProps) => {
  const { styles } = useStyles(stylesheet);

  return (
    <RNBottomSheet
      backgroundStyle={styles.root}
      // containerStyle={styles.root}
      enablePanDownToClose={true}
      index={open ? 0 : -1}
      snapPoints={[200]}
      {...props}
    >
      <RNBottomSheetView style={styles.content}>
        {children ?? null}
      </RNBottomSheetView>
    </RNBottomSheet>
  );
};

const stylesheet = createStyleSheet((theme, runtime) => ({
  root: {
    backgroundColor: theme.colors.background.$3,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    marginBottom: runtime.insets.bottom,
  },
}));
