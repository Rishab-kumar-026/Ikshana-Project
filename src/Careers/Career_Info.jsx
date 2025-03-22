import React from "react";

function Career_Info() {
  return (
    <div className="w-screen h-auto mt-10 pb-10 mb-10 px-6 lg:mt-20 lg:px-16 xl:px-24 2xl:px-36">
      <div className="w-full grid grid-cols-1 gap-y-20 md:grid-cols-2 lg:mt-30">
        <div className="w-[100%] h-[40vh] mx-auto sm:w-[70%] sm:h-[40vh] md:h-[60vh] md:w-[90%] lg:h-[55vh] xl:h-[60vh] lg:mx-0">
          <img
            className="w-full h-full object-fit"
            src="https://i.pinimg.com/736x/a8/08/dc/a808dc4abe948bf36d57d4caa90c0c4c.jpg"
            alt=""
          />
        </div>

        <div className="w-full flex flex-col justify-center sm:px-4 md:text-[15px] md:py-2 xl:py-4 xl:text-[18px]">
          <h1 className="text-[32px] text-[#3E4D6F] leading-[1.2] mb-4 font-bold">
            Our Team, Our Greatest Asset
          </h1>
          <p className="font-normal tracking-wide leading-[1.5] mb-4">
            At{" "}
            <span className="text-[#3D4E6F] font-bold">
              IKSHANA FACILITIES PVT LTD
            </span>{" "}
            , we are committed to creating a workplace where our team members
            feel motivated, valued, and connected. We provide the tools,
            training, and opportunities needed to help them grow and succeed in
            their careers.
          </p>

          <p className="font-normal tracking-wide leading-[1.5] mb-4">
            {" "}
            Whether working behind the scenes or on the front lines, our
            dedicated professionals play a crucial role in enhancing our
            clients' brand image. Through exceptional service and attention to
            detail, we ensure that every interaction leaves a lasting
            impression, fostering trust, loyalty, and excellence in every space
            we manage.
          </p>
        </div>
      </div>

      <div className="w-full grid grid-cols-1 mt-10 gap-y-20 md:grid-cols-2 lg:mt-30 lg:gap-x-12 xl:gap-x-16">
        <div className=" w-full flex flex-col justify-center sm:px-4 md:text-[15px] md:py-2 xl:py-4 xl:text-[18px]">
          <h1 className="text-[32px] text-[#3E4D6F] leading-[1.2] mb-4 font-bold">
            Grow your Career with Ikshana
          </h1>
          <p className="font-normal tracking-wide leading-[1.5] mb-4">
            We believe our people are the foundation of our success. We are
            committed to their growth, providing continuous training,
            development opportunities, and clear career paths.
          </p>

          <p className="font-normal tracking-wide leading-[1.5] mb-4">
            Many of our leaders started as service team members, a testament to
            our dedication to nurturing talent and fostering long-term success.
            When you join us, you become part of a team that values your
            potential and invests in your future.
          </p>
        </div>

        <div className="w-[100%] h-[40vh] mx-auto sm:w-[70%] sm:h-[40vh] md:h-[60vh] md:w-[90%] lg:w-[100%] lg:h-[45vh] xl:h-[50vh] lg:mx-0">
          <img
            className="w-full h-full object-fit"
            src="https://i.pinimg.com/736x/42/b7/e3/42b7e3e204ad93f3e39e7bd37b0bfb1f.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Career_Info;
