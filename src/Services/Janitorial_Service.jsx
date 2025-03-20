import React from "react";
import Navbar from "../Home/Navbar";
import { NavLink } from "react-router-dom";

function Janitorial_Service() {
  const service_data = [
    {
      name: "Professional Housekeeping Services",
      img: "https://i.pinimg.com/736x/77/e5/7e/77e57e5a09caf5d188cfbf02502154c6.jpg",
      description:
        "Keep your space spotless with our professional housekeeping services. We ensure a clean, hygienic, and organized environment tailored to your needs.",
    },
    {
      name: "Garden Maintenance Services",
      img: "https://i.pinimg.com/736x/c3/c0/37/c3c03767c004ec67e3437c146a445b69.jpg",
      description:
        "Maintain a lush and healthy garden with our expert maintenance services. We handle trimming, pruning, and overall landscape care with precision.",
    },
    {
      name: "Maid Services",
      img: "https://i.pinimg.com/736x/a1/cf/85/a1cf85a39c8ca594f85d3f4b209a0fc0.jpg",
      description:
        "Enjoy hassle-free cleaning with our reliable maid services. Our trained professionals provide daily, weekly, or customized cleaning solutions.",
    },
  ];

  const one_time_service_data = [
    {
      name: "House Deep Cleaning",
      img: "https://i.pinimg.com/736x/e5/db/17/e5db17c4fb092c5520e6bdb4bf1b5b7d.jpg",
      description:
        "Get a thorough deep cleaning for your home, removing dirt, dust, and grime from every corner for a fresh and sanitized living space.",
    },
    {
      name: "Washroom Cleaning",
      img: "https://i.pinimg.com/736x/a3/ae/0f/a3ae0fd985ece57367db11ebac1bbd77.jpg",
      description:
        "Ensure a germ-free and sparkling clean washroom with our specialized cleaning services using high-quality disinfectants and techniques.",
    },
    {
      name: "Kitchen Cleaning",
      img: "https://i.pinimg.com/736x/f4/62/9e/f4629e8787ad2f0d74cca09e6a78c4d6.jpg",
      description:
        "Keep your kitchen spotless and hygienic with deep cleaning services that remove grease, stains, and bacteria from surfaces and appliances.",
    },
    {
      name: "Sofa Shampooing",
      img: "https://i.pinimg.com/736x/28/49/9f/28499f3ebef7ff34a232f697a357bd58.jpg",
      description:
        "Revive your sofas with our deep shampooing service, removing dirt, stains, and allergens for a fresh and clean look.",
    },
    {
      name: "Water Tank Cleaning",
      img: "https://i.pinimg.com/736x/0a/27/7b/0a277b480d2f4de00c45138c3318c2d7.jpg",
      description:
        "Ensure safe and clean water storage with our expert water tank cleaning service, eliminating impurities and bacteria.",
    },
    {
      name: "Carpet Shampooing",
      img: "https://i.pinimg.com/736x/9a/21/2d/9a212dde0101b5f6e7779b82afc4da08.jpg",
      description:
        "Restore your carpets' freshness with our shampooing service, removing dirt, stains, and allergens for a cleaner home.",
    },
    {
      name: "Pool Cleaning Services",
      img: "https://i.pinimg.com/736x/d4/6e/ac/d46eacb8112cc5ee2650b3f29b182ea3.jpg",
      description:
        "Keep your pool sparkling clean and safe with our professional pool cleaning services, removing debris and maintaining chemical balance.",
    },
    {
      name: "Post-Construction Cleaning",
      img: "https://i.pinimg.com/736x/e1/fe/12/e1fe12186799357a07e535c9f5d06b6a.jpg",
      description:
        "Remove dust, debris, and leftover materials from your newly constructed or renovated space with our thorough post-construction cleaning service.",
    },
  ];

  return (
    <div className="w-screen h-[100vh] overflow-y-auto">
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

        <h1 className="font-bold text-2xl text-[#3D4E6F] mb-6 sm:text-4xl sm:text-center sm:mt-18 sm:mb-14">
          One-time Deep Cleaning Services
        </h1>

        {one_time_service_data.map((item, index) => {
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

export default Janitorial_Service;
