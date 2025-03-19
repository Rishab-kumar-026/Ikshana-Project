import React from 'react'
import Navbar from '../Home/Navbar'
import About_Details from './About_Details'
import Scores from '../Home/Scores'
import Footer from '../Home/Footer'
import Vision_Mission from './Vision_Mission'
import { useEffect } from "react";

function About() {
  return (
    <div className='w-screeen h-[100vh] overflow-y-auto'>
      <Navbar />
      <About_Details />
      <Scores/>
      <Vision_Mission />
      <Footer />
    </div>
  )
}

export default About