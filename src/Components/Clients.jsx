import React from "react";

function Clients() {
  const clients_data = [
    "Swapna Health Care",
    "Asvins Hospitals",
    "SID Hospitality",
    "Zoi Hospitals",
    "Pharmasave",
    "Amaroso",
    "Digital Minds Software Solutions",
    "Nikaara Jewelers",
    "Vasundhara Diamonds and Jewellers",
    "LA Greens Apartments",
    "Babukhan Lakefront Villas",
    "Dantu Villas",
    "Green Grace Apartments",
    "Equidistant Infrastructure Pvt Ltd",
  ];

  return (
    <div className="all-option-slider-section w-screen h-[12vh] bg-[#3E4D6F] overflow-hidden">
      <div className="option-container w-full flex items-center h-[100%] px-2 rounded-lg mx-auto overflow-hidden">
        <div className="option-container-box flex items-center gap-4 loop-scroll">
          {[...clients_data, ...clients_data].map((item, index) => (
            <div key={index + item}>  {/* ✅ Unique key using item name */}
              <h1 className="text-[20px] text-white font-medium whitespace-nowrap mr-4">
                <i className="ri-circle-fill text-[#FFF] text-[8px] mr-2"></i>
                {item}
              </h1>
            </div>
          ))}
           {[...clients_data, ...clients_data].map((item, index) => (
            <div key={index + item}>  {/* ✅ Unique key using item name */}
              <h1 className="text-[20px] text-white font-medium whitespace-nowrap mr-4">
                <i className="ri-circle-fill text-[#FFF] text-[8px] mr-2"></i>
                {item}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Clients;
