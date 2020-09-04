import React from 'react';
import '../assets/sass/Project.scss';
import project from '../assets/img/ivisa-project.png';

const Project = ({img, alt, className}) => {

  return (
    <div className={ 'Project ' + className}>
      <div className="container-img">
      <img src={project} alt={'fdgfd'}/>
      </div>
    </div>
  )
};

export default Project;