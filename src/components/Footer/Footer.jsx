import React from 'react';
import './Footer.scss';
import Container from '../Container';


const Footer = ({footerSectionRef}) => {

  return (
      <footer  ref={footerSectionRef}>
    <Container>

        <div>Icons made by
      <a href="http://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
        </div>
    </Container>

      </footer>
  );
}

export default Footer;
