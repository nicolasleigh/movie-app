import { DatePick } from '../components/DatePick';
import SideNav from '../components/SideNav';
import { useForm, SubmitHandler, useController } from 'react-hook-form';
import dayjs from 'dayjs';
import Toast from '../components/Toast';
import ActorSearch from '../components/ActorSearch';

export default function CreateMovie() {
    // const formStyle = 'flex items-center justify-between';
    const labelStyle = 'block text-gray-700 text-sm font-bold mb-2';
    const inputStyle =
        'shadow appearance-none  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none';
    const formItemStyle = 'mb-4';

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        defaultValues: {
            title: '',
            actor: [],
            genre: '',
            language: '',
            type: '',
            releaseYear: null,
            desc: '',
        },
    });

    const onSubmit = (data) => console.log(data);

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
                            <label htmlFor='title' className={labelStyle}>
                                Title
                            </label>
                            <input
                                {...register('title', {
                                    required: true,
                                })}
                                type='text'
                                id='title'
                                className={inputStyle}
                            />
                            {errors.title && (
                                <p className='mt-2 text-sm text-red-600 dark:text-red-500'>
                                    <span className='font-medium'>Oops!</span>{' '}
                                    Please enter title!
                                </p>
                            )}
                            {/* {errors.title && (
                                <Toast
                                    type='error'
                                    message={errors.title.message}
                                />
                            )} */}
                        </div>

                        <div className={formItemStyle}>
                            <label htmlFor='actor' className={labelStyle}>
                                Actor
                            </label>
                            <ActorSearch name='actor' control={control} />
                            {/* <input
                                {...register('actor')}
                                id='actor'
                                type='text'
                                className={inputStyle}
                            /> */}
                        </div>
                        <div className={formItemStyle}>
                            <label htmlFor='genre' className={labelStyle}>
                                Genre
                            </label>
                            {/* <Select options={genreOpt} /> */}
                            <select
                                {...register('genre', {
                                    required: true,
                                })}
                                id='genre'
                                defaultValue={'DEFAULT'}
                                className={inputStyle}
                            >
                                <option value='DEFAULT' disabled>
                                    Choose genre
                                </option>
                                <option value='adventure'>Adventure</option>
                                <option value='animation'>Animation</option>
                                <option value='comedy'>Comedy</option>
                                <option value='crime'>Crime</option>
                                <option value='fiction'>Fiction</option>
                                <option value='sci-fi'>Sci-Fi</option>
                                <option value='thriller'>Thriller</option>
                                <option value='horror'>Horror</option>
                                <option value='other'>Other</option>
                            </select>
                            {errors.genre && (
                                <p className='mt-2 text-sm text-red-600 dark:text-red-500'>
                                    <span className='font-medium'>Oops!</span>{' '}
                                    Please choose genre!
                                </p>
                            )}
                        </div>
                        <div className={formItemStyle}>
                            <label htmlFor='language' className={labelStyle}>
                                Language
                            </label>
                            <select
                                {...register('language', {
                                    required: 'Language is required!',
                                })}
                                id='language'
                                defaultValue={'DEFAULT'}
                                className={inputStyle}
                            >
                                <option value='DEFAULT' disabled>
                                    Choose language
                                </option>
                                <option value='chinese'>Chinese</option>
                                <option value='english'>English</option>
                                <option value='french'>French</option>
                                <option value='other'>Other</option>
                            </select>
                            {errors.language && (
                                <p className='mt-2 text-sm text-red-600 dark:text-red-500'>
                                    <span className='font-medium'>Oops!</span>{' '}
                                    Please choose language!
                                </p>
                            )}
                        </div>

                        <div className={formItemStyle}>
                            <label htmlFor='type' className={labelStyle}>
                                Type
                            </label>
                            <select
                                {...register('type', {
                                    required: true,
                                })}
                                id='type'
                                defaultValue={'DEFAULT'}
                                className={inputStyle}
                            >
                                <option value='DEFAULT' disabled>
                                    Choose type
                                </option>
                                <option value='tv'>TV Series</option>
                                <option value='movie'>Movie</option>
                                <option value='other'>Other</option>
                            </select>
                            {errors.type && (
                                <p className='mt-2 text-sm text-red-600 dark:text-red-500'>
                                    <span className='font-medium'>Oops!</span>{' '}
                                    Please choose type!
                                </p>
                            )}
                        </div>
                        <div className={formItemStyle}>
                            <label htmlFor='releaseYear' className={labelStyle}>
                                Release Year
                            </label>
                            <DatePick control={control} name='releaseYear' />
                        </div>
                        <div className={formItemStyle}>
                            <label htmlFor='desc' className={labelStyle}>
                                Description
                            </label>
                            <textarea
                                {...register('desc')}
                                id='desc'
                                rows={5}
                                cols={40}
                                className={inputStyle}
                            />
                        </div>
                        <div>
                            <button
                                type='submit'
                                className='bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:outline-blue-500'
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
