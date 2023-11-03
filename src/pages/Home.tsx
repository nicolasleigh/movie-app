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
        <div className='flex    max-w-full bg-cover m-auto max-h-full'>
            <SideNav />
            <article className='bg-stone-900 w-4/5   '>
                <header className='p-4 flex justify-between'>
                    <button className={headerBtnStyle}>
                        <AiOutlineLeft />
                    </button>
                    <div className='space-x-3'>
                        <button className={headerBtnStyle}>
                            <AiOutlineUser />
                        </button>
                        <button className={headerBtnStyle}>
                            <AiOutlineSetting />
                        </button>
                    </div>
                </header>
                <section className='relative mx-4 mb-4 h-64 md:h-[500px]  '>
                    <div className='absolute inset-0 rounded-2xl bg-gradient-to-r from-black  '></div>
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
                    </button>
                </section>
                <section className='flex justify-between  px-4 mb-4'>
                    <img
                        src='/poster/215333h1.jpg'
                        alt=''
                        className={posterStyle}
                    />
                    <img
                        src='/poster/325348h1.jpg'
                        alt=''
                        className={posterStyle}
                    />
                    <img
                        src='/poster/331707h1.jpg'
                        alt=''
                        className={posterStyle}
                    />
                    <img
                        src='/poster/334001h1.jpg'
                        alt=''
                        className={posterStyle}
                    />
                </section>
                <section className='flex justify-between px-4 mb-4'>
                    <img
                        src='/poster/342791h1.jpg'
                        alt=''
                        className={posterStyle}
                    />
                    <img
                        src='/poster/336686h1.jpg'
                        alt=''
                        className={posterStyle}
                    />
                    <img
                        src='/poster/338990h1.jpg'
                        alt=''
                        className={posterStyle}
                    />
                    <img
                        src='/poster/341620h1.jpg'
                        alt=''
                        className={posterStyle}
                    />
                </section>
                <section className='flex justify-between px-4 mb-4'>
                    <img
                        src='/poster/343720h1.jpg'
                        alt=''
                        className={posterStyle}
                    />
                    <img
                        src='/poster/343721h1.jpg'
                        alt=''
                        className={posterStyle}
                    />
                    <img
                        src='/poster/344719h1.jpg'
                        alt=''
                        className={posterStyle}
                    />
                    <img
                        src='/poster/345305h1.jpg'
                        alt=''
                        className={posterStyle}
                    />
                </section>
            </article>
        </div>
    );
}
