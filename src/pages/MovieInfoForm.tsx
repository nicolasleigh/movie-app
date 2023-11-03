import { DatePick } from '../components/DatePick';
import SideNav from '../components/SideNav';
import { useForm, SubmitHandler, useController } from 'react-hook-form';
import dayjs from 'dayjs';
import Toast from '../components/Toast';
import ActorSearch from '../components/ActorSearch';
import GenreSelect from '../components/GenreSelect';
import LanguageSelect from '../components/LanguageSelect';
import TypeSelect from '../components/TypeSelect';
import FormError from '../components/FormError';

// const formStyle = 'flex items-center justify-between';
const labelStyle = 'block text-gray-700 text-sm font-bold mb-2';
// const inputStyle =
//     'shadow appearance-none  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none border-[#E5E7EB]';
const inputStyle =
    'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500';
const formItemStyle = 'mb-4';

export default function CreateMovie() {
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

    const onSubmit = (data) => console.log(data); //TODO

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
                            <FormError
                                errors={errors.title}
                                message='Please enter title!'
                            />
                        </div>

                        <div className={formItemStyle}>
                            <label htmlFor='actor' className={labelStyle}>
                                Actor
                            </label>
                            <ActorSearch name='actor' control={control} />
                            <FormError
                                errors={errors.actor}
                                message='Please select actors!'
                            />
                        </div>
                        <div className={formItemStyle}>
                            <label htmlFor='genre' className={labelStyle}>
                                Genre
                            </label>
                            {/* <Select options={genreOpt} /> */}
                            <GenreSelect name='genre' control={control} />
                            <FormError
                                errors={errors.genre}
                                message='Please choose genre!'
                            />
                        </div>
                        <div className={formItemStyle}>
                            <label htmlFor='language' className={labelStyle}>
                                Language
                            </label>
                            <LanguageSelect name='language' control={control} />
                            <FormError
                                errors={errors.language}
                                message='Please choose language!'
                            />
                        </div>

                        <div className={formItemStyle}>
                            <label htmlFor='type' className={labelStyle}>
                                Type
                            </label>
                            <TypeSelect name='type' control={control} />
                            <FormError
                                errors={errors.type}
                                message='Please choose type!'
                            />
                        </div>
                        <div className={formItemStyle}>
                            <label htmlFor='releaseYear' className={labelStyle}>
                                Release Year
                            </label>
                            <DatePick
                                control={control}
                                name='releaseYear'
                                className={inputStyle}
                            />
                            <FormError
                                errors={errors.releaseYear}
                                message='Please choose release year!'
                            />
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
