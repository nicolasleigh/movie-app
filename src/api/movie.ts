import axios from 'axios';
import { catchErr, getToken } from '../utils/helper';
import { client } from './client';

export const uploadMovie = async (formData, setUploadProgress) => {
    const token = getToken();
    const config = {
        headers: {
            authorization: `Bearer ${token}`,
            'content-type': 'multipart/form-data',
        },
        onUploadProgress: ({ loaded, total }: any) => {
            if (setUploadProgress)
                setUploadProgress = Math.round((loaded / total) * 100);
        },
    };

    try {
        const { data } = await client.post(
            '/movie/upload-movie',
            formData,
            config
        );
        return data;
    } catch (error) {
        if (axios.isAxiosError(error)) catchErr(error);
    }
};

export const uploadMovieInfo = async (formData) => {
    const token = getToken();
    const config = {
        headers: {
            authorization: `Bearer ${token}`,
            'content-type': 'multipart/form-data',
        },
    };

    try {
        const { data } = await client.post(
            '/movie/create-movie',
            formData,
            config
        );
        return data;
    } catch (error) {
        if (axios.isAxiosError(error)) catchErr(error);
    }
};

export const getLatestMovie = async () => {
    try {
        const { data } = await client.get('/movie/latest-movies');
        return data;
    } catch (error) {
        if (axios.isAxiosError(error)) catchErr(error);
    }
};

export const searchMovieByTitle = async (query) => {
    const token = getToken();
    console.log(query);
    try {
        const { data } = await client.get(
            `/movie/search-movie?title=${query}`,
            {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            }
        );
        return data;
    } catch (error) {
        if (axios.isAxiosError(error)) catchErr(error);
    }
};

export const getSingleMovie = async (id) => {
    try {
        const { data } = await client.get('/movie/single/' + id);
        return data;
    } catch (error) {
        if (axios.isAxiosError(error)) catchErr(error);
    }
};
