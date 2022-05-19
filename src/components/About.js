import React from 'react'
import image from '../assets/Lucas_web2-.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleUp } from '@fortawesome/free-regular-svg-icons';
<FontAwesomeIcon icon={faArrowAltCircleUp} />

function About() {
  return (
    <div id='about' className='container'>
        <h3 className='has-text-centered title ' >About</h3>
        <div className='about-body has-text-justify'>
          <img src={image}  />
          <div className='has-padding' >
            <p className='has-text-justify' >
              Hey, let me tell you a bit about myself. In 2020 I had this crazy idea that I could somehow change my career path as a professional chef and become a software engineer. Turns out it wasn't such a crazy idea after all!
              <br/>
              <br/>
              As it turns out, other than the obvious differences, being a software engineer isn't much different than being a chef. The skills that allowed me to be successful as a chef - analytical thinking, ability to communicate concisely, capacity for detail, and problem solving - have allowed me to be successful as a software engineer as well.
              <br/>
              <br/>
              To be honest though, these two disciplines are quite different. For instance, as a chef or cook my focus might have been on something like operational efficiency, but as a software engineer my focus has shifted more towards things like distributed system infrastructure and time/space complexity optimization.
              <br/>
              <br/>
              At the end of the day though, it is all just problem-solving. Although I do have to admit that I enjoy solving the problems that I face as a software engineer just a tad bit more.
              <br/>
              <br/>
              I love connecting with new people and helping others in any way that I can. If you have a question that you think that I might be able to answer, then please reach out to me. Links below.
            </p>
          </div>
          
        </div>
        <div className='social-icons has-text-centered has-padding-top'>
          <a href='#top'>
            <FontAwesomeIcon icon={faArrowAltCircleUp} className='social-icon' />
          </a>
        </div>
    </div>
  )
}

export default About;
