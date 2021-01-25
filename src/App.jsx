import React, { useRef } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import './App.scss';

function App() {

  const footerSectionRef = useRef(null);

  const sections = [
    {
      description: 'Inicio',
      path: 'init',
      active: true,
      onClick: () => {
      }
    },
    {
      description: 'Proyectos',
      path: 'projects',
      onClick: () => {
      }
    },
    {
      description: 'Herramientas',
      path: 'tools',
      onClick: () => {
      }
    },
    {
      description: 'Contacto',
      path: 'contact',
      onClick: () => {
        window.scrollTo(0, footerSectionRef.current.offsetTop);
        console.log('footerSectionRef', footerSectionRef)
      }
    }
  ];
  return (
    <>
      <Header  menuItems={sections} >
      </Header>
      <div className="main">
        <Home />
      </div>
      <Footer footerSectionRef={footerSectionRef}>
      </Footer>
    </>
  );
}

export default App;
