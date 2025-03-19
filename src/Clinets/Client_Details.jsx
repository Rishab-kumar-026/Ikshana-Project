import React from "react";

function Client_Details() {
  const data = [
    {
      client_name: "Zoi Hospitals (Somajiguda)",
      img: "https://i.pinimg.com/736x/ee/ab/bf/eeabbf287a1eb43cf76321b99e15698b.jpg",
    },
    {
      client_name: "Zoi Hospitals (Attapur)",
      img: "https://i.pinimg.com/736x/b8/5d/93/b85d937424a1a88c04cd594158a6fcc5.jpg",
    },
    {
      client_name: "Zoi Hospitals (Ameerpet)",
      img: "https://i.pinimg.com/736x/0d/21/9b/0d219b3bb1eaba925b1bcac0171b40b3.jpg",
    },
    {
      client_name: "Swapna Health Care",
      img: "https://i.pinimg.com/736x/9b/de/09/9bde09f9f89cd4a452b492f689796e05.jpg",
    },
    {
      client_name: "Asvins Hospitals",
      img: "https://i.pinimg.com/736x/eb/6c/3c/eb6c3c2a3d29aa72561c4670a530584c.jpg",
    },
    {
      client_name: "Digital Minds Software Solutions",
      img: "https://i.pinimg.com/736x/d4/31/54/d4315499874c35bf41d4fef19256f67c.jpg",
    },
    {
      client_name: "Pharmasave",
      img: "https://i.pinimg.com/736x/66/09/87/6609874acd9772e2485e9d028deb4e71.jpg",
    },
    {
      client_name: "Nikaara Jewelers",
      img: "https://i.pinimg.com/736x/35/bb/8e/35bb8efb1ce3603bf181dc334d2f41de.jpg",
    },
    {
      client_name: "Artha Solutions",
      img: "https://i.pinimg.com/736x/d3/a1/35/d3a1350de53cf88349536b0c7dd5581e.jpg",
    },
    {
      client_name: "Kanchi cafe",
      img: "https://i.pinimg.com/736x/f6/21/16/f62116daa6a13cae777681eccc915dad.jpg",
    },
    {
      client_name: "Babukhan Lakefront Villas",
      img: "https://i.pinimg.com/736x/67/df/ff/67dfff4e7db1b1ad3bd61efec4a32cfe.jpg",
    },
    {
      client_name: "Shiva Sai Infraa",
      img: "https://i.pinimg.com/736x/d9/7c/cb/d97ccbc4bf69ad511cd1842ccbfbb655.jpg",
    },

    {
      client_name: "Amaroso",
      img: "https://i.pinimg.com/736x/53/f0/24/53f02425ae9fe94e594a821cf906d95b.jpg",
    },
    {
      client_name: "LA Greens Apartments",
      img: "https://i.pinimg.com/736x/fc/4d/c0/fc4dc01de023850cff0a2e6088c06959.jpg",
    },
    {
      client_name: "Dantu Villas",
      img: "https://i.pinimg.com/736x/83/20/ce/8320cef8faefec667d12714302b9fe39.jpg",
    },
    {
      client_name: "Green Grace Apartments",
      img: "https://i.pinimg.com/736x/9a/5a/2f/9a5a2f8747658fd629997cf9ae508637.jpg",
    },
    {
      client_name: "Equidistant Infrastructure Pvt Ltd",
      img: "https://i.pinimg.com/736x/55/97/c3/5597c339184808a66c0950180437cdd8.jpg",
    },
    {
      client_name: "Vasundhara Diamonds and Jewellers",
      img: "https://i.pinimg.com/736x/0d/2f/eb/0d2feb94c54dab2f011c53e538c14b8d.jpg",
    },
  ];

  return (
    <div className="w-screen h-auto pb-10 mb-10 px-6 lg:mt-20 lg:px-16 xl:px-24 2xl:px-36">
      <h1 className="font-bold text-2xl mt-25 mb-5 text-[#3D4E6F] text-center mb-6 sm:text-4xl">
        Our Well Known Clients
      </h1>
      <div className="w-full grid grid-cols-1 gap-6 sm:grid-cols-2 gap-4 lg:grid-cols-3">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="relative w-full h-[45vh] bg-red-100 mx-auto rounded-md sm:w-full"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.2), rgba(0,0,0,.5)), 
        url(${item.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <h1 className="font-semibold absolute bottom-4 left-4 text-xl text-white">
                {item.client_name}
              </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Client_Details;
