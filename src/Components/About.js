import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
            Hi, my name is <b>Padmavati Rajput</b> and I'm from Sangli, Yellow-City of India famous for Turmeric cultivation.
            I'm a <b>Web developer</b> and a second year college student pursuing <b>MCA</b>. <br/><br/>
            I have done an virtual internship as a <b>software developer</b> at The Sparks Foundation which is a non-profit organization.
            I love to create original projects with beautiful designs, you can check out some of my work in the projects section.<br/><br/>
            I am <b>open</b> to new collaborations or work where I can contribute and grow. Feel free to connect with me, links are in the footer.<br/>
            Apart from coding I love to do photography, you can check out some of my shots here <a href="https://www.instagram.com/picturesque.soul_/?hl=en" target='_blank'>Instagram.</a>
          </p>
        </div>

        <div>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={Coder} 
              loop={true} 
            />
          </Tilt>
        </div>

      </div>
      
      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>
        
        <Skills skill='React' />
        <Skills skill='Node' />
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Javascript' />
        <Skills skill='C++' />
        <Skills skill='Java' />
        <Skills skill='Css'/>
        <Skills skill='Html'/>
        <Skills skill='Figma' />
        <Skills skill='Vercel' />
        <Skills skill='Npm' />
        <Skills skill='VScode'/>
      
        
      </div>
    </>
  )
}

export default About