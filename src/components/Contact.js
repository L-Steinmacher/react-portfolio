import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleUp } from '@fortawesome/free-regular-svg-icons';
import clock from './clock';


function Contact() {
  const currTime = clock()
  return (
    <div id='contact' className='container'>
      <hr/>
      <div className='container has-text-centered'>
        <h3 className='has-text-centered title' >Contact</h3>
        <div className='contact-body container'>
         <span className='email' ><a href='mailto: lucaslsteinmacher@gmail.com'>lucaslsteinmacher@gmail.com</a></span> 
        </div>
        I usually check my email untill 5:00 PM PST.
        my current time is {currTime}
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
