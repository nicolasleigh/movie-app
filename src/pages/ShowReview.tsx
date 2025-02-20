import { AiFillStar, AiOutlineClose, AiOutlineStar } from 'react-icons/ai';
import ReviewItem from '../components/ReviewItem';

export default function ShowReview({ setShowReviewModal }) {
  return (
    <div className='fixed top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2   z-50  w-full  overflow-x-hidden overflow-y-auto flex   h-full bg-gray-700  !ml-0 '>
      <div className='w-full h-full m-auto items-center'>
        <div className='relative  shadow-2xl rounded-lg  bg-gray-700'>
          <button
            type='button'
            onClick={() => setShowReviewModal(false)}
            className='fixed inline-flex top-0 right-0 text-gray-400 bg-transparent  rounded-lg text-sm w-8 h-8 ml-auto  justify-center items-center hover:bg-gray-600 hover:text-white'
            data-modal-hide='authentication-modal'
          >
            <AiOutlineClose size={20} />
          </button>
          <div className='px-6 py-7 lg:px-8 h-full'>
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
