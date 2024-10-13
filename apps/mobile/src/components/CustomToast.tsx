import { ComponentProps } from 'react';
import { BaseToast } from 'react-native-toast-message';
import { useStyles } from 'react-native-unistyles';

export const CustomToast = (props: ComponentProps<typeof BaseToast>) => {
  const { theme } = useStyles();

  return (
    <BaseToast
      {...props}
      style={{ borderLeftColor: 'transparent' }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: theme.fontSizes.$2,
        fontWeight: theme.fontWeights.bold,
      }}
    />
  );
};
