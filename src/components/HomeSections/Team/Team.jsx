import React from 'react';
import TeamData from './TeamMembers.json';
import TeamItem from './TeamItems/TeamItem';

import img1 from './TeamItems/image_7.png';
import img2 from './TeamItems/image_10.png';
import img3 from './TeamItems/image_1.png';
import img4 from './TeamItems/image_8.png';
import img5 from './TeamItems/image_11.png';
import img6 from './TeamItems/image_9.png';
import { motion } from 'framer-motion'


const Team = () => {
    return (
        <div className='mt-48 desktop:px-48 flex justify-center items-center flex-col'>
            <motion.h1 
                className='text-center font-bold phone:text-lg desktop:text-xl'
                initial={{ opacity: 0, y: 0 }}
                whileInView={{ opacity: 1, y: -5 }}
                animate='visible'
                viewport={{ once: true, amount: 'all' }}
            >
                Meet the <span className='text-primary'>Team</span></motion.h1>
            <motion.p 
                className='text-center desktop:text-md phone:text-[15px] desktop:w-1/2 phone:mx-10 desktop:mx-0 '
                initial={{ opacity: 0, y: 0 }}
                whileInView={{ opacity: 1, y: -5 }}
                animate='visible'
                transition={{ duration: 1 }}
                viewport={{ once: true, amount: 'all' }}
            >
                BiNNO is powered by a team of passionate innovators dedicated to building smart, user-friendly solutions that drive success for startup champions in the Philippines.</motion.p>
            <section className='flex items-center justify-center mt-10 w-full'>
                <div>
                    <div className='flex items-center justify-center phone:flex-col desktop:flex-row phone:gap-10 desktop:gap-0'>
                        <TeamItem img={'/marcus.png'} name={'Marcus Andre Geñorga'} position={'Chief Executive Officer / Full-Stack Developer'}/>
                        <TeamItem img={'/ela.png'} name={'Ela Mae Del Castillo'} position={'Chief Operations Officer / Project Manager'}/>
                        <TeamItem img={'teddy.png'} name={'Teddy Marc Enaje'} position={'Technical Lead / Full-Stack Developer'}/>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Team;
