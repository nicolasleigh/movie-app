import { Route, Routes } from 'react-router-dom';
import AdminNavBar from './AdminNavBar';
import Header from './Header';
import Dashboard from './Dashboard';
import Movies from './Movies';
import Actors from './Actors';
import SearchMovie from './SearchMovie';

export default function AdminNav() {
    return (
        <div>
            <div className='flex bg-red-400'>
                <AdminNavBar />
                <div className='flex-1 max-w-screen-xl'>
                    <Header />
                </div>
            </div>
            <Routes>
                <Route path='/admin/dashboard' element={<Dashboard />} />
                <Route path='/admin/movies' element={<Movies />} />
                <Route path='/admin/actors' element={<Actors />} />
                <Route path='/admin/search' element={<SearchMovie />} />
            </Routes>
        </div>
    );
}
