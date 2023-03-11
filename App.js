import React from 'react'
import {BrowserRouter, Routes, Route } from "react-router-dom";
// import MaterialIcon from 'react-google-material-icons';
import Home from './Assets/Components/Home';
import Email_confirm_page from './Assets/Components/Email_confirm_page';
import Signup_page from './Assets/Components/Signup_page';
import Login_page from './Assets/Components/Login_page';
import Forgot_password_page from './Assets/Components/Forgot_password_page';
// import logo from './logo.svg';
import Page404 from './Assets/Components/Page404';
import Landing_nav from "./Assets/Components/Landing_nav";
import './App.css';
import Homme from './Homme';
import Forgot_password_pin from './Assets/Components/Forgot_password_pin';
import Reset_pass from './Assets/Components/Reset_pass';
import Reset_pass_success from './Assets/Components/Reset_pass_success';
import Blog_index from './Assets/Components/Blog_index';
import Blog_page from './Assets/Components/Blog_page';
import All_listings from './Assets/Components/All_listings';
import Contactus from './Assets/Components/Contactus';
import Seller_signup from './Assets/Components/Seller_signup';
import Seller_email from './Assets/Components/Seller_email';
import BAS_auth from './Assets/Components/BAS_auth';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/signup' element={<Signup_page />}></Route>
        <Route path='/login' element={<Login_page />}></Route>
        <Route path='/email_confirmation' element={<Email_confirm_page />}></Route>
        <Route path='/forgot_pass' element={<Forgot_password_page />}></Route>
        <Route path='/forgot_pin' element={<Forgot_password_pin />}></Route>
        <Route path='/reset_pass' element={<Reset_pass />}></Route>
        <Route path='/reset_pass_success' element={<Reset_pass_success />}></Route>
        <Route path='/blog_index' element={<Blog_index />}></Route>
        <Route path='/blog_page' element={<Blog_page />}></Route>
        <Route path='/listings' element={<All_listings />}></Route>
        <Route path='/contactus' element={<Contactus />}></Route>
        <Route path='/seller_up' element={<Seller_signup />}></Route>
        <Route path='/seller_email' element={<Seller_email />}></Route>
        <Route path='/seller_details' element={<BAS_auth />}></Route>




        <Route path='/Page' element={<Page404 />}></Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App