//import { useState } from 'react'
import gradPhoto from './assets/img/graduationphotocropped.jpg';
import './App.css'
import NavBar from './components/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
    <NavBar/>
    <div className='main-content'>
      <div>
        <img src={gradPhoto}/>
      </div>
      <h1>Coming Soon</h1>
    </div>
    </>
  )
}

export default App
