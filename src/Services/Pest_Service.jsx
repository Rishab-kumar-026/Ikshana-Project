import React from "react";
import Navbar from "../Home/Navbar";
import { NavLink } from "react-router-dom";

function Pest_Service() {
  const service_data = [
    {
      name: "Residential Pest Control",
      img: "https://i.pinimg.com/736x/37/0e/07/370e07e232e3c92cd581c86386e5c482.jpg",
      description:
        "Protect your home from pests with our specialized residential pest control services. We eliminate common household pests such as termites, cockroaches, rodents, and bed bugs using safe and effective treatments. Ensure a clean and healthy living space for your family with our expert solutions.",
    },
    {
      name: "Corporate Pest Control",
      img: "https://i.pinimg.com/736x/48/d3/99/48d399ff0aedfd24a2e2eff08a78d95d.jpg",
      description:
        "Keep your business pest-free with our corporate pest control services. We provide customized solutions for offices, warehouses, and commercial spaces, ensuring a hygienic and professional environment. Our experts use advanced techniques to prevent infestations and maintain compliance with health regulations.",
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

export default Pest_Service;
