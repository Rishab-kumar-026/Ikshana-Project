import React from "react";
import Scores from "../Home/Scores";
import workers from "../assets/workers.png";

function About_Details() {
  return (
    <div className="w-screen h-auto mt-26 pb-10 mb-10 px-6 lg:mt-20 lg:px-16 xl:px-24 2xl:px-36">
      <div className="w-full grid grid-cols-1 gap-y-20 md:grid-cols-2 lg:mt-30">
        <div className="w-[100%] h-[40vh] mx-auto sm:w-[70%] sm:h-[40vh] md:h-[55vh] md:w-[90%] lg:h-[47vh] xl:h-[45vh] lg:mx-0">
          <img
            className="w-full h-full object-fit"
            src="https://i.pinimg.com/736x/c0/45/f6/c045f66252411eda5b7d130e2108c6a6.jpg"
            alt=""
          />
          <h1 className="mt-3 font-semibold text-xl leading-none text-center">
            Chada Sathish Reddy
          </h1>
          <h1 className=" font-normal text-md text-center">
            ( Chief Executive Officer )
          </h1>
        </div>

        <div className="sm:px-4 md:text-[15px] md:py-2 xl:py-4 xl:text-[18px]">
          <p className="font-normal tracking-wide leading-[1.5] mb-4">
            <span className="text-[#3D4E6F] font-bold">
              IKSHANA FACILITIES PVT LTD
            </span>{" "}
            is a leading facility management company committed to delivering
            unmatched services and exceeding expectations. With great pride, I
            step into this role after serving 12 years as head HR, bringing my
            expertise in leadership and a deep understanding of our clients’
            needs.
          </p>

          <p className="font-normal tracking-wide leading-[1.5] mb-4">
            As the CEO of IKSHANA FACILITIES PVT LTD, I am proud to lead a team
            of passionate professionals who are committed to delivering
            excellence in every aspect of our services. We continuously invest
            in training and development to stay ahead of industry trends and
            advancements, ensuring that we provide you with the latest and most
            effective solutions.
          </p>
        </div>
      </div>

      <div className="w-full mt-10 grid grid-cols-1 gap-y-10 md:mt-20 md:grid-cols-2 lg:mt-30 xl:gap-x-10">
        <div className="w-[100%] h-[40vh] mx-auto sm:w-[70%] sm:h-[40vh] md:h-[55vh] md:w-[90%] lg:h-[47vh] xl:h-[45vh] lg:mx-0 md:hidden">
          <img className="w-full h-full object-fit" src={workers} alt="" />
        </div>
        <div className="sm:px-4 md:text-[15px] md:py-2 xl:py-4 xl:text-[18px]">
          <p className="font-normal tracking-wide leading-[1.5] mb-4">
            At{" "}
            <span className="text-[#3D4E6F] font-bold">
              IKSHANA FACILITIES PVT LTD
            </span>
            , we believe in building long-term partnerships based on trust,
            transparency, and open communication. We value the relationship we
            have with our clients and work collaboratively to understand their
            specific needs and goals. Our dedicated managers ensure that your
            facility receives personalized attention and tailored solutions.
          </p>

          <p className="font-normal tracking-wide leading-[1.5]">
            We set rigorous standards for ourselves and hold ourselves
            accountable to ensure unparalleled service delivery. Our dedicated
            team of professionals is trained to treat each property as if it
            were our own, ensuring meticulous attention to detail and a
            commitment to excellence in every task.
          </p>
        </div>

        <div className="hidden w-[100%] h-[40vh] mx-auto sm:w-[70%] sm:h-[40vh] md:h-[55vh] md:w-[90%] lg:h-[47vh] xl:h-[45vh] lg:mx-0 md:block">
          <img className="w-full h-full object-cover" src={workers} alt="" />
        </div>
      </div>
    </div>
  );
}

export default About_Details;
