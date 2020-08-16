import React from 'react';
import '../assets/sass/Container.scss';

const Container = ({ children}) => {
  return (
    <div className="Container">
       {children}
    </div>
  );
};

export default Container;