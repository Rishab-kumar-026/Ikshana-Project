import React from "react";

function Gallery_Details() {
  const data = [
    {      img: "https://i.pinimg.com/736x/b9/0e/2d/b90e2d6b5c091797ed87c3f8a2298cb2.jpg",
    },
    {      img: "https://i.pinimg.com/736x/48/f7/88/48f788da12fa4f6f72c5e29ddc873350.jpg",
    },
    {      img: "https://i.pinimg.com/736x/91/fd/48/91fd4898a17515366d2ca2a37e499635.jpg",
    },
    {      img: "https://i.pinimg.com/736x/e0/05/9a/e0059ae36fec685849cb05ae6f8de3a2.jpg",
    },
    {      img: "https://i.pinimg.com/736x/9e/0e/13/9e0e134f89b439e12833173a7cfdd906.jpg",
    },
    {      img: "https://i.pinimg.com/736x/2a/aa/5a/2aaa5a95cd183d16f3ca0e83f685431f.jpg",
    },
    {      img: "https://i.pinimg.com/736x/45/d4/94/45d49449d6619c3a5a00ef07a3b3745d.jpg",
    },
    {      img: "https://i.pinimg.com/736x/8b/e9/1a/8be91a33929660b1f32111173c176aa6.jpg",
    },
    {      img: "https://i.pinimg.com/736x/4b/83/7e/4b837e5e1fdffe0208b557eddcc06223.jpg",
    },
    {      img: "https://i.pinimg.com/736x/9f/57/e0/9f57e019c92bdf41359c7947405188f6.jpg",
    },
    {      img: "https://i.pinimg.com/736x/dc/76/b2/dc76b28bddcfce6905637f9af6e9529f.jpg",
    },
    {      img: "https://i.pinimg.com/736x/2a/42/4a/2a424a2527d2dfb1f25381e0aae7465a.jpg",
    }
  ];

  return (
    <div className="w-screen h-auto pb-10 mb-10 px-6 lg:mt-20 lg:px-16 xl:px-24 2xl:px-36">
      <h1 className="font-bold text-2xl mt-25 mb-5 text-[#3D4E6F] text-center mb-6 sm:text-4xl">
        Ikshana Facilities Work Gallery
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
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Gallery_Details;
