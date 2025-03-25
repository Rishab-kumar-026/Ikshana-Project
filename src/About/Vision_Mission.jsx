import React from "react";
import vision from "../assets/Vision.png";
import vision_img from "../assets/Vision Img.png";
import mission_img from "../assets/Mission img.png";
import mission from "../assets/Mission.png";

function Vision_Mission() {
  return (
    <div className='className="w-screen h-auto mt-20 px-6 lg:px-16 xl:px-24 2xl:px-36 '>
      <div className="w-full h-auto xl:p-10">
        <div className="lg:flex gap-x-10">
          <div className="w-full lg:w-[130%]">
            <div className="flex items-center justify-center gap-x-2 mb-5">
              <img className="w-16 h-16" src={vision} alt="" />
              <h1 className="font-bold text-4xl text-[#3D4E6F] text-center">
                Our Vision
              </h1>
            </div>
            <p className="md:text-[18px] xl:text-[18px] font-normal tracking-wide leading-[1.5] my-4 sm:text-center lg:text-start">
              "Our vision is to be the leading and most trusted facilities
              services company, renowned for our unwavering commitment to
              excellence, innovation, and customer satisfaction. We strive to
              provide exceptional, cutting-edge solutions that not only meet but
              exceed our customers’ diverse and evolving needs. By leveraging
              advanced technology, sustainable practices, and a highly skilled
              workforce, we aim to create a seamless and efficient environment
              for businesses and communities."
            </p>

            <p className="hidden md:text-[18px] xl:text-[18px] font-normal tracking-wide leading-[1.5] my-4 sm:text-center lg:text-start xl:block">
              " Our dedication to quality, reliability, and continuous improvement ensures that we remain a valued partner in delivering superior facility management services that drive success and long-term growth for our clients."
            </p>
          </div>

          <div className="w-full h-[40vh] mx-auto sm:w-[90%] sm:h-[45vh] md:h-[50vh] md:w-[90%] lg:h-[45vh] xl:h-[55vh] xl:w-[120%]  lg:mx-0">
            <img
              className="w-full h-full object-fit"
              src={vision_img}
              alt=""
            />
          </div>
        </div>



        <div className="mt-15 lg:flex lg:flex-row-reverse gap-x-18 mb-10">
          <div className="w-full lg:w-[130%]">
            <div className="flex items-center justify-center gap-x-2 mb-5">
              <img className="w-16 h-16" src={mission} alt="" />
              <h1 className="font-bold text-4xl text-[#3D4E6F] text-center">
                Our Mission
              </h1>
            </div>
            <p className="md:text-[18px] xl:text-[18px] font-normal tracking-wide leading-[1.5] my-4 sm:text-center lg:text-start">
              "Our mission is to establish ourselves as a reputable, dependable, and industry-leading provider of comprehensive facility management services. We are committed to delivering innovative, efficient, and sustainable solutions tailored to meet the diverse needs of our clients across various industries. By prioritizing quality, safety, and operational excellence, we strive to enhance workplace environments, optimize performance, and drive long-term success."
            </p>

            <p className="hidden md:text-[18px] xl:text-[18px] font-normal tracking-wide leading-[1.5] my-4 sm:text-center lg:text-start xl:block">
              "Our goal is to foster lasting partnerships built on trust, integrity, and transparency while continuously evolving with advancements in technology and industry best practices."
            </p>
          </div>

          <div className="w-full h-[40vh] mx-auto sm:w-[90%] sm:h-[45vh] md:h-[50vh] md:w-[90%] lg:h-[45vh] xl:h-[55vh] xl:w-[120%]  lg:mx-0">
            <img
              className="w-full h-full object-fit"
              src={mission_img}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vision_Mission;
