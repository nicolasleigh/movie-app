import { ThemeProvider } from './ThemeProvider';
import { ReactNode } from 'react';
import { ToastProvider } from './ToastProvider';

interface Props {
    children: ReactNode;
}

export const ContextProvider = ({ children }: Props) => {
    return (
        <ToastProvider>
            <ThemeProvider>{children}</ThemeProvider>
        </ToastProvider>
    );
};
