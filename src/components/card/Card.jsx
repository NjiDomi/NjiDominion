import React from 'react'
import './card.css'
import img from "../../assets/telecom.jpg" 
export const Card = () => {
  return (
        <div className='containerCard'>
            <div className="card">
            <img src={img} alt="" />
            </div>
            <h5>portfolio</h5>
        </div>  
  )
}
