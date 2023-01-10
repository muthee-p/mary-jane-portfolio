import React from 'react';
import './Home.css';
import CV from './Assets/CV.pdf';
import { BsFileEarmarkArrowDown } from 'react-icons/bs';
const Home= () => {
  return (
  	<div className="Home_content">
  	<h5>Hi, my name is</h5>
    <div className="home-container">
    <div className="second-home">
    <div><h1>Mary Jane.
I build things for the web.</h1></div>
<div className="home-p">
<p>I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences.
 Currently, I’m focused on building accessible, human-centered products at Upstatement.
   </p>
   <p className="cv">Here's My CV</p>
   <button><a download="" href={ CV} >Download CV <BsFileEarmarkArrowDown /></a> </button>
   </div>
   </div>
   <img src="/images/profile.jpg" />
   </div>
   </div>
    )
}
export default Home;