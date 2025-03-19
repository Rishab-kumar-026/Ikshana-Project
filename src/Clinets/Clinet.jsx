import React from 'react'
import Navbar from '../Home/Navbar'
import Client_Details from './Client_Details'
import Footer from '../Home/Footer'

function Clinet() {
  return (
    <div className='w-screeen h-[100vh] overflow-y-auto'>
        <Navbar />
        <Client_Details/>
        <Footer />
    </div>
  )
}

export default Clinet