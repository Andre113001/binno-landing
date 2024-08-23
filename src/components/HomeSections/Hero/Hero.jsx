import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Navbar from '../../Navbar/Navbar';
import Button from '../../Button/Button';
import './Hero.css';
import Backdrop from '/backdrop.jpg';

const Hero = () => {
    const names = [
        'Innovators',
        'Pioneers',
        'Visionaries',
        'Disruptors',
        'Creatives',
        'Founders',
        'Inventors',
        'Leaders'
    ];

    const textVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
    };

    const [currentName, setCurrentName] = useState(names[0]);
    const [index, setIndex] = useState(0);

    // Use Framer Motion's scroll hooks
    const { scrollY } = useScroll();
    // Transform scroll position to scale
    const scale = useTransform(scrollY, [500, 0], [1, 1.2]);
    const opacity = useTransform(scrollY, [0, 500], [1, 0]);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prevIndex) => {
                const newIndex = (prevIndex + 1) % names.length;
                setCurrentName(names[newIndex]);
                return newIndex;
            });
        }, 2000); // Change the text every 2 seconds

        return () => clearInterval(timer); // Clean up the timer on component unmount
    }, []);

    return (
        <motion.div 
            className='hero-container z-20 relative'
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, ease: "easeOut" }}
            variants={{
                hidden: {opacity: 0},
                visible: {opacity: 1}
            }}
            style={{ opacity }}
        >
            <Navbar />
            <div className='overflow-hidden'>
                <motion.img
                    src={Backdrop}
                    className='desktop:hidden h-full w-full object-cover absolute inset-0 z-0'
                    alt="backdrop"
                    style={{ scale }} // Apply the scale transformation
                />
            </div>
            <div className='flex flex-col m-auto items-center phone:leading-tight h-screen'>
                <div className='flex w-full overflow-hidden phone:text-center desktop:text-left h-screen'>
                    <motion.div 
                        className='relative flex phone:w-full flex-col desktop:gap-4 desktop:p-5 desktop:w-1/2 desktop:mx-40 justify-center z-30'
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 1, ease: "easeOut" }}
                        variants={textVariants}
                    >
                        
                        <h1 className='tablet:text-[120px] phone:text-[3rem] phone:leading-[40px] font-bold desktop:leading-[86px]'>
                            The Gateway <br /> for <span>
                                <AnimatePresence>
                                    <motion.span
                                        key={currentName}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5 }}
                                        className='text-primary'
                                    >
                                        {currentName}
                                    </motion.span>
                                </AnimatePresence>
                            </span>
                        </h1>
                        <h3 className='phone:mt-4 desktop:mt-0 desktop:text-lg'>We bring platforms for startups.</h3>
                        {/* <Button buttonText={"Let's Keep in Touch"} /> */}
                    </motion.div>
                    <motion.div 
                        className='absolute right-80 phone:hidden desktop:inline bottom-0'
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 1, ease: "easeOut" }}
                        variants={{
                            hidden: {opacity: 0, x: 50},
                            visible: {opacity: 1, x: 0}
                        }}
                    >
                        <div className='desktop:w-[650px] phone:w-[200px] desktop:h-[650px] phone:h-[200px] opacity-80 desktop:rounded-[45px] phone:rounded-[25px] rotate-45 z-20 desktop:bottom-72 phone:bottom-[-7rem] bg-primary absolute' />
                        
                        
                        <div className='desktop:w-[650px] phone:w-[200px] desktop:h-[650px] phone:h-[200px] opacity-80 desktop:rounded-[45px] phone:rounded-[25px] rotate-45 z-10 desktop:bottom-24 phone:bottom-[-7rem]  phone: bg-secondary absolute'></div>

                        <div className='desktop:w-[650px] desktop:h-[650px] opacity-80 rounded-[45px] desktop:rotate-45 z-0 bottom-[-100px] bg-gray absolute'></div>
                    </motion.div>
                </div>
                <div className='absolute w-full z-50'>
                    <div className='flex h-screen items-end justify-center pb-5'>
                        <p className='animate-bounce'>Swipe down for more</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Hero;
