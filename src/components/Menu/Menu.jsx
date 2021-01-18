import React from 'react';
import './Menu.scss';
const sections = [
  { 
    description:   'Inicio',
    path:   'about-me'
  },
  { 
    description:   'Proyectos',
    path:   'tools'
  },
  { 
   description: 'Herramientas',
   path: 'contact'
  },
  { 
    description: 'Contacto',
    path: 'cc'
   }
];

const Menu = ({isMobile}) => {
    return (
      <ul className={"Menu" + ( isMobile? ' responsive': ' desktop')}>
         <Link section={{description: 'init', path: 'vvv', active: true}} />
        {sections.map((section) => <Link section={section} key={section.description}/>)}
      </ul>
    )
  }


  const Link = ({section}) => {
    const { path, description, active } = section;
    return (<li className={'Section-link' + ( active?' active': '')} ><a href={`#${path}`}><span>{description}</span></a></li>)
  }

  export default Menu;
  