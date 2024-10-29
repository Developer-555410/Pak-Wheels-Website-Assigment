import {FaBars, FaTimes} from "react-icons/fa";


export default function Navbar () {
   return (
    <header>
      <img src="/logo.png" alt="Logo" />
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