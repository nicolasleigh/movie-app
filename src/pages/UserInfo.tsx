import SideNav from '../components/SideNav';

export default function UserInfo() {
    const uploadNumber = 24;
    const reviewNumber = 19;
    const totalWatchedMin = 145;
    const uploadMin = 1200;
    const favoriteNumber = 12;
    return (
        <div className='flex'>
            <SideNav />
            <div className='ml-60 w-full'>
                <div className='flex m-auto flex-col items-center justify-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'>
                    <div className='flex flex-col items-center p-4 '>
                        <img
                            className='w-40 h-40'
                            // className='w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 mb-4'
                            src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                            alt='Default avatar'
                        />
                        {/* <h2 className='font-semibold text-lg'>Jackson Andy</h2>
                        <h3 className='text-sm'>jacksonandy001@gmail.com</h3> */}
                    </div>

                    <div className='flex flex-col justify-between p-4 leading-normal '>
                        <ol className='max-w-md space-y-1 text-gray-500 list-decimal list-inside dark:text-gray-400 '>
                            <li>
                                Uploaded{' '}
                                <span className='font-semibold text-gray-900 dark:text-white'>
                                    {uploadNumber}
                                </span>{' '}
                                movies
                            </li>
                            <li>
                                Uploaded{' '}
                                <span className='font-semibold text-gray-900 dark:text-white'>
                                    {uploadMin}
                                </span>{' '}
                                minutes
                            </li>
                            <li>
                                Reviewed{' '}
                                <span className='font-semibold text-gray-900 dark:text-white'>
                                    {reviewNumber}
                                </span>{' '}
                                movies
                            </li>
                            <li>
                                Watched{' '}
                                <span className='font-semibold text-gray-900 dark:text-white'>
                                    {totalWatchedMin}
                                </span>{' '}
                                minutes
                            </li>
                            <li>
                                Prefer{' '}
                                <span className='font-semibold text-gray-900 dark:text-white'>
                                    {favoriteNumber}
                                </span>{' '}
                                movies
                            </li>
                        </ol>
                        <button className='bg-blue-300 mt-4 rounded text-md'>
                            Edit Profile
                        </button>
                        <button className='bg-red-300 mt-2 rounded text-md'>
                            Delete Account
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
