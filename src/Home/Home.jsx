import React from "react";
import Navbar from "./Navbar";
import HomePage from "./HomePage";
import Intro from "./Intro";
import Service from "./Service";
import Sector from "./Sector";
import Clients from "./Clients";
import Banner from "./Banner";
import Scores from "./Scores";
import Contact from "./Contact";
import Footer from "./Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <HomePage />
      <Intro />
      <Service />
      <Sector />
      <h1 className="font-bold text-4xl text-[#3D4E6F] text-center mb-6">
        Our Clients
      </h1>
      <Clients />
      <Banner />
      <Scores />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
