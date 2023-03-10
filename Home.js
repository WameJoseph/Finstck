import React, { useState } from 'react';
import './Home.css'
import Landing_nav from './Landing_nav';
import Sidenav from './Sidenav';
import Select from './Select';
import arrow_img from './images/two-arrow.png'
import icon_img1 from './images/Frame.svg'
import icon_img2 from './images/Frame (1).svg'
import icon_img3 from './images/Vector.svg'
import icon_img4 from './images/Vector (1).svg'
import cntry_img1 from './images/country_image (1).svg'
import cntry_img2 from './images/country_image (2).svg'
import cntry_img3 from './images/country_image (3).svg'
import cntry_img4 from './images/country_image (4).svg'
import cntry_img5 from './images/country_image (5).svg'
import bag_icon1 from './images/Group(3).svg'
import bag_icon2 from './images/Group.svg'
import bag_icon3 from './images/Group (1).svg'
import bk_img1 from './images/blg_img.svg'
import bk_img2 from './images/blg_img2.svg'
import bk_img3 from './images/blg_img3.svg'
import big_logo from './images/big_logo.svg'
import Foot from './Foot';
import {BrowserRouter, Routes, Route, Link } from "react-router-dom";



const Home = () => {
  const [dropDownOne, setDropDownOne] = useState(false)
  const [dropDownTwo, setDropDownTwo] = useState(false)

  const openDropDownOne = () => {
    setDropDownOne(true)
  }

  const openDropDownTwo = () => {
    setDropDownTwo(true)
  }

  return (
    <body>

   
    <header>
      <Landing_nav />
      <section>
        <div className='div1'>
          <p className='txt1'>BANKING THE UNBANKED</p>
          <h1>Currency Trading Made Simple and Easy</h1>
          <p className='txt2'>Creating seamless exchange procedure for everyone. Buy, sell, save, trade and exchange fiat currencies with 3 simple steps. </p>
          <span className='links'>
            <Link to="/signup" className='a1'>Get Started</Link>
            <a href='' className='a2'>Buy/Sell Currency <i className="material-icons" >chevron_right</i></a>
          </span>
        </div>
        <div className='div2'>
          <div className='inp'>
            <p className='t1'>Currency Converter</p>
            <p className='t2'>Check live foreign currency exchange rates </p>
            <form>
              <div className='sp'>
                  <span className='sp1'>
                    <p className='txt'>I want to convert</p>
                    <input type={'number'} placeholder="1,000" className='input'></input>
                  </span>
                  <span className='sp1'>
                    <p className='txt'>Currency</p>
                    <select className='input select'>
                      <option className='opt'>1</option>
                      <option className='opt'>2</option>
                      <option className='opt'>3</option>
                      <option className='opt'>4</option>
                      <option className='opt'>5</option>
                    </select>
                  </span>
              </div>
              <span className='icon'>
                <span className='line'></span>
                <img src={arrow_img} alt='wae' className='arrow_img' />
              </span>
              <div className='sp'>
                  <span className='sp1'>
                    <p className='txt'>To</p>
                    <input type={'number'} placeholder="16,581,300" className='input'></input>
                  </span>
                  <span className='sp1'>
                    <p className='txt'>Currency</p>
                    <select className='input select'>
                      <option className='opt'>1</option>
                      <option className='opt'>2</option>
                      <option className='opt'>3</option>
                      <option className='opt'>4</option>
                      <option className='opt'>5</option>
                    </select>
                  </span>
              </div>
              <p className='conv'>1 BTC = 16582.3 USD</p>
              <button type={'submit'}>Convert Currency</button>
            </form>
                
          </div>
        </div>
      </section>
      <div className='div3'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill=" #0A1128" fill-opacity="1" d="M0,128L1440,320L1440,320L0,320Z"></path></svg>
      </div>
    </header>
    <div className='Main'>
        <section className='section_descrpt'>
            <div>
              <div className='img'></div>
            </div>
            <div className='text'>
              <p className='txt1'>WE ARE ON AN INVALUABLE MISSION</p>
              <p className='txt2'> Reducing the hassle of currency exchange</p>
              <span className='spans'>
                <span className='bc'><img src={icon_img1} alt='wame' /></span>
                <span className='txt'>
                  <p className='top'>Peer to Peer Marketplace</p>
                  <p className='btm'>Create or accept offers at your preferred rate on our Peer to peer marketplace</p>
                </span>
              </span>
              <span className='spans'>
                <span className='bc'><img src={icon_img2} alt='wame' /></span>
                <span className='txt'>
                  <p className='top'>Exchange Giftcards</p>
                  <p className='btm'>Create or accept offers at your preferred rate on our Peer to peer marketplace</p>
                </span>
              </span>
              <span className='spans'>
                <span className='bc'><img src={icon_img3} alt='wame' /></span>
                <span className='txt'>
                  <p className='top'>Fast and Secure Transactions</p>
                  <p className='btm'>Create or accept offers at your preferred rate on our Peer to peer marketplace</p>
                </span>
              </span>
              <span className='spans'>
                <span className='bc'><img src={icon_img4} alt='wame' /></span>
                <span className='txt'>
                  <p className='top'>24/7 Customer Support</p>
                  <p className='btm'>Create or accept offers at your preferred rate on our Peer to peer marketplace</p>
                </span>
              </span>
              <span className='links'>
                  <Link to="/signup" className='a1'>Get Started</Link>
                  <a href='' className='a2'>Start trading <i className='material-icons'>chevron_right</i></a>
              </span>
            </div>
        </section>
        <section className='section2'>
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill=" #0A1128" fill-opacity="1" d="M0,192L1440,64L1440,0L0,0Z"></path></svg>        
        </section>
        <section className='section3'>
          <div className='top'>
            <span className='sp1'>
              <p className='t1'>Currency Price Listings</p>
              <p className='t2'><i className='material-icons'>calendar_today</i> Last Updated: Feb 02, 2023 </p>
            </span>
            <form>
              <select>
              <option className='opt'>Select Currency</option>
                      <option className='opt'>2</option>
                      <option className='opt'>3</option>
                      <option className='opt'>4</option>
                      <option className='opt'>5</option>
              </select>
            </form>
          </div>
          <div className='wame'>
            <div className='items'>
              <div className='lists top_lists'>
                <span className="c c1"><p>Currency</p></span>
                <span className="c c2"><p>Price</p></span>
                <span className="c c3"><p>Change</p></span>
                <span className="c c4"> </span>
              </div>
              <a href='' className='lists'>
                <span className="c c1"><img src={cntry_img1} alt="" /> <span className='ct2'><h4>Dollar</h4><p>USD</p></span></span>
                <span className="c c2"><p className='price'><p className="N">N</p> 730</p></span>
                <span className="c c3"><p className='perct'>+0.87%</p></span>
                <span className="c c4"><a href=""><p>Buy/Sell</p> <i className='material-icons' >chevron_right</i></a> </span>
              </a>
              <a href='' className='lists'>
                <span className="c c1"><img src={cntry_img2} alt="" /> <span className='ct2'><h4>Pounds</h4><p>GBP</p></span></span>
                <span className="c c2"><p className='price'><p className="N">N</p> 905</p></span>
                <span className="c c3"><p className='perct'>+0.87%</p></span>
                <span className="c c4"><a href=""><p>Buy/Sell</p> <i className='material-icons' >chevron_right</i></a> </span>
              </a>
              <a href='' className='lists'>
                <span className="c c1"><img src={cntry_img3} alt="" /> <span className='ct2'><h4>Euro</h4><p>EUR</p></span></span>
                <span className="c c2"><p className='price'><p className="N">N</p> 745</p></span>
                <span className="c c3"><p className='perct'>+0.87%</p></span>
                <span className="c c4"><a href=""><p>Buy/Sell</p> <i className='material-icons' >chevron_right</i></a> </span>
              </a>
              <a href='' className='lists'>
              <span className="c c1"><img src={cntry_img4} alt="" /> <span className='ct2'><h4>Ethereum</h4><p>ETH</p></span></span>
                <span className="c c2"><p className='price'><p className="N">N</p> 730</p></span>
                <span className="c c3"><p className='perct'>+0.87%</p></span>
                <span className="c c4"><a href=""><p>Buy/Sell</p> <i className='material-icons' >chevron_right</i></a> </span>
              </a>
              <a href='' className='lists'>
              <span className="c c1"><img src={cntry_img5} alt="" /> <span className='ct2'><h4>USDT</h4><p>USDT</p></span></span>
                <span className="c c2"><p className='price'><p className="N">N</p> 730</p></span>
                <span className="c c3"><p className='perct'>+0.87%</p></span>
                <span className="c c4"><a href=""><p>Buy/Sell</p> <i className='material-icons' >chevron_right</i></a> </span>
              </a>
            </div>
            <div className='items'>
            <div className='lists top_lists top_lists2'>
                <span className="c c1"><p>Currency</p></span>
                <span className="c c2"><p>Price</p></span>
                <span className="c c3"><p>Change</p></span>
              </div>
              <a href='' className='lists'>
                <span className="c c1"><img src={cntry_img1} alt="" /> <span className='ct2'><h4>Dollar</h4><p>USD</p></span></span>
                <span className="c c2"><p className='price'><p className="N">N</p> 730</p></span>
                <span className="c c3"><p className='perct'>+0.87%</p></span>
                <span className="c c4"><a href=""><p>Buy/Sell</p> <i className='material-icons' >chevron_right</i></a> </span>
              </a>
              <a href='' className='lists'>
                <span className="c c1"><img src={cntry_img2} alt="" /> <span className='ct2'><h4>Pounds</h4><p>GBP</p></span></span>
                <span className="c c2"><p className='price'><p className="N">N</p> 905</p></span>
                <span className="c c3"><p className='perct'>+0.87%</p></span>
                <span className="c c4"><a href=""><p>Buy/Sell</p> <i className='material-icons' >chevron_right</i></a> </span>
              </a>
              <a href='' className='lists'>
                <span className="c c1"><img src={cntry_img3} alt="" /> <span className='ct2'><h4>Euro</h4><p>EUR</p></span></span>
                <span className="c c2"><p className='price'><p className="N">N</p> 745</p></span>
                <span className="c c3"><p className='perct'>+0.87%</p></span>
                <span className="c c4"><a href=""><p>Buy/Sell</p> <i className='material-icons' >chevron_right</i></a> </span>
              </a>
              <a href='' className='lists'>
              <span className="c c1"><img src={cntry_img4} alt="" /> <span className='ct2'><h4>Ethereum</h4><p>ETH</p></span></span>
                <span className="c c2"><p className='price'><p className="N">N</p> 730</p></span>
                <span className="c c3"><p className='perct'>+0.87%</p></span>
                <span className="c c4"><a href=""><p>Buy/Sell</p> <i className='material-icons' >chevron_right</i></a> </span>
              </a>
              <a href='' className='lists'>
              <span className="c c1"><img src={cntry_img5} alt="" /> <span className='ct2'><h4>USDT</h4><p>USDT</p></span></span>
                <span className="c c2"><p className='price'><p className="N">N</p> 730</p></span>
                <span className="c c3"><p className='perct'>+0.87%</p></span>
                <span className="c c4"><a href=""><p>Buy/Sell</p> <i className='material-icons' >chevron_right</i></a> </span>
              </a>
            </div>
          </div>
          <div className="see">
            <Link to="/listings">See all Listings <i className="material-icons">chevron_right</i></Link>
          </div>
        </section>
        <section className="section4">
            <p className="t1">3 EASY STEPS</p>
            <p className="t2">How It Works</p>
            <p className="t3">Create or accept offers at your preferred rate on our Peer to peer marketplace</p>
          <div className="fl">
            <span>
             <div className="box"><img src={bag_icon1} alt="wame" /></div>
             <p className="txt1">Select currency pair</p>
              <p className="t">Create or accept offers at your preferred rate on our Peer to peer marketplace
                offers at your preferred</p>
            </span>
            <span>
              <div className="box"><img src={bag_icon2} alt="wame" /></div>
              <p className="txt1">Transfer Local Money</p>
              <p className="t">Create or accept offers at your preferred rate on our Peer to peer marketplace
                offers at your preferred</p>
            </span>
            <span>
              <div className="box"><img src={bag_icon3} alt="wame" /></div>
              <p className="txt1">Receive funds</p>
              <p className="t">Create or accept offers at your preferred rate on our Peer to peer marketplace
                offers at your preferred</p>
            </span>
          </div>
        </section>
        <section className="section5">
          <p className="t1">TESTIMONIAL</p>
          <p className="t2">Hear what our customers say about us</p>
          <blockquote class="twitter-tweet"><p lang="en" dir="ltr">NAIRA RATES TODAY<a href="https://twitter.com/hashtag/NAIRA?src=hash&amp;ref_src=twsrc%5Etfw">#NAIRA</a> <a href="https://twitter.com/hashtag/RATES?src=hash&amp;ref_src=twsrc%5Etfw">#RATES</a> <a href="https://t.co/wWuLlIuFF7">pic.twitter.com/wWuLlIuFF7</a></p>&mdash; Finstack HQ (@Finstack_HQ) <a href="https://twitter.com/Finstack_HQ/status/1630202452359225344?ref_src=twsrc%5Etfw">February 27, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>        </section>
        <section className='section6'>
          <div className="content">
            <div>
              <span className="img"></span>
            </div>
            <div className="text">
              <p className="t1">BECOME A SELLER</p>
              <p className="t2">Become a Seller. Place your offer on the Peer 2 Peer Marketplace</p>
              <p className="t3">Create or accept offers at your preferred rate on our Peer to peer marketplace Create or accept offers at your preferred rate on our Peer to peer marketplaceCreate or accept offers at your preferred rate on our Peer to peer marketplace</p>
              <span className='links'>
                <Link to="/seller_up" className="a1">Start registration</Link>
                <Link className="a2">Start selling <i className="material-icons">chevron_right</i> </Link>
              </span>
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffff" fill-opacity="1" d="M0,320L1440,96L1440,320L0,320Z"></path></svg>
        </section>
        <section className='section7'>
          <div className="content">
            <div className="sp">
              <p className="t1">Frequently Asked Questions</p>
              <p className="t2">Create or accept offers at your preferred rate on our Peer to peer marketplace Create or accept offers.</p>
              
              
              <div className="scp" >
                <a className="top" style={{border: 'solid',}}>How does Finstack really work? <i className="material-icons">expand_more</i></a>
                <div className="answer toggle-area" id='oo'>
                  <p className="det">Create or a Lorem ipsum dolor sit amet.</p>
                </div>
              </div>

              <div className="scp faq">
                <a onClick={open}  className="top" >How does Finstack really work? <i className="material-icons">expand_more</i></a>
                <div className="answer">
                  <p className="det">Create or accept offers at your preferred rate on our Peer to peer marketplace Create or accept offers.Create or accept offers at your preferred rate on our Peer to peer marketplace Create or accept offers.1</p>
                </div>
              </div>
              <div className="scp">
              <a on className="top" >How does Finstack really work? <i className="material-icons">expand_more</i></a>
                <div className="answer">
                  <p className="det">Create or accept offers at your preferred rate on our Peer to peer marketplace Create or accept offers.Create or accept offers at your preferred rate on our Peer to peer marketplace Create or accept offers.1</p>
                </div>
              </div>
            </div>
            <div className="sp">
              <div className="scp">
                <p className="top"></p>
              </div>
              <div className="scp">
              <a onClick={open}  className="top" >How does Finstack really work? <i className="material-icons">expand_more</i></a>
                <div className="answer">
                  <p className="det">Create or accept offers at your preferred rate on our Peer to peer marketplace Create or accept offers.Create or accept offers at your preferred rate on our Peer to peer marketplace Create or accept offers.1</p>
                </div>
              </div>
              <div className="scp"></div>
              <div className="scp"></div>
              <div className="scp"></div>
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0A1128" fill-opacity="1" d="M0,160L1440,288L1440,320L0,320Z"></path></svg>
        </section>
        <section className="section8">
          <div className="top">
              <span className="sp">
                <p className="t1">Stay up to date</p>
                <p className="t2">Stay on the grind. Stay on the grind. Stay on the grind</p>
              </span>
              <Link to="/blogn"><p>View all updates</p><i className="material-icons">chevron_right</i></Link>
          </div>

          <div className="content">
            <Link to="/blogn">
              <div className="img" style={{backgroundImage: `url(${bk_img1})`}}></div>
              <p className="t1">CBN on Digital Asset Tax</p>
              <p className="t2">Create or accept offers at your preferred rate on our Peer to peer marketplace Create or...</p>
              <p className="t3">Read more <i className="material-icons">chevron_right</i></p>
            </Link>
            <Link to="/blogn">
              <div className="img" style={{backgroundImage: `url(${bk_img2})`}}></div>
              <p className="t1">Future of Gold and Silver</p>
              <p className="t2">Create or accept offers at your preferred rate on our Peer to peer marketplace Create or...</p>
              <p className="t3">Read more <i className="material-icons">chevron_right</i></p>
            </Link>
            <Link to="/blogn">
            <div className="img" style={{backgroundImage: `url(${bk_img3})`}}></div>
              <p className="t1">Impact of Emmigration on Currenc ...</p>
              <p className="t2">Create or accept offers at your preferred rate on our Peer to peer marketplace Create or...</p>
              <p className="t3">Read more <i className="material-icons">chevron_right</i></p>
            </Link>
          </div>
        </section>
        <section className="section9">
          <div className="back">
            <img src={big_logo} alt="" />
            <img src={big_logo} alt=""  className='img2'/>
          </div>
          <div className="text">
            <p className="t1">Ready to join the train?</p>
            <p className="t2">One - liner body text comes here</p>
            <Link to="/signup" >Create a free account</Link>
          </div>
        </section>  
    </div>
    <Foot />
    </body>
  )
}

export default Home