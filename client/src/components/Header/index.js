import React from "react";

const Header = ({ currentPage, handlePageChange }) => {
    return (
      <nav className='d-grid nav-grid'>
        <div />
  
        <a href="#about" 
          onClick={() => handlePageChange('about')} 
          className={currentPage === 'about' ? 'active-nav' : ''}>
          About</a>
  
        <a href="#contact"
          onClick={() => handlePageChange('contact')} 
          className={currentPage === 'contact' ? 'active-nav' : ''}>
          Portfolio</a>
          
        <a href="#projects"
          onClick={() => handlePageChange('projects')} 
          className={currentPage === 'projects' ? 'active-nav' : ''}>
          Contact</a>
  
        <a href="#home"
          onClick={() => handlePageChange('home')} 
          className={currentPage === 'home' ? 'active-nav' : ''}>
          Resume</a>
  
        <div />
      </nav>
    )
  }
  
  export default Header;