import React from 'react';
import Navbar from '../../Navbar/Navbar';
import Button from '../../Button/Button';
import './Hero.css';

const Hero = () => {
    const names = [
        'Innovators',
        
    ]

    return (
        <div className='hero-container z-20'>
            <Navbar />
            <div className='flex flex-col m-auto items-center h-screen'>
            <div className='flex w-full h-screen'>
                <div className='flex flex-col gap-4 p-5 w-1/2 mx-40 justify-center z-30'>
                <h1 className='text-[120px] font-bold leading-[86px]'>
                    The Gateway <br /> for <span className='text-primary'>Innovators</span>
                </h1>
                <h3 className='text-lg'>We bring platforms for startups.</h3>
                {/* <Button buttonText={"Let's Keep in Touch"} /> */}
                </div>
                <div className='absolute right-80 bottom-0'>
                <div className='w-[650px] h-[650px] opacity-80 rounded-[45px] rotate-45 z-20 bottom-72 bg-primary absolute'></div>
                <div className='w-[650px] h-[650px] opacity-80 rounded-[45px] rotate-45 z-10 bottom-24 bg-secondary absolute'></div>
                <div className='w-[650px] h-[650px] opacity-80 rounded-[45px] rotate-45 z-0 bottom-[-100px] bg-gray absolute'></div>
                </div>
            </div>
            <div className='absolute w-full'>
                <div className='flex h-screen items-end justify-center pb-5'>
                <p className='animate-bounce'>Swipe down for more</p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Hero;
