import React from 'react'
import './About.css'
import profile_img from '../../Assets/IMG_COM_202403081019467420.jpg'

function About() {
  return (
    <div className='about container'>
      <div className='about-left'>
        <img src={profile_img} alt='' />
      </div>
      <div className='about-right'>
        <h2>About Me</h2>
        <p>Hey, I'm a frontend developer passionate about crafting delightful user experiences on the web.
             My focus is on crafting clean, intuitive interfaces using HTML, CSS, and JavaScript.
             With a passion for problem-solving and attention to detail, I thrive on creating user-centric designs that captivate and engage.
              Let's collaborate and bring your vision to life!</p>
        <div className='subdiv-about'>
          <div className='experience'>
            <h3>EXPERIENCE</h3>
            <p>Gadgeon smart systems, Kochi</p>
            <span>August 2022 - present</span>
          </div>
          <div className='education'>
            <h3>EDUCATION</h3>
            <li>BTECH<p>College of engineering vadakara</p><span>2018-06 - 2022-07 </span></li>
            <li>PLUS TWO<p>MMHSS Thalassery</p><span>2017</span></li>
            <li>SSLC<p>MMHSS Mahe</p><span>2015</span></li>
          </div>
        </div>  
      </div>
    </div>
  )
}

export default About
