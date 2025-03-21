import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion"; // Import Framer Motion

function HomePage() {
  const image_sources = [
    {
      name: "Maid Service",
      src: "https://i.pinimg.com/1200x/b1/37/da/b137dae92e387801fdb9dc1b2805fc45.jpg",
    },
    {
      name: "Body Guard",
      src: "https://i.pinimg.com/736x/a3/17/ae/a317aec31eecbc118e2e8bef93597f54.jpg",
    },
    {
      name: "Driver",
      src: "https://i.pinimg.com/736x/71/1f/c0/711fc0f41b1316c2d8d265b4bbec1880.jpg",
    },
    {
      name: "Air Conditioning",
      src: "https://i.pinimg.com/736x/dd/16/84/dd1684aa9e63a1db3ad6ae5590b919f2.jpg",
    },
    {
      name: "Electrician",
      src: "https://i.pinimg.com/736x/8d/27/6a/8d276a992defac90c2de5e7bba8a242e.jpg",
    },
    {
      name: "Security",
      src: "https://i.pinimg.com/736x/20/a6/5e/20a65e5089b7ccb6774d528a9df494bb.jpg",
    },
    {
      name: "Patient Care",
      src: "https://i.pinimg.com/736x/a5/e2/7f/a5e27f5e5f34dd59d14a726a18aa10f5.jpg",
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
        backgroundImage:
          window.innerWidth >= 1024
            ? `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5), rgba(0,0,0,.5)), url(${image_sources[currentIndex].src})`
            : `linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.7), rgba(0,0,0,.8)), 
          url("https://plus.unsplash.com/premium_photo-1663047397245-2ddad26c5dd7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
        backgroundSize: "cover",
        backgroundPosition: "top 3%",
        backgroundRepeat: "no-repeat",
      }}
      className="w-screen mt-16 h-[95vh] lg:h-[100vh] relative"
    >
      <div className="w-full h-auto">
        <div className="absolute top-[20%] mx-10 text-center py-4 sm:mx-34 md:mx-48 lg:left-[-3%] lg:text-start lg:w-[40%]">
          {/* Quote Animation */}
          <motion.h1
            className="text-[36px] text-zinc-200 font-bold"
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.2 }}
          >
            Balancing <br /> Excellence and Efficiency through <br />
            <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              Professional management...
            </span>
          </motion.h1>

          {/* Second Quote (Delayed Bounce Animation) */}
          <motion.h1
            className="text-[36px] text-zinc-200 font-bold hidden 2xl:block mt-4"
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.5 }}
          >
            “Together, let’s create a facility that reflects your vision, support, and your growth.”
          </motion.h1>

          {/* Button Animation (Delayed Even More) */}
          <NavLink to="/ikshana-facilities/services">
          <motion.button
            className="bg-[#3D4A6E] mt-8 rounded-lg px-6 py-4 text-md font-semibold text-center cursor-pointer text-white transition duration-300 hover:bg-zinc-200 hover:text-[#3D4E6E]"
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.8 }}
          >
           Get Your First Service
          </motion.button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
