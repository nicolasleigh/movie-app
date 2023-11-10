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
        '/video-616b652c-5cf0-43ea-a632-b9a2146b5975/720p/' +
        'output.m3u8';
    const trackSrc =
        import.meta.env.VITE_MOVIE_BASE_URL +
        'House.of.Cards.S04E03.WEBRip.DEFLATE.en.vtt';

    if (showAddReview) return <AddReview title={title} />;
    return (
        <div className='flex'>
            <SideNav />
            <MediaChrome videoSrc={videoSrc} trackSrc={trackSrc} />
            <button onClick={() => setShowAddReview(true)}>Add Review</button>
        </div>
    );
}
