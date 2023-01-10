import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
import { FiGithub, FiInstagram, FiTwitter, FiDribbble } from 'react-icons/fi';

const Nav= () => {
  return (
  	<div className="Nav">
    <div className="menu">
    <h3><Link to="/"><span className="portfolio">'s Portfolio</span></Link></h3>
    <div>
    <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="about">AboutUs</Link></li>
        <li><Link to="experience">Experience</Link></li>
        <li><Link to="work">Work</Link></li>
        <li><Link to="reviews">Reviews</Link></li>
        <li><Link to="contact">contact</Link></li>
    </ul>
    </div>
    </div>
    <div className="socials">
    <div className="Socials_content">
    <div className="icon icon1"><a href="https://github.com/"><FiGithub /></a></div>
    <div className="icon icon2"><a href="https://www.instagram.com/instagram/"><FiInstagram /></a></div>
    <div className="icon icon3"><a href="https://twitter.com/"><FiTwitter /></a></div>
    <div className="icon icon4"><a href="https://dribbble.com/"><FiDribbble /></a></div>
    </div>
    </div>
    </div>

    )
}
export default Nav;