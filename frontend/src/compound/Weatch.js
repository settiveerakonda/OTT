import React from 'react'
import img from '../img/feature-3.png'
export default function Weatch() {
  return (
    <div>
        <div className='container-fulid bg-black'>
     
        <div class='row'>
        <div class='col-md-6'>
        <h1 id='h11'>Watch everywhere</h1>
        <p id="p1">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
        </div>
        <div class='col-md-6'>
        <img src={img} alt="" id='img' />
        </div>
        </div>
        </div>
        {/* <hr/> */}
    </div>
  )
  }
