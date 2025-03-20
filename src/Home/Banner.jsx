import React from "react";
import { NavLink } from "react-router-dom";

function Banner() {
  return (
    <div
      className="w-screen h-[50vh]  mb-10 p-10 flex flex-col justify-center relative lg:px-16 xl:px-24 2xl:px-36"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.5), rgba(0,0,0,.7)), 
          url("https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
        backgroundSize: "cover",
        backgroundPosition: "top 5%",
        backgroundRepeat: "no-repeat",
      }}
    >
     
      <div className="sm:w-[70%] lg:w-[50%] xl:w-[40%]">
      <h1 className=" text-2xl font-bold text-zinc-200 xl:text-4xl">
        Contact us today to customize our services to your needs and exceed
        expectations.
      </h1>
      <button className="w-full bg-zinc-300 px-6 py-3 rounded-lg font-semibold text-lg mt-8 text-zinc-700 md:w-[80%] lg:w-[90%] xl:w-[80%]"><NavLink to="/ikshana-facilities/contact">Contact Us</NavLink></button>

      </div>

      </div>

  );
}

export default Banner;
