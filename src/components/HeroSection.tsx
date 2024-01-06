import { AiFillStar, AiOutlineRight } from 'react-icons/ai';

export default function HeroSection() {
  return (
    <div className='mx-auto max-w-screen-xl'>
      <div className='absolute inset-0 bg-blue-500 '></div>
      <figure className='relative'>
        <img
          src='/stranger-things.jpg'
          alt='stranger things wallpaper'
          className=' w-full h-full contrast-125 '
        />
        <figcaption className='absolute top-5 sm:top-14 lg:top-24 left-4 lg:left-8'>
          <h1 className=' text-gray-300 w-72 lg:w-96 mb-4 sm:mb-6 lg:mb-9 font-serif font-semibold text-md sm:text-2xl md:text-3xl lg:text-4xl  '>
            Stranger Things
          </h1>
          <p className=' text-gray-400 w-48 sm:w-60 lg:w-96 md:w-72 mb-4 sm:mb-6 font-normal text-xs sm:text-sm md:text-lg  '>
            in 1983, a scientist is attacked by an unseen creature at a
            laboratory. 12-year-old Will Byers encounters the creature and
            mysteriously vanishes while cycling home.
          </p>
          <div className='flex items-center gap-3 sm:block '>
            <div className='flex space-x-1 text-sm sm:text-lg   text-red-700 sm:mb-4 lg:text-xl'>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            <button className='  flex items-center space-x-3 sm:text-lg   rounded-2xl text-white text-xs shadow-md bg-slate-500 opacity-60 hover:bg-slate-400 py-1 px-3 '>
              <span>Watch now</span>
              <AiOutlineRight />
            </button>
          </div>
        </figcaption>
      </figure>
    </div>
  );
}
