import React from 'react';
import About from './About';
import Contact from './Contact';

function Home() {
  return (
    <div>
        <h1>
             Hi, I’m Lucas
        </h1>
        <h3>
            I'm a Software Engineer.
        </h3>
        <br />
        <hr />
        <br />
        <About />
        <Contact />
    </div>
  )
}

export default Home;
