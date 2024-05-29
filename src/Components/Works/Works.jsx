import React from 'react'
import './Works.css'
import weather_app from '../../Assets/Weather-app.png'
import education_img from '../../Assets/educationWebsite.png'
import car_img from '../../Assets/carwebsite.png'
import netflix_img from '../../Assets/netflix.png'
import Quiz_img from '../../Assets/Quiz-img.png'

function Works() {

  const handleCar = (event) =>{
    event.preventDefault();
    window.open('https://xtremeauto.netlify.app/', '_blank')
  }

  const handleWeatherApp = (event) => {
    event.preventDefault();
    window.open('https://weather-app-react-first.netlify.app/', '_blank')
  }

  const handlecollege = (event) => {
    event.preventDefault();
    window.open('https://edusity-college.netlify.app/', '_blank')
  }

  const handleNetflix = (event) => {
    event.preventDefault();
    window.open('https://netflix-clone-b37ea.web.app/', '_blank')
  }

  const handleQuiz = (event) => {
    event.preventDefault();
    window.open('https://quiz-try-app.netlify.app/', '_blank')
  }

  return (
    <div className='works'>
        <div className='work'>
            <img src={Quiz_img} alt='' />
            <div className='caption'>
                <i class="fa-solid fa-arrow-up-right-from-square" onClick={handleQuiz}></i>
                <p>Quiz App</p>
            </div>
        </div>
        <div className='work'>
            <img src={car_img} alt='' />
            <div className='caption'>
                <i class="fa-solid fa-arrow-up-right-from-square" onClick={handleCar}></i>
                <p>Car Website</p>
            </div>
        </div>
        <div className='work'>
            <img src={netflix_img} alt='' />
            <div className='caption'>
                <i class="fa-solid fa-arrow-up-right-from-square" onClick={handleNetflix}></i>
                <p>Netflix App</p>
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
            <img src={weather_app} alt='' />
            <div className='caption'>
              <i class="fa-solid fa-arrow-up-right-from-square" onClick={handleWeatherApp}></i>
              <p>Weather App</p>
            </div>
        </div>
    </div>
  )
}

export default Works
