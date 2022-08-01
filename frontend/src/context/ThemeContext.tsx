import { createContext, useContext } from 'react';

export enum Theme { dark = 'dark', light = 'light'}

export type ThemeContextType = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextType>({
    theme: Theme.light,
    setTheme: theme => console.warn('no theme provider'),
});
export const useTheme = () => useContext(ThemeContext);