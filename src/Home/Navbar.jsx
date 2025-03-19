import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // Import NavLink
import logo from "../assets/Logo.png";

function Navbar() {
  const [show, setShow] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Clients", path: "/clients" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="w-full h-[10vh] shadow-lg bg-[#3D4A6E] flex items-center justify-between px-6 py-2 fixed top-0 left-0 z-10 md:px-10 lg:px-16 xl:px-24 2xl:px-36">
      <div className="w-32 h-10 md:w-42">
        <img className="w-full h-full object-fit" src={logo} alt="Logo" />
      </div>
      <i
        onClick={() => setShow(!show)}
        className={`${
          show ? "ri-close-line" : "ri-menu-line"
        } font-semibold text-xl text-white md:hidden `}
      ></i>

      {/* Mobile Menu */}
      {show && (
        <div className="w-full absolute top-[100%] left-0 text-center p-4 bg-zinc-200 z-10 md:hidden">
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

      {/* Desktop Menu */}
      <div className="hidden text-white md:block md:flex items-center justify-between relative">
        {navLinks.map((link, index) => (
          <NavLink
            key={index}
            to={link.path}
            className="font-normal mr-10 text-lg cursor-pointer md:mr-6 hover:text-[#0cbcbd] transition duration-300"
            activeClassName="text-[#0cbcbd] font-semibold" // Highlight active link
          >
            {link.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
