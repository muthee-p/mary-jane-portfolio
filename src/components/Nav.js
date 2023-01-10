import React from 'react';
import {Link} from 'react-scroll';
import './Nav.css';
import { FiGithub, FiInstagram, FiTwitter, FiDribbble } from 'react-icons/fi';

const Nav= () => {
  return (
  	<div className="Nav">
    <div className="menu">
    <h3><a href="#">MJ<span className="portfolio">'s Portfolio</span></a></h3>
    <div>
    <ul>
        <li><Link to="home" spy={true} smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to="about" spy={true} smooth={true} offset={-90} duration={500}>About</Link></li>
        <li><Link to="experience" spy={true} smooth={true} offset={-90} duration={500}>Experience</Link></li>
        <li><Link to="work" spy={true} smooth={true} offset={-90} duration={500}>Work</Link></li>
        <li><Link to="reviews" spy={true} smooth={true} offset={-90} duration={500}>Reviews</Link></li>
        <li><Link to="contact" spy={true} smooth={true} offset={-90} duration={500}>Contact</Link></li>
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