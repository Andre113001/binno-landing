import React from 'react'
import Button from '../../Button/Button'
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import { motion } from 'framer-motion'

const Contact = () => {
    return (
        <motion.div 
            className='my-80 flex items-center justify-center'
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: -5 }}
            animate='visible'
            viewport={{ once: true, amount: 'all' }}
        >
            <div className='flex flex-col text-center w-22 gap-5'>
                <div>
                    <MarkEmailReadIcon sx={{color: '#ff7a00', fontSize: '12rem'}}/>
                    <h1 className='desktop:text-lg phone:text-md font-bold'>Want to know more about us?</h1>
                    <p className='desktop:text-md'>Send Us an Email</p>
                </div>
                <Button buttonText={"startwithbinno@gmail.com"} link={"https://mail.google.com/mail/?view=cm&fs=1&to=startupwithbinno@gmail.com&su=&body="}/>
            </div>
        </motion.div>
    )
}

export default Contact
