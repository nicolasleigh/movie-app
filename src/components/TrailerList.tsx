import Slider from 'react-slick';

export default function TrailerList() {
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
            <h2>Trailer</h2>
            <Slider {...settings}>
                <div className='p-2'>
                    <img
                        src='/poster/343720h1.jpg'
                        alt=''
                        className='rounded shadow-inner'
                    />
                </div>
                <div className='p-2'>
                    <img
                        src='/poster/343721h1.jpg'
                        alt=''
                        className='rounded'
                    />
                </div>
                <div id='img2' className='p-2'>
                    <img
                        src='/poster/344719h1.jpg'
                        alt=''
                        className='rounded'
                    />
                </div>
                <div className='p-2 '>
                    <img
                        src='/poster/345305h1.jpg'
                        alt=''
                        className='rounded  shadow-inset '
                    />
                </div>
                <div className='p-2'>
                    <img
                        src='/poster/325348h1.jpg'
                        alt=''
                        className='rounded'
                    />
                </div>
                <div className='p-2'>
                    <img
                        src='/poster/331707h1.jpg'
                        alt=''
                        className='rounded'
                    />
                </div>
                <div className='p-2'>
                    <img
                        src='/poster/334001h1.jpg'
                        alt=''
                        className='rounded'
                    />
                </div>
            </Slider>
        </div>
    );
}
