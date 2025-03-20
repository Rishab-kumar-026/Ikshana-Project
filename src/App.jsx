import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import About from "./About/About";
import Contact from "./Contact/Contact_Page";
import Clinet from "./Clinets/Clinet";
import Services from "./Services/Services";
import Security_Service from "./Services/Security_Service";
import Facility_Service from "./Services/Facility_Service";
import Pest_Service from "./Services/Pest_Service";
import Janitorial_Service from "./Services/Janitorial_Service";
import Homecare_Service from "./Services/Homecare_Service";

function App() {
  return (
    <div className="w-screen h-screen bg-zinc-100 overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/security" element={<Security_Service />} />
        <Route path="/facility" element={<Facility_Service />} />
        <Route path="/pest" element={<Pest_Service />} />
        <Route path="/janitorial" element={<Janitorial_Service />} />
        <Route path="/homecare" element={<Homecare_Service />} />
        <Route path="/clients" element={<Clinet />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
