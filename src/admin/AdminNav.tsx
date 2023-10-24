import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminNavBar from './AdminNavBar';
import Header from './Header';
import Dashboard from './Dashboard';
import Movies from './Movies';
import Actors from './Actors';
import SearchMovie from './SearchMovie';
import MovieUpload from '../components/modal/MovieUpload';
import ActorUpload from '../components/modal/ActorUpload';

export default function AdminNav() {
    const [showMovieUpload, setShowMovieUpload] = useState(false);
    const [showActorUpload, setShowActorUpload] = useState(false);

    const displayMovieUpload = () => {
        setShowMovieUpload(true);
    };
    const displayActorUpload = () => {
        setShowActorUpload(true);
    };
    const hideMovieUpload = () => {
        setShowMovieUpload(false);
    };
    const hideActorUpload = () => [setShowActorUpload(false)];
    return (
        <div>
            <div className='flex bg-red-400'>
                <AdminNavBar />
                <div className='flex-1 max-w-screen-xl'>
                    <Header
                        addMovie={displayMovieUpload}
                        addActor={displayActorUpload}
                    />
                </div>
            </div>
            <Routes>
                <Route path='/admin/dashboard' element={<Dashboard />} />
                <Route path='/admin/movies' element={<Movies />} />
                <Route path='/admin/actors' element={<Actors />} />
                <Route path='/admin/search' element={<SearchMovie />} />
            </Routes>
            <MovieUpload visible={showMovieUpload} onClose={hideMovieUpload} />
            <ActorUpload visible={showActorUpload} onClose={hideActorUpload} />
        </div>
    );
}
