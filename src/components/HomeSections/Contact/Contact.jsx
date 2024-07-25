    import React from 'react'
    import Button from '../../Button/Button'

    const Contact = () => {
    return (
        <div className='h-screen flex items-center justify-center'>
            <div className='flex flex-col text-center w-22 gap-5'>
                <div>
                    <h1 className='text-xl font-bold'>Want to know more about us?</h1>
                    <p className='text-md'>Send Us an Email</p>
                </div>
                <Button buttonText={"startwithbinno@gmail.com"} link={"https://mail.google.com/mail/?view=cm&fs=1&to=startupwithbinno@gmail.com&su=&body="}/>
            </div>
        </div>
    )
    }

    export default Contact
