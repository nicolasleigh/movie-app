import { ThemeProvider } from './ThemeProvider';
import { ReactNode } from 'react';
import { ToastProvider } from './ToastProvider';
import { AuthProvider } from './AuthProvider';
import { ResetProvider } from './ResetProvider';

interface Props {
    children: ReactNode;
}

export const ContextProvider = ({ children }: Props) => {
    return (
        <ToastProvider>
            <AuthProvider>
                <ResetProvider>
                    <ThemeProvider>{children}</ThemeProvider>
                </ResetProvider>
            </AuthProvider>
        </ToastProvider>
    );
};
