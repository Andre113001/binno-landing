import React from 'react'
import logo from '../../assets/binno-logo.png';
import { motion } from 'framer-motion'

const DesktopNav = () => {
  return (
    <div className='flex phone:hidden font-medium justify-center text-[17px] items-center gap-24 w-1/2'>
      <a href="#About">About Us</a>
      <a href="#Team">The Team</a>
      <a href="#Contract">Contact</a>
    </div>
  )
}

const Navbar = () => {
  return (
    <div className='inset-0 z-10 py-10 absolute'>
        <div className='flex phone:justify-between w-full'>
            <div className='desktop:w-1/2 phone:w-full flex desktop:items-start desktop:justify-start phone:items-center phone:justify-center'>
                <motion.img
                  src={logo} 
                  className='desktop:h-[3rem] phone:h-[2rem] desktop:mx-40' alt="BiNNO Logo" 
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 1, ease: "easeOut" }}
                  variants={{
                    hidden: {opacity: 0, y: -50},
                    visible: {opacity: 1, y: 0}
                  }}
                />
            </div>
            {/* <DesktopNav/> */}
        </div>
    </div>
  )
}

export default Navbar
