
import React from "react";

import aimlessTravel from "../../assets/aimless-travel.png";
import noteTaker from "../../assets/note-taker.png";
import techBlog from "../../assets/tech-blog.png";
import pizzaHunt from "../../assets/pizza-hunt.png";
import yummyGrocery from "../../assets/yummy-grocery.png";
import deepThoughts from "../../assets/deep-thoughts.png";

const Projects = () => {
  return (
    <div id="projects" >
    <h2>Some projects that I've worked on:</h2>
        <div className="projects-container">
            <h3>Notetaker</h3>
            <a href="https://intense-savannah-88757.herokuapp.com/"><img src={noteTaker} alt="note-taker Project"/></a>
        </div> 
        <div className="projects-container">
            <h3>Tech Blog</h3>
            <a href="https://blooming-inlet-03377.herokuapp.com/"><img src={techBlog} alt="tech-blog Project"/></a>
        </div> 
        <div className="projects-container">
            <h3>Aimless Travel</h3>
            <a href="https://blooming-escarpment-07246.herokuapp.com/"><img src={aimlessTravel} alt="destination-quiz Project"/></a>
        </div>
        <div className="projects-container">
            <h3>Pizza Hunt</h3>
            <a href="https://immense-castle-41602.herokuapp.com/"><img src={pizzaHunt} alt="note-taker Project"/></a>
        </div> 
        <div className="projects-container">
            <h3>Yummy Grocery</h3>
            <a href="https://secure-journey-79025.herokuapp.com/"><img src={yummyGrocery} alt="tech-blog Project"/></a>
        </div> 
        <div className="projects-container">
            <h3>Deep Thoughts</h3>
            <a href="https://murmuring-brook-04465.herokuapp.com/"><img src={deepThoughts} alt="destination-quiz Project"/></a>
        </div> 
   
    </div>
  )
}

export default Projects;


