import { AiOutlineClose } from 'react-icons/ai';

export default function MovieDescModal({ desc, onClose }) {
    return (
        <div className='fixed top-0 left-1/2 md:-translate-x-12  z-50  w-full p-4 overflow-x-hidden overflow-y-auto  h-[calc(100%-1rem)] max-h-full'>
            <div className='relative w-full max-w-xl max-h-full'>
                <div className='relative bg-white rounded-lg shadow dark:bg-gray-700'>
                    <div className='flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600'>
                        <h3 className='text-xl font-medium text-gray-900 dark:text-white'>
                            Movie Description
                        </h3>
                        <button
                            type='button'
                            onClick={onClose}
                            className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white'
                            data-modal-hide='small-modal'
                        >
                            <AiOutlineClose />
                        </button>
                    </div>
                    <div className='p-4 md:p-5 '>
                        <p className='text-base leading-relaxed text-gray-500 dark:text-gray-400'>
                            {desc}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
