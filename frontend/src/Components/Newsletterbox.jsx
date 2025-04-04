import React, { useState } from 'react'
import { toast } from 'react-toastify';

function Newsletterbox() {

    const [mail, setmail] = useState("")

    const onSubmitHandler = (e) => {
        e.preventDefault();

        if (mail.trim().length > 0) {
            toast.success(`Thank you for your Subscription `)
        }

        setmail("")


    }






    return (
        <div className='text-center'>
            <p className='text-2xl font-medium text-gray-800'>
                Subscribe now & get 20% off
            </p>

            <p className='text-gray-400 mt-3'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, fugit.
            </p>

            <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
                <input onChange={(e) => setmail(e.target.value)} className='w-full sm:flex-1 outline-none' required type="email" placeholder='Enter your email' value={mail} />
                <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
            </form>


        </div>
    )
}

export default Newsletterbox