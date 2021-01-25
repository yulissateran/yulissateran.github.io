import React from 'react';
import '../assets/sass/Project.scss';
import arrow from '../assets//img/right-arrow.svg';
/*
export interface ProjectProps {
  img: string;
  alt: string;
  backgroundColor: string;
  title: string;
  subtitle: string;
  actionText: string;
}
*/
const Project = ({ img, alt, backgroundColor, title, subtitle, actionText = 'See project', url }) => {
const styles = {
  backgroundColor: backgroundColor
}

  const onClick = () => {
    window.open(url, '_blank');
  }
  return (
    <div className={'Project '} style={styles} >
      <div className="project">
        <div className="Project-description">
          <h3 className="Project-description-title"> {title} </h3>
          <span className="Project-description-subtitle">
            {subtitle}
          </span>

<div className="budges">
<div className="budge">Vue.js</div>
<div className="budge">Sass</div>

  </div> 
         <button className="Project-description-action" onClick={onClick}>
            <strong >{actionText}</strong>
            <img src={arrow} alt={alt} className="icon" />
          </button>
        </div>
        <div className="Project-img-wrapper">
        <div className="Project-img"  onClick={onClick}>
          <img src={img} alt={'fdgfd'} />
        </div>
        </div>

   
      </div>
    </div>
  )
};

export default Project;