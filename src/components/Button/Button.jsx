import React from 'react'

const Button = ({buttonText}) => {
  return (
      <button className='bg-secondary font-bold text-white p-4 w-full rounded-xl'>{buttonText}</button>
  )
}

export default Button
