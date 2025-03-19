import React, { useState } from "react";

function Contact_Form() {
  // State for form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companyName: "",
    companyURL: "",
    contactNumber: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page reload
    alert("We will reach you soon!"); // Show alert message
    setFormData({
      // Reset form fields
      name: "",
      email: "",
      companyName: "",
      companyURL: "",
      contactNumber: "",
      message: "",
    });
  };

  return (
    <div className="w-screen h-auto mt-26 pb-10 mb-10 px-6 lg:mt-28 lg:px-16 xl:px-24 2xl:px-36">
      <h1 className="font-bold text-2xl text-[#3D4E6F] text-center mb-6 sm:text-4xl">
        Feel Free to Reach Us
      </h1>

      {/* Form Start */}
      <form onSubmit={handleSubmit} className="w-full">
        <div className="grid grid-cols-1 gap-y-4 sm:w-[90%] mx-auto lg:grid-cols-2 lg:gap-x-4">
          <input
            className="w-full p-3 rounded-lg outline-none bg-[#fff] shadow-md"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
          <input
            className="w-full p-3 rounded-lg outline-none bg-[#fff] shadow-md"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email address"
            required
          />
          <input
            className="w-full p-3 rounded-lg outline-none bg-[#fff] shadow-md"
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="Company name (optional)"
          />
          <input
            className="w-full p-3 rounded-lg outline-none bg-[#fff] shadow-md"
            type="text"
            name="companyURL"
            value={formData.companyURL}
            onChange={handleChange}
            placeholder="Company URL (optional)"
          />
          <input
            className="w-full p-3 rounded-lg outline-none bg-[#fff] shadow-md"
            type="number"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            placeholder="Contact number"
            required
          />
        </div>
        <div className="mt-8 sm:w-[90%] mx-auto">
          <textarea
            className="w-full h-[20vh] outline-none p-3 rounded-lg bg-[#fff] shadow-md resize-none"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write about your requirement"
          ></textarea>

          {/* Submit Button */}
          <div className="w-full flex items-center justify-center">
            <button
              type="submit"
              className="w-full mt-5 p-3 bg-[#3D4E6F] text-white rounded-lg shadow-md hover:bg-[#2B3A57] transition duration-300 lg:w-[30%] cursor-pointer"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
      {/* Form End */}
    </div>
  );
}

export default Contact_Form;
