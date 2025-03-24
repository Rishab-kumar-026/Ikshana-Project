import React from "react";
import Navbar from "../Home/Navbar";
import securityGuard from "../assets/Security Guard.png";
import maid from "../assets/Maid.png";
import driver from "../assets/Driver.png";
import bodyGuard from "../assets/Bodyguard.png";
import HK from "../assets/HouseKeeping.png";
import plumber from "../assets/Plumber.png";
import homecareTaker from "../assets/HomecareTaker.png";
import electrician from "../assets/Electrician.png";
import Footer from "../Home/Footer";
import { NavLink } from "react-router-dom";

function Job_Roles() {
  document.title = "Ikshana Facilities | Job Roles";

  const data = [
    {
      img: securityGuard,
      name: "Security Guard",
    },
    {
      img: bodyGuard,
      name: "Body Guard",
    },
    {
      img: HK,
      name: "House Keeping",
    },
    {
      img: maid,
      name: "Maid",
    },
    {
      img: plumber,
      name: "Plumber",
    },
    {
      img: driver,
      name: "Driver",
    },
    {
      img: electrician,
      name: "Electrician",
    },
    {
      img: homecareTaker,
      name: "Homecare Taker",
    },
  ];

  return (
    <div className="w-screen h-[100vh] overflow-y-auto text-gray-500">
      <Navbar />
      <div className="w-screen h-auto mt-26 pb-10 mb-10 px-6 lg:mt-28 lg:px-16 xl:px-24 2xl:px-36">
        <h1 className="text-4xl font-semibold  text-center text-[#3D4A6E] mb-14">
          Job Roles
        </h1>
        <div className="w-full mt-5 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 sm:gap-x-5">
          {data.map((item, index) => {
            return (
              <NavLink
                to="/ikshana-facilities/careers/application-form"
                key={index}
                className="w-[90%] text-zinc-600 flex flex-col p-4 justify-center items-center h-[45vh] shadow-xl bg-[#E9E9E9] mx-auto rounded-xl 
        hover:text-zinc-100 hover:bg-[#3D4A6E] transition duration-300 ease-in-out group"
              >
                <div className="w-[80%] h-[80%]">
                  <img
                    className="w-full h-full object-contain"
                    src={item.img}
                    alt=""
                  />
                </div>
                <h1 className="mt-3 text-2xl font-semibold">{item.name}</h1>
              </NavLink>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Job_Roles;
