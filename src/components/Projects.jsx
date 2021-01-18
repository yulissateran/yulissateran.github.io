import React from 'react';
import Container from './Container';
import Project from './Project';
import firstProject from '../assets/img/my-wallet-desktop.png';
import secondProject from '../assets/img/test/project2.jpg';
import thirdProject from '../assets/img/test/project3.jpg'
import fourthProject from '../assets/img/test/project4.png'
import fiveProject from '../assets/img/test/project5.png'
import wallet from '../assets/img/my-wallet-desktop.png'
import '../assets/sass/Projects.scss';
const ProjectList = [
  {
    img: wallet, 
    alt: 'my-wallet',
    backgroundColor: '#f7def1',
    title:"Content Marketing",
    subtitle:"A collaborative space to plan, produce, and publish omnichannel capaigns",
        url: 'https://ivisa-my-wallet.firebaseapp.com/'
  },
  {
    img: wallet, 
    alt: 'my-wallet',
    backgroundColor: '#d1e3fa',
    title:"Content Marketing",
    subtitle:"A collaborative space to plan, produce, and publish omnichannel capaigns"
        , url: 'https://ivisa-my-wallet.firebaseapp.com/'
  }
]
const Projects = () => {

  return (
    <Container>
      <div className="Projects">
        {
          ProjectList.map(project=>
            <Project 
            url={project.url}
            img={project.img} 
            backgroundColor={project.backgroundColor} 
            title={project.title} 
            subtitle={project.subtitle} 
            />         
           )
        }
       {/* <Project 
        img={firstProject} 
        className="firstProject"
        title="Content Marketing"
        subtitle="A collaborative space to plan, produce, and publish omnichannel capaigns"
        />
        <Project  
        img={secondProject} 
        className="secondProject"/>
        <Project img={thirdProject} className="thirdProject"/>
        <Project  img={fourthProject} className="fourthProject"/>
        <Project img={fiveProject} className="fifthProject"/>
         <Project  img={sixtProject}/> */}
      </div>
    </Container>
  )
};

export default Projects;