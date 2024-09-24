//import { useState } from 'react'
import gradPhoto from './assets/img/graduationphotocropped.jpg';
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
    <NavBar/>
    <div className='wrapper'>
      <div id="home">
        <div>
          <img src={gradPhoto} className='gradphoto'/>
        </div>
        <h1>Home</h1>
        <h2>Coming Soon</h2>
      </div>
      <div id="aboutme">
        <div>
          <img src={gradPhoto} className='gradphoto'/>
        </div>
        <h1>About Me</h1>
        <h2>Coming Soon</h2>
      </div>
      <div id="skills">
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
        <h1>Projects</h1>
        <h2>Coming Soon</h2>
      </div>
      <div id="projects">
        <div>
          <img src={gradPhoto} className='gradphoto'/>
        </div>
        <h1>Projects</h1>
        <h2>Coming Soon</h2>
      </div>

    </div>
    <Footer/>
    </>
  )
}

export default App
