import React from 'react';
import logo from '../../../assets/binno-logo.png';
import slideshow from '../../../assets/binno-slideshow.mp4'
import { motion, useTransform , useScroll,} from 'framer-motion'

const About = () => {

    return (
        <motion.div 
            className='flex relative max-h-screen phone:flex-col desktop:flex-row h-screen'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.5 }}
        >
            {/* Text Section */}
            <motion.div 
                className='flex-1 flex flex-col justify-center p-28 phone:z-10 phone:text-center desktop:text-left phone:bg-black/50 phone:p-10 desktop:p-28'
                initial={{ opacity: 0, y: 50 }} 
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }} 
                viewport={{ amount: 0.5 }} 
            >
                <p className='desktop:text-xl phone:text-md-lg w-full phone:justify-center desktop:justify-start flex items-center desktop:gap-4 phone:gap-1'>
                    We are
                    <img src={logo} className='desktop:h-[3rem] phone:h-[30px]' alt="binno-logo" />,
                </p>
                <p className='desktop:text-xl phone:text-md-lg'>
                a tech startup in <b>Legazpi City, Albay</b> that aims to develop a platform to boost the visibility of startups and enablers and increase awareness of startups to the general public.
                </p>
            </motion.div>
            
            {/* Video Section */}
            <div className='flex-1 phone:absolute phone:inset-0 phone:z-0 desktop:relative desktop:inline flex items-center justify-center'>
                <video 
                    autoPlay
                    muted
                    loop
                    className='w-full h-full object-cover phone:opacity-50 desktop:opacity-100'
                    src={slideshow}/>
            </div>
        </motion.div>
    );
}

export default About;
