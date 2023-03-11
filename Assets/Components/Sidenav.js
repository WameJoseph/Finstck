import React from 'react'
import './Sidenav.css'
import Landing_nav from './Landing_nav'
import logo from './images/logo.svg';
// import './Landing_nav.css';
import MaterialIcon from 'react-google-material-icons'
import {BrowserRouter, Routes, Route, Link } from "react-router-dom";


function sidebarClose(){
    document.getElementById('sidebar').style.top = '-110%';
    document.getElementById('i').style.display = 'flex';
    document.getElementById('x').setAttribute('style', 'display:none !important');
    document.body.style.overflow = 'scroll';
}

// function sidebarOpen(){
//   document.getElementById('sidebar').style.top = 0;
//   document.getElementById('i').style.display = 'none';
//   document.getElementById('x').setAttribute('style', 'display:block !important');
//   document.getElementById('x').style.display = 'block';

// }

const Sidenav = () => {
  return (
    <div className='sidebar' id='sidebar'>


        <div className="sd">
          <div className="main_sidenav">
            <header>
                <nav>
                    <a href='' className='logo_a'> <img src={logo} alt="wame" className='logo' /></a>
                    <i className="x ii material-icons" id='x' onClick={sidebarClose}>close</i>
                </nav>
            </header>
      
            <div className="nav_items">
               <span className="o1">
                  
               </span>
            </div>
      
            <div className="in">
              <Link to="/login" className="a">Sign in <i className="material-icons">chevron_right</i></Link>
            </div>
          </div>

          <div className="products">

          </div>
        </div>
      
      
    </div>
  )
}

export default Sidenav