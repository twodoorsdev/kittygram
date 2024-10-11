import { UnistylesRegistry } from 'react-native-unistyles';

import { breakpoints } from '../theme/breakpoints';
import { darkTheme, lightTheme } from '../theme/themes';

type AppBreakpoints = typeof breakpoints;

// if you defined themes
type AppThemes = {
  light: typeof lightTheme;
  dark: typeof darkTheme;
};

// override library types
declare module 'react-native-unistyles' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface,@typescript-eslint/no-empty-object-type
  export interface UnistylesBreakpoints extends AppBreakpoints {}
  // eslint-disable-next-line @typescript-eslint/no-empty-interface,@typescript-eslint/no-empty-object-type
  export interface UnistylesThemes extends AppThemes {}
}

UnistylesRegistry.addBreakpoints(breakpoints)
  .addThemes({
    light: lightTheme,
    dark: darkTheme,
    // register other themes with unique names
  })
  .addConfig({
    // you can pass here optional config described below
    adaptiveThemes: true,
  });
