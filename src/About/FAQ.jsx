import React, { useState } from "react";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const data = [
    {
      question: "How experienced is your team?",
      answer:
        "Our team consists of highly skilled professionals with years of industry experience. We bring expertise in facilities management, ensuring top-quality service and efficient operations tailored to your needs.",
    },
    {
      question: "Do you offer customized solutions?",
      answer:
        "Yes, we provide tailored solutions based on the specific requirements of our clients. Whether it's security, maintenance, or housekeeping, we design services that best fit your business needs and operational goals.",
    },
    {
      question: "How do you ensure compliance?",
      answer:
        "We strictly adhere to industry regulations, legal standards, and safety guidelines. Our team stays updated with the latest compliance requirements to ensure smooth and risk-free operations for our clients.",
    },
    {
      question: "What are your quality assurance measures?",
      answer:
        "We implement rigorous quality control processes, including regular audits, performance monitoring, and employee training. This ensures that our services consistently meet high standards and client expectations.",
    },
  ];

  const data_2 = [
    {
      question: "Do you use advanced technology?",
      answer:
        "Yes, we incorporate the latest technological advancements in our services. From smart automation tools to AI-driven monitoring systems, we leverage technology to enhance efficiency, accuracy, and security.",
    },
    {
      question: "How do you manage risks?",
      answer:
        "We conduct proactive risk assessments and implement preventive measures to mitigate potential threats. Our risk management strategies help ensure safe and uninterrupted operations for our clients.",
    },
    {
      question: "How is your customer service different?",
      answer:
        "We prioritize customer satisfaction by offering 24/7 support and quick response times. Our team is always available to address concerns, resolve issues, and ensure smooth service delivery.",
    },
    {
      question: "What makes your team dedicated?",
      answer:
        "Our team is committed to excellence, working with professionalism, integrity, and dedication. Continuous training and a customer-focused approach ensure that we consistently deliver the best results.",
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-screen h-auto mt-10 pb-10 mb-10 px-6 lg:px-16 xl:px-24 2xl:px-36">
      <h1 className="text-4xl font-semibold text-center text-[#3D4A6E] mb-10">
        Why to Choose Ikshana?
      </h1>

      <div className="w-full sm:w-[95%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-5">
        <div>
          {data.map((item, index) => (
            <div key={index} className="bg-[#E9E9E9] p-4 rounded-lg shadow-md text-gray-700 mb-4">
              <div
                onClick={() => handleToggle(index)}
                className="flex items-center justify-between cursor-pointer"
              >
                <h1 className="text-zinc-800 text-lg text-gray-700">
                  {item.question}
                </h1>
                <i
                  className={`${
                    openIndex === index ? "ri-close-fill" : "ri-arrow-down-s-line"
                  } text-2xl mt-1`}
                ></i>
              </div>
              <div className="Smd:text-[15px] xl:text-[18px]">
                <p
                  className={`${
                    openIndex === index ? "block" : "hidden"
                  } font-normal tracking-wide leading-[1.5] mt-4`}
                >
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div>
          {data_2.map((item, index) => (
            <div key={index + data.length} className="bg-[#E9E9E9] p-4 rounded-lg shadow-md text-gray-700 mb-4">
              <div
                onClick={() => handleToggle(index + data.length)}
                className="flex items-center justify-between cursor-pointer"
              >
                <h1 className="text-zinc-800 text-lg text-gray-700">
                  {item.question}
                </h1>
                <i
                  className={`${
                    openIndex === index + data.length ? "ri-close-fill" : "ri-arrow-down-s-line"
                  } text-2xl mt-1`}
                ></i>
              </div>
              <div className="Smd:text-[15px] xl:text-[18px]">
                <p
                  className={`${
                    openIndex === index + data.length ? "block" : "hidden"
                  } font-normal tracking-wide leading-[1.5] mt-4`}
                >
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQ;
