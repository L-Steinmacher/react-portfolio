import React from 'react';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import Navbar from './Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';


function Home() {
  return (
    <div className='hero-head' id='top'>
      <section id='top' className='hero is-fullheight' >
        <div className='container has-text-centered section'>
          <div className='fade-in one'>
            <h1 className='bold-title' >
              Hi, I’m Lucas
            </h1>
          </div>
          <div className='fade-in two'>
            <p className='subtitle' >
              I'm a Software Engineer.
            </p >
          </div>
          <div className='fade-in three'>
            <div className='social-icons'>
              <a href='https://twitter.com/LucasSteinmach1'  className='social-icon'>
                <FontAwesomeIcon icon={faTwitter} className='social-icon'  /> 
              </a>
              <a href='https://www.linkedin.com/in/lucas-l-steinmacher/' className='social-icon' >
                <FontAwesomeIcon icon={faLinkedin} className='social-icon' size='2x' color='#00b8d4' />
              </a>
              <a href='https://github.com/L-Steinmacher' className='social-icon' >
                <FontAwesomeIcon icon={faGithub} className='social-icon' size='2x' color='#00b8d4' />
              </a>
            </div>
          </div>
        </div>
        <Navbar />
      </section>
        <About />
        <Contact />
        <Footer />
    </div>
  )
}

export default Home;
