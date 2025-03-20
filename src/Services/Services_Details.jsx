import React from 'react'
import { NavLink } from 'react-router-dom'

function Services_Details() {

        const service_type = [{
            name: "Security Services",
            category: "/ikshana-facilities/services/security-service"
        },
        {
            name: "Facility Maintenance",
            category: "/ikshana-facilities/services/facility-service"
        },
        {
            name: "Pest Control",
            category: "/ikshana-facilities/services/pest-control-service"
        },
        {
            name: "Janitorial Services",
            category: "/ikshana-facilities/services/janitorial-service"
        },
        {
            name: "Home Care Services",
            category: "/ikshana-facilities/services/homecare-service"
        }, ]

  return (
    <div className="w-screen h-auto mt-26 pb-10 mb-10 px-6 lg:mt-28 lg:px-16 xl:px-24 2xl:px-36">
    <h1 className="font-bold text-2xl text-[#3D4E6F] text-center mb-6 sm:text-4xl">
        What kind of Service you want ?
      </h1>

      <div className='w-full h-auto  py-4'>
       {service_type.map((item,index)=>{
        return  <NavLink to={item.category} key={index} className='w-full h-[10vh] bg-[#3D4E6F] flex justify-between items-center p-4 cursor-pointer text-white mb-4'>
        <p className='font-normal text-lg'>{item.name}</p>
        <i className="ri-arrow-right-line font-semibold text-lg"></i>
    </NavLink>
       })}
        </div>   
    </div>
  )
}

export default Services_Details