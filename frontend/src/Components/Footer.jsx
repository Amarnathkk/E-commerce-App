import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div>

            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>


                <div>
                    <img src={assets.Logo} className='mb-5 w-32' alt="" />
                    <p className='w-full md:w-2/3 text-gray-600'>
                        Fashion Fuel brings you trendy, high-quality apparel that blends style and comfort. Our collections cater to every occasion, from casual wear to statement pieces. Elevate your wardrobe with fashion that speaks your personality!
                    </p>
                </div>

                <div>
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <Link to="/"><li>Home</li></Link>
                        <Link to="/about"> <li>About</li></Link>
                        <Link to="/contact">Contact Us</Link>
                    </ul>
                </div>


                <div>
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>+1-212-456-7890</li>
                        <li>contact@fashionfuel.com</li>

                    </ul>
                </div>

            </div>



            <div>
                <hr />
                <p className='py-5 text-sm text-center'>Copyright 2025@ fashionfuel.com - All Rights Reserved.</p>
            </div>





        </div>
    )
}

export default Footer