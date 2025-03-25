import { div } from 'framer-motion/client'
import React from 'react'
import Navbar from '../Home/Navbar'
import Gallery_Details from './Gallery_Details'
import Footer from '../Home/Footer'

function Gallery() {
  return (
    <div className='w-screeen h-[100vh] overflow-y-auto'>
        <Navbar />
        <Gallery_Details />
        <Footer />
    </div>
  )
}

export default Gallery