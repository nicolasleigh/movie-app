// import { Carousel } from 'flowbite';
// import type {
//     CarouselItem,
//     CarouselOptions,
//     CarouselInterface,
// } from 'flowbite';
import { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineLeft,
  AiOutlineRight,
} from 'react-icons/ai';

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <button onClick={onClick} className={className}>
      <div className='text-lg text-black'>
        <AiOutlineRight />
      </div>
    </button>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <button onClick={onClick} className={className}>
      <div className='text-lg text-black'>
        <AiOutlineLeft />
      </div>
    </button>
  );
}

export default function HeroSlide() {
  const image = [
    'https://images.unsplash.com/photo-1683009427479-c7e36bbb7bca?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1682687982183-c2937a74257c?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1682687982501-1e58ab814714?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1699116550661-bea051952f96?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ];
  const settings = {
    className: 'center',
    centerMode: true,
    centerPadding: '5px',
    dots: true,
    infinite: true,
    speed: 700,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    initialSlide: 0,
    mobileFirst: true,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: 'ease-out',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: true,
        },
      },

      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          centerPadding: '0px', // Add this line to remove centerPadding for smallest screens
        },
      },
    ],
  };

  return (
    <div id='hero' className='w-1/2 sm:w-3/4 lg:w-4/5 mx-auto mb-5'>
      <Slider {...settings}>
        <div className='p-2 '>
          <img src={image[0]} className='rounded-sm ' />
        </div>
        <div className='p-2 '>
          <img src={image[1]} className='rounded-sm' />
        </div>
        <div className='p-2 '>
          <img src={image[2]} className='rounded-sm' />
        </div>
        <div className='p-2 '>
          <img src={image[3]} className='rounded-sm' />
        </div>
      </Slider>
    </div>
  );
}
