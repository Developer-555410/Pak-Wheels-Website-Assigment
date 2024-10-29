
import Navbar from "../components/Navbar/Navbar"
import React from 'react';
import './Bike.css';
import Footer from "../components/Footer/Footer";

const Bike = () => {
  return (
    <div>
     <Navbar/>
     <a href="UsedCars"></a>
     <a href="NewCars"></a>      

    <div className="Bike">
      <h1>Honda CG-125 Price in Pakistan, Images, Reviews & Specs</h1>
      <img src="/CG-125.jpg" alt="Honda CG-125" />
      <p>
      Honda CG 125 2024 is amazing </p>
      <div className="price">
        <p>PKR 210,000</p>
        <div className="button-row">
      <button>Make Payment</button>
      <button>Requst Bank Finance</button>
      <button>Visit Place</button>
      <button>Car Ispection</button>
    </div>
               
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Bike;