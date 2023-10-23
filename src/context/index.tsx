import { ThemeProvider } from './ThemeProvider';
import { ReactNode } from 'react';
import { ToastProvider } from './ToastProvider';
import { AuthProvider } from './AuthProvider';

interface Props {
    children: ReactNode;
}

export const ContextProvider = ({ children }: Props) => {
    return (
        <ToastProvider>
            <AuthProvider>
                <ThemeProvider>{children}</ThemeProvider>
            </AuthProvider>
        </ToastProvider>
    );
};
