import React from "react";
import { NavLink } from "react-router-dom";

function HomePage() {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.7), rgba(0,0,0,.8)), 
          url("https://plus.unsplash.com/premium_photo-1663047397245-2ddad26c5dd7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
        backgroundSize: "cover",
        backgroundPosition: "top 5%",
        backgroundRepeat: "no-repeat",
      }}
      className="w-screen mt-15 h-[95vh] lg:h-[100vh] relative"
    >
      <div className="w-full h-auto">
        <div className="absolute top-[20%] mx-10 text-center py-4 sm:mx-34 md:mx-48 lg:left-[-3%] lg:text-start lg:w-[40%]">
          <h1 className="text-[36px] text-zinc-200 font-bold">
            Balancing <br /> Excellence and Efficiency through <br />
            <span className="text-[#0cbcbd]">Professional management...</span>
          </h1>
          <h1 className="text-[36px] text-zinc-200 font-bold hidden 2xl:block mt-4">
          “Together, let’s create a facility that reflects your vision,support and your growth.”

          </h1>
          <button className="bg-[#3D4A6E] mt-8 rounded-lg px-6 py-4 text-md font-semibold text-center cursor-pointer text-white transition duration-300 hover:bg-zinc-200 hover:text-[#3D4E6E]">
            <NavLink to="/contact">Get Your First Service</NavLink>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
