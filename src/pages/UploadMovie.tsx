import { useState, useRef } from 'react';
import { toast } from 'react-toastify';
import { FormProvider, useForm } from 'react-hook-form';
import SideNav from '../components/SideNav';
import { useStyle } from '../hooks';
import MovieSearch from '../components/MovieSearch';
import { ImFileVideo } from 'react-icons/im';
import { BiImage, BiMoviePlay } from 'react-icons/bi';
import { useFormContext } from 'react-hook-form';

import UploadVideoComponent from '../components/UploadVideoComponent';
import UploadPosterComponent from '../components/UploadPosterComponent';
import { client } from '../api/client';

interface IFileInputProps
    extends React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    > {
    label?: string;
}

export default function UploadMovie<IFileInputProps>() {
    const toastId = useRef(null);
    const [progress, setProgress] = useState(0);
    const { labelStyle, inputStyle, formItemStyle } = useStyle();
    const methods = useForm({
        mode: 'onBlur',
    });

    const onSubmit = methods.handleSubmit((values) => {
        console.log('values', values);
        const formData = new FormData();
        formData.append('movieId', values.movieTitle[0].id);
        formData.append('poster', values.uploadPoster[0]);
        formData.append('video', values.uploadVideo[0]);
        const config = {
            headers: { 'content-type': 'multipart/form-data' },
            onUploadProgress: (p) => {
                const progress = p.loaded / p.total;

                // check if we already displayed a toast
                if (toastId.current === null) {
                    toastId.current = toast('Upload in Progress', { progress });
                } else {
                    toast.update(toastId.current, { progress });
                }
            },
        };

        client
            .post('/movie/upload-movie-and-poster', formData, config)
            .then(({ data }) => {
                console.log('server res: ', data);
                toast.done(toastId.current);
            })
            .catch((error) => {
                console.log('error: ', error);
            });
    });

    return (
        <FormProvider {...methods}>
            <div className='flex'>
                <SideNav />
                <div className='bg-stone-900 w-4/5 text-white pt-6 '>
                    <div className='w-full max-w-md mx-auto'>
                        <form
                            onSubmit={onSubmit}
                            className='bg-red-400 shadow-md rounded px-8 pt-6 pb-8 mb-4'
                        >
                            <div className={formItemStyle}>
                                <label
                                    htmlFor='movieTitle'
                                    className={labelStyle}
                                >
                                    Movie Title
                                </label>
                                <MovieSearch
                                    name='movieTitle'
                                    // control={control}
                                />
                            </div>
                            <UploadVideoComponent name='uploadVideo' />
                            <UploadPosterComponent name='uploadPoster' />
                            <button
                                type='submit'
                                className='bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:outline-blue-500'
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </FormProvider>
    );
}
