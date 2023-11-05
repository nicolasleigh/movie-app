import { useParams } from 'react-router-dom';
import { getSingleMovie } from '../api/movie';

export default function SingleMovie() {
    const { movieId } = useParams();
    const fetchMovie = async () => {
        const { error, movie } = await getSingleMovie(movieId);
        if (error) return updateNotification('error', error);

        setReady(true);
        setMovie(movie);
    };
    return <div>SingleMovie</div>;
}
