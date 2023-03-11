import React from 'react'
import logo from './images/logo.svg';
import google_img from './images/Google Logo.svg'
import str_user from './images/str_user.svg'
import Sect2 from './Sect2';
import {BrowserRouter, Routes, Route, Link } from "react-router-dom";



const Forgot_password_page = () => {
  return (
            

<body> 
<main>
<section className="sectioni">
                <img src={logo} alt="" className="logo" />
                <p className="t1">Forgot Password</p>
                <p className="t2">Fill in your details to continue</p>
                <form action="">
                    <span className='spf'>
                        <label htmlFor="email">Email address</label>
                        <input type="email" name="" id="" placeholder='Email address'/>
                    </span>

                    <button type="submit">Send reset link</button>                    
                
                    <p className="already">Remember Password? <Link to={-1}>Login</Link></p>
                </form>
            </section> 
        <Sect2 />
</main>
</body>    
  )
}

export default Forgot_password_page