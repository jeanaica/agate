import Theme from 'tailwindcss';

type ThemeType = typeof Theme;

export const getColor = (color: string): Record<string, unknown> => ({
  color,
});

export const aStyles = (theme: ThemeType): Record<string, unknown> => ({
  fontFamily: theme('fontFamily.sans'),
  color: theme('colors.midnight.DEFAULT'),
  cursor: 'pointer',
});

export const generateHeaderStyles = (
  theme: ThemeType
): Record<string, unknown> => {
  const headerStyles: Record<string, unknown> = {};

  const headerFontSizes: Record<string, unknown> = {
    h1: theme('fontSize.5xl'),
    h2: theme('fontSize.3xl'),
    h3: theme('fontSize.2xl'),
    h4: theme('fontSize.xl'),
    h5: theme('fontSize.lg'),
  };

  for (const headerTag in headerFontSizes) {
    headerStyles[headerTag] = {
      fontSize: headerFontSizes[headerTag],
      fontWeight: theme('fontWeight.semibold'),
      fontFamily: theme('fontFamily.sans'),
      color: theme('colors.midnight.900'),
      lineHeight: headerFontSizes[headerTag],
    };
  }

  return headerStyles;
};

export const generateDarkHeaderStyles = (
  theme: ThemeType
): Record<string, unknown> => {
  const darkHeaderStyles: Record<string, unknown> = {};

  const headerTags: Array<string> = ['h1', 'h2', 'h3', 'h4', 'h5'];

  for (const headerTag of headerTags) {
    darkHeaderStyles[`.dark ${headerTag}`] = {
      color: theme('colors.peach.100'),
    };
  }

  return darkHeaderStyles;
};
