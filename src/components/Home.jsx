import React from 'react'
import { Link } from 'react-router-dom';
import './Home.css'
import viki from '../assets/insta4.jpg'
import vik from '../assets/PNG21.jpg'



function Home() {


  return (
    <div className='container-fluid bg-dark text-light min-vh-100 d-flex justify-content-center align-items-center mb-5'>
        <div className="d-flex flex-column justify-content-center align-items-center text-center">
          {/* <div className="box">
            <div className="imgbox">
              <img className='remo' src={insta1} alt='remo'/>
            </div>
            <div className="content">
              VIKRAM 
            </div>
          </div> */}
          
        <div className="d-flex mb-4">
        <Link to="https://www.instagram.com/laptop_solution_pune?igsh=eXNmMnM1MTl3ZjZh"><img src={viki} className=' insta'alt='insta'/></Link>
        <Link to="https://wa.me/8554004500?text= Laptop Buy " ><img src={vik} className=' whatsapp' alt='whatsapp'/></Link>
        </div>

        <h1>Hello, I am <span className='text-danger display-2 fw-bold '>Vikram</span></h1>
         

          </div>
        </div>
    
  )
}

export default Home
