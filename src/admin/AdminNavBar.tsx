import { AiOutlineHome } from 'react-icons/ai';
import { BiMoviePlay } from 'react-icons/bi';
import { FaUserNinja } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../hooks';

export default function AdminNavBar() {
    const { logout } = useAuth();
    return (
        <div className=''>
            <div className='flex flex-col justify-between h-screen bg-blue-500 w-48 border-r border-gray-500'>
                <ul>
                    <li className='mb-8'>
                        <Link to='/'>
                            <img
                                src='/vector/default-monochrome-black.svg'
                                alt='logo'
                                className='h-12 p-2'
                            />
                        </Link>
                    </li>
                    <li>
                        <NavItem to='/'>
                            <AiOutlineHome />
                            <span>Home</span>
                        </NavItem>
                    </li>
                    <li>
                        <NavItem to='/movies'>
                            <BiMoviePlay />
                            <span>Movies</span>
                        </NavItem>
                    </li>
                    <li>
                        <NavItem to='/actors'>
                            <FaUserNinja />
                            <span>Actors</span>
                        </NavItem>
                    </li>
                </ul>
                <div className='flex flex-col pb-5 px-4 '>
                    <span>Admin</span>
                    <button
                        onClick={logout}
                        className='flex items-center space-x-2'
                    >
                        <FiLogOut />
                        <span>LogOut</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

const NavItem = ({ children, to }: any) => {
    const navLinkStyle =
        ' flex items-center text-lg space-x-2 p-2 hover:opacity-80 transition ';
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                (isActive && 'text-gray-500') + navLinkStyle
            }
        >
            {children}
        </NavLink>
    );
};
