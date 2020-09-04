import React from "react";
import "./Hero.scss";
import Container from "../Container";
// import profile from '../../assets/img/yteran-profile.png';
 import Profile from '../Profile';

const Hero = () => {
  return (
      <Container>
        <div className="Hero-content">
        {/* <Profile/> */}
        
          <div className="Hero-text">
          <span className="Hero-main-text">
            { 'I’m Yulissa, a Front-end Developer at '}
            
            <a href="https://www.everis.com/" className="Hero--company-name">
              <span>Everis</span>
            </a>
            { ' Peru. I enjoy creating ----------, --------, and ----- experiences.'}

             
          </span>
          <div className="Hero--subtitle">
          <span>
            Lorem ipsum dolor sit amet
            <a href="https://www.everis.com/" className="Hero--company-name">
              <span>Laboratoria </span>
            </a>
          </span>
         </div>
          </div>
      
        </div>
      </Container>
  );
};

export default Hero;
