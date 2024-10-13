import { ComponentProps } from 'react';
import { View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { BottomSheet } from '../../components/BottomSheet';
import { ImageSourceButton } from './ImageSourceButton';

export type UploadImageSheetProps = ComponentProps<typeof BottomSheet>;

export const UploadImageSheet = ({ open, onClose }: UploadImageSheetProps) => {
  const { styles } = useStyles(stylesheet);
  return (
    <BottomSheet open={open} onClose={onClose}>
      <View style={styles.root}>
        <ImageSourceButton source="camera" />
        <ImageSourceButton source="library" />
      </View>
    </BottomSheet>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  root: {
    flex: 1,
    flexDirection: 'row',
    padding: 16,
    columnGap: 16,
  },
}));
