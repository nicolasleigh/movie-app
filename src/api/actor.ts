import axios from 'axios';
import { catchErr, getToken } from '../utils/helper';
import { client } from './client';

export const searchActor = async (query) => {
    const token = getToken();
    try {
        const { data } = await client.get(`/actor/search?name=${query}`, {
            headers: {
                authorization: `Bearer ${token}`,
            },
        });
        return data;
    } catch (error) {
        if (axios.isAxiosError(error)) catchErr(error);
    }
};
