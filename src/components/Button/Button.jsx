import React from 'react';

const EmailButton = ({ buttonText, link }) => {
    return (
        <a 
          href={link} 
          className='bg-secondary font-bold text-white p-4 w-full rounded-xl inline-block text-center'>
          {buttonText}
        </a>
    );
};

export default EmailButton;
