import Container from '../Container';
import { Link } from 'react-router-dom';
import { BsFillSunFill } from 'react-icons/bs';
import { useTheme } from '../../hooks';
import SearchForm from '../form/SearchForm';

export default function Navbar() {
    const { toggleTheme } = useTheme();
    return (
        <div>
            <Container>
                <div>
                    <Link to='/'>
                        <img
                            src='./vector/default.svg'
                            alt='logo'
                            className='h-10 w-10'
                        />
                    </Link>
                    <ul>
                        <li>
                            <button onClick={toggleTheme}>
                                <BsFillSunFill />
                            </button>
                        </li>
                        <li>
                            <SearchForm />
                        </li>
                        <li>login and logout</li>
                    </ul>
                </div>
            </Container>
        </div>
    );
}
