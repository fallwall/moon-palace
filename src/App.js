import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Work from './components/Work';
import About from './components/About';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Work />
      <About />
    </div>
  );
}

export default App;
