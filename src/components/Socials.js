import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faLinkedin, faTwitch } from '@fortawesome/free-brands-svg-icons';

function Socials() {
  return (
    <div className='social-icons has-padding'>
        <a href='https://twitter.com/LucasSteinmach1'  className='social-icon'>
            <FontAwesomeIcon icon={faTwitter} className='social-icon'  /> 
        </a>
        <a href='https://www.linkedin.com/in/lucas-l-steinmacher/' className='social-icon' >
            <FontAwesomeIcon icon={faLinkedin} className='social-icon' size='2x' color='#00b8d4' />
        </a>
        <a href='https://github.com/L-Steinmacher' className='social-icon' >
            <FontAwesomeIcon icon={faGithub} className='social-icon' size='2x' color='#00b8d4' />
        </a>
        {/* <a href='https://www.twitch.tv/panziewanz' className='social-icon' >
        <FontAwesomeIcon icon={faTwitch} className='social-icon' size='2x' color='#00b8d4' />
        </a> */}
    </div>
  )
}

export default Socials;
