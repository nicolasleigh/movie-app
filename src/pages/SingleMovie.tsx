import { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleMovie } from '../api/movie';
import { useToast } from '../hooks';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import SideNav from '../components/SideNav';
import ReactPlayer from 'react-player';

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
    const trackSrc =
        import.meta.env.VITE_MOVIE_BASE_URL +
        'House.of.Cards.S04E03.WEBRip.DEFLATE.en.vtt';

    const videoConfig = {
        file: {
            tracks: [
                {
                    kind: 'subtitles',
                    src: trackSrc,
                    srcLang: 'en',
                    label: 'English',
                    default: true,
                    style: { backgroundColor: 'white' },
                },
            ],
            attributes: { crossOrigin: 'true' },
        },
    };

    return (
        <div className='flex'>
            <SideNav />
            <ReactPlayer
                url={videoSrc}
                controls={true}
                width='60%'
                height='60%'
                playing={true}
                muted={true} //temporary fix since videos with audio don't autoplay on most browsers
                config={videoConfig}
            />
        </div>
    );
}
