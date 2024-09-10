import React, { useState, useEffect } from 'react'
import { FaEye, FaEyeSlash, FaPencilAlt } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';

import 'react-toastify/dist/ReactToastify.css';
// this class is used for giving the tailwind css background.
const Manager = () => {
    const [visible, setVisible] = useState(false)
    const [form, setForm] = useState({
        id: null,
        site: "",
        username: "",
        password: ""
    })
    const [passwordArray, setPasswordArray] = useState([])
    const handleVisility = () => {
        setVisible(!visible)
    }

    useEffect(() => {
        let passwords = localStorage.getItem("passwords")
        if (passwords) {
            let loadPasswords = JSON.parse(localStorage.getItem("passwords"))
            setPasswordArray(loadPasswords)
        }
    }, [])

    const copyText = (copiedElement) => {
        navigator.clipboard.writeText(copiedElement)
        toast("Text Copied To the Clipboard", { autoClose: 1000, theme: "dark" })
        console.log(copiedElement)
    }


    const savePassword = () => {
        console.log("This is the save password for doing the work")
        if (form.id === null && (form.username === "" || form.password === "" || form.site === "")) {
            toast("Please Fill all the fields!!!!", { theme: "dark", autoClose: 1000 })
            return;
        }
        if (form.id !== null) {
            console.log("true function is working.")
            let resultArray = passwordArray.filter((element) => {
                return form.id !== element.id
            })
            let object = passwordArray.filter((element) => {
                return form.id === element.id;
            })[0];
            console.log(object)
            console.log(form)

            setPasswordArray([...resultArray, { ...form, id: object.id }])
            // this is done because setItem will take time to update it's components.
            localStorage.setItem("passwords", JSON.stringify([...resultArray, { ...form, id: object.id }]))
            toast("Password Updated Successfully!!!", { autoClose: 1000, theme: "dark" })
            setForm({ id: null, site: "", username: "", password: "" })
        } else {
            setPasswordArray([...passwordArray, { ...form, id: uuidv4() }])
            // this is done because setItem will take time to update it's components.
            localStorage.setItem("passwords", JSON.stringify([...passwordArray, { ...form, id: uuidv4() }]))
            toast("Password Added Successfully!!!!", { autoClose: 1000, theme: "dark" })
            setForm({ site: "", username: "", password: "" })
        }

    }

    // for deleting  the password
    const deletePassword = (id) => {
        console.log("Deleting the Password with Id:- ", id);
        const confirmvalue = confirm("Are you Sure Want to Delete This Password")
        if (confirmvalue) {
            const resultArray = passwordArray.filter((element) => {
                return element.id !== id
            })
            // this setPassword will run anonymously and then the delay in result can cause destruction.
            setPasswordArray(resultArray)
            // toast("Password Deleted Successfully!!!", { autoClose: 1000, theme: "dark" })
            localStorage.setItem("passwords", JSON.stringify(resultArray))
            toast("Password Deleted Successfully!!!!!", { autoClose: 1000, theme: "dark" })
        }
    }

    const editPassword = (id) => {
        console.log("The edit password id is :- ", id)
        const element = passwordArray.filter((result) => {
            return result.id === id
        })[0]
        setForm({ ...element })
    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    return (
        <>
            <ToastContainer />
            <div className="md:mycontainer font-mono">
                <div className="logo font-bold text-3xl text-center">
                    <span className='text-green-500'> &lt; </span>
                    Pass<span className='uppercase text-green-500'>op</span>/
                    <span className="text-green-500">&gt;</span>
                </div>
                <p className='text-green-500 text-md font-semibold text-center'>Your Own Password Manager</p>
                <div className="text-white flex flex-col p-4 gap-8 ">
                    <input value={form.site} onChange={handleChange} placeholder='Enter Website URL' type="text" className='text-black rounded-full border border-green-700 px-4 py-1' name="site" id="" required />
                    <div className="flex flex-col md:flex-row gap-8">
                        <input value={form.username} name="username" onChange={handleChange} placeholder='Enter Username' type="text" className='text-black rounded-full border border-green-700 px-4 py-1 w-full md:w-1/2' id="" required />
                        <div className="relative w-full md:w-1/2 ">
                            <input value={form.password} name="password" onChange={handleChange} placeholder='Enter Password' type={visible ? "text" : "password"} className='text-black rounded-full border border-green-700 px-4 py-1 w-full' id="" required />
                            <span onClick={handleVisility} className='absolute right-[8px] top-[4px] text-black bottom-0'>{visible ? <FaEye className='text-2xl cursor-pointer' /> : <FaEyeSlash className='text-2xl cursor-pointer' />}</span>
                        </div>
                    </div>
                    <button onClick={savePassword} className='text-black hover:bg-green-300 bg-green-400 px-6 py-2 gap-2 font-semibold border-[2px]
                    shadow-green-500 shadow-sm border-green-600 rounded-full w-fit m-auto flex justify-center items-center'><lord-icon
                            src="https://cdn.lordicon.com/jgnvfzqg.json"
                            trigger="hover"
                            style={{ "width": "30px", "height": "30px" }}>
                        </lord-icon>Add Password</button>
                </div>
                <div className="tables mt-10 max-w-1/2 md:max-w-full">
                    <h2 className='text-center text-2xl font-bold mb-2 font-mono'>Your Passwords</h2>
                    {passwordArray.length === 0 && <div className='text-center font-mono font-semibold'>No Passwords To Show</div>}

                    {passwordArray.length !== 0 &&
                        <table className="table-auto md:w-full md:size-4 rounded-md overflow-hidden">
                            <thead className='bg-green-800 text-white'>
                                <tr>
                                    <th className='py-2'>Site</th>
                                    <th className='py-2'>Username</th>
                                    <th className='py-2'>Passwords</th>
                                    <th className='py-2'>Actions</th>
                                </tr>
                            </thead>
                            <tbody className='bg-green-200'>
                                {passwordArray.length !== 0 && passwordArray.map((result, index) => {

                                    return (
                                        <tr key={index}>
                                            <td className='text-centergap-2 py-2 border border-white'>
                                                <div className='flex flex-wrap items-center justify-center gap-1'>
                                                    <a className='hover:underline break-words' href={result.site} target='_blank'>{result.site}</a>
                                                    <div className='cursor-pointer'>
                                                        <lord-icon
                                                            style={{ "width": "25px", "height": "25px" }}
                                                            src="https://cdn.lordicon.com/depeqmsz.json"
                                                            trigger="hover"
                                                            className={'cursor-pointer w-5'} onClick={() => copyText(result.site)}>
                                                        </lord-icon>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className='text-center py-2 border border-white'>
                                                <div className='flex flex-wrap justify-center items-center gap-1'>
                                                    {result.username}
                                                    <div className='cursor-pointer'>
                                                        <lord-icon
                                                            style={{ "width": "25px", "height": "25px" }}
                                                            src="https://cdn.lordicon.com/depeqmsz.json"
                                                            trigger="hover"
                                                            className={'cursor-pointer w-5'} onClick={() => copyText(result.username)}>
                                                        </lord-icon>
                                                    </div>
                                                </div>

                                            </td>
                                            <td className='text-center py-2 border border-white'>
                                                <div className='flex flex-wrap items-center justify-center gap-1'>
                                                    {result.password}
                                                    <div className='cursor-pointer'>
                                                        <lord-icon
                                                            style={{ "width": "25px", "height": "25px" }}
                                                            src="https://cdn.lordicon.com/depeqmsz.json"
                                                            trigger="hover"
                                                            className={'cursor-pointer w-5'} onClick={() => copyText(result.password)}>
                                                        </lord-icon>
                                                    </div>
                                                </div>

                                            </td>
                                            <td className='text-center py-2 border border-white'>
                                                <div className='flex flex-wrap items-center justify-center gap-3'>
                                                    <div className='cursor-pointer' onClick={() => deletePassword(result.id)}>
                                                        <lord-icon
                                                            src="https://cdn.lordicon.com/skkahier.json"
                                                            trigger="hover"
                                                            style={{ "width": "25px", "height": "25px" }}>
                                                        </lord-icon>
                                                    </div>
                                                    <FaPencilAlt className='cursor-pointer' onClick={() => { editPassword(result.id) }} />

                                                </div>

                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    }
                </div>
            </div>
        </>
    )
}

export default Manager