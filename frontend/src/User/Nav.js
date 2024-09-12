import React from 'react';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import Outputshort from '../short_video/Outputshort';
import Card from '../Card.js/Card';
import OutputMarval from '../Marval/Outputmarval';
import OutputAha from '../Tv shows/Aha/OutputAha'
import OutputKoren from '../Tv shows/Aha/koren/OutputKoren';
import Output from '../Koren/Output'
import Ramcharanop from '../Heros/Ramcharan/Ramcharan _op';
export default function Nav() {
  return (
    <div className='main'>
      <div className='content'>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
            Vivaan
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                 {/* Align links to the right */}
                 <li className="nav-item">
                  <a className="nav-link" href="/ImportSearch">
                    <FontAwesomeIcon icon={faSearch} />
                  </a>
                </li>
                
                <li className="nav-item">
                  <a className="nav-link " aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/Aha">
                    TV Shows
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/Addmarval">
                    Marval
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/Card">
                    Movies
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/Mix">
                    New & Popular
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/Korens">
                    Koren-Series
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link user-name" href="#">
                    {localStorage.getItem('user')}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link btn btn-danger" href="/Logout">
                    Logout
                  </a>
                </li>
                
              </ul>
            </div>
          </div>
        </nav>
        <Outputshort/>
        <Card/>
        <OutputMarval/>
        <OutputAha/>
     
     <OutputKoren/>
     
      <Output/>
     <Ramcharanop/>
      </div>
     
    </div>
     
  );
}
