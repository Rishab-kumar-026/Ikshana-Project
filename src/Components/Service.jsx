import React from "react";

function Service() {
  const data = [
    {
      service_name: "Electrician",
      img: "https://images.unsplash.com/photo-1555963966-b7ae5404b6ed?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: "ri-lightbulb-flash-line",
      rating: "4.4",
      color: "text-orange-500",
    },
    {
      service_name: "Security",
      img: "https://plus.unsplash.com/premium_photo-1682125939509-03aa8ae4b587?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: "ri-lock-2-fill",
      rating: "4.0",
      color: "text-green-500",
    },
    {
      service_name: "Plumber",
      img: "https://plus.unsplash.com/premium_photo-1664298589198-b15ff5382648?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: "ri-drop-fill",
      rating: "3.9",
      color: "text-blue-500",
    },
    {
      service_name: "House Keeping",
      img: "https://media.istockphoto.com/id/1163763269/fr/photo/il-nest-jamais-trop-tard-pour-nettoyer-votre-maison-au-printemps.webp?s=2048x2048&w=is&k=20&c=96NX47F3OMmYUSdt9BwGdaYbSc2DX_HIhn-nmUqCaIc=",
      icon: "ri-delete-bin-6-line",
      rating: "4.7",
      color: "text-red-500",
    },
    {
      service_name: "Maid Services",
      img: "https://plus.unsplash.com/premium_photo-1661634777510-e6e56b312604?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: "ri-service-line",
      rating: "3.5",
      color: "text-pink-500",
    },
    {
      service_name: "Pest Control",
      img: "https://plus.unsplash.com/premium_photo-1682126082802-983618de1dd9?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: "ri-bug-fill",
      rating: "4.2",
      color: "text-red-500",
    },
    {
      service_name: "Maintenance",
      img: "https://plus.unsplash.com/premium_photo-1664300494539-313eac2a6095?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: "ri-door-open-line",
      rating: "4.8",
      color: "text-yellow-500",
    },
  ];

  return (
    <div className="w-screen h-fit mt-8 pb-10 px-6 lg:mt-20 lg:px-16 xl:px-24 2xl:px-36">
      <h1 className="font-bold text-4xl text-[#3D4E6F] text-center mb-6">
        Our Services
      </h1>
      <div className="w-full grid grid-cols-1 gap-6 sm:grid-cols-2 gap-4 lg:grid-cols-3">
        {data.map((item, index) => {
          return (
            <div
              className="relative w-[80%] h-[45vh] bg-red-100 mx-auto rounded-xl sm:w-full"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.5), rgba(0,0,0,.7)), 
        url(${item.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <h1 className="font-semibold absolute bottom-4 left-4 text-xl text-white">
                {item.service_name}
              </h1>
              <i
                className={`${item.icon} absolute bottom-4 right-4 text-2xl ${item.color}`}
              ></i>
              <div className="w-9 h-9 rounded-full bg-yellow-400 absolute flex items-center justify-center text-sm font-semibold right-[-6%] top-[-2%] text-white">
                {item.rating}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Service;
