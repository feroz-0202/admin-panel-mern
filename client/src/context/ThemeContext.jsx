import { createContext, useContext, useState } from 'react';
import { theme as defaultTheme } from '../theme/theme';

const themes = {
  default: defaultTheme,
  blue: {
    ...defaultTheme,
    primaryGradient: 'bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500',
    gradientText: 'bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 bg-clip-text text-transparent',
  },
  dark: {
    ...defaultTheme,
    primaryGradient: 'bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700',
    cardGlass: 'backdrop-blur-lg bg-gray-900/80 border border-gray-700 shadow-xl',
    sidebar: 'bg-gray-900/80 backdrop-blur-xl border-r border-gray-800 shadow-xl',
    navbar: 'bg-gray-900/80 backdrop-blur-xl shadow-md',
    gradientText: 'bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 bg-clip-text text-transparent',
    button: 'rounded-lg bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 px-4 py-2 text-lg font-bold text-white shadow-lg hover:scale-105 transition-all duration-200',
    input: 'rounded-md border-gray-700 shadow-sm focus:border-gray-400 focus:ring-gray-400 sm:text-sm text-gray-100 bg-gray-800',
  },
};

const ThemeContext = createContext({ theme: defaultTheme, setThemeName: () => {} });

export const ThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState('default');
  const value = { theme: themes[themeName], setThemeName, themeName };
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext); 