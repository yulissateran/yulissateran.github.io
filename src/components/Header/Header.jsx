import React, { useEffect, useState } from 'react';
import './Header.scss';
import logo from '../../assets/img/logo-degradado.png';
import Container from '../Container';

const IconMenu = ({ onClick, isOpenMenu, setIsOpenMenu }) => {
  const toggleMenu = () => {
    setIsOpenMenu();
    onClick();
  }
  return (
    <button
      onClick={toggleMenu}
      className={'icon' + (isOpenMenu ? ' open-menu' : ' closed-menu')}>
      <span></span>
    </button>

  )
}

const Menu = ({ isMobile, menuItems = [], onCloseMenu }) => {
  return (
    <ul className={'Menu' + (isMobile ? ' responsive' : ' desktop')}>
      {menuItems.map((section) => {
        const { path, description, active } = section;
        return (<li className={'Section-link' + (active ? ' active' : '')} key={section.description}>
          <a href={`#${path}`} onClick={() => { onCloseMenu(); section.onClick() }}>
            <span>{description}</span>
          </a>
        </li>)
      })}
    </ul>
  )
}

const Header = ({ menuItems }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showStickyMenu, setShowStickyMenu] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 561) {
        setShowStickyMenu(true)
      } else {
        setShowStickyMenu(false);
      }
    })
  }, [])
  return (
    <header className={`Header ${showMobileMenu ? 'responsive-open' : ''} ${showStickyMenu ? 'sticky' : ''}`}>
      <Container>
        <div className='Toolbar'>
          <Logo />
          menu
          <Menu isMobile={false} menuItems={menuItems} />
          <IconMenu
            onClick={() =>
              setShowMobileMenu((status) => !status)
            }
            isOpenMenu={isOpenMenu}
            setIsOpenMenu={() => setIsOpenMenu((isOpenMenu) => !isOpenMenu)} />
        </div>
        {showMobileMenu && <Menu
          isMobile={true}
          menuItems={menuItems}
          onCloseMenu={() => {
            setIsOpenMenu((isOpenMenu) => !isOpenMenu);
            setShowMobileMenu((status) => !status)
          }
          } />}
      </Container>
    </header>
  );
}

const Logo = () => <img src={logo} alt='logo' className='Logo' />;

export default Header;
