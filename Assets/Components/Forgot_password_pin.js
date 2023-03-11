import React from 'react'
import logo from './images/logo.svg';
import google_img from './images/Google Logo.svg'
import str_user from './images/str_user.svg'
import email_img from './images/email_img.svg'
import Sect2 from './Sect2';
import {BrowserRouter, Routes, Route, Link } from "react-router-dom";


const Forgot_password_pin = () => {
  return (  
        <body> 
            <main>
            <section className="sectioni">
                            <img src={logo} alt="" className="logo" />
                            <p className="t1">Forgot Password</p>
                            <p className="t2">Fill in your details to continue</p>
                            <p className="to">
                            Kindly enter the 6-digit code sent to your email <br /><span className='ap'> gb********43@gmail.com</span>
                            </p>
                            <form action="" className='form2'>
                                <span className="ct">
                                    <input type="number" name="" id="" maxlength="1" oninput="this.value=this.value.replace(/[^0-9]/g,'');"  />
                                    <input type="number" name="" id="" min="0" max="9" step="1" />
                                    <input type="number" name="" id="" min="0" max="9" step="1" />
                                    <input type="number" name="" id="" min="0" max="9" step="1" />
                                    <input type="number" name="" id="" min="0" max="9" step="1" />
                                    <input type="number" name="" id="" min="0" max="9" step="1" />
                                </span>

                                <p className="to to2">Expires in  <span className='ap'> 00:34</span> </p>
                                <p className="to to2">Didn’t get the code? <Link to="" className='a'>Resend</Link></p>

                                <button type='submit'>Proceed</button>

                                <p className="already">Remember Password? <Link to="/login">Login</Link></p>

                            </form>
                        </section> 
                    <Sect2 />
            </main>
        </body>   
    )
}

export default Forgot_password_pin