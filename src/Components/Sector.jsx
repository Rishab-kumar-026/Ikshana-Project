import React from "react";

function Sector() {
  const data = [
    {
      name: "IT Office",
      img_src:
        "https://images.unsplash.com/photo-1577412647305-991150c7d163?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&,ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Jwellers",
      img_src:
        "https://images.unsplash.com/photo-1487377330423-12f2f3e6d27a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Health Care",
      img_src:
        "https://images.unsplash.com/photo-1512678080530-7760d81faba6?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Hotels",
      img_src:
        "https://plus.unsplash.com/premium_photo-1687960116497-0dc41e1808a2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Business Services",
      img_src:
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Banks",
      img_src:
        "https://images.unsplash.com/photo-1564859125999-183f0fc1f3b5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <div className="w-screen h-fit px-6 lg:mt-20 lg:px-16 xl:px-24 2xl:px-36">
      <h1 className="font-bold text-4xl text-[#3D4E6F] text-center mb-6">
        Our Core Sectors
      </h1>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 lg:grid-cols-3">
        {data.map((item, index) => {
          return (
            <div key={index} className="mx-auto h-40vh mb-4">
              <img src={item.img_src} alt="" />
              <h3 className="text-xl font-semibold mt-4">{item.name}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Sector;
