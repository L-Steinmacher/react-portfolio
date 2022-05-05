import React from 'react';
import About from './About';
import Contact from './Contact';

function Home() {
  return (
    <div>
      <section id='top' className='hero is-full height' >
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
            <div className='container'>
              <nav className='navbar' >
                <a href='#about' >About</a>
              </nav>
            </div>
          </div>
          
        </div>
      </section>
        <About />
        <Contact />
    </div>
  )
}

export default Home;
