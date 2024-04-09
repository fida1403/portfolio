import React from 'react'
import './Header.css'
import resume from '../../Assets/Fida_Fathima_Resume.pdf'

function Header() {

  return (
    <div className='header container'> 
      <div className='header-text'>
        <h1>Hi, I'm FIDA FATHIMA</h1>
        <h2>Frontend Developer</h2>
        <button className='btn download'><a href={resume} download>Download CV</a></button>
      </div>
    </div>
  )
}

export default Header
