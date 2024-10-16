import './App.css'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import AboutMe from './components/AboutMe/AboutMe';
import Resume from './components/Resume/Resume';
import Skills from './components/Skills/Skills';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
    <NavBar/>
    <Home/>
    <AboutMe/>
    <Resume/>
    <Skills/>
    <h1 style={{paddingTop: "150px", paddingBottom: "150px"}}>The rest of my portfolio is coming soon!</h1>
    <Footer/>
    </>
  )
}

export default App
