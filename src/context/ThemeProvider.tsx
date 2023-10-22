import { createContext, useEffect, ReactNode } from 'react';

interface Theme {
    toggleTheme: () => void;
}

interface Props {
    children: ReactNode;
}

export const ThemeContext = createContext<Theme>(null!);

const defaultTheme = 'dark';
const lightTheme = 'light';

export function ThemeProvider({ children }: Props) {
    const toggleTheme = () => {
        const oldTheme = getTheme();
        const newTheme = oldTheme === defaultTheme ? lightTheme : defaultTheme;
        updateTheme(newTheme, oldTheme);
    };
    useEffect(() => {
        const theme = getTheme();
        if (!theme) updateTheme(defaultTheme);
    }, []);

    return (
        <ThemeContext.Provider value={{ toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

const getTheme = () => localStorage.getItem('theme');
const updateTheme = (newTheme: string, oldTheme?: string | null) => {
    if (oldTheme) document.documentElement.classList.remove(oldTheme);
    document.documentElement.classList.add(newTheme);
    localStorage.setItem('theme', newTheme);
};
