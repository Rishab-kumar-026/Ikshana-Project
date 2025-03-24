import React from "react";

function Compliance() {
  const data = [
    {
      name: "Compliance with Regulations",
      description:
        "We are committed to maintaining full compliance with all statutory regulations, ensuring that our records and practices adhere to the latest legal and industry standards. This guarantees transparency, accountability, and a seamless workflow within the organization.",
    },
    {
      name: "ESI & EPF for Employees",
      description:
        "All employees are covered under the Employee State Insurance (ESI) and Employee Provident Fund (EPF) schemes from their date of joining. This ensures financial security, medical benefits, and long-term savings for a secure future.",
    },
    {
      name: "Clear Wage Payments",
      description:
        "We ensure that all wages are paid clearly and fairly, strictly adhering to agreed terms and conditions. This fosters trust, financial stability, and motivation among employees.",
    },
    {
      name: "Employee Well-being",
      description:
        "Employee welfare is at the heart of our policies. We prioritize a healthy work environment, mental and physical well-being initiatives, and continuous support systems to enhance job satisfaction.",
    },
    {
      name: "Up-to-Date Licenses",
      description:
        "To ensure smooth and lawful operations, we diligently maintain all required business licenses and certifications. Regular updates and renewals prevent disruptions and reinforce our commitment to compliance.",
    },
    {
      name: "Internal & External Audits",
      description:
        "We conduct thorough internal and external audits on a monthly, quarterly, and yearly basis. These audits help us identify areas of improvement, maintain regulatory adherence, and enhance operational efficiency.",
    },
  ];
  return (
    <div className="w-screen h-auto mt-5 mb-20 px-6 lg:px-16 xl:px-24 2xl:px-36">
      <h1 className="font-bold text-2xl text-[#3D4E6F] text-center mb-10 sm:text-3xl">
        Compliances & Employee Welfare
      </h1>

      <div className="w-full h-auto sm:px-2 ">
        <div className="xl:grid grid-cols-2 gap-x-10">
          {data.map((item, index) => {
            return (
              <div key={index} className="w-full">
                <h1 className="text-xl font-semibold mb-2">{item.name}</h1>
                <p className="font-normal tracking-wide leading-[1.5] mb-4">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="w-full flex flex-col gap-y-5 mt-10 sm:flex-row sm:gap-x-5">
          <div className="w-full h-[40vh] mx-auto sm:w-[70%] sm:h-[40vh] md:h-[50vh] md:w-[90%] lg:h-[55vh] xl:h-[50vh] xl:w-[75%]  lg:mx-0">
            <img
              className="w-full h-full object-fit"
              src="https://i.pinimg.com/736x/30/9a/73/309a73e256568bc9a74a1c5e94698b36.jpg"
              alt=""
            />
          </div>
          <div className="w-full h-[40vh] mx-auto sm:w-[70%] sm:h-[40vh] md:h-[50vh] md:w-[90%] lg:h-[55vh] xl:h-[50vh] xl:w-[75%] lg:mx-0">
            <img
              className="w-full h-full object-fit"
              src="https://i.pinimg.com/736x/be/d9/a9/bed9a9ca6f001d3ae1089934e62cdcd1.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Compliance;
