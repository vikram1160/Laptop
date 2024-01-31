import React from "react";
import './Home.css'
import vik from '../assets/PNG21.jpg'
import viki from '../assets/insta4.jpg'
import { Link } from "react-router-dom";
import CarouselImg from '../components/CarouselImg'

function Home() {

  
  return (
    <div> 
     <CarouselImg/>
    <div className="d-flex mb-5">
      <Link to="https://www.instagram.com/laptop_solution_pune?igsh=eXNmMnM1MTl3ZjZh">
        <img src={viki} className='insta' alt='insta'/>
      </Link>
      <Link to="https://wa.me/918554004500\?text=Buy For Laptop">
        <img src={vik} className='whatsapp' alt='whatsapp'/>
      </Link>
      
    </div>
    </div>
  );
}

export default Home;