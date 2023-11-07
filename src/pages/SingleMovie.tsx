import { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleMovie } from '../api/movie';
import { useToast } from '../hooks';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import VideoJS from '../components/VideoJS';
import SideNav from '../components/SideNav';

export default function SingleMovie() {
    const playerRef = useRef(null);
    const { notify } = useToast();
    const { movieId } = useParams();
    const queryClient = useQueryClient();

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

    const videoSrc = import.meta.env.VITE_MOVIE_BASE_URL + videoName;

    const videoJsOptions = {
        autoplay: true,
        controls: true,
        responsive: true,
        experimentalSvgIcons: true,
        controlBar: {
            skipButtons: {
                forward: 5,
                backward: 10,
            },
        },

        playbackRates: [0.5, 1, 1.5, 2],
        language: 'zh-CN',
        fluid: true,
        sources: [
            {
                // src: 'http://localhost:8000/video/video-3835249a-ee87-477a-8d23-7b1acd35e18b.mp4',
                src: videoSrc,
                type: 'video/mp4',
            },
        ],
        html5: {},
    };

    const handlePlayerReady = (player) => {
        playerRef.current = player;

        // You can handle player events here, for example:
        player.on('waiting', () => {
            videojs.log('player is waiting');
        });

        player.on('dispose', () => {
            videojs.log('player will dispose');
        });
    };

    return (
        <div className='flex'>
            <SideNav />
            <div className='w-full h-full'>
                <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
            </div>
        </div>
    );
}
