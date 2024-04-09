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
        <p>Hey there, I'm passionate about software development and computer programming, where I can leverage my experience 
          and technical skills to design and develop user-friendly web interfaces. I'm dedicated to constantly improving my 
          technical abilities and staying up-to-date with the latest technologies and industry trends. I thrive in collaborative 
          and dynamic environments, where I can contribute to the team and organization's success. Let's collaborate and bring your vision to life!</p>
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
