import React from 'react'
import './Auth_content.css'
// import li_icon1 from "./im"
import Sidenav from './Sidenav';
import {BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Pid from './Pid.js';
import Idi from './Idi';
import BAS_prev from './BAS_prev';

function sidebarOpen(){
  document.getElementById('sidebar').style.top = 0;
  document.getElementById('i').style.display = 'none';
  document.getElementById('x').setAttribute('style', 'display:block !important');
  document.body.style.overflow = 'hidden';

}

const Auth_content = () => {
  return (
    <main className='Aumain'>
        <section className='section'>
            <div className="lists">
                <p className="p1">Become a seller</p>
                <p className="p2">Create or accept offers at your preferred rate.</p>

                <ul>
                  <li className="active"><span><i className="material-icons-outlined">account_circle</i> </span><p>Personal information <i className="material-icons ic">check</i></p> </li>
                  <li className="don "><span><i className="material-icons-outlined">payment</i> </span><p>ID information  <i className="material-icons ic">check</i></p> </li>
                  <li><span className="last"><i className="material-icons-outlined">text_snippet</i> </span><p>Preview  <i className="material-icons ic">check</i></p> </li>

                  {/* <li><i className="material-icons-outlined">payment</i> <p>Personal information</p></li> */}
                  {/* <li><i className="material-icons-outlined">text_snippet</i> <p>Personal information</p></li> */}
                </ul>
            </div>
            <div className="cnt">
              <div className="fl1">
                <Pid 
                  display={'flex'}
                />
                <Idi display={'flex'} id="idi"/>
                <BAS_prev display={'flex'} />
              </div>
              
              <p className="cl" id="cls"><i className="fa-solid fa-x"></i> Close</p>

            </div>
        </section>
    </main>
    
  )
}

export default Auth_content