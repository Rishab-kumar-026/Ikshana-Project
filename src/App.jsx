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
import Career from "./Careers/Career";
import Application_form from "./Careers/Application_form";
import Job_Roles from "./Careers/Job_Roles";
import Gallery from "./Gallery/Gallery";


function App() {
  return (
    <div className="w-screen h-screen bg-zinc-100 overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ikshana-facilities/about" element={<About />} />
        <Route path="/ikshana-facilities/services" element={<Services />} />
        <Route path="/ikshana-facilities/services/security-service" element={<Security_Service />} />
        <Route path="/ikshana-facilities/services/facility-service" element={<Facility_Service />} />
        <Route path="/ikshana-facilities/services/pest-control-service" element={<Pest_Service />} />
        <Route path="/ikshana-facilities/services/janitorial-service" element={<Janitorial_Service />} />
        <Route path="/ikshana-facilities/services/homecare-service" element={<Homecare_Service />} />
        <Route path="/ikshana-facilities/clients" element={<Clinet />} />
        <Route path="/ikshana-facilities/contact" element={<Contact />} />
        <Route path="/ikshana-facilities/careers" element={<Career />} />
        <Route path="/ikshana-facilities/careers/application-form" element={<Application_form />} />
        <Route path="/ikshana-facilities/careers/job-roles" element={<Job_Roles />} />
        <Route path="/ikshana-facilities/gallery" element={<Gallery />} />
      </Routes>
    </div>
  );
}

export default App;
