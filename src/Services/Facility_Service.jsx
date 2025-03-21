import React from "react";
import Navbar from "../Home/Navbar";
import { NavLink } from "react-router-dom";

function Facility_Service() {
  const service_data = [
    {
      name: "Electrical",
      img: "https://i.pinimg.com/736x/0b/69/b6/0b69b6436d2c4be90bfd5bbae5dc8cd7.jpg",
      description:
        "Our expert electricians provide safe and efficient electrical solutions, including wiring, maintenance, and troubleshooting, ensuring uninterrupted power and compliance with safety standards.",
    },
    {
      name: "Plumbing",
      img: "https://i.pinimg.com/736x/1a/f9/07/1af9077694f717f4795a1ef473dd9013.jpg",
      description:
        "We offer professional plumbing services, from leak repairs to pipeline installations, ensuring a seamless water supply system with quick and effective solutions.",
    },
    {
      name: "Carpentry",
      img: "https://i.pinimg.com/736x/fd/9e/17/fd9e17611fe11d0a220f7f609300b676.jpg",
      description:
        "Our skilled carpenters deliver precision-crafted furniture, repairs, and installations, enhancing both functionality and aesthetics for your space.",
    },
    {
      name: "Air Conditioning",
      img: "https://i.pinimg.com/736x/e8/f6/d4/e8f6d475c814506bcb6265ddcd3626f5.jpg",
      description:
        "We provide expert AC installation, repair, and maintenance services to keep your environment cool, energy-efficient, and comfortable all year round.",
    },
    {
      name: "STP Maintenance",
      img: "https://i.pinimg.com/736x/ab/c5/ec/abc5eceda26734dd20e9390cfc750b88.jpg",
      description:
        "Our STP maintenance services ensure efficient wastewater treatment, system upkeep, and regulatory compliance for a cleaner and sustainable environment.",
    },
    {
      name: "General Building Maintenance",
      img: "https://i.pinimg.com/736x/61/b5/bb/61b5bba67571a6030c481568b691028c.jpg",
      description:
        "We provide complete building maintenance services, including repairs, upkeep, and inspections, ensuring a safe, functional, and well-maintained infrastructure.",
    },
  ];

  return (
    <div className="w-screeen h-[100vh] overflow-y-auto">
      <Navbar />
      <div className="w-screen h-auto mt-26 mb-10 px-6 lg:mt-28 lg:px-16 xl:px-24 2xl:px-36">
        {service_data.map((item, index) => {
          return (
            <div key={index} className="w-full h-auto">
              <h1 className="font-bold text-2xl text-[#3D4E6F] mb-4 sm:text-3xl">
                {item.name}
              </h1>
              <div
                key={index}
                className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-x-8 md:bg-[#E9E9E9] md:py-10 md:px-4 md:rounded-lg md:shadow-lg"
              >
                <div className="w-full h-[35vh] sm:h-[45vh] sm:w-[95%] sm:mx-auto md:h-[40vh] lg:mx-0">
                  <img
                    className="w-full h-full object-fit "
                    src={item.img}
                    alt=""
                  />
                </div>

                <div className="w-full relative">
                  <p className="font-normal tracking-wide leading-[1.5] my-4 md:leading-[1.3] xl:text-xl">
                    {item.description}
                  </p>

                  <NavLink to="/ikshana-facilities/contact">
                    <div className="w-full flex items-center justify-center">
                      <button className="w-full bg-[#3D4A6E] mt-5 rounded-lg px-6 py-4 text-md font-semibold text-center cursor-pointer text-white transition duration-300 hover:bg-white hover:border-2 hover:border-grey-900 hover:text-[#3D4E6E] lg:absolute lg:bottom-0 xl:w-[80%]">
                        Get Your Service
                      </button>
                    </div>
                  </NavLink>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Facility_Service;
