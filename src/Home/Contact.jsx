import React from "react";
import maps from "../assets/Maps.png";
import maps2 from "../assets/Maps2.png";

function Contact() {
  const Contact_data = [
    {
      Type: "Registered Office",
      Location: "MCH No. 6-3-1106, Elite Towers, Somajiguda, Hyderabad,",
      State: "Telangana - 500082",
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.153511091067!2d78.41084037504723!3d17.40441908348562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb96c3c4bbefc9%3A0xf05acdacf68c2e4b!2sElite%20Towers%2C%20Paramount%20Hills%20Colony%20Rd%2C%20Paramount%20Hills%2C%20IAS%20Colony%2C%20Hakimpet%2C%20Hyderabad%2C%20Telangana%20500008!5e0!3m2!1sen!2sin!4v1742454955299!5m2!1sen!2sin",
    },
    {
      Type: "Branch Office",
      Location:
        "6-668/10/25, First Floor, Durga Nagar Colony Somajiguda, Hyderabad, ",
      State: "Telangana - 500082",
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.69075232666!2d78.45234207504775!3d17.426622433467237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90b52eb6f5d1%3A0x5170b392cfa3773a!2sDurga%20Nagar%20Colony%2C%20Somajiguda%2C%20Hyderabad%2C%20Telangana%20500082!5e0!3m2!1sen!2sin!4v1742454843097!5m2!1sen!2sin",
    },
  ];
  return (
    <div className="w-screen h-fit mt-8 pb-10 px-6 lg:mt-20 lg:px-16 xl:px-24 2xl:px-36">
      <h1 className="font-bold text-3xl text-[#3D4E6F] text-center mb-6 sm:text-4xl md:mb-10">
        We Are Here For You
      </h1>
      {Contact_data.map((item, index) => {
        return (
          <div key={index} className="mb-14 md:flex items-center lg:mb-14">
            <div className="w-full text-center mb-6  md:px-6 md:w-[60%] lg:w-[80%] lg:px-12 ">
              <h1 className="font-bold mb-3 text-xl lg:text-2xl">
                {item.Type}
              </h1>
              <p className="font-semibold  text-lg lg:text-xl opacity-[0.8]">
                {item.Location}
              </p>
              <p className="font-semibold mb-3 text-lg opacity-[0.8]">
                {item.State}
              </p>
            </div>

            <div className="w-full">
              <div className="w-full h-[30vh] sm:h-[50vh] sm:w-[80%] sm:mx-auto md:w-[80%] md:h-[30vh] lg:h-[35vh] lg:w-[90%] xl:w-[70%]">
                <iframe
                  className="w-full h-full"
                  src={item.src}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Contact;
