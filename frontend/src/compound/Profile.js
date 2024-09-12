import React from 'react'
import img from '../img/AAAA.png'
export default function Profile() {
  return (
    <>
    <div className='container-fulid bg-black'>
      <hr id='v'/>
    <div class='row'>
     <div class="col-md-6">
      <img  id='img1' src={img} alt="" />
     </div>
     <div class="col-md-6"> 
         <h1 id='h11'>Create profiles for kids</h1>
         <p id="p1">Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
     </div>
    </div>
    </div>
    </>
  )
}
