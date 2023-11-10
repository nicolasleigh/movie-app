import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import ForgetPass from './components/auth/ForgetPass';
import VerifyEmail from './components/auth/VerifyEmail';
import ResetPass from './components/auth/ResetPass';
import AdminNav from './admin/AdminNav';
import UploadMovie from './pages/UploadMovie';
import MovieInfoForm from './pages/MovieInfoForm';
import SingleMovie from './pages/SingleMovie';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AddReview from './pages/AddReview';
import MovieInfo from './pages/MovieInfo';

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Routes>
                <Route path='/admin' element={<AdminNav />} />
                <Route path='/' element={<Home />} />
                <Route path='/create-movie' element={<MovieInfoForm />} />
                <Route path='/upload-movie' element={<UploadMovie />} />
                <Route path='/movie/:movieId' element={<SingleMovie />} />
                <Route path='/review/:movieId' element={<AddReview />} />
                <Route path='/movieInfo/:movieId' element={<MovieInfo />} />
                <Route path='/auth/sign-in' element={<SignIn />} />
                <Route path='/auth/sign-up' element={<SignUp />} />
                <Route path='/auth/forget-password' element={<ForgetPass />} />
                <Route path='/auth/verify-email' element={<VerifyEmail />} />
                <Route path='/auth/reset-password' element={<ResetPass />} />
            </Routes>
        </QueryClientProvider>
    );
}

export default App;
