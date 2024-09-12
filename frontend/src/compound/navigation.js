import React from 'react';
import {Link} from 'react-router-dom';
export default function navigation() {
  
  return (
    <>
    <div className='container-fulidz'>
      <div className='row'>
    <div className='col-md-12'class='bg'>
        <nav className="navbar">
  <div className="container">
  
    <h1 style={{color:'red',fontSize:'50px',}} className="navbar-brand " href="#">Vivaan</h1>
    <div>
    <button type="button" className="btn btn-secondary"><a className="nav-link dropdown-toggle "  role="button" data-bs-toggle="dropdown" aria-expanded="false">
              English
            </a></button>
            <button  type="button" className="btn btn-danger mx-3"> <a href="/Login" style={{listStyle:'none'}}>Sign in</a></button>
     </div>
  </div>
</nav>
<div className='container'>
<h1 id="nn" >Unlimited movies, TV shows and more</h1>
<p id='mm'>Watch anywhere. Cancel anytime.</p>
<p id='mm'>Ready to watch? Enter your email to create or restart your membership.</p>
</div>
<div className='container'>
<form action="">
  <input className='col-3 md-3' type='email' name="email" id="input" placeholder='email Address' />
  <a href="/video" ><button id='start' type="button" className="btn btn-danger col-2 mx-3 ">Get start</button></a>
</form>
</div>
</div>
</div>
</div>
</>
    
  )
}

