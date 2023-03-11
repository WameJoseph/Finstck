import React from 'react';
import logo from './images/logo.svg';
import './Landing_nav.css';
import MaterialIcon from 'react-google-material-icons'
import Sidenav from './Sidenav';
import {BrowserRouter, Routes, Route, Link } from "react-router-dom";



    function sidebarOpen(){
        document.getElementById('sidebar').style.top = 0;
        document.getElementById('i').style.display = 'none';
        document.getElementById('x').setAttribute('style', 'display:block !important');
        document.body.style.overflow = 'hidden';

    }

   
const Landing_nav = () => {
  return (
    <nav>
      <Sidenav />
       <Link to='/' className='logo_a'> <img src={logo} alt="wame" className='logo' /></Link>
        <div className='sp'>
            <Link to='/blog_index' className='link'>Our blog</Link>
            <Link to='/contactus' className='link'>Contact us</Link>
            <Link to="/seller_up" className='link'>Become a seller</Link>
            <Link to='' className='link'>P2P marketplace</Link>
        </div>
        <span className='log'>
            <Link to="/login" className='link login'>Login</Link>
            <Link to="/signup" className='link signup'>Get Started</Link>
        </span>
      <i className="i ii material-icons" id='i' onClick={sidebarOpen}>menu</i>
        {/* <i className="x ii material-icons" id='x'>close</i> */}

    </nav>
  )
}

export default Landing_nav