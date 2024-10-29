import React from 'react';
import Link from 'next/link';
import Navbar from "./components/Navbar/Navbar";
import HeroSection from './components/HeroSection/Hero'
import FeaturedCars from './components/Featuring/Featuring';
import Footer from './components/Footer/Footer';


function App() {
  return (

    <main>
      <title>PakWheels.com</title>
      

    <div>
      <Navbar/>
      <HeroSection/>
      <FeaturedCars/>
    
      
      
      <Footer/>
    
      
      



    </div>
    

    </main>
      
    
  )
  
  
}

export default App;