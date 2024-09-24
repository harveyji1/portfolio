/* eslint-disable react/no-unescaped-entities */
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavBar.css';
import { useState, useEffect } from 'react';
import { SiIndeed, SiLinkedin, SiGithub } from 'react-icons/si';

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
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#aboutme" className={activeLink === 'aboutme' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('aboutme')}>About Me</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#coursework" className={activeLink === 'coursework' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('coursework')}>Course Work</Nav.Link>
            <Nav.Link href="#resume" className={activeLink === 'resume' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('resume')}>Resume</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className="social-icons">
              <a href="https://profile.indeed.com/?hl=en_US&co=US&from=gnav-homepage"><SiIndeed/></a>
              <a href="https://www.linkedin.com/in/harvey-ji-69a630200/"><SiLinkedin/></a>
              <a href="https://github.com/harveyji1"><SiGithub/></a>
            </div>
            <button className="vvd" onClick={() => console.log('connect')}>
              <span>Let's Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;