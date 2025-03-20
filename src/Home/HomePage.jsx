import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function HomePage() {
  const image_sources = [
    {
      src: "https://i.pinimg.com/736x/86/5c/57/865c57c5a857e157a4ffb72737aba339.jpg",
    },
    {
      src: "https://i.pinimg.com/736x/f0/73/c8/f073c8e359a88865c17e2a6f16a594aa.jpg",
    },
    {
      src: "https://i.pinimg.com/736x/6e/8b/81/6e8b8185890f6cde42a4c442bf7bd014.jpg",
    },
    {
      src: "https://i.pinimg.com/736x/71/1f/c0/711fc0f41b1316c2d8d265b4bbec1880.jpg",
    },
    {
      src: "https://i.pinimg.com/736x/d0/3e/14/d03e14a9189be111b8b6c6e994520858.jpg",
    },
    {
      src: "https://i.pinimg.com/736x/0d/98/82/0d9882a4d49d908b264b6ecd1a0f31d0.jpg",
    },
    {
      src: "https://i.pinimg.com/736x/67/af/3a/67af3a274d02003387b2c749b66d73e1.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % image_sources.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.7), rgba(0,0,0,.8)), 
          url("https://plus.unsplash.com/premium_photo-1663047397245-2ddad26c5dd7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
        backgroundSize: "cover",
        backgroundPosition: "top 5%",
        backgroundRepeat: "no-repeat",
      }}
      className="w-screen mt-16 h-[95vh] lg:h-[100vh] relative"
    >
      <div className="w-full h-auto">
        <div className="absolute top-[20%] mx-10 text-center py-4 sm:mx-34 md:mx-48 lg:left-[-3%] lg:text-start lg:w-[40%]">
          <h1 className="text-[36px] text-zinc-200 font-bold">
            Balancing <br /> Excellence and Efficiency through <br />
            <span className="text-[#0cbcbd]">Professional management...</span>
          </h1>
          <h1 className="text-[36px] text-zinc-200 font-bold hidden 2xl:block mt-4">
            “Together, let’s create a facility that reflects your vision, support and your growth.”
          </h1>
          <button className="bg-[#3D4A6E] mt-8 rounded-lg px-6 py-4 text-md font-semibold text-center cursor-pointer text-white transition duration-300 hover:bg-zinc-200 hover:text-[#3D4E6E]">
            <NavLink to="/ikshana-facilities/services">Get Your First Service</NavLink>
          </button>
        </div>

          <div className="hidden lg:block w-[27%] lg:h-[70%] xl:h-[80%] absolute lg:right-[8%] xl:right-[11%] overflow-hidden">
          <AnimatePresence>
            <motion.div
              key={currentIndex}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full mx-auto mt-18 bg-cover bg-center p-10"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.4), rgba(0,0,0,.6)), url(${image_sources[currentIndex].src})`,
              }}
            >
            </motion.div>
          </AnimatePresence>
          </div>


       
      </div>
    </div>
  );
}

export default HomePage;
