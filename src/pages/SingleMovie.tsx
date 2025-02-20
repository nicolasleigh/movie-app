import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { getSingleMovie } from '../api/movie';
import { useRate, useToast } from '../hooks';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import SideNav from '../components/SideNav';
import MediaChrome from '../components/MediaChrome';
import AddReview from './AddReview';

const videoUrl = import.meta.env.VITE_MOVIE_BASE_URL;

export default function SingleMovie() {
  const navigate = useNavigate();
  const [showAddReview, setShowAddReview] = useState(false);
  const { state } = useLocation();
  const { showRateModal, setShowRateModal } = useRate();

  const videoFolder = state.videoName.substring(
    0,
    state.videoName.lastIndexOf('.')
  );

  const videoSrc = videoUrl + videoFolder + '/master.m3u8';

  // const trackSrc =
  //   import.meta.env.VITE_MOVIE_BASE_URL +
  //   '';

  if (showRateModal)
    return (
      <AddReview title={state.title} setShowRateModal={setShowRateModal} />
    );
  return (
    <div className='flex bg-black h-screen flex-col p-2'>
      <h2 className='text-white'>{state.title}</h2>
      {/* <SideNav /> */}
      {/* <MediaChrome videoSrc={videoSrc} trackSrc={trackSrc} /> */}
      <MediaChrome videoSrc={videoSrc} />
      <button className='text-white' onClick={() => setShowRateModal(true)}>
        Add Review
      </button>
      <button
        onClick={() => navigate(-1)}
        className='text-white border max-w-md mx-auto p-4 '
      >
        &larr; Back
      </button>
    </div>
  );
}
