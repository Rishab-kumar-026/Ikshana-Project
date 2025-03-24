import React, { useState } from "react";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";

function Application_form() {
  document.title = "Ikshana Facilities | Application Form";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    dob: "",
    gender: "",
    nationality: "",
    message: "",
    address: "",
    dropdownOption: "",
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
      name: "",
      email: "",
      contactNumber: "",
      dob: "",
      gender: "",
      nationality: "",
      message: "",
      address: "",
      dropdownOption: "",
    });
  };

  return (
    <div className="w-screen h-[100vh] overflow-y-auto text-gray-500">
      <Navbar />
      <div className="w-screen h-auto mt-26 pb-10 mb-10 px-6 lg:mt-28 lg:px-16 xl:px-24 2xl:px-36">
        <h1 className="font-bold text-2xl text-[#3D4E6F] text-center mb-6 sm:text-4xl">
          Application Form
        </h1>

        {/* Form Start */}
        <form onSubmit={handleSubmit} className="w-full">
          <div className="grid grid-cols-1 gap-y-4 sm:w-[90%] mx-auto lg:grid-cols-2 lg:gap-x-4">
            <input
              className="w-full p-3 rounded-lg outline-none bg-[#fff] shadow-md placeholder-gray-500"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
            <input
              className="w-full p-3 rounded-lg outline-none bg-[#fff] shadow-md placeholder-gray-500"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email address"
            />

            <input
              className="w-full p-3 rounded-lg outline-none bg-[#fff] shadow-md placeholder-gray-500"
              type="text"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              placeholder="DOB"
              required
            />
            <select
              className="w-full p-3 rounded-lg outline-none bg-[#fff] shadow-md text-gray-500"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
            >
              <option className="text-black" value="">
                Select Gender
              </option>
              <option className="text-black" value="Male">
                Male
              </option>
              <option className="text-black" value="Female">
                Female
              </option>
              <option className="text-black" value="Other">
                Other
              </option>
            </select>
            <input
              className="w-full p-3 rounded-lg outline-none bg-[#fff] shadow-md placeholder-gray-500"
              type="number"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              placeholder="Contact number"
              required
            />
            <input
              className="w-full p-3 rounded-lg outline-none bg-[#fff] shadow-md placeholder-gray-500"
              type="text"
              name="nationality"
              value={formData.nationality}
              onChange={handleChange}
              placeholder="Nationality"
              required
            />

            <input
              className="w-full p-3 rounded-lg outline-none bg-[#fff] shadow-md placeholder-gray-500"
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Address"
              required
            />

            <select
              className="w-full p-3 rounded-lg outline-none bg-[#fff] shadow-md text-gray-500"
              name="dropdownOption"
              value={formData.dropdownOption}
              onChange={handleChange}
              required
            >
              <option className="text-black" value="">
                Select Job Role
              </option>
              <option className="text-black" value="Option 1">
                Security Guard
              </option>
              <option className="text-black" value="Option 2">
                Electrician
              </option>
              <option className="text-black" value="Option 3">
                Plumber
              </option>
              <option className="text-black" value="Option 4">
                Body Guard
              </option>
              <option className="text-black" value="Option 5">
                House Keeping
              </option>
              <option className="text-black" value="Option 6">
                Maid
              </option>
              <option className="text-black" value="Option 7">
                Driver
              </option>
              <option className="text-black" value="Option 8">
                Homecare Taker
              </option>
            </select>
          </div>
          <div className="mt-8 sm:w-[90%] mx-auto">
            <textarea
              className="w-full h-[20vh] outline-none p-3 rounded-lg bg-[#fff] shadow-md resize-none placeholder-gray-500"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write about your Previous Experience & Requriments..."
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
      <Footer />
    </div>
  );
}

export default Application_form;
