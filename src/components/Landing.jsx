import React from 'react';
import LandingPic from '../assets/LANDING.png';
import LandingPicmobile from '../assets/LANDINGmobile.png';
import LandingPicmobile2 from '../assets/LANDINGmobile2.png';
import figma from '../assets/Figma.svg';
import photoshop from '../assets/Adobe Photoshop.svg';
import react from '../assets/React.svg';
import javascript from '../assets/JavaScript.svg';
import css from '../assets/CSS3.svg';
import html from '../assets/Html 5.svg';
import php from '../assets/PHP Logo.svg';
import java from '../assets/Java.svg';

import './Landing.css';

function Landing() {
  return (
    
    <div className="landingContainer">
      <img src={LandingPic} alt="LandingPage" className="landingPic" />
      <img src={LandingPicmobile} alt="LandingPage" className="landingPicRes" />
      <img src={LandingPicmobile2} alt="LandingPage" className="landingPicRes2" />
      
      <h1 className="name">Kerwin Cortina</h1>
      
      <p className= "position"><span className= "redfirstword">{"FrontEnd()"}</span>
        && {"<"}
        <span className= "yellowsecondword">{"Ui"}</span> 
        <span className= "greenthirdword">{"/Ux Designer"}</span>{">"}
      </p>

      <p className='location'>
        {"{"}
        <span className='bluefirstword'>{"Dasmariñas"}</span> {"}"} = {'"'}
        <span className='yellowcavite'>{"Cavite"} </span>{'";'}
      </p>

    <div className='techStack'  >
      <img src={figma} alt="figmalogo" className="figma" />
      <img src={photoshop} alt="pslogo" className="ps" />
      <img src={react} alt="reactlogo" className="react" />
      <img src={javascript} alt="jslogo" className="js" />
      <img src={css} alt="csslogo" className="css" />
      <img src={html} alt="htmllogo" className="html" />
      <img src={php} alt="phplogo" className="php" />
      <img src={java} alt="javalogo" className="java" />
    </div>
      

    </div>
  );
}

export default Landing;
