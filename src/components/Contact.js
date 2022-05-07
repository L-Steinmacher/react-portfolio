import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleUp } from '@fortawesome/free-regular-svg-icons';

function Contact() {
  return (
    <div id='contact' className='container'>
      <hr/>
      <div className='container'>
        <h3 className='has-text-centered title' >Contact</h3>
      </div>
      <div className='social-icons has-text-centered'>
        <a href='#top'>
          <FontAwesomeIcon icon={faArrowAltCircleUp} className='social-icon' />
        </a>
      </div>
    </div>
  )
}

export default Contact;
