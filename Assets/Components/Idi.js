import React from 'react'
import {BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Auth_content from './Auth_content.js'
import upload_img from './images/upload.svg';




function Idi({ display }){
  return (
    <form action="" className="frm Idi" style={{display: display,}}>
    <p className="t1">Identity information</p>
    <p className="t2">Subtext comes here on identity details</p>

    <div className="qs">

      <span className="spq">
        <span className="sp sp2">
          <label htmlFor="fname">Select ID type</label>
          <input type="text" name="fname" id="" placeholder="International passport"/>
        </span>
      </span>
      <span className="spq">
        <span className="sp sp2">
          <label htmlFor="fname">Issuing country</label>
          <input type="text" name="fname" id="" placeholder="Select country"/>
        </span>
      </span>
        <span className="spq">
            <span className="sp sp2">
              <label htmlFor="fname">Upload mean of identity</label>
                <span className="sp_inp">
                    <span className="msg">
                        <img src={upload_img} alt="img" />
                        <p className="p1">upload image</p>
                        <p className="p2">Accepted format: .pdf, .img, .jpg, .png should not be more than 100kb</p>
                    </span>
                    <input type="file" name="fname" id="" />
                </span>
            </span>
        </span>

      <span className="spq">
        <div className="line"></div>
      </span>

      <span className="spq">
        <div className="nt">
            <p className="p1"><i className="material-icons-outlined">info</i> NOTE</p>
            <p className="p2">Upload a selfie of you holding the identity card and a piece of paper bearing the word FINSTACk and today’s date. Remove any hat or glasses and avoid using a camera filter at this point. Also, ensure enough illumination in the surrounding area.</p>
        </div>
      </span>

      <span className="spq">
            <span className="sp sp2">
              <label htmlFor="fname">Upload mean of identity</label>
                <span className="sp_inp">
                    <span className="msg">
                        <img src={upload_img} alt="img" />
                        <p className="p1">upload image</p>
                        <p className="p2">Accepted format: .pdf, .img, .jpg, .png should not be more than 100kb</p>
                    </span>
                    <input type="file" name="fname" id="" />
                </span>
            </span>
        </span>

      <span className="spq">
        <div className="links">
          <Link to={-1} className="a a1">Back</Link>
          <button type="submit" className="a a2">Save & continue</button>
        </div>
      </span>


    </div>
  </form>
  )
}

export default Idi