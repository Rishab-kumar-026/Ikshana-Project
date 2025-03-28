import React, { useRef, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion"; // Import Framer Motion

function Intro() {
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [hasAnimated]);

  return (
    <div
      ref={ref}
      className="w-screen h-fit mt-5 flex flex-col items-center justify-center px-6 sm:px-6 lg:flex-row lg:justify-center lg:items-center gap-10 lg:h-[60vh] xl:px-24 2xl:px-36"
    >
      {/* Animated Image (Only on first appearance) */}
      <motion.img
        initial={{ opacity: 0, y: 70 }}
        animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 70 }}
        transition={{ type: "spring", stiffness: 120, damping: 10, delay: 0.2 }}
        className="w-full mb-5 md:h-[50vh] lg:w-[40vw]"
        src="https://plus.unsplash.com/premium_photo-1661370118205-7ebc6eab9814?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdl&auto=format"
        alt=""
      />

      {/* Text Section */}
      <motion.div className="text-start h-[50vh] mb-4">
        {/* Animated Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 70 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 70 }}
          transition={{ type: "spring", stiffness: 120, damping: 10, delay: 0.3 }}
          className="text-[32px] text-[#3E4D6F] leading-none mb-4 font-bold"
        >
          About Our Company
        </motion.h1>

        {/* Animated Paragraph 1 */}
        <motion.p
          initial={{ opacity: 0, y: 70 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 70 }}
          transition={{ type: "spring", stiffness: 120, damping: 10, delay: 0.5 }}
          className="text-[17px] font-normal tracking-wide leading-[1.5] mb-4"
        >
          Ikshana Facilities Pvt Ltd is a dynamic and innovative facility
          management company established in January 2023, building on the solid
          foundation of our experience in operating healthcare services since 2012.With a deep understanding of the healthcare industry and a proven
          track record of delivering exceptional services.
        </motion.p>

        {/* Animated Paragraph 2 (Only in lg screens) */}
        <motion.p
          initial={{ opacity: 0, y: 70 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 70 }}
          transition={{ type: "spring", stiffness: 120, damping: 10, delay: 0.7 }}
          className="text-[17px] hidden font-normal tracking-wide leading-[1.5] mb-4 lg:block"
        >
          We understand the importance of a well-managed facility that enhances
          productivity, comfort, and safety.With our comprehensive range of facilities
          services, tailored to your specific requirements, we are your go-to
          partner for all your facility management needs.
        </motion.p>

        {/* Animated Button */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 70 }}
          transition={{ type: "spring", stiffness: 120, damping: 10, delay: 0.9 }}
          className="w-full flex justify-start mt-5"
        >
          <NavLink
            to="/ikshana-facilities/about"
            className="bg-[#3D4A6E] rounded-lg px-6 py-4 text-md font-semibold text-center cursor-pointer text-white transition duration-300 hover:bg-zinc-200 hover:text-[#3D4E6E] hover:border-2 border-[#3D4E6E]"
          >
            Know more
          </NavLink>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Intro;
