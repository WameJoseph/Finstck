import React from 'react'
import './Blog_nav.css'
import logo from './images/logo.svg';
import google_img from './images/Google Logo.svg'
import str_user from './images/str_user.svg'
import Sect2 from './Sect2';
import {BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Sidenav from './Sidenav';
import Notification_bar from './Notification_bar';


function sidebarOpen(){
  document.getElementById('sidebar').style.top = 0;
  document.getElementById('i').style.display = 'none';
  document.getElementById('x').setAttribute('style', 'display:block !important');
  document.body.style.overflow = 'hidden';

}

const Blog_nav = () => {
  return (
    <nav>
      <Notification_bar />
      <Sidenav />
     <Link to='/' className='logo_a'> <img src={logo} alt="wame" className='logo' /></Link>
      <div className='sp'>
          <Link to='/blog_index' className='link'>Our blog</Link>
          <Link to='/contactus' className='link'>Contact us</Link>
          <Link to="/seller_up" className='link'>Become a seller</Link>
          <Link to='' className='link'>P2P marketplace</Link>
      </div>
      <div className="user">
        <div className="n_icon">
          <i className="material-icons-outlined bell">notifications</i>
          <div className="not"></div>
        </div>
        <div className="user_descrpt">
          <p className="username">Maverick Egubson</p>
          <p className="usermail">maverick.eth@gmail.com</p>
        </div>
        <div className="userimage">
          <p className="me">ME</p>
          <div className="img"></div>
        </div>
        <i className="material-icons-outlined dwn">arrow_forward_ios</i>
      </div>
    <i className="i ii material-icons" id='i' onClick={sidebarOpen}>menu</i>
      {/* <i className="x ii material-icons" id='x'>close</i> */}

  </nav>
  )
}

export default Blog_nav