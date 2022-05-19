import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleUp } from '@fortawesome/free-regular-svg-icons';

import clock from './clock';
import Socials from './Socials';

function Contact() {
  const currTime = clock()
  return (
    <div id='contact' className='container contact'>
      <hr/>
      <div className=' has-text-centered'>
        <h3 className='has-text-centered title' >Contact</h3>
        <div className='contact-body  has-padding'>
          <div className='contact-area has-padding'>
            <p>
              I have a few ways that you can contact me but Email is best. 
              I usually check my email untill 5:00 PM PST.
            </p>
            <br/>
            <span>My current time is {currTime}.</span>
          </div>
          <div className='contact-area has-padding'>
            <span className='email' ><a href='mailto: lucaslsteinmacher@gmail.com' className='social-icon'>lucaslsteinmacher@gmail.com</a></span> 
          </div>
          <Socials />
          
        </div>
        
      </div>
      <div className=' has-text-centered  has-padding-top'>
        <a href='#top' className=' '>
          <FontAwesomeIcon icon={faArrowAltCircleUp} className='social-icon' />
        </a>
      </div>
    </div>
  )
}

export default Contact;
