import React from 'react'
import logo from './images/logo.svg';
import google_img from './images/Google Logo.svg'
import str_user from './images/str_user.svg'
import Sect2 from './Sect2';
import {BrowserRouter, Routes, Route, Link } from "react-router-dom";



const Login_page = () => {
  return (
           

<body> 
<main>
<section className="sectioni">
                <img src={logo} alt="" className="logo" />
                <p className="t1">Welcome, Let's get you back in</p>
                <p className="t2">Fill in your details to continue</p>
                <form action="">
                    <span className='spf'>
                        <label htmlFor="email">Email address</label>
                        <input type="email" name="" id="" placeholder='Email address'/>
                    </span>
                    
                    <span className="spf">
                        <label htmlFor="password">Password</label>
                    <span className='inp'><input type="password" name="" id="" placeholder='Password'/><i className="material-icons-outlined">visibility</i></span>
                    <Link to="/forgot" className="forgot">Forgot Password?</Link>

                    </span>
                    
                    <button type="submit">Log in</button>
                    
                    <div className="or"><span></span><p>OR</p><span></span></div>
                    
                    <div className="social_in">
                        <a href=""><img src={google_img} alt="" /> Continue with Google</a>
                    </div>
                    <p className="already">Don't have an account? <Link to="/signup">Sign up</Link></p>
                </form>
            </section>  
        <Sect2 />
</main>
</body>    
  )
}

export default Login_page