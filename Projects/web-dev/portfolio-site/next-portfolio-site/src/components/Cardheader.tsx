import React from 'react';
function Cardheader({
  img,
  header = 'Lorem ipsum Dolor',
}: {
  img?: string;
  header: string;
}) {
  return (
    <div
      className='flex items-center gap-4
    w-56 pt-3 pl-1 absolute top-0'
    >
      <div
        className='h-16 w-16 rounded-full bg-zinc-200'
        style={
          img
            ? {
                backgroundImage: `url(${img})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }
            : { visibility: 'hidden' }
        }
      ></div>
      <p className='text-sm'>{header}</p>
    </div>
  );
}

export default Cardheader;
