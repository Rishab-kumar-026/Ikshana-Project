import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Career_Banner() {
  const [bgImage, setBgImage] = useState("");

  useEffect(() => {
    const updateBackground = () => {
      setBgImage(
        window.innerWidth > 768
          ? "https://i.pinimg.com/736x/7b/53/e5/7b53e5e55830283364407010884c0149.jpg"
          : "https://i.pinimg.com/736x/3d/f2/e7/3df2e77ff2514e98e166b56794ce48e0.jpg"
      );
    };

    updateBackground(); // Set initial background
    window.addEventListener("resize", updateBackground);

    return () => window.removeEventListener("resize", updateBackground);
  }, []);

  return (
    <div
      className="w-screen h-[100vh] mt-18 mb-10 py-10 px-6 flex flex-col justify-center relative sm:h-[80vh] lg:h-[85vh] lg:px-16 xl:px-24 2xl:px-36"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,.7), rgba(0,0,0,.7), rgba(0,0,0,.7)), url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full h-full md:h-[90%] lg:h-[80%] text-zinc-100">
        <h1 className="font-semibold mb-5">
          Career At Ikshana Facilities Pvt Ltd
        </h1>
        <p className="text-4xl mb-5 font-bold leading-[1.3] md:text-5xl md:w-[90%] lg:w-[70%] xl:w-[60%]">
          Explore Job Opportunities with Ikshana...
        </p>
        <p className="font-normal leading-[1.8] tracking-wide md:w-[95%] lg:w-[80%] xl:w-[60%]">
          At Ikshana, our employees are the backbone of our success. As a
          leading facility management company with a team of 300+ dedicated
          professionals, we take pride in creating a supportive and empowering
          work environment. We value our people, ensuring they have the right
          resources, training, and opportunities to grow.
        </p>

        <div className="w-full mt-8 flex flex-col md:flex-row md:gap-x-5">
          <NavLink>
            <button className="w-full px-5 py-3 bg-[#3D4A6F] rounded-lg mb-4 cursor-pointer md:mb-0 md:w-[25vw] xl:w-[15vw]">
              View Job Roles
            </button>
          </NavLink>
          <NavLink>
            <button className="w-full px-5 py-3 bg-[#3D4A6F] rounded-lg cursor-pointer md:w-[25vw] xl:w-[15vw]">
              Apply Now
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Career_Banner;
