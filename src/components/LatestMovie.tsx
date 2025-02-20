import Slider from 'react-slick';
import { useStyle } from '../hooks';

export default function LatestMovie() {
    const { homeImageStyle } = useStyle();
    const settings = {
        className: 'center',
        infinite: true,
        centerPadding: '5px',
        slidesToShow: 5,
        swipeToSlide: true,
        arrows: false,
    };
    return (
        <div className='w-3/4 mx-auto mb-5'>
            <h2>Latest Uploaded Movie</h2>
            <Slider {...settings}>
                <p className='p-2'>
                    <img
                        src='/poster/342791h1.jpg'
                        alt=''
                        className={homeImageStyle}
                    />
                </p>
                <p className='p-2'>
                    <img
                        src='/poster/336686h1.jpg'
                        alt=''
                        className={homeImageStyle}
                    />
                </p>
                <p className='p-2'>
                    <img
                        src='/poster/338990h1.jpg'
                        alt=''
                        className={homeImageStyle}
                    />
                </p>
                <p className='p-2'>
                    <img
                        src='/poster/338990h1.jpg'
                        alt=''
                        className={homeImageStyle}
                    />
                </p>

                <p className='p-2'>
                    <img
                        src='/poster/341620h1.jpg'
                        alt=''
                        className={homeImageStyle}
                    />
                </p>
                <p className='p-2'>
                    <img
                        src='/poster/325348h1.jpg'
                        alt=''
                        className={homeImageStyle}
                    />
                </p>
                <p className='p-2'>
                    <img
                        src='/poster/331707h1.jpg'
                        alt=''
                        className={homeImageStyle}
                    />
                </p>
                <p className='p-2'>
                    <img
                        src='/poster/334001h1.jpg'
                        alt=''
                        className={homeImageStyle}
                    />
                </p>
                <p className='p-2'>
                    <img
                        src='/poster/342791h1.jpg'
                        alt=''
                        className={homeImageStyle}
                    />
                </p>
                <p className='p-2'>
                    <img
                        src='/poster/336686h1.jpg'
                        alt=''
                        className={homeImageStyle}
                    />
                </p>
                <p className='p-2'>
                    <img
                        src='/poster/338990h1.jpg'
                        alt=''
                        className={homeImageStyle}
                    />
                </p>
                <p className='p-2'>
                    <img
                        src='/poster/338990h1.jpg'
                        alt=''
                        className={homeImageStyle}
                    />
                </p>
            </Slider>
        </div>
    );
}
