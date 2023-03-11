import React from 'react'
import logo from './images/logo.svg';
import google_img from './images/Google Logo.svg'
import str_user from './images/str_user.svg'
import Sect2 from './Sect2';
import {BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Reset_pass = () => {
  return (
    
<body> 
<main>
<section className="sectioni">
                <img src={logo} alt="" className="logo" />
                <p className="t1">Forgot Password</p>
                <p className="t2">Fill in your details to continue</p>
                <form action="">
                    <span className="spf">
                            <label htmlFor="password">Enter new password</label>
                        <span className='inp'><input type="password" name="" id="" placeholder='Password'/><i className="material-icons-outlined">visibility</i></span>
                    </span>
                    
                    <span className="spf">
                            <label htmlFor="password">Confirm new password</label>
                        <span className='inp'><input type="password" name="" id="" placeholder='Password'/></span>
                    </span>

                    <div className="pass">
                        <span className="sp">
                            <h3><div className='bll'></div> At least one uppercase</h3>
                            <h3><div className='ggg'></div> At least one alphanumeric</h3>
                        </span>
                        <span className="sp">
                            <h3><div className='ggg'></div> At least one lowercase</h3>
                            <h3><div className='bll'></div> At least one other thing</h3>
                        </span>
                    </div>

                    <button type="submit">Reset password</button>                                    
                </form>
            </section> 
        <Sect2 />
</main>
</body>    
  )
}

export default Reset_pass