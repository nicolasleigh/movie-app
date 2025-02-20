import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import SideNav from '../components/SideNav';
import { getSingleMovie } from '../api/movie';
import { Link, useParams } from 'react-router-dom';
import { useRate, useToast } from '../hooks';
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
import { searchActorById } from '../api/actor';

const posterUrl = import.meta.env.VITE_POSTER_BASE_URL;
const avatarUrl = import.meta.env.VITE_AVATAR_BASE_URL;

export default function MovieInfo({ showModal = true, setShowModal }) {
  const [showDescModal, setShowDescModal] = useState(false);
  // const [showRateModal, setShowRateModal] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [isHeartClicked, setIsHeartClicked] = useState(false);
  const { notify } = useToast();
  const { movieId } = useParams();
  const { showRateModal, setShowRateModal } = useRate();

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
    actors = [],
    genres = [],
  } = data.movie;

  // const videoName = video;

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
      className='bg-black fixed top-0 left-0 w-screen h-screen z-50 backdrop-blur-md '
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className=' bg-gray-950 border rounded-lg flex h-3/4 w-3/4 overflow-x-hidden fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto z-50     '
      >
        <div className=' justify-center p-3 sm:p-4 top-1/2   sm:space-y-0 sm:space-x-4 rtl:space-x-reverse sm:flex    sm:items-center'>
          <div className='sm:w-1/3'>
            <h2 className='mb-2 sm:absolute sm:text-3xl sm:top-16 sm:left-1/2 sm:-translate-x-1/2 font-semibold text-slate-100 text-center '>
              {title}
            </h2>
            <div className='flex items-center justify-center w-full mb-2 h-60  rounded  '>
              <img
                src={`${posterUrl}${poster}`}
                alt={title}
                className='rounded-md w-36 border'
              />
            </div>
          </div>
          <div className='sm:w-2/3'>
            <button
              type='button'
              onClick={() => setShowDescModal(true)}
              className='text-justify px-1 mb-4 text-slate-100'
            >
              {trimText(description, 100)}
            </button>
            {showDescModal && (
              <MovieDescModal desc={description} onClose={handleCloseModal} />
            )}

            <div className='flex gap-4 flex-wrap mb-3 mx-2'>
              {actors.map((e: any) => {
                return (
                  <figure
                    key={e.name}
                    className='text-white text-[8px] text-center w-10'
                  >
                    <img
                      src={`${avatarUrl}${e.avatar.name}`}
                      alt={e.name}
                      className='rounded-full border-2'
                    />
                    <figcaption>{e.name}</figcaption>
                  </figure>
                );
              })}
            </div>

            {/* <div className='mb-4'>Actors</div> */}
            <div className='flex justify-between items-center mb-4'>
              <div className='flex items-center text-red-700 text-xl '>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
              </div>
              <button
                onClick={handleClickHeart}
                className='text-red-700 text-xl'
              >
                {isHeartClicked ? <RiHeartFill /> : <RiHeartAddLine />}
              </button>
            </div>

            <Link
              to={`/movie/${id}`}
              state={{ videoName: video, title }}
              className='flex items-center justify-center bg-red-700 text-white rounded p-2 space-x-1'
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
                className='flex text-sm text-white underline items-center font-medium  '
              >
                <span className=''>Rate movie &rarr;</span>
              </button>
              <button
                onClick={() => setShowReviewModal(true)}
                className='flex text-sm text-white underline items-center font-medium  '
              >
                <span className=''>Show reviews &rarr;</span>
              </button>

              {showRateModal && (
                <AddReview title={title} setShowRateModal={setShowRateModal} />
              )}
              {showReviewModal && (
                <ShowReview setShowReviewModal={setShowReviewModal} />
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
