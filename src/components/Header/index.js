import React from "react";

const Header = ({ currentPage, handlePageChange }) => {


    return (
      <nav className='d-grid nav-grid nav-container'>
        
        <a href="#home"
          onClick={() => handlePageChange('home')} 
          className="nav-elements `{currentPage === 'home' ? 'active-nav' : ''}`">
          Home</a>
        <a href="#about" 
          onClick={() => handlePageChange('about')} 
          className="nav-elements `{currentPage === 'about' ? 'active-nav' : ''}`">
          About</a>
        <a href="#projects"
          onClick={() => handlePageChange('projects')} 
          className="nav-elements `{currentPage === 'projects' ? 'active-nav' : ''}`">
          Projects</a>
        <a href="#contact"
          onClick={() => handlePageChange('contact')} 
          className="nav-elements `{currentPage === 'contact' ? 'active-nav' : ''}`">
          Contact</a>
      </nav>
    )
  }
  
  export default Header;