import React from "react";
import maps from "../assets/Maps.png";
import maps2 from "../assets/Maps2.png";


function Contact() {
  const Contact_data = [
    {
      Type: "Registered Office",
      Location: "MCH No. 6-3-1106, Elite Towers, Somajiguda, Hyderabad,",
      State: "Telangana - 500082",
      img: maps,
    },
    {
      Type: "Branch Office",
      Location:
        "6-668/10/25, First Floor, Durga Nagar Colony Somajiguda, Hyderabad, ",
      State: "Telangana - 500082",
      img: maps2,
    },
  ];
  return (
    <div className="w-screen h-fit mt-8 pb-10 px-6 lg:mt-20 lg:px-16 xl:px-24 2xl:px-36">
      <h1 className="font-bold text-3xl text-[#3D4E6F] text-center mb-6 sm:text-4xl md:mb-10">
        We Are Here For You
      </h1>

      {Contact_data.map((item, index) => {
        return (
          <div key={index} className="mb-6 md:flex items-center lg:mb-14">
            <div className="text-center mb-6  md:px-6 lg:w-[40%] lg:px-12">
              <h1 className="font-bold mb-3 text-xl lg:text-2xl">{item.Type}</h1>
              <p className="font-semibold  text-lg lg:text-xl opacity-[0.8]">
                {item.Location}
              </p>
              <p className="font-semibold mb-3 text-lg opacity-[0.8]">
                {item.State}
              </p>
            </div>

            <img
              className="w-[90%] h-[30vh] mx-auto sm:w-[70%] h-[35vh] md:w-[50%] lg:w-[40%]"
              src={item.img}
              alt=""
            />
          </div>
        );
      })}
    </div>
  );
}

export default Contact;
