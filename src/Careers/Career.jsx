import React from 'react'
import Navbar from '../Home/Navbar';
import Career_Banner from './Career_Banner';
import Career_Info from './Career_Info';
import Core_Values from './Core_Values';
import Footer from '../Home/Footer';

function Career() {
    document.title = "Ikshana Facilities | Careers";
  return (
    <div className='w-screeen h-[100vh] overflow-y-auto'>
        <Navbar />
        <Career_Banner />
        <Career_Info />
        <Core_Values />
        <Footer />
    </div>
  )
}

export default Career