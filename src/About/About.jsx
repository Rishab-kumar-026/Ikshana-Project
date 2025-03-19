import React from 'react'
import Navbar from '../Home/Navbar'
import About_Details from './About_Details'
import Scores from '../Home/Scores'
import Footer from '../Home/Footer'
import Vision_Mission from './Vision_Mission'

function About() {
  return (
    <div>
      <Navbar />
      <About_Details />
      <Scores/>
      <Vision_Mission />
      <Footer />
    </div>
  )
}

export default About