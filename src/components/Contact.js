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
      <div className=' has-text-centered '>
        <h3 className='has-text-centered contact-title title' >Contact</h3>
        <div className='contact-body '>
          <div className='contact-area '>
            <p>
              I have a few ways that you can contact me but email is best. 
              I usually check my email untill 5:00 PM PST.
            </p>
            <span>My current time is {currTime}.</span>
          </div>
          <div className='contact-area'>
            <span className='email' ><a href='mailto: lucaslsteinmacher@gmail.com' className='social-icon'>lucaslsteinmacher@gmail.com</a></span> 
          </div>
          <Socials />
          
        </div>
        
      </div>
      <div className=' has-text-centered  has-padding-top'>
        <a href='#top'>
          <FontAwesomeIcon icon={faArrowAltCircleUp} className='social-icon' />
        </a>
      </div>
    </div>
  )
}

export default Contact;
