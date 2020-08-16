import React, { useState } from 'react';
import './Header.scss';
import logo from '../../assets/img/test/svg2.svg';
import IconMenu from '../IconMenu/IconMenu';
import Menu from '../Menu/Menu';
import Container from '../Container';


const Header = () => {

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <header className={ 'Header'+ (showMobileMenu?' responsive-open': '')}>
     <Container>
     <Toolbar setShowMobileMenu={() => setShowMobileMenu((status) => !status)}  />
      {showMobileMenu && <Menu isMobile={true}/>}
     </Container>
    </header>
  );
}

const Toolbar = ({setShowMobileMenu}) => {
  return (
    <div className='Toolbar'>
      <Logo/>
      <Menu isMobile={false}/>
      <IconMenu onClick={setShowMobileMenu}/>
    </div>
  )
}

const Logo = () =>  <img src={logo} alt="logo" className="Logo" />;

export default Header;
