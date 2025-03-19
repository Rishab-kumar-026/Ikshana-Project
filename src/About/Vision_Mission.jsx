import React from 'react'

function Vision_Mission() {
  return (
    <div className='className="w-screen h-auto mt-20 mb-10 pb-10 px-6 lg:mt-20 lg:px-16 xl:px-24 2xl:px-36'>
     <div className='w-full h-full grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:gap-x-10'>
      <div className='px-10 py-8 bg-[#FBFBFB] shadow-md rounded-md hover:bg-[#3D4E6F] hover:text-white transition duration-300 ease-in-out'>
          <h1 className='text-3xl font-semibold  text-center '>Our Vision</h1>
          <p className='mt-4 font-semibold text-lg text-center opacity-[0.7]'>"To be the leading provider of innovative and reliable facility services tailored to our customers' needs."
          </p>
      </div>

      <div className='px-10 py-8 bg-[#FBFBFB] shadow-md rounded-md hover:bg-[#3D4E6F] hover:text-white transition duration-300 ease-in-out'>
          <h1 className='text-3xl font-semibold  text-center'>Our Mission</h1>
          <p className='mt-4 font-semibold text-lg text-center opacity-[0.7]'>"Our mission is to be a trusted provider of facility management services, driving positive impact and long-term growth for our clients."

          </p>
      </div>
     </div>
      </div>
  )
}

export default Vision_Mission