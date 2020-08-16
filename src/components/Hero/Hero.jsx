import React from "react";
import "./Hero.scss";
import Container from "../Container";
import profile from '../../assets/img/test/profile.jpg';

const Hero = () => {
  return (
      <Container>
        <div className="Hero-content">
          <div className="Hero-text">
          <span className="Hero-main-text">
            { 'I’m Pratibha, a Product Designer at '}
            
            <a href="https://www.everis.com/" className="Hero--company-name">
              <span>Microsoft</span>
            </a>
            { ' Redmond. I enjoy creating user-centric, delightful, and human experiences.'}

             
          </span>
          <div className="Hero--subtitle">
          <span>
            Former Design Lead at 
            <a href="https://www.everis.com/" className="Hero--company-name">
              <span> Sprinklr </span>
            </a>
          </span>
         </div>
          </div>
          <div className="container-profile">
            <img alt="fotografía de yulissa  terán" className="profile" src={profile}/>
          </div>
        </div>
      </Container>
  );
};

export default Hero;
