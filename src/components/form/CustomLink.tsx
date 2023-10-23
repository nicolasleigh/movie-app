import { Link } from 'react-router-dom';

export default function CustomLink({ children, to }) {
    return (
        <Link to={to} className='hover:text-gray-800 transition'>
            {children}
        </Link>
    );
}
