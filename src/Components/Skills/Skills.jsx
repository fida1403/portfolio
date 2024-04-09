import React, {useState, useEffect} from 'react'
import './Skills.css'

function Skills() {

  const [sticky, setSticky] = useState(false)
  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 1100 ? setSticky(true) : setSticky(false)
    })
  })

  return (
    <div className='skills container'>
      <div className='skill'>
        <li>
          <h3>HTML</h3>
          <span className='bar'>
            <span className={`html ${sticky ? 'html-repeat' : ''}`}>
            </span>
          </span>
        </li>
        <li>
          <h3>CSS</h3>
          <span className='bar'>
            <span className={`css ${sticky ? 'css-repeat' : ''}`}>
            </span>
          </span>
        </li>
        <li>
          <h3>JAVASCRIPT</h3>
          <span className='bar'>
            <span className={`javascript ${sticky ? 'javascript-repeat' : ''}`}>
            </span>
          </span>
        </li>
        <li>
          <h3>REACT.JS</h3>
          <span className='bar'>
            <span className={`react ${sticky ? 'react-repeat' : ''}`}>
            </span>
          </span>
        </li>
        <li>
          <h3>.NET</h3>
          <span className='bar'>
            <span className={`net ${sticky ? 'net-repeat' : ''}`}>
            </span>
          </span>
        </li>
        <li>
          <h3>C#</h3>
          <span className='bar'>
            <span className={`csharp ${sticky ? 'csharp-repeat' : ''}`}>
            </span>
          </span>
        </li>
        <li>
          <h3>LINQ</h3>
          <span className='bar'>
            <span className={`linq ${sticky ? 'linq-repeat' : ''}`}>
            </span>
          </span>
        </li>
        <li>
          <h3>MYSQL</h3>
          <span className='bar'>
            <span className={`mysql ${sticky ? 'mysql-repeat' : ''}`}>
            </span>
          </span>
        </li>
        <li>
          <h3>UFT</h3>
          <span className='bar'>
            <span className={`uft ${sticky ? 'uft-repeat' : ''}`}>
            </span>
          </span>
        </li>
        <li>
          <h3>PYTHON</h3>
          <span className='bar'>
            <span className={`python ${sticky ? 'python-repeat' : ''}`}>
            </span>
          </span>
        </li>
      </div>
    </div>
  )
}

export default Skills
