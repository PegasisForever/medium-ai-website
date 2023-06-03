import { Tuple, DefaultMantineColor } from '@mantine/core';

type ExtendedCustomColors = 'brandPrimary' | 'brandSecondary' | DefaultMantineColor;

declare module '@mantine/core' {
  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedCustomColors, Tuple<string, 10>>;
  }
}