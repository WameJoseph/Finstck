import React from 'react'
import logo from './images/logo.svg';
import success from './images/success.svg';
import google_img from './images/Google Logo.svg'
import str_user from './images/str_user.svg'
import email_img from './images/email_img.svg'
import Sect2 from './Sect2';
import {BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Reset_pas_success = () => {
  return (
    <body> 
        <main>
                <section className="sectioni">
                    <img src={logo} alt="" className="logo" />
                    <img src={success} alt="" className="email_img" />
                    <p className="et1">Password reset successful</p>
                    <p className="et2">Password reset successful</p>
                   <Link to="/login"> <form action="">
                        <button>Proceed to  login</button>
                    </form></Link>
                    {/* <button>Proceed to  login</button> */}
                    
                </section>
                <Sect2 />
        </main>
    </body>    
  )
}

export default Reset_pas_success