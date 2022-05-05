import React from 'react';
import About from './About';
import Contact from './Contact';
import Navbar from './Navbar';

function Home() {
  return (
    <div>
      <section id='top' className='hero is-fullheight' >
        <div className='container'>
          <div className='fade-in one'>
            <h1>
              Hi, I’m Lucas
            </h1>
          </div>
          <div className='fade-in two'>
            <h3>
              I'm a Software Engineer.
            </h3>
          </div>
          <div className='fade-in three'>
            <div className='social-icons'>
              <a href='https://twitter.com/LucasSteinmach1'>

              </a>
              <a href='https://www.linkedin.com/in/lucas-l-steinmacher/'>

              </a>
              <a href='https://github.com/L-Steinmacher'>

              </a>
            </div>
           <Navbar />
          </div>
          
        </div>
      </section>
        <About />
        <Contact />
    </div>
  )
}

export default Home;
