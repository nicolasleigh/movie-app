import {
    AiFillStar,
    AiOutlineLeft,
    AiOutlineRight,
    AiOutlineSetting,
    AiOutlineStar,
    AiOutlineUser,
} from 'react-icons/ai';
import Navbar from '../components/user/Navbar';
import SlideShow from '../components/user/SlideShow';
import SideNav from '../components/SideNav';
import HeroSlide from '../components/HeroSlide';
import TopRatedMovie from '../components/TopRatedMovie';
import LatestMovie from '../components/LatestMovie';
import TrailerList from '../components/TrailerList';
import HeaderSearch from '../components/HeaderSearch';

// export default function Home() {
//     return (
//         <>
//             <Navbar />
//             <SlideShow />
//         </>
//     );
// }

export default function Home() {
    const headerBtnStyle =
        'rounded-full text-white shadow-md bg-slate-500 opacity-60 hover:bg-slate-400 p-1 font-semibold text-lg';
    const posterStyle =
        'rounded-xl w-[23%] border-8   border-stone-800/30 shadow-sm   ';
    return (
        // <div className='flex    max-w-full bg-cover m-auto max-h-full'>
        <div className='flex '>
            <SideNav />
            <article className='bg-white flex-1 w-3/4 '>
                <header className='p-4 flex justify-between ml-60 '>
                    <div className='flex w-3/4 mx-auto items-center justify-between'>
                        <HeaderSearch />
                        <div className='space-x-3'>
                            <button className={headerBtnStyle}>
                                <AiOutlineUser />
                            </button>
                            <button className={headerBtnStyle}>
                                <AiOutlineSetting />
                            </button>
                        </div>
                    </div>
                </header>
                <section className='px-8 py-4 ml-60'>
                    <HeroSlide />
                </section>
                {/* <div className='absolute inset-0 rounded-2xl bg-gradient-to-r from-black  '></div>
                    <img
                        src='/stranger-things.jpg'
                        alt='stranger things wallpaper'
                        className='rounded-2xl w-full h-full contrast-125 '
                    />
                    <h1 className='absolute top-10 text-gray-300 w-72 font-serif font-semibold text-2xl  left-2'>
                        Stranger Things
                    </h1>
                    <p className='absolute top-1/2 -translate-y-1/2 text-gray-400 w-60 font-normal text-xs left-2'>
                        in 1983, a scientist is attacked by an unseen creature
                        at a laboratory. 12-year-old Will Byers encounters the
                        creature and mysteriously vanishes while cycling home.
                    </p>
                    <div className='flex space-x-1 absolute top-3/4 -translate-y-3/4 left-2 text-red-700'>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiOutlineStar />
                    </div>
                    <button className='absolute top-3/4 translate-y-4 left-2 flex items-center space-x-3  rounded-2xl text-white text-sm shadow-md bg-slate-500 opacity-90 hover:bg-slate-400 py-1 px-3 '>
                        <span>Watch</span>
                        <AiOutlineRight />
                    </button> */}

                <section className='flex justify-between  px-4 mb-4 ml-60 '>
                    <TopRatedMovie />
                </section>
                <section className='flex justify-between px-4 mb-4 ml-60'>
                    <LatestMovie />
                </section>
                <section className='flex justify-between px-4 mb-4 ml-60'>
                    <TrailerList />
                </section>
            </article>
        </div>
    );
}
