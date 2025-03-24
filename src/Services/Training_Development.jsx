import React from "react";
import training_development from "../assets/Training_Development.png";

function Training_Development() {
  const data = [
    "Comprehensive Onboarding Process",
    "Role-Specific Training Modules",
    "Ongoing Professional Development",
    "Hands-On Experience",
    "Leadership Development",
    "Employee engagement programs",
    "Regular audits prior and post training",
  ];

  return (
    <div className="w-screen h-auto mt-10 pb-10 mb-10 px-6 lg:px-16 xl:px-24 2xl:px-36">
      <h1 className="font-bold text-2xl text-[#3D4E6F] text-center mb-6 sm:text-4xl">
        Training & Development
      </h1>

      <div>
        <div className="md:text-[15px] xl:text-[18px]">
          <p className="font-normal tracking-wide leading-[1.5] mb-4">
            We are committed to excellence in facilities management, and our
            training and development program plays a crucial role in achieving
            this goal. Through a combination of comprehensive training modules,
            hands-on experience, and professional development opportunities, we
            equip our team with the skills, expertise, and knowledge necessary
            to deliver exceptional services to our clients. Our program focuses
            on industry best practices, technological advancements, and
            practical problem-solving to ensure our workforce is always prepared
            to meet the evolving demands of the facilities management sector.
          </p>
          <p className="font-normal tracking-wide leading-[1.5]">
            At Ikshana Facilities Pvt Ltd, we firmly believe that investing in
            our people is essential for maintaining the highest standards of
            facilities management services. Our structured training initiatives
            not only enhance technical proficiency but also foster a culture of
            continuous learning and innovation. We emphasize teamwork,
            leadership development, and customer satisfaction, ensuring that
            every employee is well-equipped to handle complex challenges
            efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-y-10 mt-10 md:grid-cols-2 md:gap-x-10">
          <div className="w-[100%] h-[40vh] mx-auto sm:w-[95%] sm:h-[40vh] md:h-[45vh] md:w-[95%] lg:w-[100%] lg:h-[45vh] xl:h-[50vh] lg:mx-0">
            <img
              className="w-full h-full object-fit"
              src="https://i.pinimg.com/736x/b3/0c/84/b30c84d078c45aa82c72c225a93a478b.jpg"
              alt=""
            />
          </div>
          <div className="w-[100%] h-[40vh] mx-auto sm:w-[95%] sm:h-[40vh] md:h-[45vh] md:w-[95%] lg:w-[100%] lg:h-[45vh] xl:h-[50vh] lg:mx-0">
            <img
              className="w-full h-full object-fit"
              src="https://i.pinimg.com/736x/55/d5/41/55d541596cbbfb438e20e04a6db4deaa.jpg"
              alt=""
            />
          </div>
        </div>

        <div className="mt-10 md:text-[15px] xl:text-[18px]">
          <p className="font-normal tracking-wide leading-[1.5] mb-4">
            Our training and development program is designed to empower our
            employees with the confidence, adaptability, and expertise needed to
            excel in their roles. By offering mentorship, real-world
            simulations, and skill enhancement workshops, we nurture a workforce
            that is both competent and forward-thinking. This commitment to
            professional growth enables our employees to contribute meaningfully
            to the overall success of the company while ensuring that our
            clients receive top-tier, reliable, and efficient facilities
            management solutions.
          </p>
          <p className="font-normal tracking-wide leading-[1.5]">
            At Ikshana Facilities Pvt Ltd, we don’t just build careers—we shape
            industry leaders. Our commitment to fostering talent, encouraging
            innovation, and upholding excellence makes us a trusted partner in
            facilities management. With a team that is continuously learning and
            evolving, we remain dedicated to delivering unparalleled service and
            operational excellence across all our projects.
          </p>
        </div>

        <div className="mt-10">
          <h1 className="font-bold text-2xl text-[#3D4E6F] mb-10 text-center sm:text-4xl">
            Key Features of Training & Development
          </h1>

          <div className="w-full grid grid-cols-1 gap-y-5 md:grid-cols-2 lg:gap-x-5 xl:gap-x-10">
            <div className="w-[100%] h-[40vh] mx-auto sm:w-[95%] sm:h-[40vh] md:h-[45vh] md:w-[95%] lg:h-[45vh] xl:h-[50vh]">
              <img
                className="w-full h-full object-fit"
                src={training_development}
                alt=""
              />
            </div>

            <div className="w-full flex flex-col justify-center sm:grid sm:grid-cols-2 sm:gap-x-4 md:grid-cols-1 md:text-[15px] md:py-2 xl:py-4 xl:text-[18px]">
              {data.map((item, index) => {
                return (
                  <h1
                    key={index}
                    className="text-lg font-normal text-zinc-700 whitespace-nowrap mb-2 md:mb-3 xl:text-[24px]"
                  >
                    <i className="ri-circle-fill text-zinc-700 text-[8px] mr-2"></i>
                    {item}
                  </h1>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Training_Development;
