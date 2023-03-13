import React from 'react'
import './Blog_nav.css'
import './Blog_index.css'
import './Blog_page.css'
import Blog_nav from './Blog_nav';
import s_facbook from './images/s_facebook.svg'
import s_twit from './images/s_twitter.svg'
import s_insta from './images/s_insta.svg'
import Foot from './Foot';



const Contactus = () => {
  return (
    <body>
        <header>
             <Blog_nav />
        </header>
        <main className="mcontact">
             <section className="sect1">
                <p className="t1">Get in touch</p>

                <span className='sp1'>
                    <p className="t2">Address</p>
                    <span className='ss'>
                         <p className="t3">Zone A, Adedeji crescent, Victoria Island,</p>
                        <p className="t3">Lagos Nigeria</p>
                        <p className="t3">PMB 1011101</p>
                    </span>
                    <span className='ss'>
                         <p className="t3">Zone A, Adedeji crescent, Victoria Island,</p>
                        <p className="t3">Lagos Nigeria</p>
                        <p className="t3">PMB 1011101</p>
                    </span>
                </span>

                <span className='sp1'>
                    <p className="t2">Email</p>
                    <span className='ss'>
                         <p className="t3">mavrick.eth873942@finstack.com</p>
                        <p className="t3">peter.btc 7613t87@finstack.com</p>
                    </span>
                </span>

                <span className='sp1'>
                    <p className="t2">Phone number(s)</p>
                    <span className='ss'>
                         <p className="t3">+234 459 2479 458</p>
                         <p className="t3">+234 120 8923 243</p>
                    </span>
                </span>

                <span className='sp1'>
                    <p className="t2">Socials</p>
                    <span className='ss1'>
                         <a href=""><img src={s_facbook} alt="" /></a>
                         <a href=""><img src={s_twit} alt="" /></a>
                         <a href=""><img src={s_insta} alt="" /></a>
                    </span>
                </span>
             </section>
             <section className="sect2">
                <form action="">
                    <p className="t1">Need to talk?</p>

                    <span className="sp">
                        <label htmlFor="name">Name</label>
                        <input type="text" placeholder='Enter name or business name' />
                    </span>
                    <span className="sp">
                        <label htmlFor="name">Email</label>
                        <input type="text" placeholder='Enter email address' />
                    </span>
                    <span className="sp">
                        <label htmlFor="name">Phone number</label>
                        <input type="text" placeholder='Phone number' />
                    </span>
                    <span className="sp">
                        <label htmlFor="name">Your message</label>
                        <textarea name="" id="" cols="60" rows="10" placeholder='Type here ...'></textarea>
                    </span>

                    <button type="submit">Send message</button>
                </form>
             </section>
        </main>

        <Foot />
    </body>
  )
}

export default Contactus