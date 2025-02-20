import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState, useEffect, useRef } from 'react';
// import Container from '../Container';
import Slider, { CustomArrowProps } from 'react-slick';
import { Carousel } from 'antd';
import { Link } from 'react-router-dom';
import { getLatestMovie } from '../../api/movie';
import { AiOutlineLeftSquare, AiOutlineRightSquare } from 'react-icons/ai';
import Container from '../Container';

interface IMovieArr {
    poster: string[];
    title: string;
}

export default function SlideShow() {
    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();
    const slider1 = useRef(null);
    const slider2 = useRef(null);
    const [movieArr, setMovieArr] = useState<Array<IMovieArr>>([]);
    const fetchLatestMovie = async () => {
        const { movies } = await getLatestMovie();
        setMovieArr(movies);
    };
    useEffect(() => {
        fetchLatestMovie();
        // console.log('movieArr1: ', movieArr);
    }, []);
    // console.log('movieArr2: ', movieArr);

    const src = (i: number) => movieArr[i]?.poster?.[1];
    const srcSet = (i: number) =>
        `${movieArr[i]?.poster?.[0]} 1080w, ${movieArr[i]?.poster?.[1]} 720w,  ${movieArr[i]?.poster?.[2]} 480w`;
    const sizes =
        '(max-width:500px) 100vw, (max-width:800px) 75vw, (max-width:1200px) 60vw, 1080px'; //TODO
    const title = (i: number) => movieArr?.[i]?.title;

    const imgProps = (index: number) => {
        return {
            src: src(index),
            srcSet: srcSet(index),
            alt: title(index),
            sizes,
        };
    };

    const NextArrow = ({
        currentSlide,
        slideCount,
        ...props
    }: CustomArrowProps) => (
        <div {...props}>
            <AiOutlineRightSquare />
        </div>
    );
    const PrevArrow = ({
        currentSlide,
        slideCount,
        ...props
    }: CustomArrowProps) => (
        <div {...props}>
            <AiOutlineLeftSquare />
        </div>
    );

    useEffect(() => {
        setNav1(slider1.current);
        setNav2(slider2.current);
    }, []);

    const settings = {
        arrows: true,
        autoplaySpeed: 3000,
        speed: 1000,
        infinite: true,
        slidesToScroll: 1,
        pauseOnHover: true,
    };

    const verticalStyle = 'rounded mx-2 my-2';
    const horizontalStyle = 'mt-2';

    return (
        <Container>
            <div className='w-full flex'>
                <div className='w-4/5 aspect-video'>
                    <Slider
                        {...settings}
                        autoplay={true}
                        slidesToShow={1}
                        // dots={true}
                        asNavFor={nav2}
                        ref={slider1}
                        nextArrow={<NextArrow />}
                        prevArrow={<PrevArrow />}
                    >
                        <Link to='/'>
                            <img {...imgProps(0)} className={horizontalStyle} />
                        </Link>
                        <Link to='/'>
                            <img {...imgProps(1)} className={horizontalStyle} />
                        </Link>
                        <Link to='/'>
                            <img {...imgProps(2)} className={horizontalStyle} />
                        </Link>
                        <Link to='/'>
                            <img {...imgProps(3)} className={horizontalStyle} />
                        </Link>
                        <Link to='/'>
                            <img {...imgProps(4)} className={horizontalStyle} />
                        </Link>
                    </Slider>
                </div>
                <div className='w-1/5'>
                    <Slider
                        {...settings}
                        autoplay
                        slidesToShow={4}
                        asNavFor={nav1}
                        ref={slider2}
                        vertical={true}
                    >
                        <img {...imgProps(0)} className={verticalStyle} />
                        <img {...imgProps(1)} className={verticalStyle} />
                        <img {...imgProps(2)} className={verticalStyle} />
                        <img {...imgProps(3)} className={verticalStyle} />
                        <img {...imgProps(4)} className={verticalStyle} />
                    </Slider>
                </div>
            </div>
        </Container>
    );
}
