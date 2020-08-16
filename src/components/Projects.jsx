import React from 'react';
import Container from './Container';
import Project from './Project';


const Projects = () => {

  return (
    <Container>
      <div className="Projects">
        <Project />
        <Project />
      </div>
    </Container>
  )
};

export default Projects;