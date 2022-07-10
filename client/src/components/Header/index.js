import React from "react";

import '../../App.css';

const Header = ({ currentPage, handlePageChange }) => {
    return (
      <nav className='nav-container'>
        <div />
        <a href="#home"
          onClick={() => handlePageChange('home')} 
          className="nav-elements">
          Home</a>
        <a href="#about" 
          onClick={() => handlePageChange('about')} 
          className="nav-elements">
          About</a>
        <a href="#projects"
          onClick={() => handlePageChange('projects')} 
          className="nav-elements">
          Projects</a>
        <a href="#contact"
          onClick={() => handlePageChange('contact')} 
          className="nav-elements">
          Contact</a>
        <div />
      </nav>
    )
  }
  
  export default Header;