import React from 'react'
import Projects from './components/Projects'

export default function Cards() {
  
    const styles = {
        borderTop: "1px solid #6f42c1",
        boxShadow:
          "0 0 2px rgba(111,66,193,.9),0 0 4px rgba(111,66,193,.4),0 0 1rem rgba(111,66,193,.3),0 0 4rem rgba(111,66,193,.1)",
        opacity: "1",
      };  
  return (
  <>
 
<h1  className='mt-5' id='projects'>Projects</h1>
  <hr style={styles} />
  <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Projects
            title='Forecast Pro'
            text='App that lets people check the weather by searching a city name.'
            src='/weather.png'
            link='https://forecastpro.netlify.app/'
          />
          <Projects
            title='GlobalSphere Connect'
            text='A Social platform that focuses on the news, weather, and lets people post blogs and connect with each other.'
            src="/globalsphereconnect.png"
            link="https://globalsphereconnect.netlify.app/"
          />
          <Projects
            title="GlobalGlimpseNews"
            text="A website that lets people check the news worldwide and local."
            src="/globalglimpsenews.png"
            link='https://globalglimpsenews.netlify.app/'
          />
          <Projects
            title="Snakeio Game"
            text='Embark on a thrilling adventure in a classic snake game where the serpent grows longer with every meal devoured.'
            src='/snakeiogame.png'
            link='https://snakeiogame.netlify.app/'
          />
          <Projects
            title="Sunrise Sip"
            text='A full Stack Coffee shop ecommerce site with responsive design'
            src='sunrisesip.png'
            link='https://sunrisesip.netlify.app'
          />
         
        </div>
      </div>


  
  </>
 
  )
}
