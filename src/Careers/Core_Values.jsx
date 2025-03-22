import React from "react";

function Core_Values() {
  const data = [
    {
      icon: "ri-group-fill",
      name: "Integrity",
      color: "text-orange-600",
      para: "We conduct ourselves with honesty, transparency, and ethical standards. We operate with integrity, treating customers and employees with respect and fairness.",
    },
    {
      icon: "ri-customer-service-fill",
      name: "Customer Focused",
      color: "text-blue-600",
      para: "Our clients are our priority. We listen to their needs, value feedback, and provide personalized solutions. We build long-term partnerships and deliver exceptional service.",
    },
    {
      icon: "ri-shield-user-fill",
      name: "Safety",
      color: "text-yellow-600",
      para: "We prioritize the safety of clients, employees, and communities. Rigorous protocols, training, and best practices ensure a secure and hazard-free environment.",
    },
    {
      icon: "ri-police-badge-fill",
      name: "Accountability",
      color: "text-purple-600",
      para: "We take responsibility for our actions, meet deadlines, and improve services. We operate transparently and communicate openly with stakeholders.",
    },
    {
      icon: "ri-shake-hands-fill",
      name: "Trust",
      color: "text-green-600",
      para: "We build strong relationships through reliability, honesty, and consistency. Our commitment to transparency and ethical practices fosters trust among clients, employees, and partners.",
    },
    {
      icon: "ri-hand-heart-fill",
      name: "Excellence",
      color: "text-red-600",
      para: "We strive for the highest standards in all we do. Through continuous improvement, innovation, and dedication, we ensure outstanding quality and exceptional service delivery.",
    },
  ];

  return (
    <div className="w-screen h-auto pb-10 mb-10 px-6 lg:mt-20 lg:px-16 xl:px-24 2xl:px-36">
      <h1 className="text-4xl font-semibold  text-center text-[#3D4A6E] mb-14">
        Our Core Values
      </h1>
      <div className="w-full mt-5 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 sm:gap-x-5">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="w-[90%] flex flex-col p-4 justify-center items-center h-[45vh] shadow-xl bg-[#E9E9E9] mx-auto rounded-xl 
        hover:text-zinc-100 hover:bg-[#3D4A6E] transition duration-300 ease-in-out group"
            >
              <div
                className={`text-7xl ${item.color} group-hover:text-zinc-100 transition duration-300`}
              >
                <i className={item.icon}></i>
              </div>
              <h1 className="mt-3 text-2xl font-semibold">{item.name}</h1>
              <p className="font-normal tracking-tight text-[16px] text-center mt-4">
                {item.para}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Core_Values;
