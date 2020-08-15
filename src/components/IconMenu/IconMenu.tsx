import React, { useState } from 'react';
import './IconMenu.scss';

const IconMenu = ({ onClick }:any) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const toggleMenu = ()=> {
    setIsOpenMenu((isOpen) => !isOpen); 
    onClick();
  } 
  return (
        <a 
          onClick={toggleMenu} 
          className={"icon" + (isOpenMenu ? ' open-menu' : ' closed-menu')}>
          <span></span>
        </a>
   
  )
}


export default IconMenu;