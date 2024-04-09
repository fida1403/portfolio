import React, { useEffect, useState } from 'react'
import {Link} from 'react-scroll'
import './Navbar.css'

function Navbar() {

  const [sticky, setSticky] = useState(false)
  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 300 ? setSticky(true) : setSticky(false)
    })
  })

  const [mobilemenu, setMobilemenu] = useState(false)

  const handletoggle = () => {
    mobilemenu ? setMobilemenu(false) : setMobilemenu(true)
  }

  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
      <div className='nav-logo'>
        <i class="fa-solid fa-user-tie"></i>
        <h1>PORTFOLIO</h1>
      </div>  
      <ul className={mobilemenu ? '' : 'hide-mobile-menu'}>
        <li><Link to='header' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='about' smooth={true} offset={-100} duration={500}>About</Link></li>
        <li><Link to='skills' smooth={true} offset={-250} duration={500}>Skills</Link></li>
        <li><Link to='works' smooth={true} offset={-270} duration={500}>My Work</Link></li>
        <li><Link to='contact' className='btn' smooth={true} offset={-260} duration={500}>Contact Us</Link></li>
      </ul>
      <div className='menu-icon'>
        <i class={mobilemenu ? "fa-regular fa-circle-xmark" : "fa-solid fa-bars"} onClick={handletoggle}></i>
      </div>
    </nav>
  )
}

export default Navbar
