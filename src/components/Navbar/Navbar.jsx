import React from 'react'
import logo from '../../assets/binno-logo.png';

const Navbar = () => {
  return (
    <div className='inset-0 z-10 py-10 absolute'>
        <div className='flex w-full'>
            <div className='w-1/2'>
                <img src={logo} className='h-[3rem] mx-40' alt="BiNNO Logo" />
            </div>
            <div className='flex font-medium justify-center text-[17px] items-center gap-24 w-1/2'>
                <a href="#Team">The Team</a>
                <a href="#About">About Us</a>
                <a href="#Contract">Contact</a>
            </div>
        </div>
    </div>
  )
}

export default Navbar
