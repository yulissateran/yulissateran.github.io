import React from 'react';
import Header from './components/Header/Header';
import Home from './pages/Home';

import './App.scss';

function App() {
  return (
    < >
      <Header >
      </Header>
      <div className="main">
        <Home/>
      </div>
    </>
  );
}

export default App;
