import { BsFillSunFill } from 'react-icons/bs';
import SearchForm from '../components/form/SearchForm';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../hooks';
import { HeaderDropDown } from '../components/HeaderDropDown';

export default function Header({ addMovie, addActor }) {
    const navigate = useNavigate();
    const { toggleTheme } = useTheme();

    const handleSearch = (query: string) => {
        navigate('/search?title=' + query);
    };
    return (
        <div className='flex justify-between items-center'>
            <SearchForm placeholder='Search' onSubmit={handleSearch} />
            <div className='flex items-center space-x-4'>
                <button onClick={toggleTheme}>
                    <BsFillSunFill size={26} />
                </button>
                <HeaderDropDown addMovie={addMovie} addActor={addActor} />
            </div>
        </div>
    );
}
