import React from "react";
import Navbar from "../Home/Navbar";
import { NavLink } from "react-router-dom";

function Homecare_Service() {
  const service_data = [
    {
      name: "Patient Homecare Service",
      img: "https://i.pinimg.com/736x/8e/42/f7/8e42f7438f70512b0ebc8f5b43bb1812.jpg",
      description:
        "  Our security guard services ensure the safety of your people, property, and assets with highly trained professionals. We provide 24/7 surveillance, access control, and rapid emergency response to prevent threats like theft, vandalism, and unauthorized entry. Trust us to keep your business secure with reliable and proactive protection.",
    },
    {
      name: "Old People Homecare Service",
      img: "https://i.pinimg.com/736x/41/39/a9/4139a93e051438f4380f2b1e337058fa.jpg",
      description:
        "  Our professional escort guards ensure safe and secure transportation for individuals, VIPs, and valuables. With strict vigilance and rapid response capabilities, we provide seamless protection throughout your journey, ensuring peace of mind.",
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

                  <div className="w-full flex items-center justify-center">
                  <button className="w-full bg-[#3D4A6E] mt-5 rounded-lg px-6 py-4 text-md font-semibold text-center cursor-pointer text-white transition duration-300 hover:bg-white hover:border-2 hover:border-grey-900 hover:text-[#3D4E6E] lg:absolute lg:bottom-0 xl:w-[80%]">
                    <NavLink to="/ikshana-facilities/contact">Get Your Service</NavLink>
                  </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Homecare_Service;
