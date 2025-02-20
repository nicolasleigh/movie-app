import { useState } from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import { LiaCloudUploadAltSolid } from 'react-icons/lia';
import { MdOutlineRateReview } from 'react-icons/md';
import { TbHeartPlus } from 'react-icons/tb';
import { RiMovieLine } from 'react-icons/ri';
import { IoMdTime } from 'react-icons/io';
import SideNav from '../components/SideNav';
import UploadAvatar from '../components/UploadAvatar';

export default function UserInfo() {
    const uploadNumber = 24;
    const reviewNumber = 19;
    const totalWatchedMin = 145;
    const uploadMin = 1200;
    const favoriteNumber = 12;

    const [showForm, setShowForm] = useState(false);
    return (
        <div className='flex'>
            <SideNav />
            <div className='ml-60 w-full  '>
                <div className=' m-auto p-4 flex-col mt-10 items-center justify-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl  dark:border-gray-700 dark:bg-gray-800'>
                    <div className='grid gap-1 mb-6 md:grid-cols-2 '>
                        {/* <div className='flex m-auto pb-10 relative flex-col mt-10 items-center justify-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl  dark:border-gray-700 dark:bg-gray-800 '> */}
                        <div className='flex flex-col items-center p-4 '>
                            <img
                                className='w-40 h-40 rounded'
                                // className='w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 mb-4'
                                src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                alt='Default avatar'
                            />
                            {/* <h2 className='font-semibold text-lg'>Jackson Andy</h2>
                        <h3 className='text-sm'>jacksonandy001@gmail.com</h3> */}
                        </div>

                        <div className='flex flex-col justify-center p-4 leading-normal '>
                            <ol className='max-w-md space-y-2 list-none text-gray-500  list-inside dark:text-gray-400 '>
                                <li className='flex items-center space-x-2'>
                                    <LiaCloudUploadAltSolid />
                                    <span>
                                        Uploaded{' '}
                                        <span className='font-semibold text-gray-900 dark:text-white'>
                                            {uploadNumber}
                                        </span>{' '}
                                        movies
                                    </span>
                                </li>
                                <li className='flex items-center space-x-2'>
                                    <IoMdTime />
                                    <span>
                                        Uploaded{' '}
                                        <span className='font-semibold text-gray-900 dark:text-white'>
                                            {uploadMin}
                                        </span>{' '}
                                        minutes
                                    </span>
                                </li>
                                <li className='flex items-center space-x-2'>
                                    <MdOutlineRateReview />
                                    <span>
                                        Reviewed{' '}
                                        <span className='font-semibold text-gray-900 dark:text-white'>
                                            {reviewNumber}
                                        </span>{' '}
                                        movies
                                    </span>
                                </li>
                                <li className='flex items-center space-x-2'>
                                    <RiMovieLine />
                                    <span>
                                        Watched{' '}
                                        <span className='font-semibold text-gray-900 dark:text-white'>
                                            {totalWatchedMin}
                                        </span>{' '}
                                        minutes
                                    </span>
                                </li>
                                <li className='flex items-center space-x-2'>
                                    <TbHeartPlus />
                                    <span>
                                        Prefer{' '}
                                        <span className='font-semibold text-gray-900 dark:text-white'>
                                            {favoriteNumber}
                                        </span>{' '}
                                        movies
                                    </span>
                                </li>
                            </ol>
                        </div>
                        <a
                            onClick={() => setShowForm(!showForm)}
                            className='inline-flex items-center cursor-pointer pl-4 space-x-2 text-blue-600 hover:underline'
                        >
                            <AiOutlineEdit />
                            <span className='text-sm'>Edit profile</span>
                        </a>
                        <div className='absolute bottom-0 flex justify-between'></div>
                    </div>

                    {showForm && (
                        <form className=' m-auto p-4 flex-col mt-10 items-center justify-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl  dark:border-gray-700 dark:bg-gray-800'>
                            <div className='grid gap-6 mb-6 md:grid-cols-2'>
                                <UploadAvatar />
                                <div className='flex justify-between flex-col'>
                                    <div>
                                        <label
                                            htmlFor='user name'
                                            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                                        >
                                            User name
                                        </label>
                                        <input
                                            type='text'
                                            id='user name'
                                            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                                            placeholder='John'
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor='email'
                                            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                                        >
                                            Email address
                                        </label>
                                        <input
                                            type='email'
                                            id='email'
                                            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                                            placeholder='JohnDoe@gmail.com'
                                            disabled
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='mb-6'>
                                <label
                                    htmlFor='old password'
                                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                                >
                                    Old password
                                </label>
                                <input
                                    type='password'
                                    id='old password'
                                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                                    placeholder='•••••••••'
                                    required
                                />
                            </div>
                            <div className='mb-6'>
                                <label
                                    htmlFor='password'
                                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                                >
                                    New password
                                </label>
                                <input
                                    type='password'
                                    id='password'
                                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                                    placeholder='•••••••••'
                                    required
                                />
                            </div>
                            <div className='mb-6'>
                                <label
                                    htmlFor='confirm_password'
                                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                                >
                                    Confirm password
                                </label>
                                <input
                                    type='password'
                                    id='confirm_password'
                                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                                    placeholder='•••••••••'
                                    required
                                />
                            </div>

                            <button
                                type='submit'
                                className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                            >
                                Submit
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}
