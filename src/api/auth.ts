import { client } from './client';

export const createUser = async (userInfo: object) => {
    const { data } = await client.post('/user/create-user', userInfo);
};

export const verifyEmail = async (userInfo: object) => {
    const { data } = await client.post('/user/verify-email', userInfo);
};

export const signInUser = () => {};

export const getIsAuth = () => {};
