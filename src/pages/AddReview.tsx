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
        <div className='fixed top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2   z-50  w-full  overflow-x-hidden overflow-y-auto flex   h-full bg-gray-100   !ml-0 '>
            <div className='w-96 m-auto items-center'>
                <div className='relative bg-white shadow-2xl rounded-lg  dark:bg-gray-700'>
                    <button
                        type='button'
                        onClick={() => setShowRateModal(false)}
                        className='absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white'
                        data-modal-hide='authentication-modal'
                    >
                        <AiOutlineClose size={20} />
                    </button>
                    <div className='px-6 py-6 lg:px-8'>
                        <h3 className='mb-4 text-xl font-medium text-gray-900 dark:text-white'>
                            {title}
                        </h3>
                        <form className='space-y-6' action='#'>
                            <div>
                                <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                                    Rate This Movie
                                </label>

                                <AddRating
                                    ratings={ratings}
                                    selectedRatings={selectedRatings}
                                    handleMouseEnter={handleMouseEnter}
                                />
                            </div>
                            <div>
                                <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                                    Add Comment
                                </label>

                                <AddComment
                                    content={content}
                                    handleChange={handleChange}
                                />
                            </div>

                            <button
                                type='submit'
                                className='w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
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
