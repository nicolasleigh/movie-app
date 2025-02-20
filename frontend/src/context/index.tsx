import { ThemeProvider } from './ThemeProvider';
import { ReactNode } from 'react';
import { ToastProvider } from './ToastProvider';
import { AuthProvider } from './AuthProvider';
import { ResetProvider } from './ResetProvider';
import { StyleProvider } from './StyleProvider';
import { RateProvider } from './RateProvider';

interface Props {
  children: ReactNode;
}

export const ContextProvider = ({ children }: Props) => {
  return (
    <ToastProvider>
      <AuthProvider>
        <StyleProvider>
          <ResetProvider>
            <RateProvider>
              <ThemeProvider>{children}</ThemeProvider>
            </RateProvider>
          </ResetProvider>
        </StyleProvider>
      </AuthProvider>
    </ToastProvider>
  );
};
