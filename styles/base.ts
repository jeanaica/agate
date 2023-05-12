import Theme from 'tailwindcss';

type ThemeType = typeof Theme;

export const getColor = (color: string): Record<string, unknown> => ({
  color,
});

export const aStyles = (color: string): Record<string, unknown> => ({
  color,
  fontWeight: 500,
  cursor: 'pointer',
  fontStyle: 'italic',
});

export const aHoverStyles = {
  textDecoration: 'underline',
};

export const generateHeaderStyles = (
  theme: ThemeType
): Record<string, unknown> => {
  const headerStyles: Record<string, unknown> = {};

  const headerFontSizes: Record<string, unknown> = {
    h1: theme('fontSize.4xl'),
    h2: theme('fontSize.2xl'),
    h3: theme('fontSize.xl'),
    h4: theme('fontSize.lg'),
    h5: theme('fontSize.base'),
  };

  for (const headerTag in headerFontSizes) {
    headerStyles[headerTag] = {
      fontSize: headerFontSizes[headerTag],
      fontWeight: theme('fontWeight.semibold'),
      color: theme('colors.midnight.900'),
      letterSpacing: 4,
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
      color: theme('colors.peach.DEFAULT'),
    };
  }

  return darkHeaderStyles;
};
