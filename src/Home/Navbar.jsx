import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion"; // Import Framer Motion
import logo from "../assets/Logo.png";

function Navbar() {
  const [show, setShow] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/ikshana-facilities/about" },
    { name: "Services", path: "/ikshana-facilities/services" },
    { name: "Clients", path: "/ikshana-facilities/clients" },
    { name: "Careers", path: "/ikshana-facilities/careers" },
    { name: "Gallery", path: "/ikshana-facilities/gallery" },
    { name: "Contact", path: "/ikshana-facilities/contact" },
    
  ];

  return (
    <div className="w-full h-[10vh] shadow-lg bg-[#3D4A6E] flex items-center justify-between px-6 py-2 fixed top-0 left-0 z-10 md:px-10 lg:px-16 xl:px-24 2xl:px-36">
      {/* Logo */}
      <div className="w-32 h-10 md:w-42">
        <img className="w-full h-full object-fit" src={logo} alt="Logo" />
      </div>

      {/* Mobile Menu Icon */}
      <i
        onClick={() => setShow(!show)}
        className={`${
          show ? "ri-close-line" : "ri-menu-line"
        } font-semibold text-xl text-white lg:hidden`}
      ></i>

      {/* Mobile Menu */}
      {show && (
        <div className="w-full absolute top-[100%] left-0 text-center p-4 bg-zinc-200 z-10 lg:hidden">
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              className="block font-semibold text-lg text-[#3D4A6E] mb-3 px-1"
              activeClassName="text-[#0cbcbd]"
              onClick={() => setShow(false)} // Close menu on click
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      )}

      {/* Desktop Menu with Animation */}
      <div className="hidden lg:flex items-center justify-between space-x-8 text-white">
        {navLinks.map((link, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: -50 }} // Start from above
            animate={{ opacity: 1, y: 0 }} // Animate to normal position
            transition={{ type: "spring", stiffness: 120, damping: 10, delay: index * 0.2 }} // Staggered delay
          >
            <NavLink
              to={link.path}
              className="font-normal text-lg cursor-pointer hover:text-[#0cbcbd] transition duration-300"
              activeClassName="text-[#0cbcbd] font-semibold"
            >
              {link.name}
            </NavLink>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
