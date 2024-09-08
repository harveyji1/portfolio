import { useState } from 'react'
import gradPhoto from './assets/img/graduationphotocropped.jpg';
import './App.css'
import NavBar from './components/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar/>
      <div>
        <img src={gradPhoto}/>
      </div>
      <h1>Coming Soon</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          My Excitement: {count}
        </button>
      </div>

    </>
  )
}

export default App
