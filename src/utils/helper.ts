import { AxiosError } from 'axios';

export const isValidEmail = (email: string) => {
    const validEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return validEmail.test(email);
};

export const validateUserInfo = ({ email, password }: any) => {
    if (!email.trim()) return { ok: false, error: 'Email is missing!' };
    if (!isValidEmail(email)) return { ok: false, error: 'Email is invalid!' };
    if (!password.trim()) return { ok: false, error: 'Password is missing!' };
    if (password.length < import.meta.env.VITE_PASS_LENGTH)
        return {
            ok: false,
            error: `Password must be at least ${
                import.meta.env.VITE_PASS_LENGTH
            } characters!`,
        };
    return { ok: true, error: '' };
};

export const getToken = () => localStorage.getItem('auth-token');

export const catchErr = (error: AxiosError) => {
    const message = error.response?.data || error.message;
    throw new Error(message.error);
    // return { data: message };
    // return { error: message };
};
