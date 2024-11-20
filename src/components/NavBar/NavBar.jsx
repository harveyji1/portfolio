/* eslint-disable react/no-unescaped-entities */
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavBar.css';
import { useState, useEffect } from 'react';
import { SiIndeed, SiLinkedin, SiGithub, SiLeetcode } from 'react-icons/si';
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';

function NavBar() {
  const [activeLink, setActiveLink] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll =() => {
      if (window.scrolly > 50){
        setScrolled(true);
      }
      else{
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return() => window.removeEventListener("scroll", onScroll);
  })

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <div>
          <h6 className='warningMessage'>THIS PAGE IS A WORK IN PROGRESS</h6>
        </div>
      <div className="navbar-sections">

        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <div className="theme-toggler-container">
          <DarkModeToggle/>
        </div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='margin-control'>
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#aboutme" className={activeLink === 'aboutme' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('aboutme')}>About Me</Nav.Link>
            <Nav.Link href="#resume" className={activeLink === 'resume' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('resume')}>Resume</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#coursework" className={activeLink === 'coursework' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('coursework')}>Course Work</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
        
          <div className="navbar-section">
          <span className='navbar-text'>
            <div className="social-icons">
              <a href="https://profile.indeed.com/?hl=en_US&co=US&from=gnav-homepage"><SiIndeed/></a>
              <a href="https://www.linkedin.com/in/harvey-ji-69a630200/"><SiLinkedin/></a>
              <a href="https://github.com/harveyji1"><SiGithub/></a>
              <a href="https://leetcode.com/u/harvey_ji"><SiLeetcode/></a>
            </div>
            <button className="vvd" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
              <span>Let's Connect</span>
            </button>
          </span>
          </div>
        </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBar;