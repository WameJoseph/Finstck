import React from 'react'
import {BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Auth_content from './Auth_content.js'


function Pid({ display }){
  return (
    <form action="" className="frm PID" style={{display: display, zIndex: 1,}}>
    <p className="t1">Personal information</p>
    <p className="t2">Enter your personal details as required below</p>

    <div className="qs">
      <span className="spq">
        <span className="sp">
          <label htmlFor="fname">First name</label>
          <input type="text" name="fname" id="" placeholder="Enter your first name"/>
        </span>
        
        <span className="sp">
          <label htmlFor="lname">Last name</label>
          <input type="text" name="lname" id="" placeholder="Enter your last name"/>
        </span>
      </span>
      <span className="spq">
        <span className="sp">
          <label htmlFor="fname">Other name</label>
          <input type="text" name="oname" id="" placeholder="Other name (s)"/>
        </span>
        
        <span className="sp">
          <label htmlFor="lname">Preffered username</label>
          <input type="text" name="lname" id="" placeholder="Enter your username"/>
        </span>
      </span>
      <span className="spq">
        <span className="sp">
          <label htmlFor="fname">Phone number</label>
          <input type="text" name="fname" id="" placeholder="238 2378 891"/>
        </span>
        
        <span className="sp">
          <label htmlFor="lname">Nationality</label>
          <input type="text" name="lname" id="" placeholder="Select country"/>
        </span>
      </span>

      <span className="spq">
        <span className="sp">
          <label htmlFor="fname">Country of residence</label>
          <input type="text" name="fname" id="" placeholder="Select country"/>
        </span>
        
        <span className="sp">
          <label htmlFor="lname">State / province / region</label>
          <input type="text" name="lname" id="" placeholder="Select country"/>
        </span>
      </span>

      <span className="spq">
        <span className="sp">
          <label htmlFor="fname">Local Government Area</label>
          <input type="text" name="fname" id="" placeholder="Select LGA"/>
        </span>
      </span>

      <span className="spq">
        <span className="sp sp2">
          <label htmlFor="fname">Residential address</label>
          <input type="text" name="fname" id="" placeholder="Residential Address"/>
        </span>
      </span>

      <span className="spq">
        <p className="dt_info"><i className="material-icons-outlined">event_note</i> Ensure your name matches the name on your ID card</p>
      </span>

      <span className="spq">
        <div className="links">
          <Link to={-1} className="a a1">Go Back</Link>
          <button type="submit" className="a a2">Save & continue</button>
        </div>
      </span>


    </div>
  </form>
  )
}

export default Pid