import React from 'react'
import './Repair.css'
import repair1 from "../assets/Repair1.jpg"
import Repair2 from "../assets/repair2.jpg"
import repair3 from "../assets/laptop2.jpg"


const Repair = () => {
  return (
    <>
    <div className="contener d-flex ">
      <div className="box1">
       <h2>Professsional Laptop Repair Service In Pune</h2>
       <h3>Experienced Engineers For Laptop Repair</h3>
       <img src={repair3} alt="repair3" />
       <p></p>
      </div>
      <div className="box2">
      <img className='photo' src={repair1} alt='show'/>
      <img className='photos' src={Repair2} alt='show'/>
      </div>

    </div>
    
    
    </>
  )
}

export default Repair