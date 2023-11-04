import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import ForgetPass from './components/auth/ForgetPass';
import VerifyEmail from './components/auth/VerifyEmail';
import ResetPass from './components/auth/ResetPass';
import AdminNav from './admin/AdminNav';
import { ConfigProvider } from 'antd';
import CreateMovie from './pages/MovieInfoForm';
import UploadMovie from './pages/UploadMovie';

function App() {
    return (
        <div>
            <ConfigProvider
                theme={{
                    components: {
                        Select: {
                            // singleItemHeightLG: 50,
                            // optionHeight: 50,
                            multipleItemHeightLG: 40,
                            // optionPadding: 3,
                        },
                    },
                }}
            >
                <Routes>
                    <Route path='/admin' element={<AdminNav />} />
                    <Route path='/' element={<Home />} />
                    <Route path='/create-movie' element={<CreateMovie />} />
                    <Route path='/upload-movie' element={<UploadMovie />} />
                    <Route path='/auth/sign-in' element={<SignIn />} />
                    <Route path='/auth/sign-up' element={<SignUp />} />
                    <Route
                        path='/auth/forget-password'
                        element={<ForgetPass />}
                    />
                    <Route
                        path='/auth/verify-email'
                        element={<VerifyEmail />}
                    />
                    <Route
                        path='/auth/reset-password'
                        element={<ResetPass />}
                    />
                </Routes>
            </ConfigProvider>
        </div>
    );
}

export default App;
