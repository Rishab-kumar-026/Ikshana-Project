import React from "react";

function Service() {
  const data = [
    {
      service_name: "Electrician",
      img: "https://images.unsplash.com/photo-1555963966-b7ae5404b6ed?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: "ri-lightbulb-flash-line",
      color: "text-orange-500",
      info: " Reliable electrician services for all your wiring and repair needs.",
    },
    {
      service_name: "Security",
      img: "https://plus.unsplash.com/premium_photo-1682125939509-03aa8ae4b587?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: "ri-lock-2-fill",
      color: "text-green-500",
      info: "Trained security guards for your safety and peace of mind.",
    },
    {
      service_name: "Plumber",
      img: "https://plus.unsplash.com/premium_photo-1664298589198-b15ff5382648?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: "ri-drop-fill",
      color: "text-blue-500",
      info: " Expert plumbing solutions for leaks, repairs, and installations. ",
    },
    {
      service_name: "House Keeping",
      img: "https://media.istockphoto.com/id/1163763269/fr/photo/il-nest-jamais-trop-tard-pour-nettoyer-votre-maison-au-printemps.webp?s=2048x2048&w=is&k=20&c=96NX47F3OMmYUSdt9BwGdaYbSc2DX_HIhn-nmUqCaIc=",
      icon: "ri-delete-bin-6-line",
      color: "text-red-500",
      info: "Professional housekeeping to keep your space clean and organized. ",
    },
    {
      service_name: "Maid Services",
      img: "https://plus.unsplash.com/premium_photo-1661634777510-e6e56b312604?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: "ri-service-line",
      color: "text-pink-500",
      info: "Trusted maid services for a spotless and well-maintained home. ",
    },
    {
      service_name: "Pest Control",
      img: "https://plus.unsplash.com/premium_photo-1682126082802-983618de1dd9?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: "ri-bug-fill",
      color: "text-red-500",
      info: "Effective pest control to keep your home & Office pest-free.",
    },
    {
      service_name: "Maintenance",
      img: "https://plus.unsplash.com/premium_photo-1664300494539-313eac2a6095?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: "ri-door-open-line",
      color: "text-yellow-500",
      info: "Reliable maintenance services to keep your home in top shape.",
    },
    {
      service_name: "Driver",
      img: "https://plus.unsplash.com/premium_photo-1677574622702-d93f29b3708b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: "ri-steering-2-fill",
      color: "text-purple-500",
      info: "Professional chauffeurs ensuring a smooth and secure journey.",
    },

    {
      service_name: "Body Guards",
      img: "https://media.istockphoto.com/id/87307375/photo/body-guards-protecting-a-woman.jpg?s=2048x2048&w=is&k=20&c=WUba8GJL6EuKfDUYcjoMpNxDekchrPWN1yyGn1MaODA=",
      icon: "ri-spy-fill",
      color: "text-yellow-500",
      info: "Elite protection tailored for your safety and peace of mind.",
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
            <div key={index}
              className="relative w-full h-[45vh] bg-red-100 mx-auto rounded-xl sm:w-full"
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

              <div className="Information h-full flex items-center justify-center relative cursor-pointer group">
                <p className="w-[70%] text-zinc-300 p-2 font-semibold leading-[1.5] tracking-wide absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                 {item.info}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Service;
