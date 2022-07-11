import React from "react";

import me from "../../assets/stephen-dickey.jpg";

const About = () => {
  return (
    <div className="info">
        <h2>About Me</h2>
        <img className="info-img" src={me} alt="welcome"/>
        <p>I have been living in Oakland for the last 6 years and was born and raised in the Bay Area. I have a background working in EMS and healthcare and recently gained an interest in Software Development. I am currently completing a Coding Bootcamp through UC Berkeley Extension and hope to gain employment in the field following course completion.</p>
    </div>
  )
}

export default About;