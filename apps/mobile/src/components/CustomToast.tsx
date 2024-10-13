import { ComponentProps } from 'react';
import { BaseToast } from 'react-native-toast-message';

export const CustomToast = (props: ComponentProps<typeof BaseToast>) => {
  return (
    <BaseToast
      {...props}
      style={{ borderLeftColor: 'transparent' }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 15,
        fontWeight: '400',
      }}
    />
  );
};
