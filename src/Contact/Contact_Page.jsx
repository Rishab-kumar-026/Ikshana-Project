import React from 'react'
import Navbar from '../Home/Navbar'
import Contact_Form from './Contact_Form'
import Contact from '../Home/Contact';
import Footer from '../Home/Footer';

function Contact_Page() {
  return (
    <div>
        <Navbar/>
        <Contact_Form />
        <Contact />
        <Footer/>
    </div>
  )
}

export default Contact_Page