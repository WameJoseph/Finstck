import React, { useState } from 'react';
import './Home.css'


const Home = () => {
  const [selected, setSelected] = useState(null)
  

  const data = [
    {
      topic: 'How does Finstack really work?',
      content: 'Create or a Lorem ipsum dolor sit amet.'
    },
    {
      topic: 'How does Finstack really work?',
      content: 'Create or accept offers at your preferred rate on our Peer to peer marketplace Create or accept offers.Create or accept offers at your preferred rate on our Peer to peer marketplace Create or accept offers.1'
    },
    {
      topic: 'How does Finstack really work?',
      content: 'Create or a Lorem ipsum dolor sit amet.'
    },
    {
      topic: 'How does Finstack really work?',
      content: 'Create or a Lorem ipsum dolor sit amet.'
    },
  ]

  const onToggle = i => {
    if(selected === i){
      return setSelected(null)
    }

    setSelected(i)
  }
  


  return (
    <body>

    <div className='Main'>
        
      
        <section className='section7'>
          <div className="content">
            <div className="sp">
              <p className="t1">Frequently Asked Questions</p>
              <p className="t2">Create or accept offers at your preferred rate on our Peer to peer marketplace Create or accept offers.</p>
              
              


              { data.map((item, i) => (
                <div className="scp" >
                  <a className="top" onClick={() => onToggle(i)}>{ item.topic }
                    <i className="material-icons">{ selected === i ? (`expand_less`) : (`expand_more`) }</i>
                  </a>
                  <div className={selected === i ? `answer` : `answer_none`} id='oo'>
                      <p className="det">{ item.content }</p>
                  </div>
                </div> 
              ))}


            </div>
            <div className="sp">
              <div className="scp">
                <p className="top"></p>
              </div>
              <div className="scp">
              <a className="top" >How does Finstack really work? <i className="material-icons">expand_more</i></a>
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
      
    
        <section className="section9">
          <div className="back">
            {/* <img src={big_logo} alt="" /> */}
            {/* <img src={big_logo} alt=""  className='img2'/> */}
          </div>
          <div className="text">
            <p className="t1">Ready to join the train?</p>
            <p className="t2">One - liner body text comes here</p>
            {/* <Link to="/signup" >Create a free account</Link> */}
          </div>
        </section>  
    </div>
    {/* <Foot />*/}
    </body>
  )
}

export default Home