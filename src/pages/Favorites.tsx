import SideNav from '../components/SideNav';

export default function Favorites() {
    return (
        <div className='flex'>
            <SideNav />
            <div className='ml-60 w-full'>
                <div className='grid grid-cols-2 md:grid-cols-5 gap-6 pl-8 pr-4 py-4'>
                    <div>
                        <img
                            src='/poster/215333h1.jpg'
                            alt=''
                            className='rounded'
                        />
                    </div>
                    <div>
                        <img
                            src='/poster/325348h1.jpg'
                            alt=''
                            className='rounded'
                        />
                    </div>
                    <div>
                        <img
                            src='/poster/331707h1.jpg'
                            alt=''
                            className='rounded'
                        />
                    </div>

                    <div>
                        <img
                            src='/poster/334001h1.jpg'
                            alt=''
                            className='rounded'
                        />
                    </div>
                    <div>
                        <img
                            src='/poster/325348h1.jpg'
                            alt=''
                            className='rounded'
                        />
                    </div>
                    <div>
                        <img
                            src='/poster/325348h1.jpg'
                            alt=''
                            className='rounded'
                        />
                    </div>

                    <div>
                        <img
                            src='/poster/331707h1.jpg'
                            alt=''
                            className='rounded'
                        />
                    </div>
                    <div>
                        <img
                            src='/poster/334001h1.jpg'
                            alt=''
                            className='rounded'
                        />
                    </div>
                    <div>
                        <img
                            src='/poster/343721h1.jpg'
                            alt=''
                            className='rounded'
                        />
                    </div>
                    <div>
                        <img
                            src='/poster/345305h1.jpg'
                            alt=''
                            className='rounded '
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
