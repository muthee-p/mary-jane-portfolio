import React from 'react';
import './Work.css';
import { FiExternalLink } from 'react-icons/fi';

const Work= () => {
  return (
  	<div className="Work_content">
    <h5>Project</h5>
    <h2>Projects I've Worked on</h2>
    <div className="container1">
    <div className="work_container">
   <h5>Featured Project</h5>
   <h4>Spotify Profile</h4>
   <p>A web app for visualizing personalized Spotify data. View your top artists, top tracks, 
   recently played tracks, and detailed audio information about each track. 
   Create and save new playlists of recommended tracks based on your existing playlists and more.</p>
    <p className="frames">
    <span>React</span>
    <span>Styled_Components</span>
    <span>Express</span>
    <span>Spotify_API</span>
    <span>Heroku</span>
    </p>

      <div>
        <a href="https://nicepage.com/website-templates/preview/habits-of-happy-people-1180054?device=desktop"><FiExternalLink className="ext_icon"/></a>
      </div>
    </div>
       <a href="https://nicepage.com/website-templates/preview/habits-of-happy-people-1180054?device=desktop"><img className="Yellow_green" src="/images/img.png" /></a>
       </div>
    

    <div className="container2">
   <a href="https://nicepage.com/website-templates/preview/brand-strategy-agency-456839?device=desktop"><img src="/images/img1.png"/></a>
   <div className="work_container">
   <h5>Featured Project</h5>
   <h4>Spotify Profile2</h4>
   <p>A web app for visualizing personalized Spotify data. View your top artists, top tracks, 
   recently played tracks, and detailed audio information about each track. 
   Create and save new playlists of recommended tracks based on your existing playlists and more.</p>
    <p className="frames">
    <span>React</span>
    <span>Styled_Components</span>
    <span>Express</span>
    <span>Spotify_API</span>
    <span>Heroku</span>
    </p>
<div><a href="https://nicepage.com/website-templates/preview/brand-strategy-agency-456839?device=desktop"><FiExternalLink className="ext_icon" /></a></div>
    </div>
    </div>
    </div>
    )
}
export default Work;