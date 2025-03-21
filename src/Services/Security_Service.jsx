import React from "react";
import Navbar from "../Home/Navbar";
import { NavLink } from "react-router-dom";

function Security_Service() {
  const service_data = [
    {
      name: "Security Guard Services",
      img: "https://i.pinimg.com/736x/c5/13/a6/c513a6cb1ebb91808beeee3a2b09b3b4.jpg",
      description:
        "  Our security guard services ensure the safety of your people, property, and assets with highly trained professionals. We provide 24/7 surveillance, access control, and rapid emergency response to prevent threats like theft, vandalism, and unauthorized entry. Trust us to keep your business secure with reliable and proactive protection.",
    },
    {
      name: "Escort Guard",
      img: "https://i.pinimg.com/736x/14/2b/f9/142bf9b7ae0757e612ce7f71b992be95.jpg",
      description:
        "  Our professional escort guards ensure safe and secure transportation for individuals, VIPs, and valuables. With strict vigilance and rapid response capabilities, we provide seamless protection throughout your journey, ensuring peace of mind.",
    },
    {
      name: "Personal BodyGuard / Bouncers",
      img: "https://i.pinimg.com/736x/88/6e/d1/886ed1d88ddf36845175670fc4d7f024.jpg",
      description:
        " We offer highly trained personal bodyguards and bouncers for maximum safety. Whether for high-profile individuals, executives, or events, our security professionals provide strong protection, crowd control, and threat prevention with a discreet yet commanding presence.",
    },
    {
      name: "Event Security Management",
      img: "https://i.pinimg.com/736x/c8/b9/60/c8b960f83bb0e9ce3eb1c383ac88e34d.jpg",
      description:
        " Ensure a safe and organized event with our expert security management team. We specialize in crowd control, access regulation, and emergency response, allowing you to host successful gatherings without security concerns.",
    },
    {
      name: "Driver Serices",
      img: "https://i.pinimg.com/736x/71/1f/c0/711fc0f41b1316c2d8d265b4bbec1880.jpg",
      description:
        "Our professional drivers provide safe, reliable, and discreet transportation. Trained in defensive driving and security protocols, they ensure smooth and secure travel, whether for daily commutes, corporate needs, or high-profile clients.",
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

export default Security_Service;
