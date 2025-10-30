import { Colors as themeColors } from '@/constants/theme';
import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

export type ColorScheme = keyof typeof themeColors; // e.g. "light" | "dark"

export interface ColorsProps {
  colorScheme?: ColorScheme;
}

/**
 * Returns color palette based on color scheme (light or dark)
 */
export const Colors = ({ colorScheme = 'light' }: ColorsProps) => {
  const scheme = themeColors[colorScheme];

  return {
    primary: '#007AFF',
    secondary: '#FF9500',
    background: scheme.background ?? '#FFFFFF',
    text: scheme.text ?? '#333333',
    muted: '#999999',
    danger: '#FF3B30',
  } as const;
};

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
} as const;

interface TypographyType {
  h1: TextStyle;
  h2: TextStyle;
  body: TextStyle;
  small: TextStyle;
}

/**
 * Returns typography styles depending on current theme
 */
export const Typography = (colorScheme: ColorScheme = 'light'): TypographyType => {
  const palette = Colors({ colorScheme });

  return {
    h1: {
      fontSize: 32,
      fontWeight: 'bold',
      color: palette.text,
    },
    h2: {
      fontSize: 24,
      fontWeight: '600',
      color: palette.text,
    },
    body: {
      fontSize: 16,
      color: palette.text,
    },
    small: {
      fontSize: 12,
      color: palette.muted,
    },
  };
};

interface GlobalStylesType {
  container: ViewStyle;
  button: ViewStyle;
  buttonText: TextStyle;
}

/**
 * Returns base global styles using current theme
 */
export const GlobalStyles = (colorScheme: ColorScheme = 'light') =>
  StyleSheet.create<GlobalStylesType>({
    container: {
      flex: 1,
      backgroundColor: Colors({ colorScheme }).background,
      padding: Spacing.md,
    },
    button: {
      backgroundColor: Colors({ colorScheme }).primary,
      paddingVertical: Spacing.sm,
      paddingHorizontal: Spacing.md,
      borderRadius: 8,
    },
    buttonText: {
      color: '#FFF',
      textAlign: 'center',
      fontWeight: 'bold',
    },
  });
