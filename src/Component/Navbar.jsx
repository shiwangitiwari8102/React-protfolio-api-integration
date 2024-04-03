
import React, { useState } from 'react';


function Navbar( ) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top" style={{ height: 'auto' }}>
      <div className="container-fluid">
        <a href="/" className="logo"><span>P</span>ortfolio</a>
        <button className="navbar-toggler" type="button" onClick={toggleMenu} aria-expanded={isMenuOpen ? "true" : "false"} aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={"collapse navbar-collapse" + (isMenuOpen ? " show" : "")} id="navbarScroll">
          <ul className="navbar-nav mx-auto me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ '--bs-scroll-height': '250px' }}>
            
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#hero">Hero </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            
              <li className="nav-item">
                <a className="nav-link" href="#services">Services</a>
              </li>
            
            
              <li className="nav-item">
                <a className="nav-link" href="#skills">Skills</a>
              </li>


              <li className="nav-item">
              <a className="nav-link" href="#projects">Project</a>
            </li>
              <li className="nav-item">
                <a className="nav-link" href="#timeline">Experience</a>
              </li>

            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact form</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
