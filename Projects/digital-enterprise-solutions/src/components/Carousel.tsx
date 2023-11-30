import React, { type ReactNode, useState } from 'react';

const Carousel = ({ childrenArray, next, previous}: { childrenArray: ReactNode[], next?:ReactNode, previous?:ReactNode }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? childrenArray.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === childrenArray.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carousel  relative w-full h-full p-5">
      <button onClick={handlePrev} className='absolute left-0 top-1/2'>{previous ?? 'Prev'}</button>
      { childrenArray[currentIndex] }
      <button onClick={handleNext} className='absolute right-0 top-1/2'>{next ?? 'Next'}</button>
      <div className='flex gap-1 my-2 justify-center w-full'>
        <div className={`h-2 w-2 rounded-full ${currentIndex === 0 ? 'bg-slate-600' : 'bg-slate-800' }`}/>
        <div className={`h-2 w-2 rounded-full ${currentIndex === 1 ? 'bg-slate-600' : 'bg-slate-800' }`}/>
        <div className={`h-2 w-2 rounded-full ${currentIndex === 2 ? 'bg-slate-600' : 'bg-slate-800' }`}/>
      </div>
    </div>
  );
};

export default Carousel;
