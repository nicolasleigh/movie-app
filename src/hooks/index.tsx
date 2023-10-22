import { ThemeContext } from '../context/ThemeProvider';
import { useContext } from 'react';
import { ToastContext } from '../context/ToastProvider';

export const useTheme = () => useContext(ThemeContext);
export const useToast = () => useContext(ToastContext)
