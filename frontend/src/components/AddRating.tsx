import { useState, useEffect } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

export default function AddRating({
  ratings,
  selectedRatings,
  handleMouseEnter,
}) {
  return (
    <div>
      <div className='  rounded space-y-3'>
        <div className='text-highlight dark:text-highlight-dark flex items-center relative'>
          <StarsOutlined ratings={ratings} onMouseEnter={handleMouseEnter} />
          <div className='flex items-center absolute top-1/2 -translate-y-1/2'>
            <StarsFill
              ratings={selectedRatings}
              onMouseEnter={handleMouseEnter}
            />
          </div>
        </div>

        {/* <Submit
                    busy={busy}
                    onClick={handleSubmit}
                    value='Rate This Movie'
                /> */}
      </div>
    </div>
  );
}

const StarsOutlined = ({ ratings, onMouseEnter }) => {
  return ratings.map((_, index) => {
    return (
      <AiOutlineStar
        onMouseEnter={() => onMouseEnter(index)}
        className='cursor-pointer text-red-600'
        key={index}
        size={24}
      />
    );
  });
};

const StarsFill = ({ ratings, onMouseEnter }) => {
  return ratings.map((_, index) => {
    return (
      <AiFillStar
        onMouseEnter={() => onMouseEnter(index)}
        className='cursor-pointer text-red-600'
        key={index}
        size={24}
      />
    );
  });
};
