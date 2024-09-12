
import React from 'react'

export default function Main_page() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">

    <a class="navbar-brand" style={{color:'red'}} href="#">NETFLIX</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        <a class="nav-link active" href="/Addprodect">Add_Product</a>
        <a class="nav-link" href="#"></a>
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true"></a>
      </div>
    </div>
    <li className='nav-item'>
    <button type="button" class="btn btn-danger" style={{marginLeft:'500px'}}> 
    <a className='nav-link'href='/Login'aria-disabled='true'>LogOut</a></button>
    </li>
  </div>
</nav>
        
    </div>
  )
}
