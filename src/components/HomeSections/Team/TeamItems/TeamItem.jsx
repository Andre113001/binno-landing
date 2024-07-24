import React from 'react';

const TeamItem = ({ name, position, img }) => {
  return (
    <div className='flex flex-col items-center  text-center'>
      <div className='relative'>
        <div className='absolute inset-0 flex justify-center items-end '>
          <div className='w-full h-12 rounded-lg bg-secondary opacity-80' />
        </div>
        <img src={img} className='h-60 relative z-10' alt={`${name}_img`} />
      </div>
      <div>
        <h1 className='font-bold text-md'>{name}</h1>
        <p className='text-sm font-medium'>{position}</p>
      </div>
    </div>
  );
}

export default TeamItem;
