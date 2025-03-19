import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import About from './About/About'
import Contact from './Contact/Contact_Page'
import ScrollToTop from './ScrollToTop/ScrollToTop'

function App() {
  return (
    <div className='w-screen h-screen bg-zinc-100 overflow-x-hidden'>
      <ScrollToTop /> {/* Ensures scrolling to top on route change */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
