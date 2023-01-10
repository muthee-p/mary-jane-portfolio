import React from 'react';
import "./Contact.css";
import { AiOutlineStar } from 'react-icons/ai';
import { FiGitBranch } from 'react-icons/fi';
import { MdOutlineWavingHand } from 'react-icons/md';
import { FiGithub, FiInstagram, FiTwitter, FiDribbble } from 'react-icons/fi';

const Contact= () => {
  return (
  	<div className="contact_content">
		<h5>What’s Next?</h5>
    <div className="second-contact">
   
    <h2>Get In Touch</h2>
    <div className="contact_container">
    <p>Although I’m not currently looking for any new opportunities, 
    my inbox is always open. Whether you have a question or just want to say hi, 
    I’ll try my best to get back to you!</p>
    </div>
    <div><button><a href="https://mail.google.com">Say Hello  <MdOutlineWavingHand /></a></button></div>
    <div className="footer__socials">
    <p className="f-icon "><a href="https://github.com/"><FiGithub /></a></p>
    <p className="f-icon "><a href="https://www.instagram.com/instagram/"><FiInstagram /></a></p>
    <p className="f-icon "><a href="https://twitter.com/"><FiTwitter /></a></p>
    <p className="f-icon"><a href="https://dribbble.com/"><FiDribbble /></a></p>
    </div>
    <div className="footer">
    <p>Designed & Built by Mary Jane</p>
    <p><AiOutlineStar className="btm" />5,699 <FiGitBranch className="btm" />2,670</p>
    </div>
    </div>
    </div>
    )
}
export default Contact;


