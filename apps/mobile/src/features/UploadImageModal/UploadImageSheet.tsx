import { ComponentProps } from 'react';
import { View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { BottomSheet } from '../../components/BottomSheet';
import { ImageSourceButton } from './ImageSourceButton';

export type UploadImageSheetProps = ComponentProps<typeof BottomSheet>;

export const UploadImageSheet = ({ open, onClose }: UploadImageSheetProps) => {
  const { styles } = useStyles(stylesheet);
  return (
    <BottomSheet style={styles.root} open={open} onClose={onClose}>
      <View style={styles.inner}>
        <ImageSourceButton source="camera" onImageSelect={onClose} />
        <ImageSourceButton source="library" onImageSelect={onClose} />
      </View>
    </BottomSheet>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  root: {
    // backgroundColor: theme.colors.background.$3
  },
  inner: {
    flex: 1,
    flexDirection: 'row',
    padding: theme.space.$2,
    columnGap: theme.space.$2,
  },
}));
