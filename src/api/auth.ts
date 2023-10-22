import { client } from './client';
import axios from 'axios';

export const createUser = async (userInfo: object) => {
    try {
        const { data } = await client.post('/user/create-user', userInfo);
        return data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const message = error.response?.data || error.message;
            return { error: message };
        }
    }
};

export const signInUser = async (userInfo: object) => {
    try {
        const { data } = await client.post('/user/sign-in', userInfo);
        return data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const message = error.response?.data || error.message;
            return { error: message };
        }
    }
};

export const verifyEmail = async (userInfo: object) => {
    try {
        const { data } = await client.post('/user/verify-email', userInfo);
        return data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const message = error.response?.data || error.message;
            return { error: message };
        }
    }
};

export const resendEmailVerificationToken = async (userId: string) => {
    try {
        const { data } = await client.post('/user/resend-email-token', userId);
        return data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const message = error.response?.data || error.message;
            return { error: message };
        }
    }
};

export const forgetPassword = async (email: string) => {
    try {
        const { data } = await client.post('/user/forget-password', email);
        return data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const message = error.response?.data || error.message;
            return { error: message };
        }
    }
};

export const resetPassword = async (userInfo: object) => {
    try {
        const { data } = await client.post('/user/reset-password', userInfo);
        return data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const message = error.response?.data || error.message;
            return { error: message };
        }
    }
};

export const updateUser = async (userInfo: object) => {
    try {
        const { data } = await client.post('/user/update/:userId', userInfo);
        return data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const message = error.response?.data || error.message;
            return { error: message };
        }
    }
};

export const deleteUser = async (userId: object) => {
    try {
        const { data } = await client.post('/user/delete/:userId', userId);
        return data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const message = error.response?.data || error.message;
            return { error: message };
        }
    }
};

export const getIsAuth = async (token: string) => {
    try {
        const { data } = await client.get('is-auth', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const message = error.response?.data || error.message;
            return { error: message };
        }
    }
};
