import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/user/Navbar';
import Home from './components/Home';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import ForgetPass from './components/auth/ForgetPass';
import VerifyEmail from './components/auth/VerifyEmail';
import ResetPass from './components/auth/ResetPass';

function App() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/auth/sign-in' element={<SignIn />} />
                <Route path='/auth/sign-up' element={<SignUp />} />
                <Route path='/auth/forget-password' element={<ForgetPass />} />
                <Route path='/auth/verify-email' element={<VerifyEmail />} />
                <Route path='/auth/reset-password' element={<ResetPass />} />
            </Routes>
        </div>
    );
}

export default App;
