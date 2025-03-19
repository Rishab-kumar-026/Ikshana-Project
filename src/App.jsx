import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import About from './About/About'
import Contact from './Contact/Contact_Page'


function App() {
  return (
    <div className='w-screen h-screen bg-zinc-100 overflow-x-hidden'>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About /> }></Route>
      <Route path="/contact" element={<Contact /> }></Route>
    </Routes>
    </div>
  )
}

export default App