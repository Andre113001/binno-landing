import React from 'react';
import logo from '../../../assets/binno-logo.png';
import slideshow from '../../../assets/binno-slideshow.mp4'

const About = () => {
    return (
        <div className='flex h-screen'>
            <div className='flex-1 flex flex-col justify-center p-28'>
                <p className='text-xl flex items-center gap-4'>
                    We are
                    <img src={logo} className='h-[3rem]' alt="binno-logo" />,
                </p>
                <p className='text-xl'>
                a tech startup in <b>Legazpi City, Albay</b> that aims to develop a platform to boost the visibility of startups and enablers and increase awareness of startups to the general public.
                </p>
            </div>
            <div className='flex-1 flex items-center justify-center'>
                <video 
                autoPlay
                muted
                loop
                className='w-full h-full object-cover'
                src={slideshow}/>
            </div>
        </div>
    );
}

export default About;
