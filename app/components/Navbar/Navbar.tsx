import Image from "next/image";
import {FaBars, FaTimes} from "react-icons/fa";


export default function Navbar () {
   return (
    <header>
      <Image src="/logo.png" alt="Logo" height={40} width={220} />
        <nav>
        <a href="/#">Home</a>  
        <a href="/UsedCars">Used Cars</a>
        <a href="/NewCars">New Cars</a>
        <a href="/Bike">Bikes</a>
        <a href="/AutoStore">Auto Store</a>
        <a href="/Form">Book Now</a>
        <button className="nav-btn nav-close-btn">
          <FaTimes/>
        </button>
      </nav>    
      <button className="nav-btn">
          <FaBars />
      </button>
    </header>
  );
}