import Link from "next/link";
import Navbar from "../components/Navbar/Navbar"
import React from 'react';
import './AutoStore.css';
import Footer from "../components/Footer/Footer";

const AutoStore = () => {
  return (
    <div>
     <Navbar/>
     <a href="Home"></a>
     <a href="UsedCars"></a>
     <a href="NewCar"></a>
     <a href="Bikes"></a>

    <div className="AutoStore">
      <h1>Auto Store</h1>
      <li>Honda Civic</li>
      <img src="/Civic.png" alt="Honda Civic" />
      <li>Toyota Corolla</li>
      <img src="/Corolla.jpeg" alt="Toyota Corolla" />
      <li>Honda City</li>
      <img src="/City.png" alt="Honda City" />
      <li>Toyota Prius</li>
      <img src="/Prius.jpeg" alt="Toyota Prius" />
      <li>Honda CG-125</li>
      <img src="/CG-125.jpg" alt="Honda CG-125" />
       
    </div>
    <Footer/> 
    </div>
  );
};

export default AutoStore;