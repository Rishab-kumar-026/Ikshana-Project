import React from "react";
import { NavLink } from "react-router-dom";

function Intro() {
  return (
    <div className="w-screen h-fit mt-5 flex flex-col items-center justify-cente px-6 sm:px-6 lg:flex-row justify-center items-center gap-10 lg:h-[60vh] xl:px-24 2xl:px-36">
      <img
        className="w-full mb-5 md:h-[50vh] lg:w-[40vw]"
        src="https://plus.unsplash.com/premium_photo-1661370118205-7ebc6eab9814?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <div className="text-start h-[50vh] mb-4">
        <h1 className="text-[32px] text-[#3E4D6F] leading-none mb-4 font-bold">
          About Our Company
        </h1>
        <p className="text-[18px] font-semibold tracking-tight leading-[1.3] text-zinc-700">
          Ikshana Facilities Pvt Ltd is a dynamic and innovative facility
          management company established in January 2023, building on the solid
          foundation of our experience in operating health care services since
          2012.With a deep understanding of the healthcare industry and a proven
          track record of delivering exceptional services.
        </p>

        <p className="text-[18px] hidden font-semibold tracking-tight mt-4 leading-[1.3] text-zinc-700 lg:block">
          We understand the importance of a well-managed facility that not only
          meets the needs of your organization but also enhances productivity,
          comfort, and safety. With our comprehensive range of facilities
          services, tailored to your specific requirements, we are your go-to
          partner for all your facility management needs.
        </p>

        <div className="w-full flex justify-start mt-5">
          <NavLink to="/about" className="bg-[#3D4A6E] rounded-lg px-6 py-4 text-md font-semibold text-center cursor-pointer text-white transition duration-300 hover:bg-zinc-200 hover:text-[#3D4E6E] hover:border-2 border-[#3D4E6E]">
            Know more
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Intro;
