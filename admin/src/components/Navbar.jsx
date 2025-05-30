import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

function Navbar({setToken}) {
    return (
        <div className='flex items-center py-2 px-[4%] justify-between'>
            <Link to='/'>  <img className='w-[max(15%,80px)]' src={assets.logo} /></Link>
            <button onClick={()=>setToken('')} className='bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm'>Logout</button>

        </div>
    )
}

export default Navbar