import React from "react";
import logo from "../assets/Logo.png";
import { NavLink, useLocation } from "react-router-dom";

function Footer() {
  const {pathname} = useLocation();
  const Contact_data = [
    {
      Type: "Registered Office",
      Location: "MCH No. 6-3-1106, Elite Towers, Somajiguda, Hyderabad,",
      State: "Telangana - 500082",
    },
    {
      Type: "Branch Office",
      Location:
        "6-668/10/25, First Floor, Durga Nagar Colony Somajiguda, Hyderabad, ",
      State: "Telangana - 500082",
    },
  ];
  return (
    <div className="w-screen h-fit bg-[#3E4D6F] px-6 pt-6 pb-2 lg:px-16 xl:px-24 2xl:px-36">
      <div className="w-full p-2 grid grid-cols-1 md:grid-cols-2 md:gap-x-8 md:gap-y-5 lg:grid-cols-3">
        <div className="md:pt-2 lg:pt-4">
          <div className="w-32 h-10 md:w-42">
            <img className="w-full h-full object-fit" src={logo} alt="" />
          </div>
          <p className="text-zinc-100 font-semibold leading-[1.5] opacity-[0.8] tracking-tight text-md my-4">
            Ikshana Facilities Pvt Ltd, founded in January 2023, builds on over
            a decade of experience in healthcare services since 2012, delivering
            exceptional facility management solutions.
          </p>

          <div className="my-5 flex flex-col gap-y-2 text-zinc-100">
            <h1>
              <i className="ri-mail-fill mr-2"></i> ceo@ikshanafacilities.com
            </h1>
            <h1>
              <i className="ri-phone-fill mr-2"></i>+91-8978680223
            </h1>
          </div>

       {pathname === "/ikshana-facilities/about" ? " " : <NavLink to="/ikshana-facilities/about"><button className="w-32 bg-zinc-300 cursor-pointer px-4 py-2 rounded-lg font-semibold text-[14px] text-[#3D4A6E]">
            Know more
          </button> </NavLink>}
        </div>

        {Contact_data.map((item, index) => {
          return (
            <div key={index} className="mt-5 text-zinc-200 w-[70%] md:w-[100%] lg:w-[70%]">
              <h1 className="font-bold mb-3 text-xl lg:text-2xl">
                {item.Type}
              </h1>
              <p className="font-semibold text-md opacity-[0.8] mb-1">
                {item.Location}
              </p>
              <p className="font-semibold mb-3 text-md opacity-[0.8]">
                {item.State}
              </p>
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-between w-[50%] mt-4 sm:w-[30%] lg:w-[15%] xl:w-[10%]">
        <i className="ri-instagram-line mr-3 text-zinc-100 cursor-pointer text-2xl"></i>
        <i className="ri-twitter-fill mr-3 text-zinc-100 cursor-pointer text-2xl"></i>
        <i className="ri-facebook-circle-fill mr-3 text-zinc-100 cursor-pointer text-2xl"></i>
        <i className="ri-whatsapp-line mr-3 text-zinc-100 cursor-pointer text-2xl"></i>
      </div>

      <div className="mt-3 text-zinc-100 text-center">
        <hr className="mb-4 bg-zinc-800 h-[1px]" />

       <p className="font-semibold whitespace-nowrap text-[12px] lg:text-[14px]">
          <i className="ri-copyright-line mr-1"></i>2025 Ikshana Facilities Pvt
          Ltd <span className="font-semibold">| All Rights Reserved</span>
        </p>        
       <p className="text-sm mt-1 opacity-[0.5]">Designed by Rishab kumar</p>
      </div>
    </div>
  );
}

export default Footer;
