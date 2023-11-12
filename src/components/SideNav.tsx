import { Link } from 'react-router-dom';

export default function SideNav() {
    const navItemStyle =
        'cursor-pointer hover:bg-slate-400 w-10/12 px-4 py-2 rounded transition';
    // return (
    //     <nav className=' bg-stone-950  w-1/5  text-white flex flex-col items-center space-y-4 py-20  '>
    //         <div className={navItemStyle}>Home</div>
    //         <div className={navItemStyle}>Movie</div>
    //         <div className={navItemStyle}>Actor</div>
    //         <div className={navItemStyle}>User</div>
    //         <div className={navItemStyle}>Setting</div>
    //     </nav>
    // );

    return (
        <div className='fixed w-60 '>
            <button
                data-drawer-target='default-sidebar'
                data-drawer-toggle='default-sidebar'
                aria-controls='default-sidebar'
                type='button'
                className='inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
            ></button>

            <aside
                id='default-sidebar'
                className=' w-10 sm:w-64  h-screen transition-transform -translate-x-full sm:translate-x-0'
                aria-label='Sidenav'
            >
                <div className='overflow-y-auto py-5 px-3 h-full bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700'>
                    <ul className='space-y-2'>
                        <li>
                            <Link to='/'>
                                <div
                                    href='/'
                                    className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'
                                >
                                    <span className='ml-3'>Home</span>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <button
                                type='button'
                                className='flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
                                aria-controls='dropdown-pages'
                                data-collapse-toggle='dropdown-pages'
                            >
                                <Link to='/create-movie '>
                                    <span className='flex-1 ml-3 text-left whitespace-nowrap'>
                                        Movie Info Form
                                    </span>
                                </Link>
                            </button>
                            <ul
                                id='dropdown-pages'
                                className='hidden py-2 space-y-2'
                            >
                                <li>
                                    <div className='flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'>
                                        Settings
                                    </div>
                                </li>
                                <li>
                                    <div className='flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'>
                                        Kanban
                                    </div>
                                </li>
                                <li>
                                    <a className='flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'>
                                        Calendar
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <button
                                type='button'
                                className='flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
                                aria-controls='dropdown-sales'
                                data-collapse-toggle='dropdown-sales'
                            >
                                <Link to='/upload-movie'>
                                    <span className='flex-1 ml-3 text-left whitespace-nowrap'>
                                        Movie Upload Form
                                    </span>
                                </Link>
                            </button>
                            <ul
                                id='dropdown-sales'
                                className='hidden py-2 space-y-2'
                            >
                                <li>
                                    <a className='flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'>
                                        Products
                                    </a>
                                </li>
                                <li>
                                    <a className='flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'>
                                        Billing
                                    </a>
                                </li>
                                <li>
                                    <a className='flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'>
                                        Invoice
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <div className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'>
                                <Link to='/movie/653f5852e98aadd81b1f5ce2'>
                                    <span className='flex-1 ml-3 whitespace-nowrap'>
                                        Single Movie
                                    </span>
                                </Link>

                                <span className='inline-flex justify-center items-center w-5 h-5 text-xs font-semibold rounded-full text-primary-800 bg-primary-100 dark:bg-primary-200 dark:text-primary-800'>
                                    6
                                </span>
                            </div>
                        </li>
                        <li>
                            <button
                                type='button'
                                className='flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
                                aria-controls='dropdown-authentication'
                                data-collapse-toggle='dropdown-authentication'
                            >
                                <Link to='/review/654222479d08565167bd62ec'>
                                    <span className='flex-1 ml-3 text-left whitespace-nowrap'>
                                        Add Review
                                    </span>
                                </Link>
                            </button>
                            <ul
                                id='dropdown-authentication'
                                className='hidden py-2 space-y-2'
                            >
                                <li>
                                    <a className='flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'>
                                        Sign In
                                    </a>
                                </li>
                                <li>
                                    <a className='flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'>
                                        Sign Up
                                    </a>
                                </li>
                                <li>
                                    <a className='flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'>
                                        Forgot Password
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <ul className='pt-5 mt-5 space-y-2 border-t border-gray-200 dark:border-gray-700'>
                        <li>
                            <div className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group'>
                                <Link to='/movieInfo/654222479d08565167bd62ec'>
                                    <span className='ml-3'>Movie Info</span>
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group'>
                                <Link to='/user'>
                                    <span className='ml-3'>User</span>
                                </Link>
                            </div>
                        </li>
                        <li>
                            <a className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group'>
                                <span className='ml-3'>Help</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='hidden absolute bottom-0 left-0 justify-center p-4 space-x-4 w-full lg:flex bg-white dark:bg-gray-800 z-20 border-r border-gray-200 dark:border-gray-700'>
                    <a className='inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-600'></a>
                    <a
                        data-tooltip-target='tooltip-settings'
                        className='inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer dark:text-gray-400 dark:hover:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600'
                    ></a>
                    <div
                        id='tooltip-settings'
                        role='tooltip'
                        className='inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip'
                    >
                        Settings page
                        <div className='tooltip-arrow' data-popper-arrow></div>
                    </div>
                </div>
            </aside>
        </div>
    );
}
