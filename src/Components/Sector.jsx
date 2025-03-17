import React from "react";

function Sector() {
  const data = [
    {
      name: "IT Office",
      img_src:
        "https://i.pinimg.com/736x/58/cf/8a/58cf8aea0a0986010400b59467731f8f.jpg",
    },
    {
      name: "Jwellers",
      img_src:
        "https://i.pinimg.com/736x/d6/e5/9a/d6e59a91efbb90b581490c09d6d0e14c.jpg",
    },
    {
      name: "Health Care",
      img_src:
        "https://i.pinimg.com/736x/5f/65/70/5f6570442c7cabd122fd9c34c97678a8.jpg",
    },
    {
      name: "Hotels",
      img_src:
        "https://i.pinimg.com/736x/22/e7/42/22e7426e9fcd95c88d1fab3f3fbbb45d.jpg",
    },
    {
      name: "Business Services",
      img_src:
        "https://i.pinimg.com/736x/b6/cc/88/b6cc8806ea12c566e8ede6875da743f5.jpg",
    },
    {
      name: "Banks",
      img_src:
       "https://i.pinimg.com/736x/c5/f9/f5/c5f9f5643b22e2ee9e32432feaf31a7e.jpg",
    },
  ];
  return (
    <div className="w-screen h-fit px-6 mb-10 lg:mt-20 lg:px-16 xl:px-24 2xl:px-36">
      <h1 className="font-bold text-4xl text-[#3D4E6F] text-center mb-6">
        Our Core Sectors
      </h1>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 lg:grid-cols-3">
        {data.map((item, index) => {
          return (
            <div key={index} className="mx-auto h-40vh mb-4">
              
              <div className="w-[90vw] sm:w-[45vw] lg:w-[27vw] xl:w-[25vw] h-[40vh] object-fit">
              <img className="w-full h-full" src={item.img_src} alt="" />
              </div>
              
              <h3 className="text-xl font-semibold mt-4 pl-2">{item.name}</h3> 
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Sector;
