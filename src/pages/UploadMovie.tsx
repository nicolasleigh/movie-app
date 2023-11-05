import { useState, useRef } from 'react';
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

    // const customRequest = async (value) => {
    //     const { onSuccess, onError, file, onProgress } = value;
    //     const config = {
    //         headers: { 'content-type': 'multipart/form-data' },
    //         onUploadProgress: (event) => {
    //             const percent = Math.floor((event.loaded / event.total) * 100);
    //             setProgress(percent);
    //             if (percent === 100) {
    //                 setTimeout(() => setProgress(0), 1000);
    //             }
    //             onProgress({ percent: (event.loaded / event.total) * 100 });
    //         },
    //     };
    //     formData.append('poster', file);

    // };

    const onSubmit = methods.handleSubmit((values) => {
        console.log('values', values);
        const formData = new FormData();
        formData.append('movieId', values.movieTitle);
        formData.append('poster', values.uploadPoster);
        formData.append('video', values.uploadVideo);
        const config = {
            headers: { 'content-type': 'multipart/form-data' },
            onUploadProgress: (event) => {
                const percent = Math.floor((event.loaded / event.total) * 100);
                setProgress(percent);
                if (percent === 100) {
                    setTimeout(() => setProgress(0), 1000);
                }
            },
        };

        client
            .post('/movie/upload-movie-and-poster', formData, config)
            .then(({ data }) => {
                console.log('server res: ', data);
            })
            .catch((error) => {
                console.log('error: ', error);
            });
    });
    // const {
    //     register,
    //     handleSubmit,
    //     control,
    //     formState: { errors },
    // } = useForm({
    //     defaultValues: {
    //         movieTitle: '',
    //         uploadVideo: '',
    //         uploadPoster: '',
    //     },
    // });
    // const { register, unregister, setValue, watch } = useFormContext();
    // const files: File[] = watch(name);

    // const onSubmit = (data: any) => console.log(data); //TODO
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
