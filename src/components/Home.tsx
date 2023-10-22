import SlideShow from './user/SlideShow';
import TopMovies from './user/TopMovies';
import TopTVs from './user/TopTVs';

export default function Home() {
    return (
        <div>
            <SlideShow />
            <div>
                <TopMovies />
                <TopTVs />
            </div>
        </div>
    );
}
