import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

export default function ReviewItem() {
    return (
        <figure className='max-w-screen-md mb-4 border p-1 rounded'>
            <div className='flex items-center text-red-700 mb-1'>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
            </div>
            <blockquote>
                <p className='text-sm  text-gray-900 dark:text-white'>
                    "Flowbite is just awesome. It contains tons of predesigned
                    components and pages starting from login screen to complex
                    dashboard. Perfect choice for your next SaaS application."
                </p>
            </blockquote>
            <figcaption className='flex items-center mt-2 space-x-3 rtl:space-x-reverse'>
                <img
                    className='w-6 h-6 rounded-full'
                    src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png'
                    alt='profile picture'
                />
                <div className='flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-300 dark:divide-gray-700'>
                    <cite className='pe-3 font-medium text-gray-900 dark:text-white'>
                        Bonnie Green
                    </cite>
                    <cite className='ps-3 text-sm text-gray-500 dark:text-gray-400'>
                        CTO at Flowbite
                    </cite>
                </div>
            </figcaption>
        </figure>
    );
}
