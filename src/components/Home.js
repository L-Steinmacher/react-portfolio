import React from 'react';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import Navbar from './Navbar';
import Socials from './Socials';


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
            <Socials />
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
