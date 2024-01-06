import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleMovie } from '../api/movie';
import { useToast } from '../hooks';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import SideNav from '../components/SideNav';
import MediaChrome from '../components/MediaChrome';
import AddReview from './AddReview';

export default function SingleMovie() {
  const [showAddReview, setShowAddReview] = useState(false);

  const videoSrc =
    import.meta.env.VITE_MOVIE_BASE_URL +
    'video-97f2023b-fff9-4735-95a8-5f344ba5d0de/' +
    'master.m3u8';
  // const trackSrc =
  //   import.meta.env.VITE_MOVIE_BASE_URL +
  //   '';

  if (showAddReview) return <AddReview title={title} />;
  return (
    <div className='flex'>
      <SideNav />
      {/* <MediaChrome videoSrc={videoSrc} trackSrc={trackSrc} /> */}
      <MediaChrome videoSrc={videoSrc} trackSrc />
      <button onClick={() => setShowAddReview(true)}>Add Review</button>
    </div>
  );
}
