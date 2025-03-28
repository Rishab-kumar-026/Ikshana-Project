import React from 'react';
import Navbar from '../Home/Navbar';
import Services_Details from './Services_Details';
import Banner from '../Home/Banner';
import Footer from '../Home/Footer';
import Service from '../Home/Service';
import Training_Development from './Training_Development';

function Services() {
  document.title = "Ikshana Facilities | Services";
  return (
    <div className="w-screen h-[100vh] overflow-y-auto">
      <Navbar />
      <div className="hidden md:block md:mt-24">
        <Service />
      </div>
      <Services_Details />
      <Training_Development />
      <Banner />
      <Footer />
    </div>
  );
}

export default Services;
