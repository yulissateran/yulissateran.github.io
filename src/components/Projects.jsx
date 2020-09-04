import React from 'react';
import Container from './Container';
import Project from './Project';
import firstProject from '../assets/img/test/project1.jpg';
import secondProject from '../assets/img/test/project2.jpg';
import thirdProject from '../assets/img/test/project3.jpg'
import fourthProject from '../assets/img/test/project4.png'
import fiveProject from '../assets/img/test/project5.png'
import sixtProject from '../assets/img/test/project6.jpg'

import '../assets/sass/Projects.scss';

const Projects = () => {

  return (
    <Container>
      <div className="Projects">
        <Project img={firstProject} className="firstProject"/>
        <Project  img={secondProject} className="secondProject"/>
        <Project img={thirdProject} className="thirdProject"/>
        <Project  img={fourthProject} className="fourthProject"/>
        <Project img={fiveProject} className="fifthProject"/>
        {/* <Project  img={sixtProject}/> */}
      </div>
    </Container>
  )
};

export default Projects;