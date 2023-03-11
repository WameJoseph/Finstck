import React from 'react'
import {BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Auth_content from './Auth_content.js'
import upload_img from './images/upload.svg';
import bk_img1 from './images/blg_img.svg'
import Profp from './Profp.js';
import Profp_img from './Profp_img.js';
import prof_img from './images/file_img.svg'





function BAS_prev({ display }){
  return (
    <form action="" className="frm BAS_prev" style={{display: display,}}>
    <p className="t1">Confirm details</p>
    <p className="t2">Subtext comes here on identity details</p>

    <div className="qs">
        <span className="spq">
            <div className="profile">
                <span className="img">
                    <p>ME</p>
                    {/* <div className="bck" style={{backgroundImage: `url(${bk_img1})`}}></div> */}
                </span>
                <span className="user">
                    <p className="p1">Goodnews Stephen McDonalds</p>
                    <p className="p2">maverick.eth</p>
                </span>
            </div>
        </span>

        <span className="spq">
            <ul className="prof">
              <Profp p1='Phone number' p2='+234 705 9678 650' />
              <Profp p1='Email' p2='goodnews-mav007@gmail.com' />
              <Profp p1='Nationality' p2='Russian' />
              <Profp p1='Country of residence' p2='Nigeria' />
              <Profp p1='State/province/region' p2='Lagos' />
              <Profp p1='Local government area' p2='Lagos Island' />
              <Profp p1='Address' p2='4517 Washington Ave. Manchester, Kentucky 39495' />
              <Profp p1='ID Type' p2='International passport' />
              <Profp p1='Issuing country' p2='Nigeria' />
              <Profp_img p1='ID Upload' img_name='' />
              <Profp_img p1='Finstack requested selfie' img_name='' />


            </ul>
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

export default BAS_prev