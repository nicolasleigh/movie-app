import { useState, useEffect } from 'react';
import debounce from 'lodash.debounce';
import AddRating from '../components/AddRating';
import { getSingleMovie, searchMovieByTitle } from '../api/movie';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useToast } from '../hooks';
import AddComment from '../components/AddComment';
import { AiOutlineClose } from 'react-icons/ai';
import SideNav from '../components/SideNav';

const createArray = (count: number) => {
  return new Array(count).fill('');
};

const ratings = createArray(5);

export default function AddReview({
  title,
  initialState,
  onClose,
  setShowRateModal,
}) {
  const navigate = useNavigate();
  const { notify } = useToast();
  // const { movieId } = useParams();
  const [content, setContent] = useState('');

  const handleChange = ({ target }) => {
    setContent(target.value);
  };

  const [selectedRatings, setSelectedRatings] = useState([]);

  const handleMouseEnter = (index) => {
    const ratings = createArray(index + 1);
    // console.log(ratings);
    setSelectedRatings([...ratings]);
  };

  useEffect(() => {
    if (initialState) {
      setContent(initialState.content);
      setSelectedRatings(createArray(initialState.rating));
    }
  }, [initialState]);

  const handleSubmit = () => {
    if (!selectedRatings.length) return;
    const data = {
      rating: selectedRatings.length,
      content,
    };
  };

  return (
    <div className='fixed top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2   z-50  w-full  overflow-x-hidden overflow-y-auto flex   h-full  backdrop-blur-3xl  !ml-0 '>
      <div className='w-96 m-auto items-center'>
        <div className='relative  shadow-2xl rounded-lg  bg-gray-700'>
          <button
            type='button'
            onClick={() => setShowRateModal(false)}
            className='absolute top-3 right-2.5 text-gray-400 bg-transparent   rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center hover:bg-gray-600 hover:text-white'
            data-modal-hide='authentication-modal'
          >
            <AiOutlineClose size={20} />
          </button>
          <div className='px-6 py-6 lg:px-8'>
            <h3 className='mb-4 text-xl font-medium  text-white'>{title}</h3>
            <form className='space-y-6' action='#'>
              <div>
                <label className='block mb-2 text-sm font-medium text-white'>
                  Rate This Movie
                </label>

                <AddRating
                  ratings={ratings}
                  selectedRatings={selectedRatings}
                  handleMouseEnter={handleMouseEnter}
                />
              </div>
              <div>
                <label className='block mb-2 text-sm font-medium text-white'>
                  Add Comment
                </label>

                <AddComment content={content} handleChange={handleChange} />
              </div>

              <button
                type='submit'
                className='w-full text-white  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-red-600 hover:bg-red-700 focus:ring-red-800'
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
