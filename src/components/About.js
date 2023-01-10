import React from 'react';
import './About.css';
import { BiRightArrow } from 'react-icons/bi';


const About= () => {
  return (
  	<div className="about-content">
<h5>About Me</h5>
<div className="secondary">
    <img src="/images/profile.jpg" />
    <div className="second-about">
    <h5>Hello!</h5>
    <p>My name is Brittany and I enjoy creating things that live on the internet.
     My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes 
     — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!</p>
    <p className="last">Here are a few technologies I’ve been working with recently:</p>
    <div className="grid-container">
        <p className="grid-item"><BiRightArrow className="grid_icon"/> JavaScript (ES6+)</p>
        <p className="grid-item"><BiRightArrow className="grid_icon"/> TypeScript</p>
        <p className="grid-item"><BiRightArrow className="grid_icon"/> React</p>
        </div>
        <div className="grid-container2">
        <p className="grid-item"><BiRightArrow className="grid_icon" /> Eleventy</p>
        <p className="grid-item"><BiRightArrow className="grid_icon" /> Node.js</p>
        <p className="grid-item"><BiRightArrow className="grid_icon" /> WordPress</p>
    </div>
    </div>
    </div>
    </div>
    )
}
export default About;