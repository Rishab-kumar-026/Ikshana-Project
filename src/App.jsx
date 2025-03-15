import React from 'react'
import Navbar from './Components/Navbar'
import HomePage from './Components/HomePage'
import Intro from './Components/Intro'
import Sector from './Components/Sector'
import Service from './Components/Service'


function App() {
  return (
    <div className='w-screen h-screen bg-zinc-300 overflow-x-hidden'>
      <Navbar />
      <HomePage />
      <Intro />
      <Sector />
      <Service />
    </div>
  )
}

export default App