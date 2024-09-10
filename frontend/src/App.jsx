import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Manager from './components/Manager'
import Footer from './components/Footer'

function App() {

  return (
    <>
      {/* <div className="absolute inset-0 -z-10 min-h-full w-full  bg-green-100 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">

      </div> */}
        <Navbar />
        <div className='min-h-[83.9vh]'>
          <Manager />
        </div>
        <Footer />
    </>
  )
}

export default App
