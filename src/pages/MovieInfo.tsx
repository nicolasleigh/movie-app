import { useState } from 'react';
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

export default function MovieInfo() {
    const [showDescModal, setShowDescModal] = useState(false);
    const [isHeartClicked, setIsHeartClicked] = useState(false);
    const { notify } = useToast();
    const { movieId } = useParams();
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
    return (
        <div className='flex'>
            <SideNav />

            <div className='space-y-8 justify-center  md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center'>
                <div className='flex ml-4 items-center justify-center w-full h-64 bg-gray-300 rounded sm:w-52 dark:bg-gray-700'>
                    Poster
                </div>
                <div className='w-1/2 h-64'>
                    <div className='mb-4'>{title}</div>
                    <button
                        type='button'
                        onClick={() => setShowDescModal(true)}
                        className='text-left mb-4'
                    >
                        {trimText(description, 200)}
                    </button>
                    {showDescModal && (
                        <MovieDescModal
                            desc={description}
                            onClose={handleCloseModal}
                        />
                    )}

                    <div className='mb-4'>Actors</div>
                    <div className='flex space-x-3'>
                        <Link
                            to={`/movie/${id}`}
                            className='flex items-center bg-red-300 rounded p-2'
                        >
                            <span>Play</span>
                            <div className=' '>
                                <BsPlay />
                            </div>
                        </Link>

                        <button
                            onClick={handleClickHeart}
                            className='text-red-700'
                        >
                            {isHeartClicked ? (
                                <AiFillHeart />
                            ) : (
                                <AiOutlineHeart />
                            )}
                        </button>
                        <div className='flex items-center text-red-700'>
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiOutlineStar />
                        </div>
                        <Link
                            to={`/review/${id}`}
                            className='flex items-center'
                        >
                            <span>Rate Movie</span>
                            <AiOutlineRight />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
