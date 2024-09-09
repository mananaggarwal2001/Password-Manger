import React, { useState } from 'react'
import addicon from '../assets/addicon.gif'
import { FaEye, FaEyeSlash } from "react-icons/fa";
// this class is used for giving the tailwind css background.
const Manager = () => {
    const [visible, setVisible] = useState(false)
    const handleVisility = () => {
        setVisible(!visible)
    }


    return (
        <>
            <div className="absolute inset-0 -z-10 h-full w-full bg-green-100 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">

            </div>
            <div className="mycontainer">
                <div className="logo font-bold text-3xl text-center">
                    <span className='text-green-500'> &lt; </span>
                    Pass<span className='uppercase text-green-500'>op</span>/
                    <span className="text-green-500">&gt;</span>
                </div>
                <p className='text-green-500 text-md font-semibold text-center'>Your Own Password Manager</p>
                <div className="text-white flex flex-col p-4 gap-8 ">
                    <input placeholder='Enter Website URL' type="text" className='text-black rounded-full border border-green-700 px-4 py-1' name="" id="" />
                    <div className="flex gap-8">
                        <input placeholder='Enter Username' type="text" className='text-black rounded-full border border-green-700 px-4 py-1 w-1/2' name="" id="" />
                        <div className="relative w-1/2">
                            <input placeholder='Enter Password' type={visible ? "text" : "password"} className='text-black rounded-full border border-green-700 px-4 py-1 w-full' name="" id="" />
                            <span onClick={handleVisility} className='absolute right-[8px] top-[4px] text-black bottom-0'>{visible ? <FaEye className='text-2xl cursor-pointer' /> : <FaEyeSlash className='text-2xl cursor-pointer' />}</span>
                        </div>
                    </div>
                    <button className='text-black hover:bg-green-300 bg-green-400 px-6 py-2 gap-2 font-semibold border-[2px]
                    shadow-green-500 shadow-sm border-green-600 rounded-full w-fit m-auto flex justify-center items-center'><img className='w-7' src={addicon}></img>Add Password</button>
                </div>
            </div>
        </>
    )
}

export default Manager