import Slider from 'react-slick';
import { useStyle } from '../hooks';

export default function TopRatedMovie() {
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
            <h2>Top Rated Movie</h2>
            <Slider {...settings}>
                <div className='p-2'>
                    <img
                        src='/poster/215333h1.jpg'
                        alt=''
                        className={homeImageStyle}
                    />
                </div>
                <div className='p-2'>
                    <img
                        src='/poster/325348h1.jpg'
                        alt=''
                        className={homeImageStyle}
                    />
                </div>
                <div className='p-2'>
                    <img
                        src='/poster/331707h1.jpg'
                        alt=''
                        className={homeImageStyle}
                    />
                </div>
                <div className='p-2'>
                    <img
                        src='/poster/334001h1.jpg'
                        alt=''
                        className={homeImageStyle}
                    />
                </div>
                <div className='p-2'>
                    <img
                        src='/poster/325348h1.jpg'
                        alt=''
                        className={homeImageStyle}
                    />
                </div>
                <div className='p-2'>
                    <img
                        src='/poster/331707h1.jpg'
                        alt=''
                        className={homeImageStyle}
                    />
                </div>
                <div className='p-2'>
                    <img
                        src='/poster/334001h1.jpg'
                        alt=''
                        className={homeImageStyle}
                    />
                </div>
            </Slider>
        </div>
    );
}
