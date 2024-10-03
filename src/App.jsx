//import { useState } from 'react'
//import gradPhoto from './assets/img/graduationphotocropped.jpg';
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import AboutMe from './components/AboutMe/AboutMe';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
    <NavBar/>
    <div className='wrapper'>
      <Home/>
      <AboutMe/>
      <h1 style={{paddingTop: "150px", paddingBottom: "150px"}}>The rest of the portfolio is coming soon!</h1>
      {/* <div id="aboutme">
        <div>
          <img src={gradPhoto} className='gradphoto'/>
        </div>
        <h1>About Me</h1>
        <h2>Coming Soon</h2>
      </div> */}
      {/* <div id="skills">
        <div>
          <img src={gradPhoto} className='gradphoto'/>
        </div>
        <h1>Skills</h1>
        <h2>Coming Soon</h2>
      </div>
      <div id="coursework">
        <div>
          <img src={gradPhoto} className='gradphoto'/>
        </div>
        <h1>Course Work</h1>
        <h2>Coming Soon</h2>
      </div>
      <div id="resume">
        <div>
          <img src={gradPhoto} className='gradphoto'/>
        </div>
        <h1>Resume</h1>
        <h2>Coming Soon</h2>
      </div>
      <div id="projects">
        <div>
          <img src={gradPhoto} className='gradphoto'/>
        </div>
        <h1>Projects</h1>
        <h2>Coming Soon</h2>
      </div> */}

    </div>
    <Footer/>
    </>
  )
}

export default App
