import React from 'react'
import img from '../img/feature-2.png'
export default function Download() {
  return (
    <>
    <div id='v'  className='container-fulid bg-black'>
      <hr id='v'/>
    <div class='row'>
     <div class="col-md-6">
      <img  id='img1' src={img} alt="" />
     </div>
     <div class="col-md-6"> 
         <h1 id='h11'>Download your shows to watch offline</h1>
         <p id="p1">Save your favourites easily and always have something to watch</p>
     </div>
     <hr id='v'/>
    </div>
   
    </div>
    </>
  )
}