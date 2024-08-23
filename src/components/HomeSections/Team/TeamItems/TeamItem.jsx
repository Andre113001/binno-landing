import React from 'react';
import { motion } from 'framer-motion'

const TeamItem = ({ name, position, img }) => {
  return (
    <motion.div 
      className='flex w-full flex-col items-center text-center'
      initial={{ opacity: 0, y: 0 }}
      whileInView={{ opacity: 1, y: -5 }}
      animate='visible'
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: 'all' }}
    >
      <div className='relative  flex items-center justify-center w-3/4'>
        <div className='absolute inset-0 flex justify-center items-end'>
          <div className='w-full h-12 rounded-lg bg-secondary opacity-80' />
        </div>
        <div className='overflow-hidden'>
          <img src={img} className='desktop:w-full desktop:h-full phone:h-30 flex items-center justify-center object-cover relative z-10' alt={`${name}_img`} />
        </div>
      </div>
      <div>
        <h1 className='font-bold text-md'>{name}</h1>
        <p className='text-sm font-medium'>{position}</p>
      </div>
    </motion.div>
  );
}

export default TeamItem;
