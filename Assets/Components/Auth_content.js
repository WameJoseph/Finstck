import React, { useState } from 'react'
import './Auth_content.css'
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
  const [personal, setPersonal] = useState(true)
  const [idInfo, setIdInfo] = useState(false)
  const [showPreview, setShowPreview] = useState(false)
  const [stepOne, setStepOne] = useState(`last`)
  const [stepTwo, setStepTwo] = useState(`last`)
  const [stepThree, setStepThree] = useState(`last`)

  return (
    <main className='Aumain'>
        <section className='section'>
            <div className="lists">
                <p className="p1">Become a seller</p>
                <p className="p2">Create or accept offers at your preferred rate.</p>

                <ul>
                  <li className={ personal ? `active` : `${stepOne}` }><span><i className="material-icons-outlined">account_circle</i> </span><p>Personal information { stepOne === `done` && <i className="material-icons ic">check</i>}</p> </li>
                  <li className={ idInfo ? `active` : `${stepTwo}` }><span><i className="material-icons-outlined">payment</i> </span><p>ID information  { stepTwo === `done` && <i className="material-icons ic">check</i>}</p> </li>
                  <li className={ showPreview ? `active` : `${stepThree}` }><span><i className="material-icons-outlined">text_snippet</i> </span><p>Preview  { stepThree === `done` && <i className="material-icons ic">check</i>}</p> </li>
                </ul>
            </div>
            <div className="cnt">
              <div className="fl1">
                { personal && <Pid
                  backclick={(e) => {
                    e.preventDefault();
                    setStepOne(`last`)
                    alert(`There is no where to go to!`)
                    return;
                  }} 
                  onclick={(e) => {
                    e.preventDefault();
                    setPersonal(false)
                    setIdInfo(true)
                    setStepOne(`done`)
                  }}
                  display={'flex'}
                />}


                { idInfo && <Idi
                  backclick={(e) => {
                    e.preventDefault();
                    setPersonal(true)
                    setIdInfo(false)
                    setStepTwo(`last`)
                  }}
                  onclick={(e) => {
                    e.preventDefault();
                    setIdInfo(false)
                    setShowPreview(true)
                    setStepTwo(`done`)
                  }}
                 display={'flex'} id="idi"/>}


                { showPreview && <BAS_prev
                    backclick={(e) => {
                      e.preventDefault();
                      setShowPreview(false);
                      setIdInfo(true)
                      setStepThree(`last`)
                    }}
                    onclick={(e) => {
                      e.preventDefault();
                      alert(`There is no where to go to!`)
                      setStepThree(`done`)
                    }}
                   display={'flex'} />}
              </div>
              
              <p className="cl" id="cls"><i className="fa-solid fa-x"></i> Close</p>

            </div>
        </section>
    </main>
    
  )
}

export default Auth_content