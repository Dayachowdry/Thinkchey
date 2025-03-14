const lightColors = {
  primary: '#3772FF',
  secondary: '#45B26B',
  accent: '#EF466F',
  success: '#45B26B',
  successLight: '#45B26B20',
  danger: '#EF466F',
  dangerLight: '#EF466F20',
  warning: '#FFB800',
  info: '#3772FF',
  dark: '#141416',
  light: '#F4F5F6',
  background: '#FCFCFD',
  backgroundAlt: '#F4F5F6',
  border: '#E6E8EC',
  textPrimary: '#141416',
  textSecondary: '#777E90',
  cardBackground: '#FFFFFF',
};

const darkColors = {
  primary: '#3772FF',
  secondary: '#45B26B',
  accent: '#EF466F',
  success: '#45B26B',
  successLight: '#45B26B20',
  danger: '#EF466F',
  dangerLight: '#EF466F20',
  warning: '#FFB800',
  info: '#3772FF',
  dark: '#FCFCFD',
  light: '#141416',
  background: '#141416',
  backgroundAlt: '#1E1E1E',
  border: '#2D2D2D',
  textPrimary: '#FCFCFD',
  textSecondary: '#B7B9BD',
  cardBackground: '#1E1E1E',
};

const baseTheme = {
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    '2xl': '48px',
    '3xl': '64px',
  },
  fontSizes: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '30px',
    '4xl': '36px',
    '5xl': '48px',
  },
  fonts: {
    primary: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    secondary: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  },
  borderRadius: {
    small: '8px',
    medium: '12px',
    large: '16px',
    full: '9999px',
  },
  shadows: {
    small: '0 2px 8px rgba(0, 0, 0, 0.1)',
    medium: '0 4px 12px rgba(0, 0, 0, 0.1)',
    large: '0 8px 16px rgba(0, 0, 0, 0.1)',
  },
  transitions: {
    fast: '0.1s ease',
    medium: '0.2s ease',
    slow: '0.3s ease',
  },
  breakpoints: {
    mobile: '640px',
    tablet: '768px',
    laptop: '1024px',
    desktop: '1280px',
  },
};

export const getTheme = (isDarkMode) => ({
  ...baseTheme,
  colors: isDarkMode ? darkColors : lightColors,
});
