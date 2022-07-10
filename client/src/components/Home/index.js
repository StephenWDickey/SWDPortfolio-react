import ferns from '../../assets/ferns.jpg';

import '../../App.css';

import React from "react";

const Home = () => {
  return (
    <div>
        <div className="home-container">
            <h3>Welcome. Explore the site using the navigation links!</h3>
            <img src={ferns} alt="welcome"/>
        </div>
    </div>
  )
}

export default Home;