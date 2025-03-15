import React, { useState } from "react";
import logo from "../assets/Logo.png";

function Navbar() {
  const [show, setShow] = useState(false);
  return (
    <div className="w-screen h-[10vh] shadow-lg bg-[#3D4A6E] flex items-center justify-between px-6 py-2 relative md:px-10 lg:px-16 xl:px-24 2xl:px-36">
      <div className="w-32 h-10 md:w-42">
        <img className="w-full h-full object-fit" src={logo} alt="" />
      </div>
      <i
        onClick={() => setShow(!show)}
        className={`${
          show ? "ri-close-line" : "ri-menu-line"
        } font-semibold text-xl text-white md:hidden `}
      ></i>

      {show ? (
        <div className="w-full absolute top-[100%] left-0 text-center p-4 bg-zinc-200 z-10 md:hidden">
          {["Home", "About", "Services", "Clients", "Contact"].map(
            (item, index) => {
              return (
                <h1
                  key={index}
                  className="font-semibold text-lg text-[#3D4A6E] mb-3 px-1"
                >
                  {item}
                </h1>
              );
            }
          )}
        </div>
      ) : null}

      <div className="hidden text-white md:block md:flex items-center justify-between relative">
        {["Home", "About", "Services", "Clients", "Contact"].map(
          (item, index) => {
            return (
              <h1
                key={index}
                className="font-normal mr-10 text-lg cursor-pointer md:mr-6 hover:text-[#E31E25] transition duration-300 "
              >
                {item}
              </h1>
            );
          }
        )}
      </div>
    </div>
  );
}

export default Navbar;
