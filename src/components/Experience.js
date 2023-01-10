import React, {useState} from 'react';
import "./Experience.css";
import { BiRightArrow } from 'react-icons/bi';

const Experience= () => {
     const[ showParagraph, setParagraph] = useState(1);
    const displayParagraph =(index) =>{
        setParagraph(index);
    }
  return (
    <div className="Experience_content">
    <h5> Experience</h5>
    <h2>Where I've Worked</h2>
    <div className="second_exp">
    <div className="btns">
        <div>
        <button onClick={() => displayParagraph(1)} className={ showParagraph === 1 ? "tab active-tab" : "tab"}>Upstatement</button>
        </div>
        <div>
        <button onClick={() => displayParagraph(2)} className={ showParagraph === 2 ? "tab active-tab" : "tab"}>Scout</button>
        </div>
        <div>
        <button onClick={() => displayParagraph(3)} className={ showParagraph === 3 ? "tab active-tab" : "tab"}>Apple</button>
        </div>
        <div>
        <button onClick={() => displayParagraph(4)} className={ showParagraph === 4 ? "tab active-tab" : "tab"}>Starry</button>
        </div>
    </div>
    <div className={ showParagraph === 1 ? "content active-content" : "content"}>
    <h4>Engineer @Upstatement</h4>
        <p>May 2018 - present</p>
        <ul>
        <li>< BiRightArrow /> Write modern, performant, maintainable code for a diverse array of client and internal projects</li>
        <li>< BiRightArrow /> Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify</li>
        <li>< BiRightArrow /> Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis</li>
        </ul>
    </div>

    <div className={ showParagraph === 2 ? "content active-content" : "content"}>
    <h4>Engineer @Scout</h4>
        <p>Jan 2018 - April 2018</p>
        <ul>
        <li>< BiRightArrow /> Worked with a team of three designers to build a marketing website and e-commerce platform for blistabloc, an ambitious startup originating from Northeastern</li>
        <li>< BiRightArrow />Helped solidify a brand direction for blistabloc that spans both packaging and web</li>
        <li>< BiRightArrow /> Interfaced with clients on a weekly basis, providing technological expertise</li>
        </ul>
    </div>

    <div className={ showParagraph === 3 ? "content active-content" : "content"}>
    <h4>UI Engineer @Apple</h4>
        <p>July - December 2017</p>
        <ul>
        <li>< BiRightArrow /> Developed and shipped highly interactive web applications for Apple Music using Ember.js</li>
        <li>< BiRightArrow /> Built and shipped the Apple Music Extension within Facebook Messenger leveraging third-party and internal APIs</li>
        <li>< BiRightArrow /> Architected and implemented the front-end of Apple Music's embeddable web player widget, which lets users log in and listen to full songs in the browser</li>
        <li>< BiRightArrow /> Contributed extensively to MusicKit.js, a JavaScript framework that allows developers to add an Apple Music player to their web apps </li>
        </ul>
    </div>
    <div className={ showParagraph === 4 ? "content active-content" : "content"}>
    <h4>Software Engineer @Starry</h4>
        <p>July - December 2016</p>
        <ul>
        <li>< BiRightArrow /> Engineered and maintained major features of Starry's customer-facing web app using ES6, Handlebars, Backbone, Marionette and CSS</li>
        <li>< BiRightArrow /> Proposed and implemented scalable solutions to issues identified with cloud services and applications responsible for communicating with Starry Station</li>
        <li>< BiRightArrow /> Interfaced with user experience designers and other developers to ensure thoughtful and coherent user experiences across Starry’s iOS and Android mobile apps</li>
        </ul>
    </div>
    </div>
    </div>
    
    );
    
}
export default Experience;
