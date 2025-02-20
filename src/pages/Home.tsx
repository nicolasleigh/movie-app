import { useEffect, useState } from 'react';
import { getLatestMovie } from '../api/movie';
import HeroSection from '../components/HeroSection';
import HeroSlide from '../components/HeroSlide';
import { Link } from 'react-router-dom';

// export default function Home() {
//     return (
//         <>
//             <Navbar />
//             <SlideShow />
//         </>
//     );
// }
interface movieType {
  id: string;
  poster: string;
  title: string;
}

// type movieType = [
//   {
//     id: string;
//     poster: string;
//     title: string;
//   }
// ];

const posterUrl = import.meta.env.VITE_POSTER_BASE_URL;

export default function Home() {
  const [movie, setMovie] = useState<movieType[]>([]);

  useEffect(() => {
    const getLatest = async () => {
      const data = await getLatestMovie();
      setMovie(data.movies);
    };
    getLatest();
  }, []);
  // const {id,} = movie
  return (
    <div className='bg-black'>
      <div className='mx-auto max-w-screen-xl flex flex-col gap-10 '>
        <HeroSection />
        <section className='z-10 '>
          {/* <h2 className='text-white mb-4'>Special offer</h2> */}
          <HeroSlide />
        </section>
        <section className='mx-4'>
          <h2 className='text-white mb-3'>Latest uploads</h2>
          <figure className='flex flex-wrap gap-4 md:gap-6  justify-around '>
            {movie &&
              movie.map((e) => {
                return (
                  <Link
                    to={`/movieInfo/${e.id}`}
                    key={e.poster}
                    className='w-1/4 sm:w-1/5 md:w-1/6 '
                  >
                    <img
                      src={`${posterUrl}${e.poster}`}
                      alt={e.title}
                      className='w-[100%] mb-[2px] md:mb-2 rounded-md opacity-90  contrast-75 cursor-pointer hover:scale-105 transition duration-200 ease-out'
                    />
                    <figcaption className='text-slate-300 text-xs sm:text-sm text-center'>
                      {e.title}
                    </figcaption>
                  </Link>
                );
              })}
          </figure>
        </section>
      </div>
    </div>
  );
  // return (
  //   // <div className='flex    max-w-full bg-cover m-auto max-h-full'>
  //   <div className='flex '>
  //     <SideNav />
  //     <article className='bg-white flex-1 w-3/4 '>
  //       <header className='p-4 flex justify-between ml-60 '>
  //         <div className='flex w-3/4 mx-auto items-center justify-between'>
  //           <HeaderSearch />
  //           <div className='space-x-3'>
  //             <button className={headerBtnStyle}>
  //               <AiOutlineUser />
  //             </button>
  //             <button className={headerBtnStyle}>
  //               <AiOutlineSetting />
  //             </button>
  //           </div>
  //         </div>
  //       </header>
  //       <section className='px-8 py-4 ml-60'>
  //         <HeroSlide />
  //       </section>
  //
  //       {/*
  //       <section className='flex justify-between  px-4 mb-4 ml-60 '>
  //         <TopRatedMovie />
  //       </section> */}
  //       <section className='flex justify-between px-4 mb-4 ml-60'>
  //         <LatestMovie />
  //       </section>
  //       {/* <section className='flex justify-between px-4 mb-4 ml-60'>
  //         <TrailerList />
  //       </section> */}
  //     </article>
  //   </div>
  // );
}
