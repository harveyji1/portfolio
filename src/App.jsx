import './App.css'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import AboutMe from './components/AboutMe/AboutMe';
import Resume from './components/Resume/Resume';
import Skills from './components/Skills/Skills';
import CourseWork from './components/CourseWork/CourseWork';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
    <NavBar/>
    <Home/>
    <AboutMe/>
    <Resume/>
    <Skills/>
    <CourseWork/>
    <Projects/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
