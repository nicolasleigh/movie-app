import {
    AiOutlineCheck,
    AiOutlineCheckCircle,
    AiOutlineClose,
} from 'react-icons/ai';
import { BiError, BiErrorCircle } from 'react-icons/bi';

export default function Toast({ type, message }) {
    if (type === 'error')
        return (
            <div
                id='toast-error'
                className='flex items-center w-full max-w-xs p-3 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800'
                role='alert'
            >
                <div className='inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200'>
                    <BiErrorCircle />
                </div>
                <div className='ml-3 text-sm font-normal'>{message}</div>
                <button
                    type='button'
                    className='ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700'
                    data-dismiss-target='#toast-error'
                    aria-label='Close'
                >
                    <AiOutlineClose />
                </button>
            </div>
        );

    if (type === 'success')
        return (
            <div
                id='toast-success'
                className='flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800'
                role='alert'
            >
                <div className='inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200'>
                    <AiOutlineCheckCircle />
                </div>
                <div className='ml-3 text-sm font-normal'>{message}</div>
                <button
                    type='button'
                    className='ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700'
                    data-dismiss-target='#toast-success'
                    aria-label='Close'
                >
                    <AiOutlineClose />
                </button>
            </div>
        );
}
