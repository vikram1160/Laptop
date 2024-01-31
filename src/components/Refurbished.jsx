import React from 'react'
import './Refurbished.css'
import refub2 from '../assets/refub2.jpg';
import refub3 from '../assets/refub3.jpg';
import refub1 from '../assets/refub1.webp';
import refub4 from '../assets/refub4.webp';



const Refurbished = () => {
  return (
    <div>
      <div className="laptop  d-flex" >
        <img src={refub3} alt="refub3" />
        <img src={refub2} alt="refub2" />
      </div>
      <div className='d-flex'>
      <img src={refub1} alt="refub1" />
      <img src={refub4} alt="refub4" />
      </div>
    </div>
  )
}

export default Refurbished
