import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faHeart } from '@fortawesome/free-solid-svg-icons'


function Footer() {
  const coffee = <FontAwesomeIcon icon={faCoffee} className='footer-icon' />
  const heart = <FontAwesomeIcon icon={faHeart} className='footer-icon' />
  return (
    <div id='footer' className='container has-text-centered'>
        <hr/>
        <p className='footer-text' >Made with {heart} and {coffee} by Panz.</p> 
    </div>
  )
}

export default Footer;
