import { useForm } from 'react-hook-form';
import SideNav from '../components/SideNav';
import { useStyle } from '../hooks';
import MovieSearch from '../components/MovieSearch';
import { ImFileVideo } from 'react-icons/im';
import { BiImage, BiMoviePlay } from 'react-icons/bi';

export default function UploadMovie() {
    const { labelStyle, inputStyle, formItemStyle } = useStyle();
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        defaultValues: {
            movieTitle: '',
            uploadVideo: '',
            uploadPoster: '',
        },
    });

    const onSubmit = (data: any) => console.log(data); //TODO
    return (
        <div className='flex'>
            <SideNav />
            <div className='bg-stone-900 w-4/5 text-white pt-6 '>
                <div className='w-full max-w-md mx-auto'>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className='bg-red-400 shadow-md rounded px-8 pt-6 pb-8 mb-4'
                    >
                        <div className={formItemStyle}>
                            <label htmlFor='movieTitle' className={labelStyle}>
                                Movie Title
                            </label>
                            <MovieSearch name='movieTitle' control={control} />
                        </div>

                        <div className={formItemStyle}>
                            <label className={labelStyle}>Upload Video</label>
                            <div className='flex items-center justify-center w-full'>
                                <label
                                    htmlFor='dropzone-file'
                                    className='flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600'
                                >
                                    <div className='flex flex-col items-center justify-center pt-5 pb-6'>
                                        <div className='w-8 h-8 text-3xl mb-4 text-gray-500 dark:text-gray-400'>
                                            <BiMoviePlay />
                                        </div>
                                        <p className='mb-2 text-sm text-gray-500 dark:text-gray-400'>
                                            <span className='font-semibold'>
                                                Click to upload
                                            </span>{' '}
                                            or drag and drop
                                        </p>
                                        <p className='text-xs text-gray-500 dark:text-gray-400'>
                                            MP4, MKV, AVI
                                        </p>
                                    </div>
                                    <input
                                        id='dropzone-file'
                                        type='file'
                                        className='hidden'
                                    />
                                </label>
                            </div>
                        </div>

                        <div className={formItemStyle}>
                            <label className={labelStyle}>Upload Poster</label>
                            <div className='flex items-center justify-center w-full'>
                                <label
                                    htmlFor='dropzone-file'
                                    className='flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600'
                                >
                                    <div className='flex flex-col items-center justify-center pt-5 pb-6'>
                                        <div className='w-8 h-8 text-3xl mb-4 text-gray-500 dark:text-gray-400'>
                                            <BiImage />
                                        </div>
                                        <p className='mb-2 text-sm text-gray-500 dark:text-gray-400'>
                                            <span className='font-semibold'>
                                                Click to upload
                                            </span>{' '}
                                            or drag and drop
                                        </p>
                                        <p className='text-xs text-gray-500 dark:text-gray-400'>
                                            JPG, JPEG, PNG
                                        </p>
                                    </div>
                                    <input
                                        id='dropzone-file'
                                        type='file'
                                        className='hidden'
                                    />
                                </label>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
