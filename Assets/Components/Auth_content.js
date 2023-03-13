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
  return (
    <main className='Aumain'>
        <section className='section'>
            <div className="lists">
                <p className="p1">Become a seller</p>
                <p className="p2">Create or accept offers at your preferred rate.</p>

                <ul>
                  <li className={ personal ? `active` : `don` }><span><i className="material-icons-outlined">account_circle</i> </span><p>Personal information { personal && <i className="material-icons ic">check</i>}</p> </li>
                  <li className={ idInfo ? `active` : `don` }><span><i className="material-icons-outlined">payment</i> </span><p>ID information  { idInfo && <i className="material-icons ic">check</i>}</p> </li>
                  <li className={ showPreview ? `active` : `last` }><span><i className="material-icons-outlined">text_snippet</i> </span><p>Preview  { showPreview && <i className="material-icons ic">check</i>}</p> </li>
                </ul>
            </div>
            <div className="cnt">
              <div className="fl1">
                { personal && <Pid
                  backclick={(e) => {
                    e.preventDefault();
                    alert(`There is no where to go to!`)
                    return;
                  }} 
                  onclick={(e) => {
                    e.preventDefault();
                    setPersonal(false)
                    setIdInfo(true)
                  }}
                  display={'flex'}
                />}


                { idInfo && <Idi
                  backclick={(e) => {
                    e.preventDefault();
                    setPersonal(true)
                    setIdInfo(false)
                  }}
                  onclick={(e) => {
                    e.preventDefault();
                    setIdInfo(false)
                    setShowPreview(true)
                  }}
                 display={'flex'} id="idi"/>}


                { showPreview && <BAS_prev
                    backclick={(e) => {
                      e.preventDefault();
                      setShowPreview(false);
                      setIdInfo(true)
                    }}
                    onclick={(e) => {
                      e.preventDefault();
                      alert(`There is no where to go to!`)
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