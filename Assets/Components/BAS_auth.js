import React from 'react'
import Auth_content from './Auth_content'
import Auth_nav from './Auth_nav'

const BAS_auth = () => {
  return (
    <body>
        <header>
            <Auth_nav />
        </header>
        
        {/* <main> */}
            <Auth_content />
        {/* </main> */}
        
    </body>
  )
}

export default BAS_auth