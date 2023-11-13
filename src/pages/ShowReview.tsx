import { AiFillStar, AiOutlineClose, AiOutlineStar } from 'react-icons/ai';
import ReviewItem from '../components/ReviewItem';

export default function ShowReview({ setShowReviewModal }) {
    return (
        <div className='fixed top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2   z-50  w-full  overflow-x-hidden overflow-y-auto flex   h-full bg-gray-100   !ml-0 '>
            <div className='w-full h-full m-auto items-center'>
                <div className='relative bg-white shadow-2xl rounded-lg  dark:bg-gray-700'>
                    <button
                        type='button'
                        onClick={() => setShowReviewModal(false)}
                        className='absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white'
                        data-modal-hide='authentication-modal'
                    >
                        <AiOutlineClose size={20} />
                    </button>
                    <div className='px-6 py-6 lg:px-8 h-full'>
                        <ReviewItem />
                        <ReviewItem />
                        <ReviewItem />
                        <ReviewItem />
                    </div>
                </div>
            </div>
        </div>
    );
}
