import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import SideNav from '../components/SideNav';
import { getSingleMovie } from '../api/movie';
import { Link, useParams } from 'react-router-dom';
import { useToast } from '../hooks';
import {
    AiFillHeart,
    AiFillStar,
    AiOutlineHeart,
    AiOutlineRight,
    AiOutlineStar,
} from 'react-icons/ai';
import { BsPlay } from 'react-icons/bs';
import { trimText } from '../utils/helper';
import MovieDescModal from '../components/MovieDescModal';
import AddReview from './AddReview';
import { RiHeartAddLine, RiHeartFill } from 'react-icons/ri';
import { BiRightArrowAlt } from 'react-icons/bi';
import ShowReview from './ShowReview';

export default function MovieInfo({ movieId, showModal, setShowModal }) {
    const [showDescModal, setShowDescModal] = useState(false);
    const [showRateModal, setShowRateModal] = useState(false);
    const [showReviewModal, setShowReviewModal] = useState(false);
    const [isHeartClicked, setIsHeartClicked] = useState(false);
    const { notify } = useToast();
    // const { movieId } = useParams();

    useEffect(() => {
        if (showModal) document.body.style.overflow = 'hidden';
    }, [showModal]);
    useEffect(() => {
        if (!showModal) document.body.style.overflow = 'unset';
    }, [showModal]);
    const { isPending, isError, error, data } = useQuery({
        queryKey: ['singleMovie', movieId],
        queryFn: () => getSingleMovie(movieId),
    });

    console.log('data:', data);
    // console.log('error:', error);

    if (isPending) {
        return <span>Loading...</span>;
    }

    if (isError) {
        notify('error', error.message);
        console.log('isError:', error.message);
        return;
    }

    const {
        id,
        video,
        poster,
        title,
        description,
        language,
        releaseYear,
        type,
        tags,
        reviews = {},
        actors = {},
        genres = [],
    } = data.movie;

    const videoName = video;

    const handleCloseModal = () => {
        setShowDescModal(false);
    };

    const handleClickHeart = () => {
        setIsHeartClicked(() => !isHeartClicked);
    };

    const handleClick = () => {
        setShowModal(false);
        setShowDescModal(false);
        setShowRateModal(false);
        setShowReviewModal(false);
    };

    if (!showModal) return;

    return (
        // <div className='flex bg-red-500 fixed top-36 z-50  w-3/4 m-auto '>
        <div
            onClick={handleClick}
            className='bg-[rgba(0, 0, 0, 0.4)] fixed top-0 left-0 w-screen h-screen z-50 backdrop-blur-md '
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className='overflow-y-auto shadow-2xl bg-white flex h-96 overflow-x-hidden fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto z-50     '
            >
                <div className='space-y-8 justify-center top-1/2   md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center'>
                    <div className='flex ml-4 items-center justify-center w-full  h-64 bg-gray-300 rounded sm:w-52 dark:bg-gray-700'>
                        Poster
                    </div>
                    <div className='w-1/2 h-64'>
                        <h2 className='mb-4 font-semibold'>{title}</h2>
                        <button
                            type='button'
                            onClick={() => setShowDescModal(true)}
                            className='text-left mb-4'
                        >
                            {trimText(description, 150)}
                        </button>
                        {showDescModal && (
                            <MovieDescModal
                                desc={description}
                                onClose={handleCloseModal}
                            />
                        )}

                        {/* <div className='mb-4'>Actors</div> */}
                        <div className='flex justify-between items-center mb-4'>
                            <div className='flex items-center text-red-700 '>
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiOutlineStar />
                            </div>
                            <button
                                onClick={handleClickHeart}
                                className='text-red-700'
                            >
                                {isHeartClicked ? (
                                    <RiHeartFill />
                                ) : (
                                    <RiHeartAddLine />
                                )}
                            </button>
                        </div>

                        <Link
                            to={`/movie/${id}`}
                            className='flex items-center justify-center bg-red-300 rounded p-2 space-x-1'
                        >
                            {' '}
                            <div className=' '>
                                <BsPlay />
                            </div>
                            <span>Play</span>
                        </Link>
                        <div className='flex justify-between items-center mt-4'>
                            <button
                                onClick={() => setShowRateModal(true)}
                                className='flex text-sm items-center font-medium text-blue-600 dark:text-blue-500 hover:underline'
                            >
                                <span className=''>Rate movie</span>
                                <BiRightArrowAlt />
                            </button>
                            <button
                                onClick={() => setShowReviewModal(true)}
                                className='flex text-sm items-center font-medium text-blue-600 dark:text-blue-500 hover:underline'
                            >
                                <span className=''>Show reviews</span>
                                <BiRightArrowAlt />
                            </button>

                            {showRateModal && (
                                <AddReview
                                    title={title}
                                    setShowRateModal={setShowRateModal}
                                />
                            )}
                            {showReviewModal && (
                                <ShowReview
                                    setShowReviewModal={setShowReviewModal}
                                />
                            )}

                            {/* <Link
                                    to={`/review/${id}`}
                                    className='flex items-center'
                                >
                                    <span>Rate Movie</span>
                                    <AiOutlineRight />
                                </Link> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
