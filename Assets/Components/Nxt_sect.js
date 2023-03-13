import React from 'react'
import './Blog_nav.css'
import './Blog_index.css'
import { Link } from "react-router-dom";;

const Nxt_sect = () => {
  return (
    <section className="nxt">
              <Link className="a null ii"><i className="material-icons">chevron_left</i></Link>
                  <ul>
                    <li><Link className='a active'>1</Link></li>
                    <li><Link className='a'>2</Link></li>
                    <li><Link className='a'>3</Link></li>
                    <li><Link className='a'>...</Link></li>
                  </ul>
              <Link className="a ii"><i className="material-icons">chevron_right</i></Link>
    </section>
  )
}

export default Nxt_sect