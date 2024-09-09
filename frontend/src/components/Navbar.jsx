import React from 'react'

const Navbar = () => {
    return (
        <nav className='bg-slate-800 flex justify-between items-center px-40 h-14 text-white'>
            <div className="logo font-bold text-2xl">
                <span className='text-green-500'>&lt; </span>
                Pass<span className='uppercase text-green-500'>op</span>/
                <span className="text-green-500">&gt; </span>
            </div>
            <ul>
                <li className='flex gap-4'>
                    <a className='hover:font-bold' href="">Home</a>
                    <a className='hover:font-bold' href="">Home</a>
                    <a className='hover:font-bold' href="">Home</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar