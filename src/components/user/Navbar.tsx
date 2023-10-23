import Container from '../Container';
import { Link, useNavigate } from 'react-router-dom';
import { BsFillSunFill } from 'react-icons/bs';
import { useAuth, useTheme } from '../../hooks';
import SearchForm from '../form/SearchForm';

interface AuthInfo {
    isLoggedIn: boolean;
}

export default function Navbar() {
    const { toggleTheme } = useTheme();
    const { authInfo, logout } = useAuth();
    const { isLoggedIn } = authInfo as AuthInfo;
    const navigate = useNavigate();

    const handleSubmit = (value: string) => {
        navigate('/movie/search?title=' + value);
    };

    return (
        <div className='bg-pri text-white'>
            <Container className='p-2'>
                <div className='flex justify-between items-center'>
                    <Link to='/'>
                        <img
                            src='/vector/default.svg'
                            alt='logo'
                            className='h-10 w-10'
                        />
                    </Link>
                    <ul className='flex justify-center items-center space-x-5'>
                        <li>
                            <button
                                onClick={toggleTheme}
                                className='dark:text-white text-light-gray text-lg '
                            >
                                <BsFillSunFill />
                            </button>
                        </li>
                        <li>
                            <SearchForm
                                placeholder='Search'
                                onSubmit={handleSubmit}
                            />
                        </li>
                        <li>
                            {isLoggedIn ? (
                                <button onClick={logout}>Log out</button>
                            ) : (
                                <Link to='/auth/sign-in'>Log in</Link>
                            )}
                        </li>
                    </ul>
                </div>
            </Container>
        </div>
    );
}
