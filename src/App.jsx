import React from 'react'
import Navbar from './Components/Navbar'
import HomePage from './Components/HomePage'
import Intro from './Components/Intro'
import Sector from './Components/Sector'
import Service from './Components/Service'
import Clients from './Components/Clients'
import Contact from './Components/Contact'
import Banner from './Components/Banner'
import Scores from './Components/Scores'
import Footer from './Components/Footer'


function App() {
  return (
    <div className='w-screen h-screen bg-zinc-300 overflow-x-hidden'>
      <Navbar />
      <HomePage />
      <Intro />
      <Service />
      <Sector />
    
      <h1 className="font-bold text-4xl text-[#3D4E6F] text-center mb-6">
        Our Clients
      </h1>
      <Clients />
      <Banner />
      <Scores/>
      <Contact />
      <Footer />
     
      
   
    </div>
  )
}

export default App