import React from 'react';
import img from   '../img/feature-1.png'
export default function Enjoy() {
  return (
    <>
     <div className='container-fulid bg-black'>
        <div class='row'>
        <div class='col-md-6'>
        <h1 id='h11'>Enjoy on your TV</h1>
        <p id="p1">Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more to write.</p>
        </div>
        <div class='col-md-6'>
        <img src={img} alt="" id='img' />
        </div>
        </div>
        </div>
    </>
  )
}
