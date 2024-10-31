
import Navbar from "../components/Navbar/Navbar"
import React from 'react';
import './NewCars.css';
import Footer from "../components/Footer/Footer";
import Image from "next/image";

const NewCars = () => {
  return (
    <div>
     <Navbar/>
     <a href="NewCars"></a>

     <div className="new-cars">
      <h1>Honda Civic 2024 Price in Pakistan, Images, Reviews & Specs</h1>
      <Image src="/civic.png" alt="Honda Civic 2024" height={400} width={400} />
      <p>
      Honda Civic 2024 offers a blend of reliability, fuel efficiency, and comfortable driving experience.
      It&rsquo;s known for its spacious interior, advanced safety features, and smooth handling, making it a popular choice for daily commuting and family outings
 </p>
      <div className="price">
        <p>PKR 98,000,000</p>
        <div className="button-row">
      <button>Make Payment</button>
      <button>Request Bank Finance</button>
      <button>Visit Place</button>
      <button>Car Ispection</button>
    </div>
               
      </div>
    </div>
    <br/>
    <br/>
    <Footer/>
    </div>
    
  );
};
export default NewCars;
    