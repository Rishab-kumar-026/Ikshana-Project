import React from 'react'
import Navbar from '../Home/Navbar'
import About_Details from './About_Details'
import Scores from '../Home/Scores'
import Footer from '../Home/Footer'
import Vision_Mission from './Vision_Mission'
import Core_Values from '../Careers/Core_Values'
import Training_Development from '../Services/Training_Development'
import FAQ from './FAQ'

function About() {
  document.title = "Ikshana Facilities | About page";
  return (
    <div className='w-screeen h-[100vh] overflow-y-auto'>
      <Navbar />
      <About_Details />
      <Scores/>
      <Vision_Mission />
      <Core_Values />
      <FAQ />
      <Footer />
    </div>
  )
}

export default About