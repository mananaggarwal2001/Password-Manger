import React from 'react'
import { FaHeart } from 'react-icons/fa6'
const Footer = () => {
    return (
        <div className='bg-slate-800 text-white flex flex-col justify-center items-center fixed bottom-0 w-full'>
            <div className="logo font-bold text-2xl">
                <span className='text-green-500'>&lt; </span>
                Pass<span className='uppercase text-green-500'>op</span>/
                <span className="text-green-500">&gt; </span>
            </div>
            <div className='flex items-center gap-1'>Create with <FaHeart className='text-red-500 text-xl my-auto'/> By Manan Aggarwal</div>
        </div>
    )
}

export default Footer