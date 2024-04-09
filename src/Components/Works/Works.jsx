import React from 'react'
import './Works.css'
import movie_img from '../../Assets/MovieApp.png'
import education_img from '../../Assets/educationWebsite.png'
import car_img from '../../Assets/carwebsite.png'

function Works() {

  const handleCar = (event) =>{
    event.preventDefault();
    window.open('https://xtremeauto.netlify.app/', '_blank')
  }

  const handlemovieapp = (event) => {
    event.preventDefault();
    window.open('https://movie-cards-search.netlify.app/', '_blank')
  }

  const handlecollege = (event) => {
    event.preventDefault();
    window.open('https://edusity-college.netlify.app/', '_blank')
  }

  return (
    <div className='works'>
        <div className='work'>
            <img src={movie_img} alt='' />
            <div className='caption'>
              <i class="fa-solid fa-arrow-up-right-from-square" onClick={handlemovieapp}></i>
              <p>Movie Cards App</p>
            </div>
        </div>
        <div className='work'>
            <img src={education_img} alt='' />
            <div className='caption'>
              <i class="fa-solid fa-arrow-up-right-from-square" onClick={handlecollege}></i>
              <p>College Website</p>
            </div>
        </div>
        <div className='work'>
            <img src={car_img} alt='' />
            <div className='caption'>
                <i class="fa-solid fa-arrow-up-right-from-square" onClick={handleCar}></i>
                <p>Car Website</p>
            </div>
        </div>
    </div>
  )
}

export default Works
