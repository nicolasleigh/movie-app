import SideNav from '../components/SideNav';

export default function Overview() {
    const movieNumber = 20;
    const trailerNumber = 100;
    const totalMin = 2400;
    const userNumber = 25;
    return (
        <div className='flex'>
            <SideNav />
            <div className='ml-60 w-full'>
                <div
                    className=' p-4   md:p-8 dark:bg-gray-800 '
                    id='stats'
                    role='tabpanel'
                    aria-labelledby='stats-tab'
                >
                    <dl className='grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-4 border rounded dark:text-white sm:p-8'>
                        <div className='flex flex-col items-center justify-center'>
                            <dt className='mb-2 text-3xl font-extrabold'>
                                {movieNumber}+
                            </dt>
                            <dd className='text-gray-500 dark:text-gray-400'>
                                Famous movies
                            </dd>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <dt className='mb-2 text-3xl font-extrabold'>
                                {trailerNumber}+
                            </dt>
                            <dd className='text-gray-500 dark:text-gray-400'>
                                Excellent trailers
                            </dd>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <dt className='mb-2 text-3xl font-extrabold'>
                                {totalMin}+
                            </dt>
                            <dd className='text-gray-500 dark:text-gray-400'>
                                Total minutes
                            </dd>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <dt className='mb-2 text-3xl font-extrabold'>
                                {userNumber}+
                            </dt>
                            <dd className='text-gray-500 dark:text-gray-400'>
                                Happy users
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    );
}
