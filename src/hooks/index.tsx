import { ThemeContext } from '../context/ThemeProvider';
import { useContext } from 'react';
import { ToastContext } from '../context/ToastProvider';
import { AuthContext } from '../context/AuthProvider';
import { ResetContext } from '../context/ResetProvider';
import { StyleContext } from '../context/StyleProvider';

export const useTheme = () => useContext(ThemeContext);
export const useToast = () => useContext(ToastContext);
export const useAuth = () => useContext(AuthContext);
export const useReset = () => useContext(ResetContext)
export const useStyle = () => useContext(StyleContext)
