import React from 'react'
import { FaGithub } from 'react-icons/fa'
const Navbar = () => {
    return (
        <nav className='bg-slate-800 flex justify-between items-center md:px-40 px-4 h-14 text-white'>
            <div className="logo font-bold text-2xl">
                <span className='text-green-500'>&lt; </span>
                Pass<span className='uppercase text-green-500'>op</span>/
                <span className="text-green-500">&gt; </span>
            </div>
            <button className='flex gap-1 border border-green-600 shadow-sm shadow-green-500 bg-green-700 rounded-full px-4 py-1 hover:bg-green-400 text-lg items-center'>
                <span className='font-semibold'>Github</span>
                <span><FaGithub className='text-2xl' /></span>
            </button>
        </nav>
    )
}

export default Navbar