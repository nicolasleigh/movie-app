import { ThemeContext } from '../context/ThemeProvider';
import { useContext } from 'react';
import { ToastContext } from '../context/ToastProvider';
import { AuthContext } from '../context/AuthProvider';

export const useTheme = () => useContext(ThemeContext);
export const useToast = () => useContext(ToastContext);
export const useAuth = () => useContext(AuthContext);
